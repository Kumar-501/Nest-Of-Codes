import React from "react";
import "./Services.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M36 28 15 50l21 22" />
    <path d="M64 28 85 50 64 72" />
    <path d="M58 18 42 82" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect x="27" y="12" width="46" height="76" rx="7" />
    <path d="M42 23h16" />
    <circle cx="50" cy="78" r="3" />
    <rect x="37" y="35" width="10" height="10" rx="2" />
    <rect x="53" y="35" width="10" height="10" rx="2" />
    <rect x="37" y="51" width="10" height="10" rx="2" />
    <rect x="53" y="51" width="10" height="10" rx="2" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M25 70h48c12 0 20-8 20-19 0-11-8-19-19-20C70 19 61 13 50 13 36 13 25 24 25 38c-11 2-18 11-18 21 0 12 8 21 18 21Z" />
    <path d="M50 70V35" />
    <path d="m36 49 14-14 14 14" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M29 28c-10 2-17 11-17 22 0 10 6 18 15 21-1 10 7 18 17 17 3 7 11 10 18 6 7 4 15 1 18-6 10 1 18-7 17-17 9-3 15-11 15-21 0-11-7-20-17-22" />
    <rect x="33" y="32" width="34" height="34" rx="5" />
    <text x="50" y="56" textAnchor="middle">
      AI
    </text>
  </svg>
);

const MarketingIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M18 48v18h12l9 16h11l-6-16h12l27 12V24L56 36H18Z" />
    <path d="M56 36v30" />
    <path d="M83 38c6 4 9 8 9 12s-3 8-9 12" />
  </svg>
);

const CertificateIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path d="M28 18h44l8 8v40a8 8 0 0 1-8 8H28a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8Z" />
    <path d="M65 18v12h15" />
    <path d="M33 38h34M33 48h25" />
    <circle cx="51" cy="65" r="11" />
    <path d="m44 73-3 15 10-5 10 5-3-15" />
  </svg>
);

const services = [
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom software solutions built for performance, scalability, and long-term success.",
    Icon: CodeIcon,
    className: "service-purple",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "High-performance mobile apps for Android & iOS that deliver seamless user experiences.",
    Icon: MobileIcon,
    className: "service-blue",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Scalable cloud solutions and DevOps practices to automate, deploy, and scale with confidence.",
    Icon: CloudIcon,
    className: "service-green",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Intelligent automation and AI solutions to streamline workflows and drive smarter decisions.",
    Icon: AIIcon,
    className: "service-violet",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies that increase visibility, engage audiences, and grow your brand online.",
    Icon: MarketingIcon,
    className: "service-orange",
    wide: true,
  },
  {
    id: "internship",
    title: "Internship & Certification",
    description:
      "Industry-relevant training, real-world projects, and certifications to help you build skills and advance your career.",
    Icon: CertificateIcon,
    className: "service-pink",
    wide: true,
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-grid-bg"></div>
      <div className="services-glow services-glow-one"></div>
      <div className="services-glow services-glow-two"></div>

      <div className="services-container">
        {/* HEADER */}

        <div className="services-header">
          <div className="services-label">
            <span></span>
            <p>OUR SERVICES</p>
            <span></span>
          </div>

          <h2>
            <span className="heading-white">Solutions That Drive</span>
            <span className="heading-gradient">
              Innovation &amp; Growth
            </span>
          </h2>

          <p className="services-intro">
            We combine technology, creativity, and strategy to deliver
            <br />
            powerful digital solutions tailored to your business goals.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.Icon;

            return (
              <article
                className={`service-card ${service.className} ${
                  service.wide ? "service-card-wide" : ""
                }`}
                key={service.id}
                style={{ "--delay": `${index * 0.08}s` }}
              >
                <div className="service-card-bg"></div>

                {/* floating particles */}

                <span className="service-particle particle-one"></span>
                <span className="service-particle particle-two"></span>
                <span className="service-particle particle-three"></span>

                <div className="service-content">
                  <div className="service-visual">
                    <div className="visual-glow"></div>

                    <div className="visual-ring ring-one"></div>
                    <div className="visual-ring ring-two"></div>
                    <div className="visual-ring ring-three"></div>

                    <div className="service-icon-wrap">
                      <Icon />
                    </div>

                    <span className="floating-cube cube-one"></span>
                    <span className="floating-cube cube-two"></span>
                    <span className="floating-cube cube-three"></span>
                  </div>

                  <div className="service-details">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <a
                      href="#contact"
                      className="service-arrow"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;