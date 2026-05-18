import React from "react"
import { graphql } from "gatsby"

import Layout from "../Components/Layout.js"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"

const InsightDetailPage = ({ data }) => {
  const post = data?.wpPost

  return (
    <Layout>
      <InsideBanner title={post?.title} />

      <section className="blog-detail-section">
        <div className="container">
          {post?.featuredImage?.node?.mediaItemUrl && (
            <img
              className="blog-detail-img"
              src={post.featuredImage.node.mediaItemUrl}
              alt={post.featuredImage.node.altText || post.title}
            />
          )}

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
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
`