// src/pages/request-appointment.js
import React, { useState } from "react"
import InsideBanner from "../Components/Inside-Page-Top-Sec.js"
import { Link, graphql } from "gatsby"
import Layout from "../Components/Layout.js"

const RequestAppointmentPage = ({ data }) => {
  const page = data?.wpPage
  const insidePage = page?.insidePage

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: "pending", message: "Sending message..." })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message")
      }

      setStatus({ type: "success", message: result.message || "Message sent successfully." })
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" })
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." })
    }
  }

  return (
    <Layout>

      <main>

        <InsideBanner
          title={insidePage?.pageTitle} />
        {/* Intro Section */}
        <section className="Dr-vishal-pingale">
          <div className="container">
            <div className="title-wrapper">
              <h2>
                Request Appointment
                <span>
                  Speak directly with a surgeon who will be responsible for your
                  care
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-wrap">
                <div className="form-group">
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-wrap">
                <div className="form-group">
                  <input
                    type="tel"
                    id="telephone"
                    name="phone"
                    placeholder="Telephone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>



              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message *"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <div className="btn-wrapper">
                <button type="submit" className="">
                  Book An Appointment<svg
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4085 0.423826C17.2617 0.202669 17.0349 0.0530566 16.7728 0.011713C16.511 -0.029852 16.2354 0.0402476 16.0117 0.20278C15.7881 0.365311 15.6363 0.605866 15.595 0.867712C15.5534 1.12978 15.6257 1.39168 15.7907 1.59961C15.7907 1.59961 15.7907 1.59961 15.7907 1.59961C15.9183 1.76106 16.0404 1.91375 16.1691 2.074C18.4041 4.92106 21.114 7.59697 24.2058 9.49976C24.3768 9.60983 24.5442 9.71577 24.7169 9.8241C24.8248 9.89156 24.9579 9.91319 25.085 9.88678C25.2122 9.86023 25.3232 9.78781 25.3951 9.68289C25.467 9.57797 25.4946 9.4484 25.4735 9.32014C25.4523 9.19203 25.3842 9.07571 25.2824 8.99934C25.1221 8.87938 24.9676 8.76201 24.8099 8.64093C21.949 6.51936 19.6949 3.87577 17.7379 0.915836C17.6258 0.749974 17.52 0.591276 17.4085 0.423826Z"
                      fill="white"
                    />
                    <path
                      d="M1 8.82617C0.734784 8.82057 0.48043 8.92102 0.292893 9.10865C0.105357 9.29609 0 9.55535 0 9.82617C0 10.097 0.105357 10.3563 0.292893 10.5437C0.48043 10.7313 0.734784 10.8318 1 10.8262C1.4 10.8178 1.8 10.8095 2.2 10.8012C9.4 10.6512 16.6 10.5012 23.8 10.3512C24.2 10.3428 24.6 10.3345 25 10.3262C25.1299 10.3234 25.2544 10.2683 25.3463 10.1746C25.4381 10.0808 25.4897 9.95604 25.4897 9.82617C25.4897 9.69631 25.4381 9.57153 25.3463 9.47772C25.2544 9.384 25.1299 9.32892 25 9.32617C24.6 9.31784 24.2 9.30951 23.8 9.30117C16.6 9.15117 9.4 9.00117 2.2 8.85117C1.8 8.84284 1.4 8.83451 1 8.82617Z"
                      fill="white"
                    />
                    <path
                      d="M17.4105 19.2266C17.2637 19.4477 17.0369 19.5973 16.7748 19.6387C16.513 19.6802 16.2373 19.6101 16.0137 19.4476C15.79 19.2851 15.6382 19.0445 15.5969 18.7827C15.5553 18.5206 15.6276 18.2587 15.7926 18.0508C15.9202 17.8894 16.0423 17.7367 16.1709 17.5765C18.4054 14.7301 21.1147 12.0545 24.2059 10.1523C24.3769 10.0423 24.5442 9.93634 24.7168 9.82804C24.8248 9.76057 24.9578 9.73895 25.085 9.76535C25.2122 9.79191 25.3231 9.86433 25.3951 9.96925C25.467 10.0742 25.4946 10.2037 25.4735 10.332C25.4523 10.4601 25.3842 10.5764 25.2823 10.6528C25.2823 10.6528 25.2823 10.6528 25.2823 10.6528C25.1222 10.7727 24.9677 10.8901 24.81 11.0111C21.9496 13.1322 19.6963 15.7752 17.7398 18.7346C17.6277 18.9005 17.5219 19.0591 17.4105 19.2266Z"
                      fill="white"
                    />
                  </svg>
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
                  <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/map-img.jpg" alt="" />
                </div>
              </div>

              <div className="right">
                <ul>
                  <li>
                   
                      <div className="img-wrapper">
                        <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/wockhardt-hospitl-contact.webp" alt="" />
                      </div>
                   
                      <h3>Wockhardt Hospital</h3>
                      {/* <p className="info">
                        <span>Visits Only by appointments</span>
                        <a href="#">Call on 09702080365</a>
                      </p> */}
                   
                  </li>

                  <li>
                   
                      <div className="img-wrapper">
                        <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/saifee-hospital-contact.webp" alt="" />
                      </div>
                  
                      <h3>Saifee Hospital</h3>
                      {/* <p className="info">Saturday : 7 pm to 9 pm</p> */}
                   
                  </li>

                  <li>
                  
                      <div className="img-wrapper">
                        <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/breach-condy-hospital-contact.webp" alt="" />
                      </div>
                  
                      <h3>Breach Candy Hospital Trust</h3>
                      {/* <p className="info">
                        <span>Clinic visits Only by appointments</span>
                        <a href="#">Call on 09702080365</a>
                      </p> */}
                   
                  </li>

                  <li>
                   
                      <div className="img-wrapper">
                        <img src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/global-hospitalp-contact.webp" alt="" />
                      </div>
                    
                      <h3>Global Hospitals</h3>
                      {/* <p className="info">
                        <span>Clinic visits Only by appointments </span>
                        <a href="#">Call on 09702080365</a>
                      </p> */}
                    
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
            <p>Contact Dr. Vishal Pingle for more details</p>
            <div className="btn-wrapper">
              <Link to="/contact" className="read-all-btn">
                Contact Now <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4085 0.423826C17.2617 0.202669 17.0349 0.0530566 16.7728 0.011713C16.511 -0.029852 16.2354 0.0402476 16.0117 0.20278C15.7881 0.365311 15.6363 0.605866 15.595 0.867712C15.5534 1.12978 15.6257 1.39168 15.7907 1.59961C15.7907 1.59961 15.7907 1.59961 15.7907 1.59961C15.9183 1.76106 16.0404 1.91375 16.1691 2.074C18.4041 4.92106 21.114 7.59697 24.2058 9.49976C24.3768 9.60983 24.5442 9.71577 24.7169 9.8241C24.8248 9.89156 24.9579 9.91319 25.085 9.88678C25.2122 9.86023 25.3232 9.78781 25.3951 9.68289C25.467 9.57797 25.4946 9.4484 25.4735 9.32014C25.4523 9.19203 25.3842 9.07571 25.2824 8.99934C25.1221 8.87938 24.9676 8.76201 24.8099 8.64093C21.949 6.51936 19.6949 3.87577 17.7379 0.915836C17.6258 0.749974 17.52 0.591276 17.4085 0.423826Z"
                    fill="white"
                  />
                  <path
                    d="M1 8.82617C0.734784 8.82057 0.48043 8.92102 0.292893 9.10865C0.105357 9.29609 0 9.55535 0 9.82617C0 10.097 0.105357 10.3563 0.292893 10.5437C0.48043 10.7313 0.734784 10.8318 1 10.8262C1.4 10.8178 1.8 10.8095 2.2 10.8012C9.4 10.6512 16.6 10.5012 23.8 10.3512C24.2 10.3428 24.6 10.3345 25 10.3262C25.1299 10.3234 25.2544 10.2683 25.3463 10.1746C25.4381 10.0808 25.4897 9.95604 25.4897 9.82617C25.4897 9.69631 25.4381 9.57153 25.3463 9.47772C25.2544 9.384 25.1299 9.32892 25 9.32617C24.6 9.31784 24.2 9.30951 23.8 9.30117C16.6 9.15117 9.4 9.00117 2.2 8.85117C1.8 8.84284 1.4 8.83451 1 8.82617Z"
                    fill="white"
                  />
                  <path
                    d="M17.4105 19.2266C17.2637 19.4477 17.0369 19.5973 16.7748 19.6387C16.513 19.6802 16.2373 19.6101 16.0137 19.4476C15.79 19.2851 15.6382 19.0445 15.5969 18.7827C15.5553 18.5206 15.6276 18.2587 15.7926 18.0508C15.9202 17.8894 16.0423 17.7367 16.1709 17.5765C18.4054 14.7301 21.1147 12.0545 24.2059 10.1523C24.3769 10.0423 24.5442 9.93634 24.7168 9.82804C24.8248 9.76057 24.9578 9.73895 25.085 9.76535C25.2122 9.79191 25.3231 9.86433 25.3951 9.96925C25.467 10.0742 25.4946 10.2037 25.4735 10.332C25.4523 10.4601 25.3842 10.5764 25.2823 10.6528C25.2823 10.6528 25.2823 10.6528 25.2823 10.6528C25.1222 10.7727 24.9677 10.8901 24.81 11.0111C21.9496 13.1322 19.6963 15.7752 17.7398 18.7346C17.6277 18.9005 17.5219 19.0591 17.4105 19.2266Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
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