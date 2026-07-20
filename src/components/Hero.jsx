import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Shield, Box, Code, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "../data";

const TYPING_ROLES = [
  "Senior Full Stack Developer",
  "MERN Stack Architect",
  "High-Performance System Programmer",
  "Data Structures & Algorithms Specialist"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation controller
  useEffect(() => {
    let timer;
    const currentRole = TYPING_ROLES[roleIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && typedText === currentRole) {
      // Wait before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollToSection = (targetId) => {
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

  const handleDownloadResume = () => {
    const resumeText = `
RAVI PRATAP SINGH - SENIOR FULL STACK DEVELOPER
=============================================
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
Highly skilled Full Stack MERN Developer with 4+ years of industry experience building high-performance web applications, robust REST APIs, and efficient database architectures. Passionate about engineering elegant, secure systems.

TECHNICAL EXPERTISE:
- Languages: C, C++, JavaScript (ES6+), Python, SQL
- MERN: React.js, Node.js, Express.js, MongoDB
- Concepts: Data Structures & Algorithms, Cloud Computing, REST API Design, OAuth
    `;
    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ravi_Pratap_Singh_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* High-fidelity tech grid pattern background overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-50" />

      {/* Visual background ambient glow gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-accent-purple/10 rounded-full blur-[120px] ambient-glow"
        />
        <motion.div
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-accent-blue/10 rounded-full blur-[140px] ambient-glow"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0b0f19_100%)]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 sm:pt-12">
          
          {/* Left Column: Bio and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Modern Intro Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              <span className="text-xs font-mono font-medium tracking-wider text-gray-300 uppercase">
                Available for Senior Roles & Consulting
              </span>
            </motion.div>

            {/* Large Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 font-mono text-sm sm:text-base tracking-widest uppercase mb-3"
            >
              Hello, I'm {PERSONAL_INFO.name}
            </motion.p>

            {/* Professional Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white leading-[1.1] mb-6"
            >
              Senior <span className="text-gradient-tricolor">MERN Developer</span> & Architect
            </motion.h1>

            {/* Typing effect sub-heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="h-8 sm:h-10 flex items-center justify-center lg:justify-start space-x-2 text-base sm:text-xl font-mono text-gray-300 mb-6 w-full"
            >
              <Terminal className="w-5 h-5 text-accent-purple shrink-0" />
              <span className="font-semibold text-white truncate max-w-[85%] sm:max-w-none">
                {typedText}
              </span>
              <span className="w-1.5 h-5 sm:h-6 bg-accent-purple animate-ping"></span>
            </motion.div>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-10"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full max-w-md"
            >
              <button
                onClick={() => handleScrollToSection("contact")}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue font-semibold text-white text-sm shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/35 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 overflow-hidden cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 font-semibold text-white text-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium High-Tech Orbiting Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 xl:w-[25rem] xl:h-[25rem] flex items-center justify-center"
            >
              {/* Pulsing Back Glow Rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/25 via-accent-cyan/15 to-accent-blue/25 rounded-full blur-3xl animate-pulse" />
              
              {/* Spinning Tech Outer Rings / Concentric orbits matching reference mockup */}
              <svg className="absolute w-[114%] h-[114%] pointer-events-none text-accent-purple/30 animate-[spin_40s_linear_infinite]" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#orbit-grad-1)" strokeWidth="1.2" strokeDasharray="4,8" />
              </svg>
              <svg className="absolute w-[124%] h-[124%] pointer-events-none text-accent-cyan/25 animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="orbit-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="95" fill="none" stroke="url(#orbit-grad-2)" strokeWidth="1.5" strokeDasharray="30,25" />
              </svg>

              {/* Portrait Squircle Mask Box with Border Glow */}
              <div className="relative w-[80%] h-[80%] rounded-[3.2rem] overflow-hidden bg-gradient-to-tr from-accent-purple via-accent-cyan to-accent-blue p-[3px] shadow-[0_0_50px_rgba(168,85,247,0.25)] group transition-all duration-500 hover:shadow-[0_0_65px_rgba(6,182,212,0.35)]">
                <div className="w-full h-full rounded-[3rem] overflow-hidden bg-[#03050c] relative flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-contain rounded-[3rem] scale-100 hover:scale-[1.05] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Floating Orbiting Tech Badges */}
              
              {/* Badge 1: MERN Stack (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[4%] right-[-10%] bg-[#080c16]/95 backdrop-blur-md border-2 border-[#a855f7]/70 px-4 py-2.5 rounded-2xl flex items-center space-x-2.5 shadow-[0_0_20px_rgba(168,85,247,0.35)] z-20 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-5.5 h-5.5 rounded bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7]">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-sans font-extrabold tracking-wider text-white uppercase">Mern Stack</span>
              </motion.div>

              {/* Badge 2: Docker (Mid Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-[-16%] top-[42%] bg-[#080c16]/95 backdrop-blur-md border-2 border-[#3b82f6]/70 px-4 py-2.5 rounded-2xl flex items-center space-x-2.5 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-20 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-5.5 h-5.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6]">
                  <Box className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-sans font-extrabold tracking-wider text-white uppercase">Docker</span>
              </motion.div>

              {/* Badge 3: Cyber Sec (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[6%] right-[-8%] bg-[#080c16]/95 backdrop-blur-md border-2 border-[#06b6d4]/70 px-4 py-2.5 rounded-2xl flex items-center space-x-2.5 shadow-[0_0_20px_rgba(6,182,212,0.35)] z-20 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-5.5 h-5.5 rounded bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center text-[#06b6d4]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-sans font-extrabold tracking-wider text-white uppercase">Cyber Sec</span>
              </motion.div>

              {/* Badge 4: C++ Expert (Top Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[14%] left-[-12%] bg-[#080c16]/95 backdrop-blur-md border-2 border-white/40 px-4 py-2.5 rounded-2xl flex items-center space-x-2.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] z-20 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-5.5 h-5.5 rounded bg-white/5 border border-white/20 flex items-center justify-center text-white">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-sans font-extrabold tracking-wider text-white uppercase">C++ Expert</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:block relative mt-16 pb-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => handleScrollToSection("about")}
            className="inline-flex flex-col items-center space-y-2 cursor-pointer group"
          >
            <span className="text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors uppercase">
              SCROLL DOWN
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-1 group-hover:border-accent-purple transition-colors">
              <motion.div
                animate={{
                  y: [0, 12, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 rounded-full bg-accent-purple"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

