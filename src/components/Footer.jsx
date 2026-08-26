import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Heart,
  ChevronRight,
  Monitor,
  Smartphone,
  Code2,
  BrainCircuit,
  Cloud,
  Megaphone,
  Stethoscope,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingBag,
  House,
  CheckCircle2,
} from "lucide-react";

import "./Footer.css";

/* ── Custom Social SVG Icons ─────────────────────────────── */
const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSubscribed(false);
      return;
    }

    setError("");
    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="noc-footer">
      {/* Background decorative patterns */}
      <div className="footer-glow footer-glow-left" />
      <div className="footer-glow footer-glow-right" />

      <div className="footer-pattern footer-pattern-left">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="footer-pattern footer-pattern-right">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="footer-container">

        {/* =========================================
            NEWSLETTER
        ========================================== */}

        <section className="newsletter-box">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <Mail size={42} />
            </div>

            <div className="newsletter-text">
              <h2>
                Stay Updated with Our{" "}
                <span>Latest News</span>
              </h2>

              <p>
                Subscribe to our newsletter and get the latest updates,
                <br />
                insights, and offers delivered to your inbox.
              </p>
            </div>
          </div>

          <div className="newsletter-form-area">
            <form onSubmit={handleSubscribe}>
              <div className="newsletter-form-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />

                <button type="submit">
                  Subscribe Now
                  <Send size={20} />
                </button>
              </div>

              {error && (
                <div className="newsletter-error">
                  {error}
                </div>
              )}

              {subscribed && (
                <div className="newsletter-success">
                  <CheckCircle2 size={17} />
                  Successfully subscribed!
                </div>
              )}

              <div className="newsletter-privacy">
                <ShieldCheck size={20} />
                <span>
                  We respect your privacy. Unsubscribe anytime.
                </span>
              </div>
            </form>
          </div>
        </section>

        {/* =========================================
            MAIN FOOTER
        ========================================== */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">
            <div className="footer-brand-header">
              <div className="footer-logo-mark">
                <div className="logo-layer logo-layer-1" />
                <div className="logo-layer logo-layer-2" />
                <div className="logo-layer logo-layer-3" />
              </div>

              <div>
                <h2>Nest of Codes</h2>
                <span>Technologies & Solutions</span>
              </div>
            </div>

            <p className="footer-brand-description">
              We build secure, scalable, and future-ready digital
              solutions that drive business growth and create
              impactful experiences.
            </p>

            <div className="footer-contact-list">

              <a href="mailto:info@nestofcodes.com">
                <Mail size={22} />
                <span>info@nestofcodes.com</span>
              </a>

              <a href="tel:+919344689428">
                <Phone size={22} />
                <span>+91 93446 89428</span>
              </a>

              <a href="tel:+916379492947">
                <Phone size={22} />
                <span>+91 63794 92947</span>
              </a>

              <div className="footer-location">
                <MapPin size={23} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>

            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <button onClick={() => scrollToSection("home")}>
                  <ChevronRight size={18} />
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("about")}>
                  <ChevronRight size={18} />
                  About Us
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  <ChevronRight size={18} />
                  Services
                </button>
              </li>

              {/* <li>
                <button onClick={() => scrollToSection("products")}>
                  <ChevronRight size={18} />
                  Products
                </button>
              </li> */}

              <li>
                <button onClick={() => scrollToSection("technologies")}>
                  <ChevronRight size={18} />
                  Technologies
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("portfolio")}>
                  <ChevronRight size={18} />
                  Portfolio
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("contact")}>
                  <ChevronRight size={18} />
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* SERVICES */}

          <div className="footer-column">
            <h3>Our Services</h3>

            <ul className="service-links">
              <li>
                <button onClick={() => scrollToSection("services")}>
                  <Monitor size={20} />
                  Web Development
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  <Smartphone size={20} />
                  Mobile App Development
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  <Code2 size={20} />
                  Software Development
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  <BrainCircuit size={20} />
                  AI & Automation
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  <Cloud size={20} />
                  Cloud & DevOps
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  <Megaphone size={20} />
                  Digital Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* INDUSTRIES */}

          <div className="footer-column">
            <h3>Industries</h3>

            <ul className="industry-links">
              <li>
                <a href="#contact">
                  <Stethoscope size={21} />
                  Healthcare
                </a>
              </li>

              <li>
                <a href="#contact">
                  <GraduationCap size={21} />
                  Education
                </a>
              </li>

              <li>
                <a href="#contact">
                  <Landmark size={21} />
                  Fintech
                </a>
              </li>

              <li>
                <a href="#contact">
                  <Factory size={21} />
                  Manufacturing
                </a>
              </li>

              <li>
                <a href="#contact">
                  <ShoppingBag size={21} />
                  Retail & E-commerce
                </a>
              </li>

              <li>
                <a href="#contact">
                  <House size={21} />
                  Real Estate
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}

          <div className="footer-column footer-support">
            <h3>Support</h3>

            <ul>
              <li>
                <a href="#contact">
                  <ChevronRight size={18} />
                  Help Center
                </a>
              </li>

              <li>
                <a href="#contact">
                  <ChevronRight size={18} />
                  FAQ
                </a>
              </li>

              <li>
                <a href="#privacy">
                  <ChevronRight size={18} />
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#terms">
                  <ChevronRight size={18} />
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#refund">
                  <ChevronRight size={18} />
                  Refund Policy
                </a>
              </li>

              <li>
                <a href="#contact">
                  <ChevronRight size={18} />
                  Careers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================== */}

        <div className="footer-bottom">

          <div className="footer-copyright">
            <p>
              © 2026 Nest of Codes Technologies & Solutions.
            </p>

            <span>All rights reserved.</span>
          </div>

          <div className="footer-passion">
            <Heart size={27} />
            <span>Made with passion for a better tomorrow.</span>
          </div>

          <div className="footer-socials">
            <span className="follow-text">Follow Us</span>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon size={22} />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={22} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={22} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;