import React from "react";
import { Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start mb-12">
          {/* Column 1: Branding */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center font-display font-bold text-white text-base">
                R
              </div>
              <span className="font-display font-semibold tracking-tight text-white text-base">
                Ravi Pratap Singh
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Senior Full Stack MERN Developer specializing in high-end, responsive architectures, distributed cloud engines, and advanced algorithmic design.
            </p>
          </div>

          {/* Column 2: Sitemap */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Navigation Index</h4>
            <ul className="space-y-2 text-xs font-mono">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & SLA */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Connect Channel</h4>
            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
                aria-label="Mail Ravi"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[10px] font-mono text-gray-500">
              SLA Standard response times apply.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-mono text-gray-500">
            © {new Date().getFullYear()} Ravi Pratap Singh. All Rights Reserved. Engineered with precision.
          </span>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 text-gray-500 hover:text-white text-xs font-mono tracking-wider transition-colors cursor-pointer group"
          >
            <span>BACK TO APEX</span>
            <ArrowUpCircle className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-accent-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
}
