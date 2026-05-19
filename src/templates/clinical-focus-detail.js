import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"

export default function ClinicalFocusDetail({ data }) {
  const item = data.wpClinicalFocus

  return (
    <Layout>
      <section className="clinical-focus-detail">
        <div className="container">
          <h1>{item.title}</h1>

          {item.featuredImage?.node?.mediaItemUrl && (
            <img
              src={item.featuredImage.node.mediaItemUrl}
              alt={item.featuredImage.node.altText || item.title}
            />
          )}

          <div
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ClinicalFocusDetailQuery($id: String!) {
    wpClinicalFocus(id: { eq: $id }) {
      title
      slug
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