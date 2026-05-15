import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

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

    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
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

      <header className="site-header" id="siteHeader">
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
          <div className="reachout-btn">
            <Link className="btn btn--cta" to="/contact/">
              Reach Out
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

            <Link
              className="mobile-menu__cta"
              to="/contact/"
              onClick={closeMenu}
            >
              Reach Out
            </Link>
          </nav>
        </div>
      </header>

      <style>{`
        /* ===============================
           MOBILE MENU CSS ONLY
        =============================== */

        body.mobile-menu-open {
          overflow: hidden;
        }

        .mobile-menu-toggle {
          display: none;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(193, 39, 45, 0.25);
          background: #FDFAF3;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          position: relative;
          z-index: 1202;
          padding: 0;
          transition: transform 300ms ease, background 300ms ease, border-color 300ms ease;
        }

        .mobile-menu-toggle span {
          width: 24px;
          height: 2px;
          background: #C1272D;
          border-radius: 20px;
          display: block;
          transition: transform 300ms ease, opacity 300ms ease;
          transform-origin: center;
        }

        .mobile-menu-toggle.is-active {
          background: #C1272D;
          border-color: #C1272D;
        }

        .mobile-menu-toggle.is-active span {
          background: #fff;
        }

        .mobile-menu-toggle.is-active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-toggle.is-active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.is-active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 1200;
          background: #FDFAF3;
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: circle(26px at calc(100% - 58px) 46px);
          pointer-events: none;
          transition: clip-path 900ms cubic-bezier(0.77, 0, 0.175, 1);
        }

        .mobile-menu.is-open {
          clip-path: circle(150vmax at calc(100% - 58px) 46px);
          pointer-events: auto;
        }

        .mobile-menu::before {
          content: "";
          position: absolute;
          right: 22px;
          top: 20px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(193, 39, 45, 0.08);
          border: 1px solid rgba(193, 39, 45, 0.15);
        }

        .mobile-menu__nav {
          width: 90%;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 26px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 500ms ease 250ms, transform 500ms ease 250ms;
        }

        .mobile-menu.is-open .mobile-menu__nav {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-menu__link {
          color: #C1272D;
          text-decoration: none;
          font-size: clamp(2rem, 8vw, 4.5rem);
          line-height: 1;
          font-weight: 500;
          letter-spacing: -0.04em;
          transition: opacity 250ms ease, transform 250ms ease;
        }

        .mobile-menu__link:hover {
          opacity: 0.65;
          transform: translateX(6px);
        }

        .mobile-menu__cta {
          margin-top: 18px;
          color: #fff;
          background: #C1272D;
          border: 1px solid #C1272D;
          text-decoration: none;
          padding: 14px 34px;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: background 250ms ease, transform 250ms ease;
        }

        .mobile-menu__cta:hover {
          background: #991b1b;
          transform: translateY(-2px);
        }

        @media (max-width: 740px) {
          .site-header {
            z-index: 1201;
          }

          .site-header__inner {
            max-width: 92%;
            padding: 8px 12px 8px 18px;
            border-radius: 18px;
            position: relative;
            z-index: 1203;
          }

          .nav,
          .reachout-btn {
            display: none;
          }

          .mobile-menu-toggle {
            display: inline-flex;
          }

          .brand img {
            width: 78px;
            height: 44px;
          }
        }

        @media (min-width: 741px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
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