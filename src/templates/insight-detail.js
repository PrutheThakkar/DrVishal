import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../Components/Layout.js"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"
import Seo from "../Components/Seo.js"

const InsightDetailPage = ({ data }) => {
  const post = data?.wpPost

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 767)
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const deskImage = getImage(post?.insights?.imgDesk?.node?.gatsbyImage)
  const mobImage = getImage(post?.insights?.imgMob?.node?.gatsbyImage)

  const selectedImage = isMobile ? mobImage : deskImage

  const selectedAlt = isMobile
    ? post?.insights?.imgMob?.node?.altText || post?.title
    : post?.insights?.imgDesk?.node?.altText || post?.title

  return (
    <Layout>
      <InsideBanner title={post?.title} />

      <section className="blog-detail-section">
        <div className="container">
          <div className="blog-image-wrap">
            {selectedImage && (
              <GatsbyImage
                className="blog-detail-img"
                image={selectedImage}
                alt={selectedAlt}
              />
            )}
          </div>

          <div
            className="blog-detail-content"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          />
        </div>
      </section>
    </Layout>
  )
}

export default InsightDetailPage

export const query = graphql`
  query InsightDetailPageQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      slug
      excerpt
      content

      insights {
        imgDesk {
          node {
            altText
            gatsbyImage(
              quality: 90
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1720
              height: 600
            )
          }
        }

        imgMob {
          node {
            altText
            gatsbyImage(
              quality: 90
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 504
              height: 359
            )
          }
        }
      }
    }
  }
`

const plainText = value =>
  (value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;|&#038;/g, "&")
    .replace(/\s+/g, " ")
    .trim()

export const Head = ({ data }) => {
  const post = data.wpPost
  const description = plainText(post.excerpt || post.content).slice(0, 160)

  return (
    <Seo
      title={`${plainText(post.title)} | Dr. Vishal Pingle`}
      description={description || "Cardiac surgery and heart health insights from Dr. Vishal Pingle."}
      path={`/insights/${post.slug}/`}
      keywords={["cardiac surgery insights", "heart health", "Dr. Vishal Pingle"]}
      schemaType="BlogPosting"
    />
  )
}
