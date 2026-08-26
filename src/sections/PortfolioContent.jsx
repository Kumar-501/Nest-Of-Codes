import React, { useState } from "react";
import {
  Code2,
  Boxes,
  ArrowUpRight,
  Search,
  BriefcaseBusiness,
  ShoppingCart,
  GraduationCap,
  Sparkles,
  Layers3,
  Users,
  HeartPulse,
  Cake,
  School,
  UserCheck,
  Building2,
  Stethoscope,
  Utensils,
  Home,
  Landmark,
  Dumbbell,
  Hotel,
  CalendarDays,
  BrainCircuit,
  Store,
  Palette,
  ClipboardList,
} from "lucide-react";

import "./PortfolioContent.css";

/* =========================================================
   PORTFOLIO CATEGORIES
========================================================= */

export const portfolioCategories = [
  {
    name: "All",
    icon: <Layers3 size={17} />,
  },
  {
    name: "Web Development",
    icon: <Code2 size={17} />,
  },
  {
    name: "Software Solutions",
    icon: <Boxes size={17} />,
  },
  {
    name: "E-Commerce",
    icon: <ShoppingCart size={17} />,
  },
  {
    name: "Branding & Web",
    icon: <Sparkles size={17} />,
  },
];

/* =========================================================
   PORTFOLIO PROJECTS - 15 PROJECTS
========================================================= */

