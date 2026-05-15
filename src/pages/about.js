// src/pages/about.js
import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../Components/Layout.js"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"

const AboutPage = ({ data }) => {
  const page = data?.wpPage
  const insidePage = page?.insidePage

  return (
    <Layout>
   <InsideBanner
  title={insidePage?.pageTitle}
  showAboutList={true}
/>

      <section className="Dr-vishal-pingale">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Who Dr. Vishal Pingle Is
              <span>
                Globally Trained. Lifelong Learner. Compassionate Surgeon.
              </span>
            </h2>
          </div>

          <div className="img-wrap">
            <StaticImage
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/about-dr-img.webp"
              alt="Dr. Vishal Pingle"
              placeholder="blurred"
              layout="constrained"
            />
          </div>

          <p>
            Dr. Vishal N. Pingle is an internationally trained cardiothoracic
            surgeon and Director of Revive Heart Institute, Mumbai. With
            expertise spanning heart and lung transplants, minimally invasive
            surgery, complex valve, and aortic procedures, he combines
            world-class technical skill with patient-centered care.
          </p>

          <ul className="list-od-degree">
            <li>
              <div>
                <img
                  src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/MUHS-logo.svg"
                  alt="MUHS logo"
                />
                <p>M.B., B.S.</p>
                <p>Bachelor of Medicine and Bachelor of Surgery</p>
                <p className="black">
                  2008 - Distinction in Forensic Medicine and Microbiology
                </p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/General-surgery-logo.svg"
                  alt="General Surgery logo"
                />
                <p>DNB</p>
                <p>General Surgery</p>
                <p className="black">2012</p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/MUHS-logo.svg"
                  alt="MUHS logo"
                />
                <p>M.Ch.</p>
                <p>Cardiovascular and Thoracic Surgery</p>
                <p className="black">2015 - Gold Medal</p>
              </div>
            </li>
          </ul>

          <p>
            From the very start of his medical career, Dr. Pingle recognized
            that mastery in cardiac surgery requires continuous learning. He
            pursued advanced fellowships in the <span>UK</span>,{" "}
            <span>Germany</span>, and the <span>Netherlands</span>, gaining
            hands-on experience in the latest surgical techniques, transplant
            medicine, and multidisciplinary care. Today, he brings this global
            expertise directly to his patients in <span>India</span>, offering
            outcomes that meet international standards.
          </p>

          <div className="img-wrap">
            <StaticImage
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/map-new-img.png"
              alt="Map Image"
              placeholder="blurred"
              layout="constrained"
              height={565}
              width={1716}
            />
          </div>
        </div>
      </section>

      <section className="infro-section">
        <div className="container">
          <div className="left">
            <p>
              Beyond his technical skills, Dr. Pingle is known for his
              compassionate approach, ensuring patients and families are guided
              through every step of their care journey with clarity, empathy,
              and understanding.
            </p>
          </div>

          <div className="right">
            <div className="img-wrapper">
              <StaticImage
                src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/beyong-sec-img.webp"
                alt="Beyond section"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="clinical-philosophy">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Clinical Philosophy &amp; Expertise
              <span>Precision, Innovation, and Care Guided by Evidence</span>
            </h2>
          </div>

          <div className="img-wrap">
            <StaticImage
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/clinical-philosophy-img.webp"
              alt="Clinical Philosophy"
              placeholder="blurred"
              layout="constrained"
            />
          </div>

          <p>
            Dr. Pingle believes that the best outcomes come from aligning
            treatment intensity with disease severity. Not every heart or lung
            condition requires surgery; sometimes medical management or
            minimally invasive procedures are safer and more effective. Every
            patient receives an individualized plan designed to maximize benefit
            while minimizing risk.
          </p>
        </div>
      </section>

      <section className="Dr-vishal-pingale">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Commitment to Patients &amp; Lifelong Learning
              <span>Every Patient is Unique — Every Journey Matters</span>
            </h2>
          </div>

          <p>
            Dr. Pingle believes that the best outcomes come from aligning
            treatment intensity with disease severity. Not every heart or lung
            condition requires surgery; sometimes medical management or
            minimally invasive procedures are safer and more effective. Every
            patient receives an individualized plan designed to maximize benefit
            while minimizing risk.
          </p>

          <p>
            By combining <span>global expertise, surgical excellence</span>, and{" "}
            <span>genuine empathy</span>, Dr. Pingle ensures that every patient
            receives care that is both advanced and personally meaningful,
            helping them achieve the best possible outcomes and quality of life.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    wpPage(databaseId: { eq: 32 }) {
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