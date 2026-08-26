import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Rocket,
  Search,
  X,
  FolderKanban,
  ChevronDown,
} from "lucide-react";

import "./Portfolio.css";

import {
  portfolioCategories,
  projects,
  portfolioStats,
  ArrowUpRight,
} from "../sections/PortfolioContent";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const searchValue = searchTerm.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchValue) ||
        project.category.toLowerCase().includes(searchValue) ||
        project.industry.toLowerCase().includes(searchValue) ||
        project.technologies
          .join(" ")
          .toLowerCase()
          .includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const displayedProjects = filteredProjects.slice(
    0,
    visibleProjects
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleProjects(6);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setVisibleProjects(6);
  };

  return (
    <main className="portfolio-page" id="portfolio">

      {/* BACKGROUND EFFECTS */}

      <div className="portfolio-glow portfolio-glow-left"></div>
      <div className="portfolio-glow portfolio-glow-right"></div>

      {/* HERO */}

      <section className="portfolio-hero">
        <div className="portfolio-badge">
          <span></span>
          OUR WORK
        </div>

        <h1>
          Our <span>Portfolio</span>
        </h1>

        <p>
          Transforming ideas into scalable digital solutions through
          innovation, technology, and strategic execution.
        </p>

        <div className="portfolio-hero-actions">
          <a href="#projects-grid" className="portfolio-primary-btn">
            View Projects
            <ArrowRight size={19} />
          </a>

          <a href="#contact" className="portfolio-secondary-btn">
            Start Your Project
            <Rocket size={18} />
          </a>
        </div>
      </section>

      {/* SEARCH */}

      <div className="portfolio-search-wrapper">
        <div className="portfolio-search">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search projects, technologies or industries..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
            >
              <X size={17} />
            </button>
          )}
        </div>
      </div>

      {/* CATEGORY FILTER */}

      <section className="portfolio-filter-section">
        <div className="portfolio-filters">
          {portfolioCategories.map((category) => (
            <button
              key={category.name}
              className={`portfolio-filter-btn ${
                activeCategory === category.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleCategoryChange(category.name)
              }
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT HEADER */}

      <section className="portfolio-projects-section">
        <div className="portfolio-section-heading">
          <div>
            <span className="section-mini-label">
              FEATURED WORK
            </span>

            <h2>
              Featured <span>Projects</span>
            </h2>
          </div>

          <div className="portfolio-project-count">
            <FolderKanban size={18} />
            <span>
              {filteredProjects.length} Projects
            </span>
          </div>
        </div>

        {/* PROJECT GRID */}

        <div
          className="portfolio-grid"
          id="projects-grid"
        >
          {displayedProjects.map((project, index) => (
            <article
              className={`portfolio-card ${project.color}`}
              key={project.id}
              style={{
                animationDelay: `${index * 0.07}s`,
              }}
            >
              {/* IMAGE */}

              <div className="portfolio-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="portfolio-image-overlay"></div>

                <div className="portfolio-industry">
                  {project.industry}
                </div>

                <div className="portfolio-result">
                  <span>
                    {project.icon}
                  </span>

                  <strong>
                    {project.result}
                  </strong>
                </div>
              </div>

              {/* CONTENT */}

              <div className="portfolio-card-content">
                <div className="portfolio-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="portfolio-tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="portfolio-case-btn">
                  View Case Study
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}

        {filteredProjects.length === 0 && (
          <div className="portfolio-empty">
            <Search size={45} />

            <h3>No projects found</h3>

            <p>
              Try searching for another project,
              technology or category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* LOAD MORE */}

        {visibleProjects < filteredProjects.length && (
          <div className="portfolio-load-more">
            <button
              onClick={() =>
                setVisibleProjects(
                  (previous) => previous + 6
                )
              }
            >
              Load More Projects
              <ChevronDown size={19} />
            </button>
          </div>
        )}
      </section>

      {/* IMPACT */}

      <section className="portfolio-impact">
        <div className="portfolio-impact-intro">
          <span>BY THE NUMBERS</span>

          <h2>
            Our <strong>Impact</strong>
          </h2>

          <p>
            Numbers that reflect our commitment to
            excellence and client success.
          </p>
        </div>

        <div className="portfolio-impact-divider"></div>

        <div className="portfolio-stats">
          {portfolioStats.map((stat) => (
            <div
              className={`portfolio-stat ${stat.color}`}
              key={stat.label}
            >
              <div className="portfolio-stat-icon">
                {stat.icon}
              </div>

              <div className="portfolio-stat-content">
                <h3>{stat.value}</h3>

                <h4>{stat.label}</h4>

                <p>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="portfolio-bottom-cta">
        <div className="portfolio-cta-content">
          <div className="portfolio-badge">
            <span></span>
            LET'S BUILD TOGETHER
          </div>

          <h2>
            Have a project in <span>mind?</span>
          </h2>

          <p>
            Let's transform your idea into a powerful,
            scalable digital product.
          </p>

          <a href="#contact" className="portfolio-primary-btn">
            Start Your Project
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

    </main>
  );
};

export default Portfolio;