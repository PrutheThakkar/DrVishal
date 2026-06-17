import React from "react"

const InsideBanner = ({ title, showAboutList = false }) => {
  return (
    <section
      className="inside-banner"
      data-aos="wave-reveal"
      data-aos-duration="1600"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <div className="container">
        <div className="title-wrap">
          <div className="wrap">
            {title && (
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
               
               
               
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsideBanner