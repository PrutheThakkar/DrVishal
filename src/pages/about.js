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
      <section className="about-new-exp" data-aos="fade-up">
        <div className="container">
          <ul className="about-banner-list">
            <li>
              <div className="about-exp-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5002 0C9.73875 0 7.5 2.25 7.5 5.00025V50.0003C7.5 52.7497 9.73875 55.0005 12.5002 55.0005H17.4998V60L23.7502 55.0005L30 60V55.0005H47.4997C50.2627 55.0005 52.5 52.7505 52.5 50.0003V47.5005C52.5 50.25 50.2627 52.5 47.4997 52.5H30V50.0003H47.4997C50.2627 50.0003 52.5 47.7503 52.5 45V42.5003C52.5 45.2505 50.2627 47.5005 47.4997 47.5005H12.5002C11.7712 47.5005 11.051 47.3405 10.3905 47.0317C10.9943 45.7545 12.258 45 13.7505 45H47.499C50.2627 45 52.5 42.75 52.5 40.0005V5.00025C52.5 2.25 50.2627 0 47.4997 0H12.5002ZM10.0778 49.3755C10.8193 49.7856 11.6529 50.0006 12.5002 50.0003H17.4998V52.5H13.7498C11.9093 52.5 10.3957 51.087 10.0785 49.3747L10.0778 49.3755Z" fill="#C1272D" />
                </svg>

              </div>

              <div className="about-exp-content">
                <span>14+</span>
                <p>Published Work</p>
              </div>
            </li>

            <li>
              <div className="about-exp-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.9997 0C24.4775 0 20 4.5 20 9.99975V12.5002H25.0002V15H20V17.4997H25.0002V20.0002H20V22.5H25.0002V24.9997H20V30C20 35.4997 24.4775 39.9997 29.9997 39.9997C35.5227 39.9997 40.0002 35.4997 40.0002 30V25.0005H35V22.5007H40.0002V20.001H35V17.5005H40.0002V15.0007H35V12.501H40.0002V10.0005C40.0002 4.50075 35.5227 0.000750303 29.9997 0.000750303V0ZM12.5 24.9997C11.12 24.9997 10.0002 26.0002 10.0002 27.5002V30C10.0002 39.9997 17.639 48.516 27.5 49.7655V55.0005H12.5C11.12 55.0005 10.0002 56.0002 10.0002 57.5002C10.0002 58.7497 11.1192 60 12.5 60H47.5002C48.8802 60 50 58.7497 50 57.5002C50 56.0002 48.8802 54.9997 47.5002 54.9997H32.5002V49.7655C42.3597 48.516 50 40.0005 50 30V27.5002C50 26.0002 48.8802 24.9997 47.5002 24.9997C46.1202 24.9997 44.9997 26.0002 44.9997 27.5002V30C44.9997 38.25 38.285 45 29.9997 45C21.716 45 14.9997 38.25 14.9997 30V27.5002C14.9997 26.0002 13.8807 24.9997 12.5 24.9997Z" fill="#C1272D" />
                </svg>

              </div>

              <div className="about-exp-content">
                <span>16</span>
                <p>International Conferences</p>
              </div>
            </li>

            <li>
              <div className="about-exp-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53.75 16.25H46.25V6.25C46.25 4.75 45.25 3.75 43.75 3.75H16.25C14.75 3.75 13.75 4.75 13.75 6.25V16.25H6.25C4.75 16.25 3.75 17.25 3.75 18.75V53.75C3.75 55.25 4.75 56.25 6.25 56.25H53.75C55.25 56.25 56.25 55.25 56.25 53.75V18.75C56.25 17.25 55.25 16.25 53.75 16.25ZM18.75 46.25H16.25C14.75 46.25 13.75 45.25 13.75 43.75C13.75 42.25 14.75 41.25 16.25 41.25H18.75C20.25 41.25 21.25 42.25 21.25 43.75C21.25 45.25 20.25 46.25 18.75 46.25ZM18.75 36.25H16.25C14.75 36.25 13.75 35.25 13.75 33.75C13.75 32.25 14.75 31.25 16.25 31.25H18.75C20.25 31.25 21.25 32.25 21.25 33.75C21.25 35.25 20.25 36.25 18.75 36.25ZM31.25 46.25H28.75C27.25 46.25 26.25 45.25 26.25 43.75C26.25 42.25 27.25 41.25 28.75 41.25H31.25C32.75 41.25 33.75 42.25 33.75 43.75C33.75 45.25 32.75 46.25 31.25 46.25ZM31.25 36.25H28.75C27.25 36.25 26.25 35.25 26.25 33.75C26.25 32.25 27.25 31.25 28.75 31.25H31.25C32.75 31.25 33.75 32.25 33.75 33.75C33.75 35.25 32.75 36.25 31.25 36.25ZM33.75 22.5H32.5V23.75C32.5 25.25 31.5 26.25 30 26.25C28.5 26.25 27.5 25.25 27.5 23.75V22.5H26.25C24.75 22.5 23.75 21.5 23.75 20C23.75 18.5 24.75 17.5 26.25 17.5H27.5V16.25C27.5 14.75 28.5 13.75 30 13.75C31.5 13.75 32.5 14.75 32.5 16.25V17.5H33.75C35.25 17.5 36.25 18.5 36.25 20C36.25 21.5 35.25 22.5 33.75 22.5ZM43.75 46.25H41.25C39.75 46.25 38.75 45.25 38.75 43.75C38.75 42.25 39.75 41.25 41.25 41.25H43.75C45.25 41.25 46.25 42.25 46.25 43.75C46.25 45.25 45.25 46.25 43.75 46.25ZM43.75 36.25H41.25C39.75 36.25 38.75 35.25 38.75 33.75C38.75 32.25 39.75 31.25 41.25 31.25H43.75C45.25 31.25 46.25 32.25 46.25 33.75C46.25 35.25 45.25 36.25 43.75 36.25Z" fill="#C1272D" />
                </svg>

              </div>

              <div className="about-exp-content">
                <span>Multi-Hospital</span>
                <p>Leading Consultant</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="Dr-vishal-pingale">
        <div className="container">
          <div className="title-wrapper">
            <h2 data-aos="fade-up">
              {insidePage.insidePageTopTitle}
              <span>
                {insidePage.insidePageTopTitle}
              </span>
            </h2>
          </div>

          <div className="img-wrap" data-aos="fade-up">
            <StaticImage
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/about-dr-img.webp"
              alt="Dr. Vishal Pingle"
              placeholder="blurred"
              layout="constrained"
            />
          </div>

          <p data-aos="fade-up">
            Dr. Vishal N. Pingle is an internationally trained cardiothoracic
            surgeon and Director of Revive Heart Institute, Mumbai. With
            expertise spanning heart and lung transplants, minimally invasive
            surgery, complex valve, and aortic procedures, he combines
            world-class technical skill with patient-centered care.
          </p>

          <ul className="list-od-degree" data-aos="fade-up">
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

          <p className="map-text" data-aos="fade-up">
            From the very start of his medical career, Dr. Pingle recognized
            that mastery in cardiac surgery requires continuous learning. He
            pursued advanced fellowships in the <span>UK</span>,{" "}
            <span>Germany</span>, and the <span>Netherlands</span>, gaining
            hands-on experience in the latest surgical techniques, transplant
            medicine, and multidisciplinary care. Today, he brings this global
            expertise directly to his patients in <span>India</span>, offering
            outcomes that meet international standards.
          </p>

         <div className="img-wrap journey" data-aos="fade-up">
  <picture>
    <source
      media="(max-width: 767px)"
      srcSet="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/06/Fellowship-Journey.png"
    />

    <img
      src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/map-new-img.png"
      alt="Map Image"
    />
  </picture>
