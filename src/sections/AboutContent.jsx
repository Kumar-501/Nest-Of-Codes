import React from "react";
import "../pages/About.css";
import foundersImg from "../assets/aboutnestofcodes.png";

// SVG Icons
const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81l-1.98-1.98s-1.1.08-1.81.79Z" />
    <path d="M15 8s-4 4-7 7l-1.5-1.5c3-3 7-7 7-7Z" />
    <path d="M14.5 3.5C18 3.5 20.5 6 20.5 6s-2 6.5-6.5 11c-1.5 1.5-3 2-3 2s-.5-1.5 1-3c4.5-4.5 11-6.5 11-6.5s-2.5 2.5-2.5 6" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CodeTagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const TargetIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const LightbulbIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.64 2.8 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
    <path d="m11 14 2 2" />
    <path d="M20 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
    <path d="m7 15 5 5" />
    <path d="m7 9 3 3" />
  </svg>
);

const CurvedArrow = () => (
  <svg width="36" height="42" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 C32 20, 20 35, 10 40" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M5 34 L10 41 L17 37" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function AboutContent() {
  return (
    <section className="about-section" id="about">
      {/* BACKGROUND GLOWS */}
      <div className="about-glow about-glow-left"></div>
      <div className="about-glow about-glow-right"></div>

      <div className="about-container">
        
        {/* TOP SECTION: LEFT TEXT & RIGHT FOUNDERS VISUAL */}
        <div className="about-top-grid">
          
          {/* LEFT COLUMN */}
          <div className="about-left">
            <div className="about-badge-container">
              <span className="about-badge-text">ABOUT US</span>
              <div className="about-badge-line"></div>
            </div>

            <h2 className="about-headline">
              Nest Of Codes <br />
              Turning Ideas Into <br />
              <span className="gradient-text">Smart Digital Solutions</span>
            </h2>

            <p className="about-description">
              Nest Of Codes started in 2024, founded by Kumaravelan K and
              Ragupathy V — two college friends with a shared passion for technology
              and innovation. What began as a friendship in college has grown into a
              company focused on building modern web, mobile and digital solutions.
            </p>

            {/* QUICK METRICS */}
            <div className="about-quick-stats">
              <div className="quick-stat-item">
                <div className="quick-stat-icon">
                  <RocketIcon />
                </div>
                <div className="quick-stat-info">
                  <span className="stat-value">2024</span>
                  <span className="stat-name">Founded</span>
                </div>
              </div>

              <div className="stat-v-divider"></div>

              <div className="quick-stat-item">
                <div className="quick-stat-icon">
                  <UsersIcon />
                </div>
                <div className="quick-stat-info">
                  <span className="stat-value">2</span>
                  <span className="stat-name">Co-founders</span>
                </div>
              </div>

              <div className="stat-v-divider"></div>

              <div className="quick-stat-item">
                <div className="quick-stat-icon">
                  <CodeTagIcon />
                </div>
                <div className="quick-stat-info">
                  <span className="stat-value">100+</span>
                  <span className="stat-name">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN WITH HIGH-RES FOUNDERS IMAGE */}
          <div className="about-right">
            


            {/* Handwritten Note + Curved Arrow */}
            <div className="handwritten-note">
              <p>College Friends.</p>
              <p>Co-founders.</p>
              <p>Building Something Great.</p>
              <div className="arrow-wrapper">
                <CurvedArrow />
              </div>
            </div>

            {/* FOUNDERS SCENE */}
            <div className="founders-stage">
              
              {/* Background Neon Ring Arc */}
              <div className="neon-arc"></div>

              {/* High Resolution Image Component */}
              <div className="founders-image-wrapper">
                <img 
                  src={foundersImg} 
                  alt="Kumaravelan K and Ragupathy V - Co-Founders of Nest of Codes" 
                  className="founders-photo" 
                />
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FEATURE CARDS BAR */}
        <div className="about-features-container">
          
          {/* OUR MISSION */}
          <div className="about-feature-card">
            <div className="feature-icon icon-purple">
              <MonitorIcon />
            </div>
            <div className="feature-content">
              <h3>Our Mission</h3>
              <p>Build reliable, scalable and innovative digital products.</p>
            </div>
          </div>

          <div className="feature-v-divider"></div>

          {/* OUR VISION */}
          <div className="about-feature-card">
            <div className="feature-icon icon-blue">
              <TargetIcon />
            </div>
            <div className="feature-content">
              <h3>Our Vision</h3>
              <p>Empower businesses with technology.</p>
            </div>
          </div>

          <div className="feature-v-divider"></div>

          {/* OUR APPROACH */}
          <div className="about-feature-card">
            <div className="feature-icon icon-violet">
              <LightbulbIcon />
            </div>
            <div className="feature-content">
              <h3>Our Approach</h3>
              <p>Learn • Build • Deliver</p>
            </div>
          </div>

          <div className="feature-v-divider"></div>

          {/* OUR PROMISE */}
          <div className="about-feature-card">
            <div className="feature-icon icon-cyan">
              <HandshakeIcon />
            </div>
            <div className="feature-content">
              <h3>Our Promise</h3>
              <p>Quality code. Long-term partnerships.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}