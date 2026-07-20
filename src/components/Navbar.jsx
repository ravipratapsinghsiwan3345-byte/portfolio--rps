import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data";



const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-purple via-accent-blue to-accent-cyan flex items-center justify-center font-display font-bold text-white text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              R
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-accent-purple via-accent-blue to-accent-cyan opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold tracking-tight text-white group-hover:text-accent-purple transition-colors duration-300">
                Ravi Pratap
              </span>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                SENIOR ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Social CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 border border-accent-purple/20 text-xs font-semibold text-white tracking-wider uppercase hover:border-accent-purple/50 transition-all duration-300 shadow-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border py-8 px-6 shadow-xl flex flex-col space-y-6 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-lg font-medium py-2 px-3 rounded-xl transition-all ${
                      isActive
                        ? "text-accent-purple bg-accent-purple/5 border-l-2 border-accent-purple font-semibold"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="border-t border-dark-border pt-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-xl"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-xl"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-xl"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-xs font-bold text-white uppercase tracking-wider shadow-md"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