export const projects = [
  /* =========================
     1. SUNNY BEARS
  ========================= */

  {
    id: 1,
    title: "Sunny Bears Pre School",
    category: "Web Development",
    industry: "Education",
    icon: <School size={28} />,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    result: "100+ Admissions Enrolled",
    description:
      "Interactive digital portal for Sunny Bears Pre School featuring student enrollment inquiries, event galleries, activity updates, and parent communication channels.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    color: "purple",
  },

  /* =========================
     2. CHENNA MEHENDI QUEEN
  ========================= */

  {
    id: 2,
    title: "Chenna Mehendi Queen",
    category: "Branding & Web",
    industry: "Beauty & Fashion",
    icon: <Sparkles size={28} />,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    result: "3x Booking Inquiries",
    description:
      "Custom portfolio and booking showcase displaying bridal mehendi artwork, custom service packages, client reviews, and direct WhatsApp appointment booking.",
    technologies: ["React", "CSS3", "JavaScript"],
    color: "pink",
  },

  /* =========================
     3. GR HOME BAKERS
  ========================= */

  {
    id: 3,
    title: "GR Home Bakers and Masalas",
    category: "E-Commerce",
    industry: "Food & Beverage",
    icon: <Cake size={28} />,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    result: "250+ Monthly Orders",
    description:
      "E-commerce ordering web application for homemade baked goods, custom cakes, and authentic handcrafted spices with online order management.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    color: "orange",
  },

  /* =========================
     4. PERSONAL PORTFOLIO
  ========================= */

  {
    id: 4,
    title: "Personal Portfolio",
    category: "Web Development",
    industry: "Personal Brand",
    icon: <Code2 size={28} />,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    result: "High Engagement & Leads",
    description:
      "Modern developer portfolio website featuring dark aesthetic themes, responsive project showcases, interactive UI elements, and fast loading performance.",
    technologies: ["React", "Vite", "Framer Motion"],
    color: "blue",
  },

  /* =========================
     5. NEST OF CODES HRM
  ========================= */

  {
    id: 5,
    title: "Nest Of Codes HRM",
    category: "Software Solutions",
    industry: "HR Tech",
    icon: <UserCheck size={28} />,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    result: "50% HR Automation",
    description:
      "All-in-one Human Resource Management web application for employee attendance tracking, automated payroll calculation, leave approvals, and team management.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "cyan",
  },

  /* =========================
     6. HEALTHCARE PORTAL
  ========================= */

  {
    id: 6,
    title: "SmartCare Healthcare Portal",
    category: "Web Development",
    industry: "Healthcare",
    icon: <Stethoscope size={28} />,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    result: "40% Faster Appointments",
    description:
      "Healthcare platform designed for appointment scheduling, doctor profiles, patient inquiries, digital records, and streamlined communication.",
    technologies: ["React", "Firebase", "Node.js"],
    color: "green",
  },

  /* =========================
     7. RESTAURANT ORDERING
  ========================= */

  {
    id: 7,
    title: "FlavorHub Restaurant Platform",
    category: "E-Commerce",
    industry: "Food & Restaurant",
    icon: <Utensils size={28} />,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    result: "2x Online Orders",
    description:
      "Online food ordering and restaurant management platform with digital menus, customer orders, delivery tracking, and admin controls.",
    technologies: ["React", "Firebase", "JavaScript"],
    color: "orange",
  },

  /* =========================
     8. REAL ESTATE
  ========================= */

  {
    id: 8,
    title: "PrimeSpace Real Estate",
    category: "Web Development",
    industry: "Real Estate",
    icon: <Home size={28} />,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    result: "4x Property Inquiries",
    description:
      "Modern property discovery website featuring residential listings, advanced property search, lead capture forms, and agent communication.",
    technologies: ["React", "Next.js", "MongoDB"],
    color: "purple",
  },

  /* =========================
     9. FINANCE DASHBOARD
  ========================= */

  {
    id: 9,
    title: "FinFlow Business Dashboard",
    category: "Software Solutions",
    industry: "Finance",
    icon: <Landmark size={28} />,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    result: "60% Faster Reporting",
    description:
      "Business finance dashboard for tracking revenue, expenses, invoices, analytics, and financial reports through a centralized system.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    color: "blue",
  },

  /* =========================
     10. FITNESS PLATFORM
  ========================= */

  {
    id: 10,
    title: "FitLife Training Platform",
    category: "Web Development",
    industry: "Fitness",
    icon: <Dumbbell size={28} />,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    result: "500+ Active Members",
    description:
      "Fitness and wellness platform offering training programs, membership plans, trainer profiles, progress tracking, and online consultation.",
    technologies: ["React", "Node.js", "Firebase"],
    color: "cyan",
  },

  /* =========================
     11. HOTEL BOOKING
  ========================= */

  {
    id: 11,
    title: "StayEase Hotel Booking",
    category: "E-Commerce",
    industry: "Hospitality",
    icon: <Hotel size={28} />,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    result: "35% More Direct Bookings",
    description:
      "Hotel booking platform with room availability, pricing, guest reservations, payment integration, and customer management features.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    color: "purple",
  },

  /* =========================
     12. EVENT MANAGEMENT
  ========================= */

  {
    id: 12,
    title: "EventFlow Management System",
    category: "Software Solutions",
    industry: "Events",
    icon: <CalendarDays size={28} />,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    result: "70% Less Manual Work",
    description:
      "Complete event management system for handling registrations, attendees, event schedules, tickets, notifications, and reporting.",
    technologies: ["React", "Express.js", "PostgreSQL"],
    color: "pink",
  },

  /* =========================
     13. AI BUSINESS ASSISTANT
  ========================= */

  {
    id: 13,
    title: "AI Business Assistant",
    category: "Software Solutions",
    industry: "Artificial Intelligence",
    icon: <BrainCircuit size={28} />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    result: "65% Faster Customer Response",
    description:
      "AI-powered business assistant designed to automate customer queries, generate intelligent responses, organize conversations, and improve productivity.",
    technologies: ["React", "Python", "OpenAI", "FastAPI"],
    color: "cyan",
  },

  /* =========================
     14. LOCAL SHOP E-COMMERCE
  ========================= */

  {
    id: 14,
    title: "LocalMart Online Store",
    category: "E-Commerce",
    industry: "Retail",
    icon: <Store size={28} />,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    result: "300+ Products Managed",
    description:
      "Complete online shopping platform with product catalog management, customer accounts, shopping cart, secure checkout, and order tracking.",
    technologies: ["React", "Firebase", "Stripe"],
    color: "green",
  },

  /* =========================
     15. CREATIVE AGENCY
  ========================= */

  {
    id: 15,
    title: "CreativeEdge Digital Agency",
    category: "Branding & Web",
    industry: "Digital Agency",
    icon: <Palette size={28} />,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    result: "3.5x More Client Leads",
    description:
      "Creative agency website designed to showcase branding services, digital campaigns, case studies, creative portfolios, and client inquiries.",
    technologies: ["React", "GSAP", "CSS3"],
    color: "pink",
  },
];

