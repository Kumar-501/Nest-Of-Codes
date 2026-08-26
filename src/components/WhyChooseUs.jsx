import React from "react";
import "./WhyChooseUs.css";

/* =========================================================
   SVG ICONS
========================================================= */

const RocketIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M57 13c17 5 27 19 28 37L60 75 32 66 25 40c8-15 17-24 32-27Z" />
    <path d="M32 66 18 82l6-22" />
    <path d="M60 75 54 94 73 80" />
    <circle cx="59" cy="40" r="8" />
    <path d="M24 52 10 57l13 8" />
  </svg>
);

const BulbIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M50 16c-17 0-30 13-30 30 0 11 6 20 15 25v10h30V71c9-5 15-14 15-25 0-17-13-30-30-30Z" />
    <path d="M39 88h22" />
    <path d="M42 81h16" />
    <path d="M50 33v27" />
    <path d="m40 42 10 10 10-10" />
    <path d="M18 26 9 17M82 26l9-9M15 51H4M96 51H85" />
  </svg>
);

const ExpertiseIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="29" r="10" />
    <circle cx="26" cy="42" r="8" />
    <circle cx="74" cy="42" r="8" />
    <path d="M34 70V59c0-10 7-17 16-17s16 7 16 17v11" />
    <path d="M10 75v-9c0-9 6-15 16-15 5 0 9 2 12 5" />
    <path d="M90 75v-9c0-9-6-15-16-15-5 0-9 2-12 5" />
    <path d="M50 7l4 8 9 1-6 6 2 9-9-5-9 5 2-9-6-6 9-1Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M50 10 80 22v23c0 22-12 36-30 45-18-9-30-23-30-45V22L50 10Z" />
    <rect x="38" y="42" width="24" height="21" rx="3" />
    <path d="M43 42v-7c0-5 3-9 7-9s7 4 7 9v7" />
    <path d="M50 50v7" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M22 56V46c0-17 12-30 28-30s28 13 28 30v10" />
    <path d="M22 53h10v23H22c-5 0-8-4-8-9v-5c0-5 3-9 8-9Z" />
    <path d="M78 53H68v23h10c5 0 8-4 8-9v-5c0-5-3-9-8-9Z" />
    <path d="M68 74c-2 9-9 12-18 12h-8" />
  </svg>
);

const GraduationIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="m10 37 40-20 40 20-40 20-40-20Z" />
    <path d="M25 47v20c12 12 38 12 50 0V47" />
    <path d="M90 38v28" />
    <circle cx="90" cy="70" r="3" />
  </svg>
);

const CommunicationIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect x="14" y="20" width="52" height="38" rx="6" />
    <path d="m28 58-9 12 18-12" />
    <rect x="50" y="42" width="36" height="28" rx="5" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M38 25 18 50l20 25" />
    <path d="m62 25 20 25-20 25" />
    <path d="M56 15 44 85" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="35" />
    <path d="M50 25v27l18 12" />
    <path d="M50 7v8M50 85v8M7 50h8M85 50h8" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="32" />
    <circle cx="50" cy="50" r="20" />
    <circle cx="50" cy="50" r="7" />
    <path d="m58 42 28-28" />
    <path d="m74 14 14 0v14" />
  </svg>
);

const CheckShieldIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M50 10 80 22v23c0 22-12 36-30 45-18-9-30-23-30-45V22L50 10Z" />
    <path d="m35 50 10 10 21-23" />
  </svg>
);

const FrontendIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect x="15" y="20" width="70" height="50" rx="5" />
    <path d="M15 32h70" />
    <path d="M30 46h18M30 57h30" />
    <path d="M55 43v18M65 43v18" />
  </svg>
);

const BackendIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect x="18" y="18" width="64" height="18" rx="3" />
    <rect x="18" y="42" width="64" height="18" rx="3" />
    <rect x="18" y="66" width="64" height="18" rx="3" />
    <circle cx="30" cy="27" r="3" />
    <circle cx="30" cy="51" r="3" />
    <circle cx="30" cy="75" r="3" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <ellipse cx="50" cy="25" rx="27" ry="11" />
    <path d="M23 25v48c0 6 12 11 27 11s27-5 27-11V25" />
    <path d="M23 49c0 6 12 11 27 11s27-5 27-11" />
  </svg>
);

const CloudDevOpsIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M25 68h48c12 0 19-8 19-19 0-11-8-19-19-19-3-13-13-20-25-20-14 0-25 10-26 24C11 36 5 45 5 55c0 7 4 13 10 13h10Z" />
    <path d="M38 55v20M62 55v20" />
    <path d="m30 67 8 8 8-8M54 67l8 8 8-8" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect x="30" y="10" width="40" height="80" rx="6" />
    <path d="M43 18h14" />
    <circle cx="50" cy="79" r="3" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M30 20c-8 3-13 10-13 19 0 7 3 13 9 17-3 9 2 18 11 20 4 8 14 10 21 5 7 5 17 3 21-5 9-2 14-11 11-20 6-4 9-10 9-17 0-9-5-16-13-19" />
    <rect x="34" y="32" width="32" height="32" rx="5" />
    <path d="M42 48h16M50 40v16" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    title: "Fast Delivery",
    description:
      "Efficient development processes ensuring projects are delivered on time without compromising quality.",
    Icon: RocketIcon,
    color: "purple",
  },
  {
    title: "Innovative Solutions",
    description:
      "Future-ready software solutions designed around modern technologies and business goals.",
    Icon: BulbIcon,
    color: "blue",
  },
  {
    title: "Industry Expertise",
    description:
      "Experienced professionals with strong technical and business knowledge across diverse domains.",
    Icon: ExpertiseIcon,
    color: "cyan",
  },
  {
    title: "Secure & Scalable",
    description:
      "Enterprise-grade architecture focused on security, performance, and long-term growth.",
    Icon: ShieldIcon,
    color: "teal",
  },
  {
    title: "Dedicated Support",
    description:
      "Continuous support, maintenance, and technical assistance throughout and after deployment.",
    Icon: SupportIcon,
    color: "pink",
  },
  {
    title: "Internship & Certification",
    description:
      "Practical learning with real projects, expert mentorship, and industry-recognized certifications.",
    Icon: GraduationIcon,
    color: "orange",
  },
];

const trustPoints = [
  {
    title: "Transparent Communication",
    Icon: CommunicationIcon,
    color: "purple",
  },
  {
    title: "Modern Technology Stack",
    Icon: CodeIcon,
    color: "blue",
  },
  {
    title: "On-Time Project Delivery",
    Icon: ClockIcon,
    color: "pink",
  },
  {
    title: "Long-Term Support",
    Icon: SupportIcon,
    color: "cyan",
  },
  {
    title: "Business-Focused Solutions",
    Icon: TargetIcon,
    color: "pink",
  },
  {
    title: "Quality Assurance",
    Icon: CheckShieldIcon,
    color: "teal",
  },
];

const technologies = [
  {
    title: "Frontend",
    Icon: FrontendIcon,
    color: "purple",
  },
  {
    title: "Backend",
    Icon: BackendIcon,
    color: "blue",
  },
  {
    title: "Databases",
    Icon: DatabaseIcon,
    color: "teal",
  },
  {
    title: "Cloud & DevOps",
    Icon: CloudDevOpsIcon,
    color: "cyan",
  },
  {
    title: "Mobile",
    Icon: MobileIcon,
    color: "pink",
  },
  {
    title: "AI & Automation",
    Icon: AIIcon,
    color: "orange",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-grid-background"></div>

      <div className="why-glow why-glow-left"></div>
      <div className="why-glow why-glow-right"></div>

      <div className="why-container">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="why-header">
          <div className="why-label">
            <span></span>
            <p>WHY CHOOSE</p>
            <span></span>
          </div>

          <h2>
            Why Choose{" "}
            <span>Nest of Codes?</span>
          </h2>

          <p>
            We don’t just build solutions — we build trust, relationships,
            and long-term partnerships.
            <br />
            Here’s what makes us the right choice for your next project.
          </p>
        </div>

        {/* =================================================
            FEATURES
        ================================================= */}

        <div className="why-features">
          {features.map((feature, index) => {
            const Icon = feature.Icon;

            return (
              <article
                className={`why-feature-card ${feature.color}`}
                key={feature.title}
                style={{ "--animation-delay": `${index * 0.08}s` }}
              >
                <div className="feature-visual">
                  <div className="feature-glow"></div>

                  <div className="feature-orbit orbit-large"></div>
                  <div className="feature-orbit orbit-small"></div>

                  <div className="feature-icon">
                    <Icon />
                  </div>

                  <div className="feature-platform platform-one"></div>
                  <div className="feature-platform platform-two"></div>
                  <div className="feature-platform platform-three"></div>

                  <span className="feature-dot dot-one"></span>
                  <span className="feature-dot dot-two"></span>
                </div>

                <div className="feature-content">
                  <h3>{feature.title}</h3>

                  <div className="feature-line"></div>

                  <p>{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            WHY CLIENTS TRUST US
        ================================================= */}

        <div className="trust-section">
          <div className="trust-left">
            <div className="trust-badge-visual">
              <div className="trust-circle trust-circle-one"></div>
              <div className="trust-circle trust-circle-two"></div>

              <div className="trust-shield">
                <CheckShieldIcon />
              </div>

              <div className="trust-platform trust-platform-one"></div>
              <div className="trust-platform trust-platform-two"></div>
            </div>

            <div className="trust-text">
              <span>WHY CLIENTS TRUST US</span>

              <h3>
                Enterprise-grade solutions
                <br />
                with a startup mindset.
              </h3>

              <p>
                We bring the rigor of enterprise engineering and the agility
                of a modern agency to every project we undertake.
              </p>
            </div>
          </div>

          <div className="trust-right">
            {trustPoints.map((point) => {
              const Icon = point.Icon;

              return (
                <div
                  className={`trust-point ${point.color}`}
                  key={point.title}
                >
                  <div className="trust-point-icon">
                    <Icon />
                  </div>

                  <p>{point.title}</p>
                </div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
}

export default WhyChooseUs;