</div>
        </div>
      </section>

      <section className="infro-section">
        <div className="container">
          <div className="left" data-aos="fade-up">
            <p>
              Beyond his technical skills, Dr. Pingle is known for his
              compassionate approach, ensuring patients and families are guided
              through every step of their care journey with clarity, empathy,
              and understanding.
            </p>
          </div>

          <div className="right" data-aos="fade-right">
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
            <h2 data-aos="fade-up">
              Clinical Philosophy &amp; Expertise
              <span>Precision, Innovation, and Care Guided by Evidence</span>
            </h2>
          </div>

          <div className="img-wrap" data-aos="fade-up">
            <StaticImage
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/clinical-philosophy-img.webp"
              alt="Clinical Philosophy"
              placeholder="blurred"
              layout="constrained"
            />
          </div>

          <p data-aos="fade-up">
            Dr. Pingle believes that the best outcomes come from aligning
            treatment intensity with disease severity. Not every heart or lung
            condition requires surgery; sometimes medical management or
            minimally invasive procedures are safer and more effective. Every
            patient receives an individualized plan designed to maximize benefit
            while minimizing risk.
          </p>
        </div>
      </section>

      <section className="Dr-vishal-pingale" data-aos="fade-up">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              Commitment to Patients &amp; Lifelong Learning
              <span>Every Patient is Unique — Every Journey Matters</span>
            </h2>
          </div>

          <p data-aos="fade-up">
            Dr. Pingle believes that the best outcomes come from aligning
            treatment intensity with disease severity. Not every heart or lung
            condition requires surgery; sometimes medical management or
            minimally invasive procedures are safer and more effective. Every
            patient receives an individualized plan designed to maximize benefit
            while minimizing risk.
          </p>

          <p data-aos="fade-up">
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