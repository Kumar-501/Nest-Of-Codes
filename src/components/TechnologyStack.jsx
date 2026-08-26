import React, { useState } from "react";
import "./TechnologyStack.css";

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const technologyData = {
  Frontend: [
    {
      name: "React",
      short: "Re",
      percentage: 95,
      description: "Component-based UI library for modern web applications.",
      color: "cyan",
    },
    {
      name: "Next.js",
      short: "N",
      percentage: 90,
      description: "Full-stack React framework with SSR and SSG.",
      color: "white",
    },
    {
      name: "JavaScript",
      short: "JS",
      percentage: 98,
      description: "Core language for dynamic web experiences.",
      color: "yellow",
    },
    {
      name: "TypeScript",
      short: "TS",
      percentage: 88,
      description: "Typed superset of JavaScript for safer code.",
      color: "blue",
    },
    {
      name: "HTML5",
      short: "H5",
      percentage: 99,
      description: "Semantic markup for modern web standards.",
      color: "orange",
    },
    {
      name: "CSS3",
      short: "CSS",
      percentage: 97,
      description: "Styling language with animations and layouts.",
      color: "purple",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      short: "N",
      percentage: 94,
      description: "JavaScript runtime for fast and scalable server applications.",
      color: "green",
    },
    {
      name: "Express.js",
      short: "Ex",
      percentage: 92,
      description: "Minimal and flexible framework for building APIs.",
      color: "white",
    },
    {
      name: "Python",
      short: "Py",
      percentage: 90,
      description: "Versatile language for backend, automation and AI.",
      color: "yellow",
    },
    {
      name: "Java",
      short: "J",
      percentage: 85,
      description: "Reliable technology for enterprise applications.",
      color: "orange",
    },
    {
      name: "REST APIs",
      short: "API",
      percentage: 96,
      description: "Scalable API architecture for modern applications.",
      color: "cyan",
    },
    {
      name: "Firebase",
      short: "F",
      percentage: 93,
      description: "Backend services for authentication and real-time data.",
      color: "yellow",
    },
  ],

  Databases: [
    {
      name: "MongoDB",
      short: "M",
      percentage: 92,
      description: "Flexible NoSQL database for modern applications.",
      color: "green",
    },
    {
      name: "PostgreSQL",
      short: "PG",
      percentage: 90,
      description: "Powerful relational database for scalable systems.",
      color: "blue",
    },
    {
      name: "MySQL",
      short: "SQL",
      percentage: 88,
      description: "Reliable relational database for business applications.",
      color: "orange",
    },
    {
      name: "Firebase Firestore",
      short: "FS",
      percentage: 95,
      description: "Real-time cloud database for web and mobile apps.",
      color: "yellow",
    },
    {
      name: "Redis",
      short: "R",
      percentage: 82,
      description: "High-performance in-memory database and caching.",
      color: "red",
    },
    {
      name: "Database Design",
      short: "DB",
      percentage: 94,
      description: "Optimized database architecture for scalable products.",
      color: "purple",
    },
  ],

  "Cloud & DevOps": [
    {
      name: "AWS",
      short: "AWS",
      percentage: 90,
      description: "Cloud infrastructure for secure and scalable applications.",
      color: "orange",
    },
    {
      name: "Docker",
      short: "DK",
      percentage: 88,
      description: "Containerized applications for consistent deployment.",
      color: "blue",
    },
    {
      name: "Kubernetes",
      short: "K8",
      percentage: 82,
      description: "Container orchestration for scalable infrastructure.",
      color: "purple",
    },
    {
      name: "CI/CD",
      short: "CI",
      percentage: 91,
      description: "Automated testing and deployment workflows.",
      color: "cyan",
    },
    {
      name: "Git & GitHub",
      short: "Git",
      percentage: 96,
      description: "Version control and collaborative development workflows.",
      color: "orange",
    },
    {
      name: "Cloud Deployment",
      short: "CD",
      percentage: 93,
      description: "Reliable deployment pipelines for production systems.",
      color: "green",
    },
  ],

  Mobile: [
    {
      name: "React Native",
      short: "RN",
      percentage: 90,
      description: "Cross-platform mobile applications using React.",
      color: "cyan",
    },
    {
      name: "Android",
      short: "A",
      percentage: 85,
      description: "Native and scalable Android application development.",
      color: "green",
    },
    {
      name: "iOS",
      short: "iOS",
      percentage: 80,
      description: "Modern mobile experiences for Apple devices.",
      color: "white",
    },
    {
      name: "Flutter",
      short: "Fl",
      percentage: 82,
      description: "Cross-platform UI development from a single codebase.",
      color: "blue",
    },
    {
      name: "Mobile APIs",
      short: "API",
      percentage: 94,
      description: "Secure backend integration for mobile applications.",
      color: "purple",
    },
    {
      name: "App Deployment",
      short: "APP",
      percentage: 88,
      description: "Application publishing and production deployment.",
      color: "orange",
    },
  ],

  "AI & Automation": [
    {
      name: "Artificial Intelligence",
      short: "AI",
      percentage: 88,
      description: "Intelligent solutions designed for modern businesses.",
      color: "purple",
    },
    {
      name: "OpenAI",
      short: "AI",
      percentage: 90,
      description: "AI integrations for chat, automation and workflows.",
      color: "cyan",
    },
    {
      name: "Python Automation",
      short: "Py",
      percentage: 92,
      description: "Automated workflows that reduce repetitive work.",
      color: "yellow",
    },
    {
      name: "Machine Learning",
      short: "ML",
      percentage: 82,
      description: "Data-driven models for intelligent decision making.",
      color: "pink",
    },
    {
      name: "AI Chatbots",
      short: "BOT",
      percentage: 94,
      description: "Context-aware conversational AI for businesses.",
      color: "green",
    },
    {
      name: "Workflow Automation",
      short: "AUTO",
      percentage: 91,
      description: "Smart automation for faster and efficient operations.",
      color: "orange",
    },
  ],
};

