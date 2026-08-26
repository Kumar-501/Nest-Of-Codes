import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/tokens.css";
import "./AIRelationshipCopilot.css";

/* ----------------------------------------------------------------------
   useReveal — shared scroll-reveal hook (mirrors Products.jsx)
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

function Reveal({ as: Tag = "div", children, className = "", delay = 0, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

/* ----------------------------------------------------------------------
   Aperture — signature "buying window" motif, reused from Products page
---------------------------------------------------------------------- */
function Aperture({ size = 420, className = "" }) {
  return (
    <svg
      className={`arc-aperture ${className}`}
      width={size}
      height={size}
      viewBox="0 0 420 420"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="arc-aperture__ring arc-aperture__ring--1" cx="210" cy="210" r="200" />
      <circle className="arc-aperture__ring arc-aperture__ring--2" cx="210" cy="210" r="150" />
      <circle className="arc-aperture__ring arc-aperture__ring--3" cx="210" cy="210" r="100" />
      <circle className="arc-aperture__core" cx="210" cy="210" r="6" />
    </svg>
  );
}

/* ----------------------------------------------------------------------
   Data
---------------------------------------------------------------------- */
const CAPABILITIES = [
  { title: "Buying Window Intelligence", desc: "Surfaces the moments a customer is most likely to act, before the opportunity closes." },
  { title: "Opportunity Intelligence", desc: "Ranks every open opportunity by potential, so effort goes where it matters most." },
  { title: "Explainable AI", desc: "Every recommendation ships with the reasoning behind it — no black box, no guesswork." },
  { title: "Enterprise Security", desc: "Role-based access, encryption, and audit trails built for regulated institutions." },
  { title: "Customer Timeline", desc: "A single, chronological view of every signal and interaction across the relationship." },
  { title: "Recommendation Engine", desc: "Turns raw signals into a next best action, tailored to each relationship manager's book." },
  { title: "Smart Insights", desc: "Plain-language summaries that explain what changed and why it matters, today." },
  { title: "Scalable Architecture", desc: "One platform, engineered to run from a single branch to an entire institution." },
];

const FLOW = [
  { label: "Customer Signals", detail: "Behavioral, transactional, and relationship data arrive continuously." },
  { label: "Intelligent Analysis", detail: "Signals are read in context, against the customer's own history." },
  { label: "Buying Window Detection", detail: "Moments of readiness are identified as they form." },
  { label: "Opportunity Ranking", detail: "Every opportunity is scored and ordered by potential." },
  { label: "Relationship Manager Dashboard", detail: "The right customer surfaces, with the reasoning attached." },
  { label: "Customer Conversation", detail: "The relationship manager acts — informed, and on time." },
];

const COMPARISON = [
  { trait: "Core focus", crm: "Stores and organizes customer data", copilot: "Turns customer data into a decision" },
  { trait: "What it tells you", crm: "What happened", copilot: "What to do next, and why" },
  { trait: "Prioritization", crm: "Manual, by the relationship manager", copilot: "Ranked automatically by opportunity potential" },
  { trait: "Timing", crm: "Static records, checked on demand", copilot: "Live detection of buying windows" },
  { trait: "Reasoning", crm: "Not provided", copilot: "Explainable, on every recommendation" },
];

const SECURITY = [
  { title: "Encryption", desc: "Data encrypted in transit and at rest, throughout the platform." },
  { title: "Role Based Access", desc: "Every user sees exactly what their role permits, and nothing more." },
  { title: "Audit Logs", desc: "A complete, immutable record of every action taken on the platform." },
  { title: "Secure Cloud", desc: "Hosted on hardened, enterprise-grade cloud infrastructure." },
  { title: "Enterprise Authentication", desc: "Single sign-on and multi-factor authentication, ready for institutional identity providers." },
];

