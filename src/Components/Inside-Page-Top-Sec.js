import React from "react"

const InsideBanner = ({ title, showAboutList = false }) => {
  return (
    <section className="inside-banner">
      <div className="container">
        <div className="title-wrap">
      <div className="wrap">

        {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}

        {showAboutList && (
          <ul className="about-banner-list">
            <li>
              <span>14+</span>
              <p>Published Work</p>
            </li>
            <li>
              <span>16</span>
              <p>International Conferences</p>
            </li>
            <li>
              <span>Multi-Hospital</span>
              <p>Consultant</p>
            </li>
          </ul>
        )}
      </div>
        </div>
      </div>
    </section>
  )
}

export default InsideBanner