/* =========================================================
   CATEGORY ICON
========================================================= */

const CategoryIcon = ({ type }) => {
  switch (type) {
    case "Frontend":
      return <>⌘</>;

    case "Backend":
      return <>▤</>;

    case "Databases":
      return <>◉</>;

    case "Cloud & DevOps":
      return <>☁</>;

    case "Mobile":
      return <>▯</>;

    case "AI & Automation":
      return <>✦</>;

    default:
      return <>●</>;
  }
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = Object.keys(technologyData);

  const technologies = technologyData[activeCategory];

  return (
    <section className="technology-stack-section" id="technologies">
      {/* Background Effects */}
      <div className="tech-bg-glow tech-glow-left"></div>
      <div className="tech-bg-glow tech-glow-right"></div>

      <div className="tech-particles tech-particles-left"></div>
      <div className="tech-particles tech-particles-right"></div>

      <div className="technology-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="technology-header">
          <div className="tech-badge">
            <span className="tech-badge-dot"></span>
            OUR EXPERTISE
          </div>

          <h2>
            Technology <span>Stack</span>
          </h2>

          <p>
            Leveraging modern technologies, cloud platforms, and
            industry-leading tools to build scalable, secure, and
            future-ready digital products.
          </p>
        </div>

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <div className="tech-navigation-wrapper">
          <div className="tech-navigation">
            {categories.map((category) => (
              <button
                key={category}
                className={`tech-nav-item ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="tech-nav-icon">
                  <CategoryIcon type={category} />
                </span>

                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* =================================================
            TECHNOLOGY CARDS
        ================================================= */}

        <div
          className="technology-grid"
          key={activeCategory}
        >
          {technologies.map((technology, index) => (
            <div
              className={`technology-card ${technology.color}`}
              key={technology.name}
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* Card Background Glow */}
              <div className="technology-card-glow"></div>

              {/* Main Content */}
              <div className="technology-card-top">

                {/* Technology Icon */}
                <div className="technology-logo">
                  {technology.short}
                </div>

                {/* Technology Details */}
                <div className="technology-info">
                  <h3>{technology.name}</h3>

                  <span className="technology-percentage">
                    {technology.percentage}%
                  </span>
                </div>

                {/* Circular Progress */}
                <div
                  className="technology-circle"
                  style={{
                    "--progress": `${technology.percentage * 3.6}deg`,
                  }}
                >
                  <div className="technology-circle-inner">
                    {technology.percentage}%
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="technology-description">
                {technology.description}
              </p>

              {/* Progress Bar */}
              <div className="technology-progress">
                <div
                  className="technology-progress-fill"
                  style={{
                    width: `${technology.percentage}%`,
                  }}
                ></div>
              </div>

              {/* Decorative Lines */}
              <div className="card-tech-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            FOOTER TEXT
        ================================================= */}

        <div className="technology-footer">
          <span className="footer-tech-line"></span>

          <p>
            Building with the right technology for every challenge.
          </p>

          <span className="footer-tech-line"></span>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;