/* ----------------------------------------------------------------------
   Dashboard preview — illustrative, not real customer data
---------------------------------------------------------------------- */
function DashboardPreview() {
  return (
    <div className="dash" role="img" aria-label="Preview of the AI Relationship Copilot dashboard, showing opportunity cards, a customer timeline, and AI-generated insights">
      <div className="dash__top">
        <div className="dash__kpis">
          <div className="dash__kpi">
            <span className="dash__kpi-label">Open Windows</span>
            <span className="dash__kpi-value">18</span>
          </div>
          <div className="dash__kpi">
            <span className="dash__kpi-label">High Potential</span>
            <span className="dash__kpi-value dash__kpi-value--gold">6</span>
          </div>
          <div className="dash__kpi">
            <span className="dash__kpi-label">Avg. Confidence</span>
            <span className="dash__kpi-value dash__kpi-value--signal">High</span>
          </div>
        </div>
        <div className="dash__chart" aria-hidden="true">
          <svg viewBox="0 0 300 90" preserveAspectRatio="none" className="dash__chart-svg">
            <polyline
              points="0,70 40,55 80,60 120,35 160,42 200,20 240,28 300,10"
              fill="none"
              stroke="var(--signal)"
              strokeWidth="2"
            />
            <polyline
              points="0,70 40,55 80,60 120,35 160,42 200,20 240,28 300,10 300,90 0,90"
              fill="url(#dashFade)"
              stroke="none"
            />
            <defs>
              <linearGradient id="dashFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="dash__body">
        <div className="dash__opportunities">
          <span className="dash__section-label">Ranked Opportunities</span>
          {[
            { name: "A. Sharma — Business Banking", tag: "Working Capital", score: 92 },
            { name: "R. Menon — Private Banking", tag: "Portfolio Review", score: 87 },
            { name: "K. Nair — Retail Banking", tag: "Home Loan Top-up", score: 74 },
          ].map((o) => (
            <div className="dash__opp" key={o.name}>
              <div className="dash__opp-main">
                <span className="dash__opp-name">{o.name}</span>
                <span className="dash__opp-tag">{o.tag}</span>
              </div>
              <div className="dash__opp-score">
                <div className="dash__opp-bar">
                  <div className="dash__opp-fill" style={{ width: `${o.score}%` }} />
                </div>
                <span className="dash__opp-num">{o.score}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dash__side">
          <span className="dash__section-label">AI Insight</span>
          <p className="dash__insight">
            A. Sharma’s transaction pattern indicates a working capital
            need forming this week — reach out before the window closes.
          </p>
          <span className="dash__section-label dash__section-label--spaced">Timeline</span>
          <ul className="dash__timeline">
            <li>Signal detected — cash flow shift</li>
            <li>Window opened — working capital</li>
            <li>Ranked — high potential</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ======================================================================
   PAGE
   ====================================================================== */
export default function AIRelationshipCopilot() {
  return (
    <main className="arc-page">
      {/* ================================ HERO ================================ */}
      <section className="arc-hero" aria-labelledby="arc-hero-heading">
        <div className="arc-hero__field" aria-hidden="true">
          <Aperture size={720} className="arc-hero__aperture" />
        </div>
        <div className="arc-hero__content">
          <Reveal as="p" className="eyebrow eyebrow--center">AI Relationship Copilot</Reveal>
          <Reveal as="h1" id="arc-hero-heading" className="arc-hero__title" delay={90}>
            Redefining Relationship Management<br />Through Buying Window Intelligence
          </Reveal>
          <Reveal className="arc-hero__actions" delay={220}>
            <a href="#vision" className="btn btn--primary">Explore the Vision</a>
            <a href="#demo" className="btn btn--ghost">Request Enterprise Demo</a>
          </Reveal>
        </div>
      </section>

      {/* ============================= THE CHALLENGE =========================== */}
      <section className="challenge" aria-labelledby="challenge-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>The Challenge</Eyebrow>
          <h2 id="challenge-heading" className="section-title">
            Relationship managers have data. Rarely direction.
          </h2>
        </Reveal>
        <div className="challenge__grid">
          {[
            "Who should be contacted today.",
            "Why today matters.",
            "Which opportunity has the highest potential.",
          ].map((line, i) => (
            <Reveal as="p" key={line} className="challenge__line" delay={i * 90}>
              {line}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ HIDDEN OPPORTUNITY ======================= */}
      <section className="hidden-opp" aria-labelledby="hidden-opp-heading">
        <Reveal as="div" className="hidden-opp__inner">
          <Eyebrow>The Hidden Opportunity</Eyebrow>
          <h2 id="hidden-opp-heading" className="section-title">
            Every customer has a moment.
          </h2>
          <p className="hidden-opp__body">
            A point where they are more likely to need a financial product
            than at any other time. Most software has no way to see it —
            the moment passes, unnoticed, in a system built only to record.
          </p>
        </Reveal>
      </section>

      {/* ============================ INTRODUCING BWI =========================== */}
      <section className="intro-bwi" id="vision" aria-labelledby="intro-bwi-heading">
        <div className="intro-bwi__visual" aria-hidden="true">
          <Aperture size={360} />
        </div>
        <Reveal as="div" className="intro-bwi__copy">
          <Eyebrow>Introducing Buying Window Intelligence</Eyebrow>
          <h2 id="intro-bwi-heading" className="section-title">
            The moment, made visible.
          </h2>
          <p className="intro-bwi__body">
            Buying Window Intelligence is a way of reading the relationship
            itself — recognizing when a customer's circumstances open a
            window of readiness, and surfacing it to the relationship
            manager while it's still open. Not a report. A moment, acted on.
          </p>
        </Reveal>
      </section>

      {/* ========================= ENTERPRISE CAPABILITIES ====================== */}
      <section className="capabilities" aria-labelledby="capabilities-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Enterprise Capabilities</Eyebrow>
          <h2 id="capabilities-heading" className="section-title">
            Built to run the whole relationship
          </h2>
        </Reveal>
        <div className="capabilities__grid">
          {CAPABILITIES.map((c, i) => (
            <Reveal as="article" key={c.title} className="cap-card" delay={(i % 4) * 70}>
              <h3 className="cap-card__title">{c.title}</h3>
              <p className="cap-card__desc">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================== HOW IT WORKS ============================ */}
      <section className="flow" aria-labelledby="flow-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>How It Works</Eyebrow>
          <h2 id="flow-heading" className="section-title">From signal to conversation</h2>
        </Reveal>
        <ol className="flow__list">
          {FLOW.map((step, i) => (
            <Reveal as="li" key={step.label} className="flow__step" delay={i * 90}>
              <span className="flow__dot" aria-hidden="true" />
              {i < FLOW.length - 1 && <span className="flow__line" aria-hidden="true" />}
              <div className="flow__text">
                <h3 className="flow__label">{step.label}</h3>
                <p className="flow__detail">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* =============================== DIFFERENT =============================== */}
      <section className="different" aria-labelledby="different-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Why It Is Different</Eyebrow>
          <h2 id="different-heading" className="section-title">
            Decision intelligence, not data storage
          </h2>
        </Reveal>
        <Reveal className="compare">
          <div className="compare__row compare__row--head">
            <span className="compare__cell compare__cell--trait" />
            <span className="compare__cell compare__cell--head">Traditional CRM</span>
            <span className="compare__cell compare__cell--head compare__cell--highlight">AI Relationship Copilot</span>
          </div>
          {COMPARISON.map((row) => (
            <div className="compare__row" key={row.trait}>
              <span className="compare__cell compare__cell--trait">{row.trait}</span>
              <span className="compare__cell">{row.crm}</span>
              <span className="compare__cell compare__cell--highlight">{row.copilot}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ============================ DASHBOARD PREVIEW =========================== */}
      <section className="dash-section" aria-labelledby="dash-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Enterprise Dashboard Preview</Eyebrow>
          <h2 id="dash-heading" className="section-title">Where the moment becomes a decision</h2>
        </Reveal>
        <Reveal className="dash-wrap">
          <DashboardPreview />
        </Reveal>
      </section>

      {/* ============================== SECURITY ================================ */}
      <section className="security" aria-labelledby="security-heading">
        <Reveal as="div" className="section-head">
          <Eyebrow>Enterprise Security</Eyebrow>
          <h2 id="security-heading" className="section-title">Built for regulated institutions</h2>
        </Reveal>
        <div className="security__grid">
          {SECURITY.map((s, i) => (
            <Reveal as="article" key={s.title} className="security__card" delay={i * 70}>
              <h3 className="security__title">{s.title}</h3>
              <p className="security__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================ VISION ================================ */}
      <section className="arc-vision" aria-labelledby="arc-vision-heading">
        <Reveal as="blockquote" className="arc-vision__quote" id="arc-vision-heading">
          “We believe enterprise software should not only manage data.<br />
          It should help people make better decisions.”
        </Reveal>
      </section>

      {/* ================================ FINAL CTA ============================== */}
      <section className="arc-final-cta" id="demo" aria-labelledby="arc-cta-heading">
        <Reveal as="h2" id="arc-cta-heading" className="arc-final-cta__title">
          Ready to Explore the Future of Relationship Intelligence?
        </Reveal>
        <Reveal className="arc-final-cta__actions" delay={100}>
          <a href="#demo-form" className="btn btn--primary">Request Enterprise Demo</a>
          <Link to="/products" className="btn btn--ghost">Talk to Our Team</Link>
        </Reveal>
      </section>
    </main>
  );
}