/* =========================================================
   PORTFOLIO STATS
========================================================= */

export const portfolioStats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Successfully completed across diverse industries.",
    icon: <BriefcaseBusiness size={30} />,
    color: "purple",
  },
  {
    value: "20+",
    label: "Happy Clients",
    description: "Long-term partnerships built on trust.",
    icon: <Users size={30} />,
    color: "blue",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations.",
    icon: <HeartPulse size={30} />,
    color: "green",
  },
  {
    value: "100+",
    label: "Students Trained",
    description: "Empowering future technology professionals.",
    icon: <GraduationCap size={30} />,
    color: "orange",
  },
];

export { ArrowUpRight };

/* =========================================================
   PORTFOLIO COMPONENT
========================================================= */

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    const searchText = searchQuery.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText) ||
      project.industry.toLowerCase().includes(searchText) ||
      project.category.toLowerCase().includes(searchText) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchText)
      );

    return matchesCategory && matchesSearch;
  });

  /* =========================================================
     IMAGE FALLBACK
  ========================================================= */

  const handleImageError = (e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80";
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="portfolio-header">
          <span className="portfolio-badge">
            OUR PORTFOLIO
          </span>

          <h2 className="portfolio-title">
            Featured{" "}
            <span className="highlight-text">
              Projects & Impact
            </span>
          </h2>

          <p className="portfolio-subtitle">
            Explore our featured client solutions spanning web
            applications, e-commerce, custom software, digital
            platforms, and creative branding.
          </p>
        </div>

        {/* =====================================================
            PORTFOLIO STATS
        ===================================================== */}

        <div className="portfolio-stats-grid">
          {portfolioStats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card stat-${stat.color}`}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>

              <div className="stat-info">
                <h3 className="stat-value">
                  {stat.value}
                </h3>

                <p className="stat-label">
                  {stat.label}
                </p>

                <p className="stat-desc">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            SEARCH & CATEGORY FILTER
        ===================================================== */}

        <div className="portfolio-controls">

          <div className="search-box">
            <Search
              size={18}
              className="search-icon"
            />

            <input
              type="text"
              placeholder="Search projects by name or technology..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
            />
          </div>

          <div className="category-tabs">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.name}
                className={`tab-btn ${
                  activeCategory === cat.name
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(cat.name)
                }
              >
                <span className="tab-icon">
                  {cat.icon}
                </span>

                <span>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* =====================================================
            PROJECT COUNT
        ===================================================== */}

        <div className="portfolio-result-info">
          <span>
            Showing <strong>{filteredProjects.length}</strong>{" "}
            of <strong>{projects.length}</strong> projects
          </span>
        </div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">

            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`project-card project-${project.color}`}
              >
                {/* PROJECT IMAGE */}

                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={handleImageError}
                  />

                  <div className="project-overlay">
                    <span className="result-pill">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* PROJECT BODY */}

                <div className="project-body">

                  <div className="project-meta">

                    <span className="category-tag">
                      {project.category}
                    </span>

                    <span className="industry-tag">
                      {project.industry}
                    </span>

                  </div>

                  <div className="project-heading-row">

                    <div className="project-icon">
                      {project.icon}
                    </div>

                    <h3 className="project-title">
                      {project.title}
                    </h3>

                  </div>

                  <p className="project-desc">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="tech-tags">

                    {project.technologies.map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="tech-tag"
                        >
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                </div>
              </article>
            ))}

          </div>
        ) : (

          <div className="no-projects">

            <div className="no-project-icon">
              <Search size={34} />
            </div>

            <h3>
              No matching projects found
            </h3>

            <p>
              Try searching with a different project name,
              technology, industry, or choose another category.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
            >
              Show All Projects
            </button>

          </div>
        )}

      </div>
    </section>
  );
}