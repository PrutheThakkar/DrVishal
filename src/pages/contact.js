// src/pages/request-appointment.js
import React from "react"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"
import { graphql } from "gatsby"
import Layout from "../Components/Layout.js"

const RequestAppointmentPage = ({data}) => {
  const page = data?.wpPage
  const insidePage = page?.insidePage

  return (
    <Layout>

    <main>

    <InsideBanner
  title={insidePage?.pageTitle}/>
      {/* Intro Section */}
      <section className="Dr-vishal-pingale">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              REQUEST APPOINTMENT
              <span>
                Speak directly with a surgeon who will be responsible for your
                care.
              </span>
            </h2>
          </div>

          <p>
            Whether you are exploring options, facing surgery, or seeking a
            second opinion, this is where the process begins. Your request is
            reviewed personally so that your consultation is relevant, prepared,
            and grounded in your real medical situation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrap">
              <div className="form-group">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name *"
                  required
                />
              </div>
            </div>

            <div className="input-wrap">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Telephone"
                />
              </div>
            </div>

            <div className="input-wrap">
              <div className="form-group">
                <select id="enquiry" name="enquiry" required defaultValue="">
                  <option value="">Nature of Enquiry (Please select) *</option>
                  <option value="option-1">Please select</option>
                  <option value="option-2">Please select</option>
                  <option value="option-3">Please select</option>
                  <option value="option-4">Please select</option>
                  <option value="option-5">Please select</option>
                </select>
              </div>

              <div className="form-group">{/* empty column kept */}</div>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                required
              />
            </div>

            <div className="btn-wrap">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

        {/* Hospitals & Clinical Access */}
                <section className="hospital-clinic-access">
                    <div className="container">
                        <div className="title-wrapper">
                            <h2>
                                Hospitals & Clinical access{" "}
                                <span>Advanced Cardiac Care, Within Reach</span>
                            </h2>

                            <p>
                                Dr. Vishal Pingle operates at leading hospitals across Mumbai, each
                                equipped with state-of-the-art cardiac ICUs, advanced surgical
                                technology, and specialized transplant programs. This allows
                                patients to receive complex heart and lung care with the highest
                                standards of safety and precision, while maintaining continuity and
                                personalized attention.
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
                            <div className="left">
                                <div className="img-wrapp">
                                    <img src="./images/placeholder.jpg" alt="" />
                                </div>
                            </div>

                            <div className="right">
                                <ul>
                                    <li>
                                        <div className="left">
                                            <div className="img-wrapper">
                                                <img src="./images/placeholder.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Wockhardt Hospital</h3>
                                            <p>
                                                <span>Visits Only by appointments</span>
                                                <a href="#">Call on 09702080365</a>
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="left">
                                            <div className="img-wrapper">
                                                <img src="./images/placeholder.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Saifee Hospital</h3>
                                            <p>Saturday : 7 pm to 9 pm</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="left">
                                            <div className="img-wrapper">
                                                <img src="./images/placeholder.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Breach Candy Hospital Trust</h3>
                                            <p>
                                                <span>Clinic visits Only by appointments</span>
                                                <a href="#">Call on 09702080365</a>
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="left">
                                            <div className="img-wrapper">
                                                <img src="./images/placeholder.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Global Hospitals</h3>
                                            <p>
                                                <span>Clinic visits Only by appointments </span>
                                                <a href="#">Call on 09702080365</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

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
    </main>
    </Layout>
  )
}

export default RequestAppointmentPage
export const query = graphql`
  query contactPageQuery {
    wpPage(databaseId: { eq: 184 }) {
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