import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AmbientBackground from "./components/AmbientBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GitHub from "./components/GitHub";
import LinkedIn from "./components/LinkedIn";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      // Include an offset to align selection highlights accurately with the navbar header height
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial calculation
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans antialiased selection:bg-accent-purple/30 selection:text-white relative overflow-x-hidden">
      {/* High-fidelity interactive background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AmbientBackground />
      </div>

      {/* Elegant Sticky Navigation */}
      <div className="relative z-50">
        <Navbar activeSection={activeSection} />
      </div>

      {/* Structured Layout Modules */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section (Timeline & Certifications) */}
        <Experience />

        {/* GitHub Analytics Section */}
        <GitHub />

        {/* LinkedIn Connection Section */}
        <LinkedIn />

        {/* Form Contact Section */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

