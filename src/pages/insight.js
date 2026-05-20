import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../Components/Layout.js"
import FAQ from "../Components/Faq.js"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"

const cleanExcerpt = html => {
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

const InsightsListingPage = ({ data }) => {
  const page = data?.wpPage
  const insidePage = page?.insidePage
  const posts = data?.allWpPost?.nodes || []

  return (
    <Layout>
      <InsideBanner title={insidePage?.pageTitle || page?.title} />

      <section className="Dr-vishal-pingale">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Patient Stories
              <span>Real Stories. Real Transformations.</span>
            </h2>
          </div>

          <div dangerouslySetInnerHTML={{ __html: page?.content }} />
        </div>
      </section>

      <section className="clinical-focus-section">
        <div className="container">
          <ul>
            {posts.map(post => {
              const excerptText = cleanExcerpt(post.excerpt)

              return (
                <li key={post.id}>
                  <Link to={`/insights/${post.slug}/`}>
                    <img
                      src={
                        post.featuredImage?.node?.mediaItemUrl ||
                        "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg"
                      }
                      alt={post.featuredImage?.node?.altText || post.title}
                    />

                    <div className="text-wrap">
                      <div className="wrapper">
                       
                    <h3 
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                        <p
                          className="blog-excerpt"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {excerptText}
                        </p>

                        <p className="read-more">Read More</p>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <div className="inside-faq">
        <FAQ limit={10} />
      </div>

      <section className="bottom-section">
        <div className="container">
          <h3>Don’t see the answer you need?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="read-all-btn">
            Contact Now
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default InsightsListingPage

export const query = graphql`
  query InsightsListingPageQuery {
    wpPage(slug: { eq: "insights" }) {
      title
      content
      insidePage {
        pageTitle
      }
    }

    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
          insights {
        imgDesk {
          node {
            altText
            gatsbyImage(
              quality: 10
              layout: FIXED
              placeholder: BLURRED
              width: 10
              height: 10
            )
          }
        }
        imgMob{
           node {
            altText
            gatsbyImage(
              quality: 10
              layout: FIXED
              placeholder: BLURRED
              width: 10
              height: 10
            )
          }
        }
      }
      }
    }
  }
`