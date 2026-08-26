import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Home Page Sections
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import TechnologyStack from "./components/TechnologyStack";

import AboutContent from "./sections/AboutContent";
import PortfolioContent from "./sections/PortfolioContent";
import ContactContent from "./sections/ContactContent";

// Product Pages
import Products from "./pages/Products/Products";
import AIRelationshipCopilot from "./pages/Products/AIRelationshipCopilot";

/* ================================
   Home Page
================================ */

function HomePage() {
  return (
    <>
      {/* Wrapped Hero inside #home section for accurate scrolling */}
      <section id="home" aria-label="Hero">
        <Hero />
      </section>

      <section id="about" aria-label="About">
        <AboutContent />
      </section>

      <section id="services" aria-label="Services">
        <Services />
      </section>

      <section id="why-choose-us" aria-label="Why Choose Us">
        <WhyChooseUs />
      </section>

      <section id="technologies" aria-label="Technologies">
        <TechnologyStack />
      </section>

      <section id="portfolio" aria-label="Portfolio">
        <PortfolioContent />
      </section>

      <section id="contact" aria-label="Contact">
        <ContactContent />
      </section>
    </>
  );
}

/* ================================
   Main App
================================ */

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>

            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Products */}
            <Route path="/products" element={<Products />} />

            {/* AI Relationship Copilot */}
            <Route
              path="/products/ai-relationship-copilot"
              element={<AIRelationshipCopilot />}
            />

          </Routes>
        </main>

        <Footer />

        {/* Global WhatsApp Widget */}
        <WhatsAppWidget />
      </BrowserRouter>
    </ThemeProvider>
  );
}