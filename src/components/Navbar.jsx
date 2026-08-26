import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

/*
  Nav links configuration:
  - "hash"  -> scrolls to a section on the home page
  - "route" -> React Router navigation to a standalone page
*/
const navLinks = [
  { label: "Home",          href: "#home",          type: "hash"  },
  { label: "About",         href: "#about",         type: "hash"  },
  { label: "Services",      href: "#services",      type: "hash"  },
  // { label: "Products",      href: "/products",      type: "route" },
  { label: "Why Choose Us", href: "#why-choose-us", type: "hash"  },
  { label: "Technologies",  href: "#technologies",  type: "hash"  },
  { label: "Portfolio",     href: "#portfolio",     type: "hash"  },
  { label: "Contact",       href: "#contact",       type: "hash"  },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");
  const [mounted,        setMounted]        = useState(false);

  const navigate  = useNavigate();
  const location  = useLocation();

  /* ── Scroll + active-section tracker ─────────────────────── */
  useEffect(() => {
    setMounted(true);

    if (location.pathname !== "/") {
      setScrolled(true); // Keep glass navbar active on subpages
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Top of page default to home section
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const hashSections = navLinks
        .filter((l) => l.type === "hash" && l.href !== "#home")
        .map((l) => l.href.replace("#", ""));

      for (let i = hashSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(hashSections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(hashSections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  /* ── Resume section scroll after arriving at "/" ─────────── */
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetHash = location.state.scrollTo;
      
      // Clear location state so refresh doesn't trigger scroll again
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        if (targetHash === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [location]);

  /* ── Body scroll lock when mobile drawer is open ─────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Unified Nav Click Handler ────────────────────────────── */
  const handleNavClick = (link) => {
    setMenuOpen(false);

    if (link.type === "route") {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Link type is "hash"
    if (location.pathname !== "/") {
      // If on a subpage, navigate to home first and pass target in state
      navigate("/", { state: { scrollTo: link.href } });
    } else {
      // Already on home page
      if (link.href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      } else {
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  /* ── Active link check helper ────────────────────────────── */
  const isLinkActive = (link) => {
    if (link.type === "route") {
      return location.pathname === link.href || location.pathname.startsWith(`${link.href}/`);
    }
    return location.pathname === "/" && activeSection === link.href.replace("#", "");
  };

  return (
    <>
      {/* ════════════════════════════════════════════════
          NAV BAR
      ════════════════════════════════════════════════ */}
      <nav
        className={`navbar${scrolled ? " navbar--scrolled" : ""}${mounted ? " navbar--mounted" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner">

          {/* ── Logo ──────────────────────────────────── */}
          <a
            className="navbar__logo"
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick({ href: "#home", type: "hash" }); }}
            aria-label="Nest of Codes – go to top"
          >
            <div className="navbar__logo-mark">
              <img
                src={logo}
                alt="Nest of Codes Logo"
                className="navbar__logo-img"
                width="36"
                height="36"
              />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Nest of Codes</span>
              <span className="navbar__logo-tagline">Technologies &amp; Solutions</span>
            </div>
          </a>

          {/* ── Desktop links ──────────────────────────── */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span className="navbar__link-indicator" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop actions ────────────────────────── */}
          <div className="navbar__actions">
            <a
              href="#contact"
              className="navbar__cta"
              onClick={(e) => { e.preventDefault(); handleNavClick({ href: "#contact", type: "hash" }); }}
            >
              <span className="navbar__cta-text">Book Free Consultation</span>
              <svg
                className="navbar__cta-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* ── Hamburger ─────────────────────────────── */}
            <button
              className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span className="navbar__hamburger-bar" />
              <span className="navbar__hamburger-bar" />
              <span className="navbar__hamburger-bar" />
            </button>
          </div>

        </div>
      </nav>

      {/* ════════════════════════════════════════════════
          MOBILE OVERLAY
      ════════════════════════════════════════════════ */}
      <div
        className={`mobile-overlay${menuOpen ? " mobile-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ════════════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════════════ */}
      <aside
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="mobile-nav__header">
          <div className="mobile-nav__logo">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect width="36" height="36" rx="10" fill="url(#mobileLogoGrad)" />
              <path
                d="M9 25L16 11L22 20L27 15"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="27" cy="15" r="2.5" fill="#06D6A0" />
              <defs>
                <linearGradient id="mobileLogoGrad" x1="0" y1="0" x2="36" y2="36">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#06D6A0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="mobile-nav__logo-name">Nest of Codes</span>
          </div>

          <div className="mobile-nav__header-actions">
            <button
              className="mobile-nav__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <ul className="mobile-nav__links" role="list">
          {navLinks.map((link, i) => {
            const isActive = isLinkActive(link);
            return (
              <li key={link.label} style={{ "--i": i }}>
                <a
                  href={link.href}
                  className={`mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 8H12M12 8L8 4M12 8L8 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer CTA */}
        <div className="mobile-nav__footer">
          <a
            href="#contact"
            className="mobile-nav__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick({ href: "#contact", type: "hash" }); }}
          >
            Book Free Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}