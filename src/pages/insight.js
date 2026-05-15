import React from "react"
import Layout from "../Components/Layout.js";
import FAQ from "../Components/Faq.js";
import InsideBanner from "../components/Inside-Page-Top-Sec.js"
import { graphql } from "gatsby"

const InsightsListingPage = ({data}) => {
    const page = data?.wpPage
    const insidePage = page?.insidePage

    return (
        <Layout>
            <>
                {/* Inside Banner */}
                <InsideBanner
  title={insidePage?.pageTitle}/>

                <section className="Dr-vishal-pingale">
                    <div className="container">
                        <div className="title-wrapper">
                            <h2>
                                Patient Stories<span>Real Stories. Real Transformations.</span>
                            </h2>
                        </div>

                        <p>
                            Every patient’s journey is unique. Dr. Vishal Pingle combines surgical
                            expertise with compassionate care to guide patients through complex
                            cardiac and thoracic treatments. These stories highlight the impact
                            of advanced procedures on real lives, from improved heart function to
                            restored confidence in daily living.
                        </p>

                        <p>
                            Absolutely, for a cardiac and thoracic surgery website, the FAQs
                            should go beyond logistics and address common patient concerns about
                            procedures, outcomes, risks, and recovery, in patient-friendly
                            language. Let’s make this more in-depth, while still easy to read
                            online.
                        </p>
                    </div>
                </section>

                {/* Clinical Focus Section */}
                <section className="clinical-focus-section">
                    <div className="container">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg" alt="" />
                                    <div className="text-wrap">
                                        <div className="wrapper">
                                            <h3>Coronary Artery Procedures </h3>
                                            <h4>Heart Bypass Surgery (CABG)</h4>
                                            <p>Read More</p>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg" alt="" />
                                    <div className="text-wrap">
                                        <div className="wrapper">
                                            <h3>Coronary Artery Procedures </h3>
                                            <h4>Heart Bypass Surgery (CABG)</h4>
                                            <p>Read More</p>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/placeholder.jpg" alt="" />
                                    <div className="text-wrap">
                                        <div className="wrapper">
                                            <h3>Coronary Artery Procedures </h3>
                                            <h4>Heart Bypass Surgery (CABG)</h4>
                                            <p>Read More</p>
                                        </div>
                                    </div>
                                </a>
                            </li>

                          
                        </ul>
                    </div>
                </section>

               <div className="inside-faq">
                <FAQ limit={10} />
                </div>

                {/* Bottom CTA */}
                <section className="bottom-section">
                    <div className="container">
                        <h3>Don’t see the answer you need?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="read-all-btn">
                            Contact Now
                        </a>
                    </div>
                </section>
            </>
        </Layout>
    )
}

export default InsightsListingPage

export const query = graphql`
  query insightPageQuery {
    wpPage(databaseId: { eq: 36 }) {
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