// src/pages/clinical-focus.js

import React from "react"

// ✅ Added graphql import here
import { Link, graphql } from "gatsby"

import TabSwiperCoronary from "../Components/Tabswipercoronary"
import Layout from "../Components/Layout.js"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"

// ── Static data ──────────────────────────────────────────────────────────────

const hospitals = [
  {
    name: "Wockhardt Hospital",
    detail: "Visits Only by appointments",
    phone: "09702080365",
    image:
      "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg",
  },
  {
    name: "Saifee Hospital",
    detail: "Saturday : 7 pm to 9 pm",
    phone: null,
    image:
      "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg",
  },
  {
    name: "Breach Candy Hospital Trust",
    detail: "Clinic visits Only by appointments",
    phone: "09702080365",
    image:
      "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg",
  },
  {
    name: "Global Hospitals",
    detail: "Clinic visits Only by appointments",
    phone: "09702080365",
    image:
      "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg",
  },
]

// ── Page Component ───────────────────────────────────────────────────────────

const ClinicalFocusPage = ({ data }) => {
  // ✅ Fetch WordPress page data from GraphQL
  const page = data?.wpPage

  // ✅ Fetch insidePage ACF fields
  const insidePage = page?.insidePage

  return (
    <Layout>
      {/* ── Inside Banner ── */}
      <InsideBanner title={insidePage?.pageTitle} />

      {/* ── Intro ── */}
      <section className="Dr-vishal-pingale">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Cardiac &amp; Thoracic Expertise
              <span>
                Advanced Cardiac &amp; Thoracic Care, Delivered with Precision
              </span>
            </h2>
          </div>

          <p>
            At Revive Heart Institute, every procedure is designed with patient
            safety, comfort, and long-term outcomes in mind. Dr. Vishal Pingle
            combines global expertise with hands-on experience, ensuring that
            even complex interventions are approached with clarity and
            precision.
          </p>
        </div>
      </section>

      {/* ── Tab Swiper Coronary — separate component ── */}
      <TabSwiperCoronary />

   

      {/* ── Bottom CTA ── */}
      <section className="bottom-section">
        <div className="container">
          <h3>Don&apos;t see the answer you need?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <Link to="/contact" className="read-all-btn">
            Contact Now
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ClinicalFocusPage

// ── Gatsby Head API SEO ─────────────────────────────────────────────────────

export const Head = () => (
  <>
    <title>Clinical Focus | Revive Heart Institute</title>
    <meta
      name="description"
      content="Explore Dr. Vishal Pingle's cardiac and thoracic surgical expertise at Revive Heart Institute, Mumbai."
    />
  </>
)

// ── GraphQL Page Query ───────────────────────────────────────────────────────
// ✅ This query fetches data from WordPress page databaseId 34
// ✅ insidePage.pageTitle is passed to InsideBanner as h1

export const query = graphql`
  query ClinicalFocusPageQuery {
    wpPage(databaseId: { eq: 34 }) {
      title
      insidePage {
        insidePageTopTitle
        insidePageTopSubtitle
        insidePageTopParagraph
        pageTitle
      }
    }
  }
`