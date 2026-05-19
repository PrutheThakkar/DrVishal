import React, { useEffect, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const TabSwiperCoronary = () => {
  const data = useStaticQuery(graphql`
    query ClinicalFocusTabsQuery {
      clinicalFocusItems: allWpClinicalFocus(sort: { menuOrder: ASC }) {
        nodes {
          id
          databaseId
          title
          slug
          content
          menuOrder
          wpChildren {
            nodes {
              id
              databaseId
              slug
            }
          }
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

  const tabsData = useMemo(() => {
    const allItems = data?.clinicalFocusItems?.nodes || []

    const parentItems = allItems.filter(
      item => item.menuOrder !== null && item.wpChildren?.nodes?.length > 0
    )

    return parentItems.map(parent => {
      const childIds = parent.wpChildren.nodes.map(child => child.databaseId)

      const childSlides = allItems
  .filter(item => childIds.includes(item.databaseId))
  .sort((a, b) => b.menuOrder - a.menuOrder)
  .map(child => ({
    title: child.title,
    description: child.content,
    image: child.featuredImage?.node?.mediaItemUrl,
    alt: child.featuredImage?.node?.altText || child.title,
    link: `/clinical-focus/${child.slug}/`,
  }))

      return {
        label: parent.title,
        slides: childSlides,
      }
    })
  }, [data])

  useEffect(() => {
    if (typeof window === "undefined" || tabsData.length === 0) return

    let tabSwiperInstance = null
    let contentSwiperInstance = null
    const innerSwiperInstances = []

    const initSwipers = async () => {
      const SwiperBundle = await import("swiper/bundle")
      const Swiper = SwiperBundle.default

      const totalTabs = tabsData.length

      tabSwiperInstance = new Swiper("#tabSwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        navigation: {
          prevEl: "#tabPrev",
          nextEl: "#tabNext",
        },
      })

      contentSwiperInstance = new Swiper("#contentSwiper", {
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 400,
        on: {
          slideChange: function () {
            const activeIndex = this.activeIndex

            document.querySelectorAll(".tab-btn").forEach((btn, i) => {
              btn.classList.toggle("active", i === activeIndex)
            })

            if (tabSwiperInstance) {
              tabSwiperInstance.slideTo(activeIndex)
            }
          },
        },
      })

      document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", function () {
          const index = parseInt(this.dataset.index)

          document.querySelectorAll(".tab-btn").forEach(b => {
            b.classList.remove("active")
          })

          this.classList.add("active")

          if (contentSwiperInstance) contentSwiperInstance.slideTo(index)
          if (tabSwiperInstance) tabSwiperInstance.slideTo(index)
        })
      })

      document.getElementById("tabNext")?.addEventListener("click", () => {
        if (!contentSwiperInstance) return

        const current = contentSwiperInstance.activeIndex
        if (current < totalTabs - 1) {
          contentSwiperInstance.slideTo(current + 1)
        }
      })

      document.getElementById("tabPrev")?.addEventListener("click", () => {
        if (!contentSwiperInstance) return

        const current = contentSwiperInstance.activeIndex
        if (current > 0) {
          contentSwiperInstance.slideTo(current - 1)
        }
      })

      for (let i = 0; i < totalTabs; i++) {
        const inner = new Swiper(`#innerSwiper${i}`, {
          slidesPerView: 1,
          spaceBetween: 20,
          speed: 400,
          navigation: {
            prevEl: `#innerPrev${i}`,
            nextEl: `#innerNext${i}`,
          },
        })

        innerSwiperInstances.push(inner)
      }
    }

    initSwipers()

    return () => {
      if (tabSwiperInstance) tabSwiperInstance.destroy(true, true)
      if (contentSwiperInstance) contentSwiperInstance.destroy(true, true)
      innerSwiperInstances.forEach(swiper => swiper.destroy(true, true))
    }
  }, [tabsData.length])

  if (!tabsData.length) return null

  return (
    <section className="tab-swper-coronary">
      <div className="container">
        <div className="tab-swiper-wrapper">
          <div className="swiper" id="tabSwiper">
            <div className="swiper-wrapper">
              {tabsData.map((tab, index) => (
                <div key={index} className="swiper-slide swiper-slide-tab">
                  <div
                    className={`tab-btn${index === 0 ? " active" : ""}`}
                    data-index={String(index)}
                  >
                    {tab.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tab-nav-prev" id="tabPrev">
            <ChevronLeft />
          </div>

          <div className="tab-nav-next" id="tabNext">
            <ChevronRight />
          </div>
        </div>

        <div className="content-swiper-wrapper">
          <div className="swiper" id="contentSwiper">
            <div className="swiper-wrapper">
              {tabsData.map((tab, outerIndex) => (
                <div key={outerIndex} className="swiper-slide">
                  <div className="swiper inner-swiper" id={`innerSwiper${outerIndex}`}>
                    <div className="swiper-wrapper">
                      {tab.slides.map((slide, innerIndex) => (
                        <div key={innerIndex} className="swiper-slide">
                          <div className="content-panel">
                            <div className="image-side">
                              <div className="img-placeholder">
                                {slide.image && <img src={slide.image} alt={slide.alt} />}
                              </div>
                            </div>

                            <div className="text-side">
                              <h3>{slide.title}</h3>

                              <div
                                dangerouslySetInnerHTML={{
                                  __html: slide.description,
                                }}
                              />

                             <a href={slide.link} className="explore-btn">
                              Read More
                            </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {tab.slides.length > 1 && (
                      <div className="navigation">
                        <div className="inner-prev" id={`innerPrev${outerIndex}`}>
                          <ChevronLeft />
                        </div>

                        <div className="inner-next" id={`innerNext${outerIndex}`}>
                          <ChevronRight />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TabSwiperCoronary