import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/tokens.css";
import "./Products.css";

/* ----------------------------------------------------------------------
   useReveal — lightweight IntersectionObserver hook for scroll reveals.
   Reusable across both product pages.
---------------------------------------------------------------------- */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ----------------------------------------------------------------------
   Aperture — the page's signature motif: concentric rings that read as
   a "buying window" opening. Reused in the hero and the roadmap spine.
---------------------------------------------------------------------- */
function Aperture({ size = 420, active = true, className = "" }) {
  return (
    <svg
      className={`aperture ${active ? "aperture--active" : ""} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 420 420"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="aperture__ring aperture__ring--1" cx="210" cy="210" r="200" />
      <circle className="aperture__ring aperture__ring--2" cx="210" cy="210" r="150" />
      <circle className="aperture__ring aperture__ring--3" cx="210" cy="210" r="100" />
      <circle className="aperture__core" cx="210" cy="210" r="6" />
    </svg>
  );
}

function Reveal({ as: Tag = "div", children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------------
   Section primitives
---------------------------------------------------------------------- */
function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function PillarCard({ title, description, index }) {
  return (
    <Reveal as="article" className="pillar-card" delay={index * 70}>
      <span className="pillar-card__index">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="pillar-card__title">{title}</h3>
      <p className="pillar-card__desc">{description}</p>
    </Reveal>
  );
}

const PILLARS = [
  { title: "Enterprise Ready", description: "Built to sit inside existing banking infrastructure, governance, and change-management processes from day one." },
  { title: "AI Powered", description: "Models trained to surface decisions, not dashboards — intelligence that points to an action, not just a number." },
  { title: "Cloud Native", description: "Deployed on elastic, multi-tenant cloud architecture that scales with transaction and customer volume." },
  { title: "Explainable AI", description: "Every recommendation carries the reasoning behind it, so relationship managers can trust and act on it." },
  { title: "Scalable", description: "One architecture, engineered to extend from a single branch to a nationwide relationship network." },
  { title: "Secure", description: "Enterprise authentication, encryption, and audit trails designed for regulated financial environments." },
];

const ROADMAP = [
  { name: "AI Relationship Copilot", detail: "Buying Window Intelligence for banking relationship managers.", live: true },
  { name: "Insurance Intelligence", detail: "Identifying coverage and renewal moments before the customer asks." },
  { name: "Revenue Intelligence", detail: "Mapping account signals to revenue opportunity, ranked by confidence." },
  { name: "Sales Intelligence", detail: "Guiding sales teams to the right account at the right moment." },
  { name: "Customer Intelligence", detail: "A single intelligence layer across every customer touchpoint." },
];

const INDUSTRIES = ["Banking", "Insurance", "Financial Services", "Telecom", "Healthcare", "Retail", "Manufacturing"];

export default function Products() {
  return (
    <main className="products-page">
      {/* ============================= HERO ============================= */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__field" aria-hidden="true">
          <Aperture size={640} className="hero__aperture" />
          <div className="hero__grid" />
        </div>

        <div className="hero__content">
          <Reveal as="p" className="hero__badge">Enterprise Products</Reveal>
          <Reveal as="h1" id="hero-heading" className="hero__title" delay={80}>
            Building the Future of<br />Enterprise Intelligence
          </Reveal>
          <Reveal as="p" className="hero__subtitle" delay={160}>
            Nest Of Codes develops intelligent enterprise software that transforms
            business decisions using artificial intelligence, automation, and
            scalable cloud technologies.
          </Reveal>
          <Reveal className="hero__actions" delay={240}>
            <a href="#flagship" className="btn btn--primary">Explore Our Products</a>
            <a href="#cta" className="btn btn--ghost">Talk to Our Team</a>
          </Reveal>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ========================= FLAGSHIP PRODUCT ======================= */}
      <section className="flagship" id="flagship" aria-labelledby="flagship-heading">
        <Reveal as="article" className="flagship__card">
          <div className="flagship__glow" aria-hidden="true" />
          <span className="flagship__badge">Flagship Enterprise Product</span>
          <h2 id="flagship-heading" className="flagship__product">AI Relationship Copilot</h2>
          <p className="flagship__tagline">
            Redefining Relationship Management Through Buying Window Intelligence
          </p>
          <p className="flagship__desc">
            An enterprise intelligence platform designed to help relationship
            managers identify customer opportunities using explainable
            intelligence instead of assumptions.
          </p>
          <Link to="/products/ai-relationship-copilot" className="btn btn--primary flagship__cta">
            Explore AI Relationship Copilot
          </Link>
        </Reveal>
      </section>

      {/* ====================== WHY ENTERPRISE PRODUCTS ==================== */}
      <section className="pillars" aria-labelledby="pillars-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Why Enterprise Products</Eyebrow>
          <h2 id="pillars-heading" className="section-title">
            Engineered for institutions, not demos
          </h2>
        </Reveal>
        <div className="pillars__grid">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </section>

      {/* ============================ ROADMAP ============================= */}
      <section className="roadmap" aria-labelledby="roadmap-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Enterprise Product Vision</Eyebrow>
          <h2 id="roadmap-heading" className="section-title">
            One intelligence layer, expanding by design
          </h2>
        </Reveal>

        <ol className="roadmap__spine">
          {ROADMAP.map((item, i) => (
            <Reveal as="li" key={item.name} className="roadmap__item" delay={i * 90}>
              <div className="roadmap__marker">
                <Aperture size={64} active={item.live} className="roadmap__aperture" />
              </div>
              <div className="roadmap__body">
                <div className="roadmap__name-row">
                  <h3 className="roadmap__name">{item.name}</h3>
                  {item.live && <span className="roadmap__tag">In Market</span>}
                </div>
                <p className="roadmap__detail">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ============================ INDUSTRIES =========================== */}
      <section className="industries" aria-labelledby="industries-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Where It Works</Eyebrow>
          <h2 id="industries-heading" className="section-title">Industries we build for</h2>
        </Reveal>
        <Reveal className="industries__row">
          {INDUSTRIES.map((name) => (
            <span key={name} className="industries__chip">{name}</span>
          ))}
        </Reveal>
      </section>

      {/* =========================== PHILOSOPHY ============================ */}
      <section className="philosophy" aria-labelledby="philosophy-heading">
        <Reveal as="blockquote" className="philosophy__quote" id="philosophy-heading">
          “We don’t build software.<br />
          We engineer intelligent enterprise products<br />
          that help businesses make better decisions.”
        </Reveal>
      </section>

      {/* =============================== CTA =============================== */}
      <section className="final-cta" id="cta" aria-labelledby="cta-heading">
        <Reveal as="h2" id="cta-heading" className="final-cta__title">
          Ready to Explore Enterprise Intelligence?
        </Reveal>
        <Reveal className="final-cta__actions" delay={100}>
          <Link to="/products/ai-relationship-copilot" className="btn btn--primary">
            Explore AI Relationship Copilot
          </Link>
          <a href="#contact" className="btn btn--ghost">Contact Our Team</a>
        </Reveal>
      </section>
    </main>
  );
}