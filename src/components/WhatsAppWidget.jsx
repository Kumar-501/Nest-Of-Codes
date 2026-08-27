import { useState, useEffect, useRef } from "react";
import "./WhatsAppWidget.css";

const WHATSAPP_NUMBER = "9344689428";
const PHONE_NUMBER = "9344689428";
const PRE_FILLED_MESSAGE = encodeURIComponent(
  "Hello Nest of Codes Team,\nI am interested in your services and would like to discuss my project requirements."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`;

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  // Entrance animation delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-open tooltip hint after 4s (only once)
  useEffect(() => {
    if (!isVisible || hasGreeted) return;
    const timer = setTimeout(() => setHasGreeted(true), 4000);
    return () => clearTimeout(timer);
  }, [isVisible, hasGreeted]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isOpen &&
        cardRef.current &&
        !cardRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  const toggleWidget = () => {
    setIsOpen((prev) => !prev);
    setHasGreeted(true);
  };

  return (
    <div
      className={`noc-wa-root ${isVisible ? "noc-wa-root--visible" : ""}`}
      role="region"
      aria-label="WhatsApp Contact Widget"
    >
      {/* ── Expanded Chat Card ── */}
      <div
        ref={cardRef}
        className={`noc-wa-card ${isOpen ? "noc-wa-card--open" : ""}`}
        role="dialog"
        aria-modal="false"
        aria-label="Chat with Nest of Codes"
      >
        {/* Card Header */}
        <div className="noc-wa-card__header">
          <div className="noc-wa-card__header-glow" aria-hidden="true" />
          <div className="noc-wa-card__avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.103 1.518 5.829L0 24l6.335-1.518A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-4.99-1.367l-.358-.213-3.76.9.916-3.661-.235-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
          </div>
          <div className="noc-wa-card__header-info">
            <span className="noc-wa-card__company">
              Nest of Codes
              <span className="noc-wa-card__company-suffix">
                {" "}Technologies
              </span>
            </span>
            <span className="noc-wa-card__reply-time">
              <span className="noc-wa-card__status-dot" aria-hidden="true" />
              Typically replies within minutes
            </span>
          </div>
          <button
            className="noc-wa-card__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat widget"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Chat Bubble */}
        <div className="noc-wa-card__body">
          <div className="noc-wa-card__bubble-wrap">
            <div className="noc-wa-card__bubble" aria-live="polite">
              <p>
                Need a <strong>website</strong>, <strong>mobile app</strong>,{" "}
                <strong>software solution</strong>, or{" "}
                <strong>AI integration</strong>? Looking for internship details
                or certification info?
              </p>
              <p>We&rsquo;re here to help — let&rsquo;s build something great together.</p>
              <span className="noc-wa-card__bubble-time" aria-hidden="true">
                Just now
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="noc-wa-card__footer">
          <button
            className="noc-wa-card__cta noc-wa-card__cta--primary"
            onClick={handleWhatsApp}
            aria-label="Start WhatsApp chat with Nest of Codes"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.103 1.518 5.829L0 24l6.335-1.518A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-4.99-1.367l-.358-.213-3.76.9.916-3.661-.235-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Start WhatsApp Chat
          </button>
          <button
            className="noc-wa-card__cta noc-wa-card__cta--secondary"
            onClick={handleCall}
            aria-label="Call Nest of Codes"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.19 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            Call Now
          </button>
        </div>

        <div className="noc-wa-card__bottom-bar" aria-hidden="true">
          <span>Secured &amp; Private</span>
          <span className="noc-wa-card__dot-sep">·</span>
          <span>Nest of Codes © {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* ── Floating Trigger Button ── */}
      <div className="noc-wa-trigger-wrap">
        {/* Tooltip */}
        {!isOpen && (
          <div
            className={`noc-wa-tooltip ${hasGreeted ? "noc-wa-tooltip--visible" : ""}`}
            role="tooltip"
            id="noc-wa-tooltip"
          >
            <span>Chat With Us</span>
            <div className="noc-wa-tooltip__arrow" aria-hidden="true" />
          </div>
        )}

        {/* Main Button */}
        <button
          ref={buttonRef}
          className={`noc-wa-btn ${isOpen ? "noc-wa-btn--active" : ""}`}
          onClick={toggleWidget}
          aria-label={isOpen ? "Close WhatsApp widget" : "Open WhatsApp chat"}
          aria-expanded={isOpen}
          aria-controls="noc-wa-chat-card"
          aria-describedby={!isOpen ? "noc-wa-tooltip" : undefined}
        >
          {/* Pulse rings */}
          {!isOpen && (
            <>
              <span className="noc-wa-pulse noc-wa-pulse--1" aria-hidden="true" />
              <span className="noc-wa-pulse noc-wa-pulse--2" aria-hidden="true" />
            </>
          )}

          {/* Online indicator */}
          <span className="noc-wa-online" aria-label="Online" aria-hidden="true" />

          {/* Icon: WhatsApp ↔ Close */}
          <span className={`noc-wa-btn__icon noc-wa-btn__icon--wa ${isOpen ? "noc-wa-btn__icon--hidden" : ""}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.103 1.518 5.829L0 24l6.335-1.518A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-4.99-1.367l-.358-.213-3.76.9.916-3.661-.235-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
          </span>
          <span className={`noc-wa-btn__icon noc-wa-btn__icon--close ${!isOpen ? "noc-wa-btn__icon--hidden" : ""}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}