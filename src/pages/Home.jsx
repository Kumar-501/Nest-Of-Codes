import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import TechnologyStack from "../components/TechnologyStack";
import AboutSection from "./About";
import PortfolioSection from "./Portfolio";
import ContactSection from "./Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TechnologyStack />
    </>
  );
}
