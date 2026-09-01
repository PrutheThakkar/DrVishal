import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"
import Seo from "../Components/Seo.js"
import { getClinicalFocusSeo } from "../data/seo.js"

export default function ClinicalFocusDetail({ data }) {
  const item = data.wpClinicalFocus

  return (
    <Layout>
       <InsideBanner title={item.title} />

      <section className="clinical-focus-detail">
        <div className="container">

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

export const Head = ({ data }) => {
  const item = data.wpClinicalFocus
  const seo = getClinicalFocusSeo(item.slug, item.title)

  return (
    <Seo
      {...seo}
      path={`/clinical-focus/${item.slug}/`}
      schemaType="MedicalProcedure"
      image={item.featuredImage?.node?.mediaItemUrl || "/icon.png"}
    />
  )
}
