import React from "react";
import "./About.css";

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

export default function About() {
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

          {/* RIGHT COLUMN */}
          <div className="about-right">
            
            {/* Started in 2024 Badge */}
            <div className="started-badge">
              <div className="calendar-icon">
                <CalendarIcon />
              </div>
              <div className="started-v-divider"></div>
              <div className="started-text">
                <span className="started-label">Started in</span>
                <span className="started-year">2024</span>
              </div>
            </div>

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

              {/* Illustration SVG */}
              <div className="founders-image-container">
                <svg viewBox="0 0 650 420" className="founders-svg" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                      <stop offset="100%" stopColor="rgba(15, 23, 42, 0.95)" />
                    </linearGradient>

                    <linearGradient id="hoodieLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>

                    <linearGradient id="hoodieRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  {/* Desk Surface */}
                  <rect x="0" y="320" width="650" height="100" fill="#090d1f" />
                  <line x1="0" y1="320" x2="650" y2="320" stroke="#1e293b" strokeWidth="2" />

                  {/* Pencil Pot */}
                  <rect x="260" y="270" width="22" height="50" rx="3" fill="#1e293b" />
                  <line x1="264" y1="240" x2="267" y2="270" stroke="#a855f7" strokeWidth="3" />
                  <line x1="270" y1="235" x2="271" y2="270" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="276" y1="245" x2="275" y2="270" stroke="#00f5c4" strokeWidth="3" />

                  {/* Laptop in Center */}
                  <rect x="420" y="210" width="130" height="90" rx="6" fill="#0b1120" stroke="#334155" strokeWidth="2" />
                  <rect x="426" y="216" width="118" height="78" rx="4" fill="url(#screenGlow)" />
                  <path d="M400 300 L570 300 L560 310 L410 310 Z" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                  
                  {/* Laptop Screen Code Lines */}
                  <line x1="434" y1="228" x2="480" y2="228" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="434" y1="238" x2="510" y2="238" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                  <line x1="444" y1="248" x2="495" y2="248" stroke="#00f5c4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="444" y1="258" x2="470" y2="258" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                  <line x1="434" y1="268" x2="520" y2="268" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

                  {/* Plant Pot */}
                  <ellipse cx="600" cy="300" rx="18" ry="8" fill="#1e293b" />
                  <path d="M586 300 L590 320 L610 320 L614 300 Z" fill="#334155" />
                  <path d="M600 295 Q580 270 575 250 Q600 275 600 295 Z" fill="#22c55e" />
                  <path d="M600 295 Q620 270 625 250 Q600 275 600 295 Z" fill="#16a34a" />
                  <path d="M600 290 Q600 255 595 240 Q605 260 600 290 Z" fill="#4ade80" />

                  {/* Founder 1: Kumaravelan K */}
                  <g className="founder-left">
                    <path d="M330 160 C320 120 380 115 375 160 C365 175 335 175 330 160 Z" fill="#0f172a" />
                    <path d="M325 145 C330 115 375 110 380 140 C370 120 340 125 325 145 Z" fill="#1e293b" />
                    <path d="M290 320 L300 240 Q315 190 350 185 Q385 190 405 240 L415 320 Z" fill="url(#hoodieLeft)" />
                    <path d="M330 195 C345 220 360 220 370 195" fill="none" stroke="#334155" strokeWidth="2.5" />
                  </g>

                  {/* Founder 2: Ragupathy V */}
                  <g className="founder-right">
                    <path d="M475 175 C465 135 525 130 520 175 C510 190 480 190 475 175 Z" fill="#0f172a" />
                    <path d="M470 160 C475 130 520 125 525 155 C515 135 485 140 470 160 Z" fill="#1e293b" />
                    <path d="M435 320 L445 255 Q460 205 495 200 Q530 205 550 255 L565 320 Z" fill="url(#hoodieRight)" />
                    <path d="M475 210 C490 235 505 235 515 210" fill="none" stroke="#475569" strokeWidth="2.5" />
                  </g>
                </svg>

                {/* NAME LABELS */}
                <div className="founder-label label-kumar">
                  <span className="founder-name">Kumaravelan K</span>
                  <span className="founder-role">Co-Founder</span>
                </div>

                <div className="founder-label label-ragu">
                  <span className="founder-name">Ragupathy V</span>
                  <span className="founder-role">Co-Founder</span>
                </div>
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