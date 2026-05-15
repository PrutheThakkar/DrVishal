// src/pages/clinical-focus.js

import React from "react"

// ✅ Added graphql import here
import { Link, graphql } from "gatsby"

import TabSwiperCoronary from "../Components/Tabswipercoronary"
import Layout from "../Components/Layout.js"
import InsideBanner from "../components/Inside-Page-Top-Sec.js"

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

      {/* ── Hospitals & Clinical Access ── */}
      <section className="hospital-clinic-access">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Hospitals &amp; Clinical access{" "}
              <span>Advanced Cardiac Care, Within Reach</span>
            </h2>

            <p>
              Dr. Vishal Pingle operates at leading hospitals across Mumbai,
              each equipped with state-of-the-art cardiac ICUs, advanced
              surgical technology, and specialized transplant programs. This
              allows patients to receive complex heart and lung care with the
              highest standards of safety and precision, while maintaining
              continuity and personalized attention.
            </p>

            <p>
              Appointments are simple and flexible, with options for online
              booking, phone consultations, or hospital referrals. Each hospital
              is chosen for accessibility, patient-friendly facilities, and
              expert multidisciplinary teams, ensuring that world-class cardiac
              care is always convenient and stress-free.
            </p>
          </div>

          <div className="wrapper">
            {/* Left feature image */}
            <div className="left">
              <div className="img-wrapp">
                <img
                  src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg"
                  alt="Hospital"
                />
              </div>
            </div>

            {/* Hospital list */}
            <div className="right">
              <ul>
                {hospitals.map((hospital, index) => (
                  <li key={index}>
                    <div className="left">
                      <div className="img-wrapper">
                        <img src={hospital.image} alt={hospital.name} />
                      </div>
                    </div>

                    <div className="right">
                      <h3>{hospital.name}</h3>

                      <p>
                        <span>{hospital.detail}</span>

                        {hospital.phone && (
                          <a href={`tel:${hospital.phone}`}>
                            Call on {hospital.phone}
                          </a>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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