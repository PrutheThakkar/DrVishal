import React, { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';

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

  const allFaqData = staticData?.allWpPatientStory?.edges[0]?.node?.patientStories?.faq || [];
  const faqData = limit ? allFaqData.slice(0, limit) : allFaqData;

  if (!faqData || faqData.length === 0) {
    return <div>No FAQ data available.</div>;
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="div-title">
          <h2>FAQ<span>Answers to Your Questions About Heart & Lung Care</span></h2>
          <p className="faq-para">Understanding your condition, treatment options, and recovery can make a huge difference in 
confidence and outcomes. Here are answers to the most common questions 
patients and families ask about cardiac and thoracic care. </p>
        </div>
        <div className="faq-container">
          <div className="faq-left">
            <h3 className="faq-title">Don't see the answer you need?</h3>
            <p className="faq-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="contact-btn">Contact Now</button>
          </div>

          <div className="faq-right">
            <div className="faq-items">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "active" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="faq-question-text">{faq.questions}</span>
                    <div className="faq-icon">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.0085 7.36395C12.821 7.55142 12.5666 7.65674 12.3015 7.65674C12.0363 7.65674 11.782 7.55142 11.5945 7.36395L6.64448 2.41395L1.69448 7.36395C1.50588 7.54611 1.25328 7.6469 0.991081 7.64463C0.728885 7.64235 0.478071 7.53718 0.292664 7.35177C0.107256 7.16636 0.00208759 6.91555 -0.000190735 6.65335C-0.00246906 6.39116 0.0983248 6.13855 0.280483 5.94995L5.93748 0.292952C6.12501 0.105481 6.37932 0.000164986 6.64448 0.000164986C6.90965 0.000164986 7.16396 0.105481 7.35148 0.292952L13.0085 5.94995C13.196 6.13748 13.3013 6.39179 13.3013 6.65695C13.3013 6.92212 13.196 7.17642 13.0085 7.36395Z"
                          fill="#C1272D"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* ✅ Replaced conditional render with smooth animation div */}
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