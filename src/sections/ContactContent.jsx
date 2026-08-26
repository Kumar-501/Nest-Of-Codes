import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  User,
  FileText,
  MessageSquare,
  Send,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "../pages/Contact.css";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-page-section">
      <div className="contact-glow contact-glow-left" />
      <div className="contact-glow contact-glow-right" />

      <div className="contact-container">
        {/* ==============================
            HEADER
        ============================== */}

        <div className="contact-heading">
          <div className="contact-tag">
            <span className="contact-tag-dot" />
            GET IN TOUCH
          </div>

          <h1>
            Contact <span>Us</span>
          </h1>

          <div className="contact-title-line">
            <span />
          </div>

          <p>
            Have a project in mind or need expert guidance?
            <br />
            We're here to help you build, grow, and scale your ideas.
          </p>
        </div>

        {/* ==============================
            MAIN CONTACT AREA
        ============================== */}

        <div className="contact-grid">
          {/* LEFT SIDE */}

          <div className="contact-info-panel">
            <div className="panel-title">
              <h2>Let's Start a Conversation</h2>
              <div className="small-title-line" />
            </div>

            <p className="contact-description">
              Whether you have a question, want to discuss a project,
              or need support — feel free to reach out.
            </p>

            {/* Email */}

            <div className="contact-info-card">
              <div className="contact-icon email-icon">
                <Mail size={30} />
              </div>

              <div>
                <h3>Email Us</h3>

                <a href="mailto:nestofcodes@gmail.com">
                  nestofcodes@gmail.com
                </a>

              </div>
            </div>

            {/* Phone */}

            <div className="contact-info-card">
              <div className="contact-icon phone-icon">
                <Phone size={29} />
              </div>

              <div>
                <h3>Call Us</h3>

                <a href="tel:+919344689428">
                  +91 93446 89428
                </a>

                <a href="tel:+916379492947">
                  +91 63794 92947
                </a>
              </div>
            </div>

            {/* Location */}

            <div className="contact-info-card">
              <div className="contact-icon location-icon">
                <MapPin size={30} />
              </div>

              <div>
                <h3>Our Location</h3>

                <p>
                  Chennai, Tamil Nadu,
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Working Hours */}

            <div className="contact-info-card">
              <div className="contact-icon time-icon">
                <Clock3 size={30} />
              </div>

              <div>
                <h3>Working Hours</h3>

                <p>
                  Monday - Saturday: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="contact-form-panel">
            <div className="form-heading">
              <h2>Send Us a Message</h2>
              <div className="purple-title-line" />

              <p>
                Fill out the form below and our team will get back to you soon.
              </p>
            </div>

            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={20} />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                {/* Name */}

                <div className="form-group">
                  <label>
                    Your Name <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <User size={20} />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}

                <div className="form-group">
                  <label>
                    Your Email <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Mail size={20} />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                {/* Phone */}

                <div className="form-group">
                  <label>
                    Your Phone <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <Phone size={20} />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}

                <div className="form-group">
                  <label>
                    Subject <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <FileText size={20} />

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a subject
                      </option>

                      <option value="Web Development">
                        Web Development
                      </option>

                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>

                      <option value="Software Development">
                        Software Development
                      </option>

                      <option value="Cloud & DevOps">
                        Cloud & DevOps
                      </option>

                      <option value="AI & Automation">
                        AI & Automation
                      </option>

                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>

                      <option value="Internship">
                        Internship
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}

              <div className="form-group message-group">
                <label>
                  Your Message <span>*</span>
                </label>

                <div className="textarea-wrapper">
                  <MessageSquare size={20} />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="6"
                    required
                  />
                </div>
              </div>

              {/* Bottom Form */}

              <div className="form-bottom">
                <button
                  type="submit"
                  className="send-message-btn"
                >
                  <span>Send Message</span>

                  <Send size={20} />
                </button>

                <div className="privacy-text">
                  <div className="privacy-icon">
                    <ShieldCheck size={24} />
                  </div>

                  <p>
                    We respect your privacy.
                    <br />
                    <span>Your information is safe with us.</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* ==============================
            BOTTOM CTA
            NO 50+, 99%, 5+
        ============================== */}

        <div className="contact-bottom-cta">
          <div className="cta-icon">
            <Send size={42} />
          </div>

          <div className="cta-content">
            <h2>
              Let's build something
              <br />
              <span>amazing</span> together!
            </h2>

            <p>
              Share your idea with us and let's create something exceptional.
            </p>
          </div>

          <a
            href="#contact"
            className="cta-arrow"
            aria-label="Start your project"
          >
            <ArrowRight size={27} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;