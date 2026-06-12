import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Preloader
  React.useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById("preloader")
      if (preloader) {
        preloader.classList.add("hide")
        setTimeout(() => {
          preloader.style.display = "none"
        }, 1200)
      }
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  // Smooth shrink header on scroll
  React.useEffect(() => {
    let ticking = false

    const updateHeader = () => {
      const shouldScroll = window.scrollY > 30

      setIsScrolled(prev => {
        if (prev === shouldScroll) return prev
        return shouldScroll
      })

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader)
        ticking = true
      }
    }

    updateHeader()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-menu-open")
    } else {
      document.body.classList.remove("mobile-menu-open")
    }

    return () => {
      document.body.classList.remove("mobile-menu-open")
    }
  }, [menuOpen])

  // Close menu on ESC key
  React.useEffect(() => {
    const handleEsc = event => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* ═══════════════════════════════════════════
           PRELOADER
      ═══════════════════════════════════════════ */}
      {/* <div id="preloader">
        <p className="pre-tagline">Welcome to</p>
        <h1 className="pre-title">Revive Heart Institute</h1>
        <div className="pre-bar-wrap">
          <div className="pre-bar" id="preBar"></div>
        </div>
      </div> */}

      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
        id="siteHeader"
      >
        <div className="site-header__inner">
          {/* Logo */}
          <Link className="brand" to="/" aria-label="Revive Heart Institute home">
            <img
              src="https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/02/DVP_Logo_R-1-1.svg"
              width="83"
              height="50"
              alt="Revive Heart Institute"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav" aria-label="Primary">
            <Link className="nav__link" to="/about/">
              About
            </Link>
            <Link className="nav__link" to="/clinical-focus/">
              Clinical Focus
            </Link>
            <Link className="nav__link" to="/insight/">
              Insight
            </Link>
            <Link className="nav__link" to="/patient-stories/">
              Patient Stories
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="reachout-btn btn-wrapper">
            <Link className="btn btn--cta" to="/contact/">
              Reach Out
              <svg
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

          {/* Mobile Burger */}
          <button
            className={`mobile-menu-toggle ${menuOpen ? "is-active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Circular Menu */}
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <nav className="mobile-menu__nav" aria-label="Mobile Primary">
            <Link className="mobile-menu__link" to="/about/" onClick={closeMenu}>
              About
            </Link>

            <Link
              className="mobile-menu__link"
              to="/clinical-focus/"
              onClick={closeMenu}
            >
              Clinical Focus
            </Link>

            <Link className="mobile-menu__link" to="/insight/" onClick={closeMenu}>
              Insight
            </Link>

            <Link
              className="mobile-menu__link"
              to="/patient-stories/"
              onClick={closeMenu}
            >
              Patient Stories
            </Link>

            <Link className="mobile-menu__cta" to="/contact/" onClick={closeMenu}>
              Reach Out
            </Link>
          </nav>
        </div>
      </header>

      <style>{`
        /* ===============================
           SMOOTH SHRINK HEADER ON SCROLL
        =============================== */

        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1301;
          padding: 38px 0;
          transform: translateZ(0);
          will-change: padding;
          transition: padding 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header.is-scrolled {
          padding: 18px 0;
        }

        .site-header__inner {
          width: calc(100% - 120px);
          max-width: 1720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 180px 1fr 180px;
          align-items: center;
          padding: 10px 0;
          border-radius: 0;
          background: rgba(253, 250, 243, 0);
          border: 1px solid rgba(193, 39, 45, 0);
          box-shadow: 0 0 0 rgba(75, 29, 29, 0);
          backdrop-filter: blur(0);
          -webkit-backdrop-filter: blur(0);
          transform: translateZ(0) scale(1);
          will-change: max-width, padding, border-radius, background, box-shadow, transform;
          transition:
            max-width 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            padding 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            border-radius 1000ms cubic-bezier(0.22, 1, 0.36, 1),
            background 800ms ease,
            border-color 800ms ease,
            box-shadow 800ms ease,
            backdrop-filter 800ms ease,
            -webkit-backdrop-filter 800ms ease,
            transform 1000ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header.is-scrolled .site-header__inner {
          max-width: 1040px;
          padding: 12px 24px;
          border-radius: 18px;
          background: rgba(253, 250, 243, 0.86);
          border-color: rgba(193, 39, 45, 0.12);
          box-shadow: 0 18px 50px rgba(75, 29, 29, 0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transform: translateZ(0) scale(0.985);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          justify-self: start;
        }

        .brand img {
          display: block;
          width: 83px;
          height: auto;
          transform: translateZ(0) scale(1);
          will-change: width, transform;
          transition:
            width 850ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header.is-scrolled .brand img {
          width: 72px;
          transform: translateZ(0) scale(0.96);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 42px;
        }

        .nav__link {
          color: #c1272d;
          text-decoration: none;
          font-weight: 500;
          opacity: 1;
          transform: translateY(0);
          transition:
            color 650ms ease,
            opacity 650ms ease,
            transform 650ms ease;
        }

        .site-header.is-scrolled .nav__link {
          color: rgba(87, 42, 42, 0.62);
        }

        .nav__link:hover {
          color: #c1272d;
          transform: translateY(-1px);
        }

        .reachout-btn {
          display: flex;
          justify-content: flex-end;
          justify-self: end;
        }

        .btn--cta {
          min-width: 146px;
          min-height: 44px;
          border: 1px solid rgba(193, 39, 45, 0.34);
          border-radius: 12px;
          background: transparent;
          color: #c1272d;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-weight: 700;
          transform: translateZ(0);
          transition:
            background 650ms ease,
            color 650ms ease,
            border-color 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .btn--cta svg {
          width: 20px;
          height: auto;
        }

        .btn--cta svg path {
          fill: #c1272d;
          transition: fill 650ms ease;
        }

        .site-header.is-scrolled .btn--cta,
        .btn--cta:hover {
          background: #c1272d;
          color: #fff;
          border-color: #c1272d;
        }

        .site-header.is-scrolled .btn--cta svg path,
        .btn--cta:hover svg path {
          fill: #fff;
        }

        .btn--cta:hover {
          transform: translateY(-2px);
        }

        /* ===============================
           MOBILE MENU CSS ONLY
        =============================== */

        body.mobile-menu-open {
          overflow: hidden;
        }

        .mobile-menu-toggle {
          display: none;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 1px solid rgba(193, 39, 45, 0.25);
          background: #c1272d;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 7px;
          cursor: pointer;
          position: relative;
          z-index: 1305;
          padding: 0;
          transition:
            transform 300ms ease,
            background 300ms ease,
            border-color 300ms ease;
        }

        .mobile-menu-toggle span {
          width: 28px;
          height: 3px;
          background: #fff;
          border-radius: 20px;
          display: block;
          transition:
            transform 300ms ease,
            opacity 300ms ease;
          transform-origin: center;
        }

        .mobile-menu-toggle.is-active {
          background: #c1272d;
          border-color: #c1272d;
        }

        .mobile-menu-toggle.is-active span:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        .mobile-menu-toggle.is-active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.is-active span:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 1200;
          background: #ffffff;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 170px 24px 60px;
          clip-path: circle(34px at calc(100% - 56px) 58px);
          pointer-events: none;
          opacity: 0;
          transition:
            clip-path 850ms cubic-bezier(0.77, 0, 0.175, 1),
            opacity 350ms ease;
            height:100vh;
        }

        .mobile-menu.is-open {
          clip-path: circle(150vmax at calc(100% - 56px) 58px);
          pointer-events: auto;
          opacity: 1;
        }

        .mobile-menu__nav {
          width: 100%;
          max-width: 520px;
          min-height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          gap: 28px;
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 500ms ease 300ms,
            transform 500ms ease 300ms;
        }

        .mobile-menu.is-open .mobile-menu__nav {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-menu__link {
          color: #c1272d;
          text-decoration: none;
          font-size: clamp(2rem, 7vw, 3.8rem);
          line-height: 1.05;
          font-weight: 500;
          letter-spacing: -0.04em;
          display: block;
          transition:
            opacity 250ms ease,
            transform 250ms ease;
        }

        .mobile-menu__link:hover {
          opacity: 0.7;
          transform: translateY(-2px);
        }

        .mobile-menu__cta {
          margin-top: 18px;
          color: #fff;
          background: #c1272d;
          border: 1px solid #c1272d;
          text-decoration: none;
          padding: 18px 42px;
          border-radius: 16px;
          font-size: 1.25rem;
          line-height: 1;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition:
            background 250ms ease,
            transform 250ms ease;
        }

        .mobile-menu__cta:hover {
          background: #991b1b;
          transform: translateY(-2px);
        }

        /* ===============================
           TABLET + IPAD MINI + MOBILE
        =============================== */

        @media (max-width: 1024px) {
          .site-header {
            z-index: 1301;
            padding: 16px 0;
          }

          .site-header.is-scrolled {
            padding: 12px 0;
          }

          .site-header__inner,
          .site-header.is-scrolled .site-header__inner {
            width: calc(100% - 32px);
            max-width: 100%;
            grid-template-columns: 1fr auto;
            padding: 14px 18px 14px 22px;
            border-radius: 22px;
            background: #ffffff;
            border-color: rgba(193, 39, 45, 0.14);
            box-shadow: 0 16px 40px rgba(75, 29, 29, 0.08);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            transform: none;
            position: relative;
            z-index: 1304;
          }

          .nav,
          .reachout-btn {
            display: none;
          }

          .mobile-menu-toggle {
            display: inline-flex;
          }

          .brand img,
          .site-header.is-scrolled .brand img {
            width: 95px;
            height: auto;
            transform: none;
          }

          .mobile-menu {
            display: flex;
          }
        }

        @media (max-width: 767px) {
          .site-header {
            padding: 14px 0;
          }

          .site-header.is-scrolled {
            padding: 10px 0;
          }

          .site-header__inner,
          .site-header.is-scrolled .site-header__inner {
            width: calc(100% - 28px);
            padding: 10px 12px 10px 16px;
            border-radius: 18px;
          }

          .mobile-menu {
            padding: 145px 24px 50px;
            clip-path: circle(31px at calc(100% - 48px) 45px);
          }

          .mobile-menu.is-open {
            clip-path: circle(150vmax at calc(100% - 48px) 45px);
          }

          .mobile-menu__nav {
            gap: 24px;
          }

          .mobile-menu__link {
            font-size: clamp(2rem, 9vw, 3.4rem);
          }

          .mobile-menu__cta {
            padding: 16px 36px;
            font-size: 1.15rem;
          }

          .mobile-menu-toggle {
            width: 56px;
            height: 56px;
          }

          .mobile-menu-toggle span {
            width: 25px;
          }

          .brand img,
          .site-header.is-scrolled .brand img {
            width: 88px;
          }
        }

        @media (min-width: 1025px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header,
          .site-header__inner,
          .brand img,
          .nav__link,
          .btn--cta,
          .btn--cta svg path,
          .mobile-menu,
          .mobile-menu__nav,
          .mobile-menu-toggle,
          .mobile-menu-toggle span,
          .mobile-menu__link,
          .mobile-menu__cta {
            transition: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header