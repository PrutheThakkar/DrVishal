import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../css/common.css"
import "../css/about.css"
import "../css/blog.css"
import "../css/clinical-focus.css"
import "../css/contact.css"
import "../css/faq.css"
import "../css/home.css"
import "../css/inside.css"
import "../css/ui-fixer.css"

import "aos/dist/aos.css"
import AosInit from "./AosInit"

const Layout = ({ children }) => {
  return (
    <>
      <AosInit />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout