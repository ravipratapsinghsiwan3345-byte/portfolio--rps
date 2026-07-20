import { motion } from "motion/react";
import { User, BookOpen, Target, Calendar, Award, Code, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import sbuLogo from "../assets/images/sbu_logo_1783956220223.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-accent-purple font-mono text-xs tracking-widest uppercase mb-3">
            <User className="w-4 h-4" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Engineering with <span className="text-gradient-purple-blue">Systemic Precision</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue mt-4 rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Biography / Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-tr from-accent-purple to-accent-blue p-[1.5px] shadow-lg shadow-accent-purple/15 flex items-center justify-center bg-[#03050c]">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-contain rounded-2xl hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-accent-cyan tracking-wider uppercase mt-1">Full Stack & MERN Developer</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate software engineer dedicated to building high-performance, responsive, and secure web applications. With expertise spanning the complete <strong>MERN (MongoDB, Express.js, React.js, Node.js) stack</strong>, I build clean, micro-service based backends paired with high-fidelity, polished user interfaces.
                </p>
                <p>
                  My engineering philosophy is rooted in <strong>architectural honesty</strong>: prioritizing clean code, database performance, strict security rules, and absolute type safety. I am highly proficient in writing complex algorithms and data structures in C/C++, allowing me to apply foundational computer science excellence to modern full-stack engineering challenges.
                </p>
              </div>
            </div>

            {/* Micro Statistics */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 mt-8">
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white">4+</span>
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Years Exp.</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-gradient-purple-blue">25+</span>
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Repos Open</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white">99%</span>
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">SLA Standard</span>
              </div>
            </div>
          </motion.div>

          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-3">Career Objective</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To engineer secure, highly scalable software products at a leading technology firm. I aim to leverage my specialization in backend API optimization, responsive frontend state engines, and system-level algorithm design to solve hard enterprise-scale engineering problems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Focus Architecture</span>
              <span className="text-sm font-semibold text-white">Distributed Cloud Engines</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-md p-1 border border-white/10 shrink-0">
                <img
                  src={sbuLogo}
                  alt="Sarala Birla University Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-white leading-tight">Academic Pillars</h3>
                <a
                  href="https://sbu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-accent-cyan hover:underline tracking-wider uppercase block mt-0.5"
                >
                  sbu.ac.in ↗
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-accent-cyan pl-4 space-y-1 relative">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-accent-cyan -left-[6px] top-1.5 shadow-lg shadow-accent-cyan/50" />
                <span className="text-xs font-mono text-gray-400 font-semibold">2023 - 2027</span>
                <h4 className="text-sm font-bold text-white">Bachelor of Technology (B.Tech)</h4>
                <p className="text-xs text-accent-cyan font-semibold">Sarala Birla University</p>
                <p className="text-[11px] text-gray-400">Computer Science & Engineering</p>
                <p className="text-xs font-semibold text-emerald-400 mt-1">GPA: 8.5 / 10</p>
              </div>

              <div className="border-l-2 border-white/10 pl-4 space-y-1 relative">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-600 -left-[6px] top-1.5" />
                <span className="text-xs font-mono text-gray-400 font-semibold">2021 - 2023</span>
                <h4 className="text-sm font-bold text-white">Senior Secondary School</h4>
                <p className="text-xs text-gray-400">PCM (Physics, Chemistry, Math)</p>
                <p className="text-[11px] text-gray-400">Completed with First Division</p>
                <p className="text-xs text-gray-400 font-semibold mt-1">Score: 84%</p>
              </div>
            </div>
          </motion.div>

          {/* Technologies Spotlight Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">Core Pillars</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                An aggregated snapshot of structural libraries and programming methodologies deployed across my recent commercial and open-source applications.
              </p>

              <div className="flex flex-wrap gap-2">
                {["C++ / STL", "React.js", "Node.js (ESM)", "Express.js", "MongoDB", "REST APIs", "Data Structures", "Algorithms", "Git / GitHub", "Docker", "MERN Stack", "Express Validation"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-accent-blue hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-2 text-xs font-mono text-gray-500 border-t border-white/5 pt-4">
              <Calendar className="w-4 h-4 text-accent-blue" />
              <span>Continuously integrating new frameworks weekly.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
