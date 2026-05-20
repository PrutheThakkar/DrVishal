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

const ArrowIcon = () => (
  <svg
    width="26"
    height="20"
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.4085 0.423826C17.2617 0.202669 17.0349 0.0530566 16.7728 0.011713C16.511 -0.029852 16.2354 0.0402476 16.0117 0.20278C15.7881 0.365311 15.6363 0.605866 15.595 0.867712C15.5534 1.12978 15.6257 1.39168 15.7907 1.59961C15.9183 1.76106 16.0404 1.91375 16.1691 2.074C18.4041 4.92106 21.114 7.59697 24.2058 9.49976C24.3768 9.60983 24.5442 9.71577 24.7169 9.8241C24.8248 9.89156 24.9579 9.91319 25.085 9.88678C25.2122 9.86023 25.3232 9.78781 25.3951 9.68289C25.467 9.57797 25.4946 9.4484 25.4735 9.32014C25.4523 9.19203 25.3842 9.07571 25.2824 8.99934C25.1221 8.87938 24.9676 8.76201 24.8099 8.64093C21.949 6.51936 19.6949 3.87577 17.7379 0.915836C17.6258 0.749974 17.52 0.591276 17.4085 0.423826Z"
      fill="white"
    />
    <path
      d="M1 8.82617C0.734784 8.82057 0.48043 8.92102 0.292893 9.10865C0.105357 9.29609 0 9.55535 0 9.82617C0 10.097 0.105357 10.3563 0.292893 10.5437C0.48043 10.7313 0.734784 10.8318 1 10.8262C1.4 10.8178 1.8 10.8095 2.2 10.8012C9.4 10.6512 16.6 10.5012 23.8 10.3512C24.2 10.3428 24.6 10.3345 25 10.3262C25.1299 10.3234 25.2544 10.2683 25.3463 10.1746C25.4381 10.0808 25.4897 9.95604 25.4897 9.82617C25.4897 9.69631 25.4381 9.57153 25.3463 9.47772C25.2544 9.384 25.1299 9.32892 25 9.32617C24.6 9.31784 24.2 9.30951 23.8 9.30117C16.6 9.15117 9.4 9.00117 2.2 8.85117C1.8 8.84284 1.4 8.83451 1 8.82617Z"
      fill="white"
    />
    <path
      d="M17.4105 19.2266C17.2637 19.4477 17.0369 19.5973 16.7748 19.6387C16.513 19.6802 16.2373 19.6101 16.0137 19.4476C15.79 19.2851 15.6382 19.0445 15.5969 18.7827C15.5553 18.5206 15.6276 18.2587 15.7926 18.0508C15.9202 17.8894 16.0423 17.7367 16.1709 17.5765C18.4054 14.7301 21.1147 12.0545 24.2059 10.1523C24.3769 10.0423 24.5442 9.93634 24.7168 9.82804C24.8248 9.76057 24.9578 9.73895 25.085 9.76535C25.2122 9.79191 25.3231 9.86433 25.3951 9.96925C25.467 10.0742 25.4946 10.2037 25.4735 10.332C25.4523 10.4601 25.3842 10.5764 25.2823 10.6528C25.1222 10.7727 24.9677 10.8901 24.81 11.0111C21.9496 13.1322 19.6963 15.7752 17.7398 18.7346C17.6277 18.9005 17.5219 19.0591 17.4105 19.2266Z"
      fill="white"
    />
  </svg>
)

const cleanDescription = html => {
  if (!html) return ""

  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#038;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim()
}

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
        .sort((a, b) => (b.menuOrder || 0) - (a.menuOrder || 0))
        .map(child => ({
          title: child.title,
          description: cleanDescription(child.content),
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
          const index = parseInt(this.dataset.index, 10)

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
                  <div
                    className="swiper inner-swiper"
                    id={`innerSwiper${outerIndex}`}
                  >
                    <div className="swiper-wrapper">
                      {tab.slides.map((slide, innerIndex) => (
                        <div key={innerIndex} className="swiper-slide">
                          <div className="content-panel">
                            <div className="image-side">
                              <div className="img-placeholder">
                                {slide.image && (
                                  <img src={slide.image} alt={slide.alt} />
                                )}
                              </div>
                            </div>

                            <div className="text-side">
                              <h3>{slide.title}</h3>

                              <p
                                className="clinical-slide-description"
                                style={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 4,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {slide.description}
                              </p>

                              <div className="btn-wrapper">
                                <a href={slide.link} className="explore-btn">
                                  Read More <ArrowIcon />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {tab.slides.length > 1 && (
                      <div className="navigation">
                        <div
                          className="inner-prev"
                          id={`innerPrev${outerIndex}`}
                        >
                          <ChevronLeft />
                        </div>

                        <div
                          className="inner-next"
                          id={`innerNext${outerIndex}`}
                        >
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