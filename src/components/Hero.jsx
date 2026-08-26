import React from "react";
import "./Hero.css";

// SVG Icons
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M12 5v13M9 9h.01M15 9h.01M9 14h.01M15 14h.01" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z" />
  </svg>
);

const CloudIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const SettingsGearIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const LayersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 2 10 5-10 5L2 7l10-5Z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* BACKGROUND EFFECTS */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="grid-overlay"></div>

      <div className="hero-container">
        
        {/* LEFT CONTENT COLUMN */}
        <div className="hero-left">
          <div className="badge-pill">
            <span className="dot-green"></span>
            <span>SOFTWARE DEVELOPMENT</span>
            <span className="separator">•</span>
            <span>AI SOLUTIONS</span>
            <span className="separator">•</span>
            <span>DIGITAL MARKETING</span>
          </div>

          <h1 className="hero-headline">
            Engineering <br />
            <span className="gradient-text">Digital Products</span><br></br>
            that Accelerate <br />
            Business Growth
          </h1>

          <p className="hero-subtext">
            We partner with startups and enterprises to build scalable software,
            modern web experiences, mobile applications, and growth-driven
            digital solutions.
          </p>

          <div className="hero-cta-group">
            <a href="#consultation" className="btn-primary-purple">
              Book Free Consultation <ArrowRight />
            </a>

            <a href="#services" className="btn-secondary-explore">
              <span className="icon-circle">
                <ArrowRight />
              </span>
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL GRAPHIC COLUMN */}
        <div className="hero-right">
          <div className="tech-visual-stage">
            
            {/* Dashed Orbital Rings */}
            <div className="orbit-ring orbit-outer"></div>
            <div className="orbit-ring orbit-inner"></div>

            {/* NODE 1: AI Solutions (Top Center) */}
            <div className="tech-node node-ai">
              <div className="node-icon-wrapper icon-purple">
                <BrainIcon />
              </div>
              <div className="node-label">
                <h4>AI Solutions</h4>
                <p>GPT • Vision • NLP</p>
              </div>
            </div>

            {/* NODE 2: Web Development (Top Left) */}
            <div className="tech-node node-web">
              <div className="node-icon-wrapper icon-blue">
                <GlobeIcon />
              </div>
              <div className="node-label">
                <h4>Web Development</h4>
                <p>Modern • Scalable • Secure</p>
              </div>
            </div>

            {/* NODE 3: Cloud Solutions (Top Right) */}
            <div className="tech-node node-cloud">
              <div className="node-icon-wrapper icon-cyan">
                <CloudIcon />
              </div>
              <div className="node-label">
                <h4>Cloud Solutions</h4>
                <p>AWS • GCP • Azure</p>
              </div>
            </div>

            {/* NODE 4: API Development (Bottom Left) */}
            <div className="tech-node node-api">
              <div className="node-icon-wrapper icon-teal">
                <SettingsGearIcon />
              </div>
              <div className="node-label">
                <h4>API Development</h4>
                <p>REST • GraphQL</p>
              </div>
            </div>

            {/* NODE 5: System Architecture (Bottom Right) */}
            <div className="tech-node node-arch">
              <div className="node-icon-wrapper icon-violet">
                <LayersIcon />
              </div>
              <div className="node-label">
                <h4>System Architecture</h4>
                <p>Scalable • Optimized</p>
              </div>
            </div>

            {/* ISOMETRIC 3D CENTER PLATFORM & CUBE */}
            <div className="center-cube-container">
              <svg viewBox="0 0 400 380" className="isometric-svg">
                <defs>
                  <linearGradient id="cubeTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d8b4fe" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>

                  <linearGradient id="cubeLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(30, 58, 138, 0.85)" />
                    <stop offset="100%" stopColor="rgba(15, 23, 42, 0.95)" />
                  </linearGradient>

                  <linearGradient id="cubeRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(29, 78, 216, 0.75)" />
                    <stop offset="100%" stopColor="rgba(15, 23, 42, 0.95)" />
                  </linearGradient>

                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Ground Glow Shadow */}
                <ellipse cx="200" cy="300" rx="130" ry="45" fill="#3b82f6" opacity="0.25" filter="url(#neonGlow)" />

                {/* BASE PLATFORM 3 (Bottom Layer) */}
                <g className="platform-bottom">
                  <path d="M200 230 L320 280 L200 330 L80 280 Z" fill="#090d1f" stroke="#2563eb" strokeWidth="2" opacity="0.9" />
                  <path d="M80 280 L200 330 L200 342 L80 292 Z" fill="#1e1b4b" opacity="0.8" />
                  <path d="M320 280 L200 330 L200 342 L320 292 Z" fill="#0f172a" opacity="0.8" />
                </g>

                {/* BASE PLATFORM 2 (Middle Layer) */}
                <g className="platform-middle">
                  <path d="M200 205 L300 250 L200 295 L100 250 Z" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
                  <path d="M100 250 L200 295 L200 305 L100 260 Z" fill="#1e293b" />
                  <path d="M300 250 L200 295 L200 305 L300 260 Z" fill="#0f172a" />
                </g>

                {/* BASE PLATFORM 1 (Top Layer Deck) */}
                <g className="platform-top">
                  <path d="M200 180 L275 215 L200 250 L125 215 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
                  <path d="M125 215 L200 250 L200 258 L125 223 Z" fill="#0284c7" />
                  <path d="M275 215 L200 250 L200 258 L275 223 Z" fill="#0369a1" />
                </g>

                {/* FLOATING 3D GLASS CUBE */}
                <g className="floating-cube">
                  <path d="M200 70 L260 105 L200 140 L140 105 Z" fill="url(#cubeTopGrad)" stroke="#e0e7ff" strokeWidth="1.5" />
                  <path d="M140 105 L200 140 L200 215 L140 180 Z" fill="url(#cubeLeftGrad)" stroke="#38bdf8" strokeWidth="1.5" />
                  <path d="M200 140 L260 105 L260 180 L200 215 Z" fill="url(#cubeRightGrad)" stroke="#60a5fa" strokeWidth="1.5" />

                  <g transform="translate(150, 132) skewY(28) scale(0.7)">
                    <text x="0" y="20" fill="#38bdf8" fontSize="28" fontWeight="bold" fontFamily="monospace" filter="drop-shadow(0px 0px 8px #38bdf8)">
                      &lt;/&gt;
                    </text>
                  </g>

                  <path d="M215 150 L245 133" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M215 170 L245 153" stroke="#60a5fa" strokeWidth="2" />
                  <path d="M215 190 L245 173" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,2" />
                  <circle cx="245" cy="133" r="2.5" fill="#00f5c4" />
                  <circle cx="245" cy="153" r="2.5" fill="#38bdf8" />
                  <circle cx="245" cy="173" r="2.5" fill="#a855f7" />
                </g>
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}