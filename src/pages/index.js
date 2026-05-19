import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../Components/Layout.js";
import ClinicalProcess from "../Components/ClinicalProcess.js"

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import { useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper';


import FAQ from "../Components/Faq.js";
// import ClinicalProcess from "../Components/Clinical-Process.js";
import { initHomeAnimations } from "../js/homeAnimations";

export default function IndexPage() {
  // Fetch data using GraphQL
  const data = useStaticQuery(graphql`
   query MyQuery {
  allWpPage(filter: {databaseId: {eq: 30}}) {
    edges {
      node {
        title
        slug
        home {
          heartImage {
            node {
              altText
              gatsbyImage(
                layout: CONSTRAINED
                height: 1001
                width: 1001
                placeholder: BLURRED
              )
            }
          }
          title
          subtitle
          rightText
          leftImage {
            node {
              altText
              gatsbyImage(
                height: 200
                width: 389
                quality: 10
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
          globallyInspiredSvg {
            node {
              altText
              mediaItemUrl
            }
          }
          content
          link {
            linkTitle
            linkUrl
          }
          matrixList {
            matrixTitle
            matrixImage {
              node {
                altText
                gatsbyImage(layout: CONSTRAINED, height: 412, width: 380, placeholder: BLURRED)
              }
            }
          }
          clinicalFocusAreasTitle
          clinicalFocusAreasSubtitle
          clinicalFocusAreasDescription
          clinicalFocusList {
            clinicalFocusListImage {
              node {
                altText
                gatsbyImage(layout: CONSTRAINED, height: 10, width: 10, placeholder: BLURRED)
              }
            }
            clinicalFocusListTitle
            clinicalFocusText
          }
          surgicalApproachTitle
          surgicalApproachSubtitle
          surgicalApproachLeftContent
          listMiddleText
          surgicalApproachList {
            count
            listTitle
          }
          internationalTrainingTitle
          internationalTrainingSubtitle
          internationalTrainingLeftText
          internationalTrainingImage {
            node {
              altText
             gatsbyImage(layout: CONSTRAINED, height: 536, width: 536, placeholder: BLURRED)
            }
          }
          internationalTrainingRightText
          bottomTitle
          slider {
            sliderText
          }
        }
      }
    }
  }
  allWpPost(limit: 3, sort: { date: DESC }) {
  edges {
    node {
      id
      title
      uri
      slug
      excerpt
      featuredImage {
        node {
          altText
          gatsbyImage(
            layout: CONSTRAINED
            width: 520
            height: 360
            placeholder: BLURRED
          )
        }
      }
    }
  }
}
}
  `);

  // Get data for the Home Hero Section
  const heroImageSrcSet = data.allWpPage.edges[0].node.home.heartImage.node.gatsbyImage.images.sources[0].srcSet;
  const heroAltText = data.allWpPage.edges[0].node.home.heartImage.node.altText;

  // Get data for the About Section
  const globallyInspiredSvg = data.allWpPage.edges[0].node.home.globallyInspiredSvg.node.mediaItemUrl;
  const globallyInspiredAltText = data.allWpPage.edges[0].node.home.globallyInspiredSvg.node.altText;
  const aboutContent = data.allWpPage.edges[0].node.home.content;
  const aboutLinkTitle = data.allWpPage.edges[0].node.home.link.linkTitle;
  const aboutLinkUrl = data.allWpPage.edges[0].node.home.link.linkUrl;

  const practiceTitle = data.allWpPage.edges[0].node.home.title;
  const practiceSubtitle = data.allWpPage.edges[0].node.home.subtitle;
  const rightText = data.allWpPage.edges[0].node.home.rightText;

  // Get the leftImage data
  const leftImageData = data.allWpPage.edges[0].node.home.leftImage.node.gatsbyImage;
  const leftImageAlt = data.allWpPage.edges[0].node.home.leftImage.node.altText;

  const matrixList = data.allWpPage.edges[0].node.home.matrixList;

  // Get surgical approach data from the query
  const surgicalApproachTitle = data.allWpPage.edges[0].node.home.surgicalApproachTitle;
  const surgicalApproachSubtitle = data.allWpPage.edges[0].node.home.surgicalApproachSubtitle;
  const surgicalApproachLeftContent = data.allWpPage.edges[0].node.home.surgicalApproachLeftContent;
  const listMiddleText = data.allWpPage.edges[0].node.home.listMiddleText;
  const surgicalApproachList = data.allWpPage.edges[0].node.home.surgicalApproachList;

  // Get data for the International Training Section
  const internationalTrainingTitle = data.allWpPage.edges[0].node.home.internationalTrainingTitle;
  const internationalTrainingSubtitle = data.allWpPage.edges[0].node.home.internationalTrainingSubtitle;
  const internationalTrainingLeftText = data.allWpPage.edges[0].node.home.internationalTrainingLeftText;
  const internationalTrainingImageData = data.allWpPage.edges[0].node.home.internationalTrainingImage.node.gatsbyImage;
  const internationalTrainingImageAlt = data.allWpPage.edges[0].node.home.internationalTrainingImage.node.altText;
  const internationalTrainingRightText = data.allWpPage.edges[0].node.home.internationalTrainingRightText;
  const bottomTitle = data.allWpPage.edges[0].node.home.bottomTitle;
  const sliderText = data.allWpPage.edges[0].node.home.slider.map(item => item.sliderText);

  const posts = data.allWpPost.edges;

  useEffect(() => {
    const cleanupAnimations = initHomeAnimations();

    return () => {
      cleanupAnimations();
    };
  }, []);



  return (
    <Layout>
      <section className="home-hero-sec">
        <div className="container">
          <div id="imgHeart" className="img-wrap">
            <img
              srcSet={heroImageSrcSet} // Use srcSet from the GraphQL query for responsive images
              alt={heroAltText} // Using the alt text from the GraphQL query
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="img-wrap">
            <img
              src={globallyInspiredSvg}
              alt={globallyInspiredAltText}
            />

            <div className="para">
              <p dangerouslySetInnerHTML={{ __html: aboutContent }} />
            </div>
            <div className="btn-wrapper">
              {data.allWpPage.edges[0].node.home.link.map((link, index) => (
                <a
                  key={index}
                  className={index === 0 ? "red" : ""} // Apply 'red' class only to the first link
                  href={link.linkUrl}
                >
                  {link.linkTitle}
                  <svg
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4085 0.423826C17.2617 0.202669 17.0349 0.0530566 16.7728 0.011713C16.511 -0.029852 16.2354 0.0402476 16.0117 0.20278C15.7881 0.365311 15.6363 0.605866 15.595 0.867712C15.5534 1.12978 15.6257 1.39168 15.7907 1.59961C15.7907 1.59961 15.7907 1.59961 15.7907 1.59961C15.9183 1.76106 16.0404 1.91375 16.1691 2.074C18.4041 4.92106 21.114 7.59697 24.2058 9.49976C24.3768 9.60983 24.5442 9.71577 24.7169 9.8241C24.8248 9.89156 24.9579 9.91319 25.085 9.88678C25.2122 9.86023 25.3232 9.78781 25.3951 9.68289C25.467 9.57797 25.4946 9.4484 25.4735 9.32014C25.4523 9.19203 25.3842 9.07571 25.2824 8.99934C25.1221 8.87938 24.9676 8.76201 24.8099 8.64093C21.949 6.51936 19.6949 3.87577 17.7379 0.915836C17.6258 0.749974 17.52 0.591276 17.4085 0.423826Z"
                      fill="white"
                    />
                    <path
                      d="M1 8.82617C0.734784 8.82057 0.48043 8.92102 0.292893 9.10865C0.105357 9.29609 0 9.55535 0 9.82617C0 10.097 0.105357 10.3563 0.292893 10.5437C0.48043 10.7313 0.734784 10.8318 1 10.8262C1.4 10.8178 1.8 10.8095 2.2 10.8012C9.4 10.6512 16.6 10.5012 23.8 10.3512C24.2 10.3428 24.6 10.3345 25 10.3262C25.1299 10.3234 25.2544 10.2683 25.3463 10.1746C25.4381 10.0808 25.4897 9.95604 25.4897 9.82617C25.4897 9.69631 25.4381 9.57153 25.3463 9.47772C25.2544 9.384 25.1299 9.32892 25 9.32617C24.6 9.31784 24.2 9.30951 23.8 9.30117C16.6 9.15117 9.4 9.00117 2.2 8.85117C1.8 8.84284 1.4 8.83451 1 8.82617Z"
                      fill="white"
                    />
                    <path
                      d="M17.4105 19.2266C17.2637 19.4477 17.0369 19.5973 16.7748 19.6387C16.513 19.6802 16.2373 19.6101 16.0137 19.4476C15.79 19.2851 15.6382 19.0445 15.5969 18.7827C15.5553 18.5206 15.6276 18.2587 15.7926 18.0508C15.9202 17.8894 16.0423 17.7367 16.1709 17.5765C18.4054 14.7301 21.1147 12.0545 24.2059 10.1523C24.3769 10.0423 24.5442 9.93634 24.7168 9.82804C24.8248 9.76057 24.9578 9.73895 25.085 9.76535C25.2122 9.79191 25.3231 9.86433 25.3951 9.96925C25.467 10.0742 25.4946 10.2037 25.4735 10.332C25.4523 10.4601 25.3842 10.5764 25.2823 10.6528C25.2823 10.6528 25.2823 10.6528 25.2823 10.6528C25.1222 10.7727 24.9677 10.8901 24.81 11.0111C21.9496 13.1322 19.6963 15.7752 17.7398 18.7346C17.6277 18.9005 17.5219 19.0591 17.4105 19.2266Z"
                      fill="white"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Philosophy Section */}
      <section className="practice-section">
        <div className="title-wrapper">
          <h2>{practiceTitle}
            <span>{practiceSubtitle}</span>
          </h2>
        </div>
        <div className="paragraph-wrapper">
          <div className="left">

            <img
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/practice-left-image-heart.png"
              alt="Fallback Image"

            />
          </div>
          <div className="right">
            <p>{rightText}</p>
          </div>
        </div>
      </section>


      {/* Product List Section */}
      <section className="product-list">
        <div className="container">
          <ul>
            {matrixList.map((item, index) => (
              <li key={index}>
                <p>{item.matrixTitle}</p>
                <div className="img-wrap">
                  {/* Render dynamic images using GatsbyImage */}
                  <GatsbyImage
                    image={item.matrixImage.node.gatsbyImage} // Pass the image data
                    alt={item.matrixImage.node.altText} // Use the alt text from the query
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClinicalProcess />

      {/* Surgical Approach Section */}
      <div className="title-wrapper">
        <h2>{surgicalApproachTitle}
          <span>{surgicalApproachSubtitle}</span>
        </h2>
      </div>

      <section className="sergical-approach">
        <div className="container">
          <div className="sergical-swiper">
            <div className="left">
              <p>{surgicalApproachLeftContent}</p>
            </div>

            <div className="right">
              <div className="middle-text">
                <p dangerouslySetInnerHTML={{ __html: listMiddleText }} />
              </div>
              <ul className="surgery-section">
                {surgicalApproachList.map((item, index) => (
                  <li key={index}>
                    <div className="sergery-list">
                      <div className="index">{item.count}</div>

                      <p dangerouslySetInnerHTML={{ __html: item.listTitle }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="international-training">
        <div className="container">
          <div className="title-wrapper">
            <h2>{internationalTrainingTitle}
              <span>{internationalTrainingSubtitle}</span>
            </h2>
          </div>

          <div className="international-sec">
            <div className="left">
              <p>{internationalTrainingLeftText}</p>
            </div>
            <div className="middle">
              {/* Render dynamic image with GatsbyImage */}
              <GatsbyImage
                image={internationalTrainingImageData} // Pass the image data from GraphQL
                alt={internationalTrainingImageAlt}

              />
            </div>
            <div className="right">
              <p>{internationalTrainingRightText}</p>
            </div>
          </div>

          <div className="international-bottom">
            <p>{bottomTitle}</p>
            {/* Swiper Container */}
            <div className="internation-bottom-swiper">
              <Swiper
                spaceBetween={30}  // Space between slides
                slidesPerView={1}  // Show 1 slide at a time
                loop={true}  // Enable loop
                direction={'vertical'}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}  // Enable clickable pagination
                className="swiper-wrapper"
              >
                {/* Dynamically render each slider item */}
                {sliderText.map((text, index) => (
                  <SwiperSlide key={index}>
                    <p>{text}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="title-wrapper">
            <h2>Blogs
              <span>From operating rooms in Mumbai to training labs in Europe</span>
            </h2>
          </div>

          {/* Swiper Container for mobile and tablet */}
          <div className="swiper-container blog-swiper">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              className="swiper-wrapper"
            >
              {/* Swiper Slide for Slider */}
              {sliderText.map((text, index) => (
                <SwiperSlide key={index}>
                  <div className="blog-card">
                    <p>{text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Default grid layout for larger screens */}
          <div className="blog-cards-container desktop-blog">
            {/* Dynamically Render Blog Cards */}
            {posts.map(({ node }) => {
              const image = node.featuredImage?.node?.gatsbyImage
              const imageAlt = node.featuredImage?.node?.altText || node.title

              return (
                <div key={node.id} className="blog-card">
                  <div className="blog-img">
                    {image ? (
                      <GatsbyImage image={image} alt={imageAlt} />
                    ) : (
                      <img
                        src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/Rectangle-7.jpg"
                        alt="Fallback"
                      />
                    )}
                  </div>

                  <div className="blog-wrapper">
                    <div className="blog-card-header">
                      <span className="blog-category">Heart</span>
                      <span className="blog-category">Wellness</span>
                    </div>

                    <h3 className="blog-card-title">{node.title}</h3>

                    <div
                      className="blog-card-description"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />

                    <a href={node.uri} className="read-more-btn">
                      Read More
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* "Read All" Button */}
          <a href="#" className="read-all-btn">Read All</a>
        </div>
      </section>


      <FAQ limit={4} />




    </Layout>





  )
}