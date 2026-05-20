import React, { useCallback, useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const ArrowIcon = () => (
  <svg
    width="26"
    height="20"
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.4085 0.423826C17.2617 0.202669 17.0349 0.0530566 16.7728 0.011713C16.511 -0.029852 16.2354 0.0402476 16.0117 0.20278C15.7881 0.365311 15.6363 0.605866 15.595 0.867712C15.5534 1.12978 15.6257 1.39168 15.7907 1.59961C15.9183 1.76106 16.0404 1.91375 16.1691 2.074C18.4041 4.92106 21.114 7.59697 24.2058 9.49976C24.3768 9.60983 24.5442 9.71577 24.7169 9.8241C24.8248 9.89156 24.9579 9.91319 25.085 9.88678C25.2122 9.86023 25.3232 9.78781 25.3951 9.68289C25.467 9.57797 25.4946 9.4484 25.4735 9.32014C25.4523 9.19203 25.3842 9.07571 25.2824 8.99934C25.1221 8.87938 24.9676 8.76201 24.8099 8.64093C21.949 6.51936 19.6949 3.87577 17.7379 0.915836C17.6258 0.749974 17.52 0.591276 17.4085 0.423826Z"
      fill="white"
    />
    <path
      d="M1 8.82617C0.734784 8.82057 0.48043 8.92102 0.292893 9.10865C0.105357 9.29609 0 9.55535 0 9.82617C0 10.097 0.105357 10.3563 0.292893 10.5437C0.48043 10.7313 0.734784 10.8318 1 10.8262C1.4 10.8178 1.8 10.8095 2.2 10.8012C9.4 10.6512 16.6 10.5012 23.8 10.3512C24.2 10.3428 24.6 10.3345 25 10.3262C25.1299 10.3234 25.2544 10.2683 25.3463 10.1746C25.4381 10.0808 25.4897 9.95604 25.4897 9.82617C25.4897 9.69631 25.4381 9.57153 25.3463 9.47772C25.2544 9.384 25.1299 9.32892 25 9.32617C24.6 9.31784 24.2 9.30951 23.8 9.30117C16.6 9.15117 9.4 9.00117 2.2 8.85117C1.8 8.84284 1.4 8.83451 1 8.82617Z"
      fill="white"
    />
    <path
      d="M17.4105 19.2266C17.2637 19.4477 17.0369 19.5973 16.7748 19.6387C16.513 19.6802 16.2373 19.6101 16.0137 19.4476C15.79 19.2851 15.6382 19.0445 15.5969 18.7827C15.5553 18.5206 15.6276 18.2587 15.7926 18.0508C15.9202 17.8894 16.0423 17.7367 16.1709 17.5765C18.4054 14.7301 21.1147 12.0545 24.2059 10.1523C24.3769 10.0423 24.5442 9.93634 24.7168 9.82804C24.8248 9.76057 24.9578 9.73895 25.085 9.76535C25.2122 9.79191 25.3231 9.86433 25.3951 9.96925C25.467 10.0742 25.4946 10.2037 25.4735 10.332C25.4523 10.4601 25.3842 10.5764 25.2823 10.6528C25.1222 10.7727 24.9677 10.8901 24.81 11.0111C21.9496 13.1322 19.6963 15.7752 17.7398 18.7346C17.6277 18.9005 17.5219 19.0591 17.4105 19.2266Z"
      fill="white"
    />
  </svg>
);

const FAQ = ({ limit }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const staticData = useStaticQuery(graphql`
    query FaqQuery {
      allWpPatientStory {
        edges {
          node {
            patientStories {
              faq {
                questions
                answers
              }
            }
          }
        }
      }
    }
  `);

  const allFaqData =
    staticData?.allWpPatientStory?.edges?.[0]?.node?.patientStories?.faq || [];

  const faqData = limit ? allFaqData.slice(0, limit) : allFaqData;

const scrollToFaqSection = useCallback(() => {
  if (typeof window === "undefined") return;

  const faqSection = document.getElementById("inside-faq");
  if (!faqSection) return;

  const header =
    document.querySelector("header") ||
    document.querySelector(".site-header") ||
    document.querySelector(".main-header") ||
    document.querySelector(".Header");

  const headerHeight = header ? header.offsetHeight : 100;

  const targetPosition =
    faqSection.getBoundingClientRect().top +
    window.scrollY -
    headerHeight -
    30;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash === "#inside-faq") {
      const timer = setTimeout(() => {
        scrollToFaqSection();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [scrollToFaqSection]);

  const handleFaqLinkClick = (e) => {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname.replace(/\/$/, "");

    if (currentPath === "/insight") {
      e.preventDefault();

      window.history.pushState(null, "", "/insight/#inside-faq");

      setTimeout(() => {
        scrollToFaqSection();
      }, 100);
    }
  };

  if (!faqData || faqData.length === 0) {
    return <div>No FAQ data available.</div>;
  }

  return (
    <section id="inside-faq" className="faq-section">
      <div className="container">
        <div className="div-title">
          <h2>
            FAQ
            <span>Answers to Your Questions About Heart & Lung Care</span>
          </h2>

          <p className="faq-para">
            Understanding your condition, treatment options, and recovery can
            make a huge difference in confidence and outcomes. Here are answers
            to the most common questions patients and families ask about cardiac
            and thoracic care.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-left">
            <h3 className="faq-title">Don't see the answer you need?</h3>

            <p className="faq-description">
              Contact Dr. Vishal Pingle for more details
            </p>

            <div className="btn-wrapper">
              <Link
                to="/insight/#inside-faq"
                className=""
                onClick={handleFaqLinkClick}
              >
                View All FAQs <ArrowIcon />
              </Link>

              <a href="#contact" className="">
                Contact Now <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="faq-right">
            <div className="faq-items">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="faq-question-text">
                      {faq.questions}
                    </span>

                    <div className="faq-icon">
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0085 7.36395C12.821 7.55142 12.5666 7.65674 12.3015 7.65674C12.0363 7.65674 11.782 7.55142 11.5945 7.36395L6.64448 2.41395L1.69448 7.36395C1.50588 7.54611 1.25328 7.6469 0.991081 7.64463C0.728885 7.64235 0.478071 7.53718 0.292664 7.35177C0.107256 7.16636 0.00208759 6.91555 -0.000190735 6.65335C-0.00246906 6.39116 0.0983248 6.13855 0.280483 5.94995L5.93748 0.292952C6.12501 0.105481 6.37932 0.000164986 6.64448 0.000164986C6.90965 0.000164986 7.16396 0.105481 7.35148 0.292952L13.0085 5.94995C13.196 6.13748 13.3013 6.39179 13.3013 6.65695C13.3013 6.92212 13.196 7.17642 13.0085 7.36395Z"
                          fill="#C1272D"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: activeIndex === index ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p className="faq-answer-text">{faq.answers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;