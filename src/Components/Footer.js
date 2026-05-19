// src/components/Footer.js

import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          {/* Left */}
          <div className="footer-brand">
            <h3 className="footer-title">Dr. Vishal Pingle</h3>
            <p className="footer-text">
              Dr. Vishal N. Pingle is the Director of Revive Heart Institute. He has worked extensively in India and abroad. He believes in offering medical services that are fair and of international standards.
            </p>

            <div className="footer-social">
              <a className="social-btn" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>

              <a className="social-btn" href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3.5 9h3V21h-3V9Zm7.5 0h2.9v1.65h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.61 2 3.61 4.6V21h-3v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21h-3V9Z" />
                </svg>
              </a>

              <a className="social-btn" href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M21.6 7.2a3 3 0 0 0-2.12-2.12C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.48.48A3 3 0 0 0 2.4 7.2 31.4 31.4 0 0 0 2 12a31.4 31.4 0 0 0 .4 4.8 3 3 0 0 0 2.12 2.12c1.68.48 7.48.48 7.48.48s5.8 0 7.48-.48a3 3 0 0 0 2.12-2.12A31.4 31.4 0 0 0 22 12a31.4 31.4 0 0 0-.4-4.8ZM10.2 15.2V8.8L15.8 12l-5.6 3.2Z" />
                </svg>
              </a>

              <a className="social-btn" href="#" aria-label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M18.9 2H22l-6.8 7.78L23 22h-6.3l-5-6.46L6 22H2.9l7.3-8.36L1 2h6.5l4.5 5.9L18.9 2Zm-1.1 18h1.7L6.1 3.9H4.3L17.8 20Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: links + reach out */}
          <div className="footer-links">
            <div className="footer-col">
              <h4 className="footer-heading">Home</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/clinical-focus">Clinical Focus</Link>
                </li>
                <li>
                  <Link to="/patient-stories">Patient Stories</Link>
                </li>
                
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/insights">Blog</Link>
                </li>
                <li>
                  <Link to="/insights">FAQ</Link>
                </li>
                {/* <li>
                  <Link to="#">Testimonial</Link>
                </li> */}
              </ul>
            </div>

            <div className="footer-col footer-col--reach">
              <h4 className="footer-heading">Reach Out</h4>

              <ul className="footer-list footer-list--icon">
                <li>
                  <span className="icon">
                    {/* pin */}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                  </span>
                  <Link to="#">See All Locations</Link>
                </li>

                <li>
                  <span className="icon">
                    {/* mail */}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                    </svg>
                  </span>
                  <a href="mailto:dr.heartandlung@gmail.com">dr.heartandlung@gmail.com</a>
                </li>

                <li>
                  <span className="icon">
                    {/* phone */}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.03-.24 11.6 11.6 0 0 0 3.64.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.66a1 1 0 0 1 1 1c0 1.26.2 2.49.58 3.64a1 1 0 0 1-.24 1.03L6.6 10.8Z" />
                    </svg>
                  </span>
                  <a href="tel:+919702080365">+91 9702080365</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        © Dr. Vishal N. Pingle. All Right Reserved
      </div>
  
   </footer>
)};

export default Footer;