import { motion } from "motion/react";
import { Linkedin, UserPlus, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function LinkedIn() {
  return (
    <section id="linkedin" className="py-20 bg-transparent relative overflow-hidden">
      {/* Visual background ambient glow gradients */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F1C3F] via-dark-card to-dark-bg border border-blue-900/30 p-8 sm:p-12 shadow-2xl shadow-blue-950/20"
        >
          {/* Subtle logo bg watermark */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none select-none">
            <Linkedin className="w-96 h-96 -mr-20 -mt-20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* Column 1: Brand Info & Tag */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs">
                <Linkedin className="w-4 h-4 fill-blue-400" />
                <span className="font-semibold tracking-wider uppercase">Professional Network</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-none">
                Let's Connect on <span className="text-gradient-cyan-blue">LinkedIn</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                I actively share technical insights, architectural analyses of modern web platforms, backend schema optimizations, and algorithmic explorations on LinkedIn. Connect with me to discuss MERN development, system architecture, or full-time opportunities.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Verified Professional</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                  <MessageSquare className="w-4 h-4 text-accent-purple" />
                  <span>Open to Remote & Hybrid Roles</span>
                </div>
              </div>
            </div>

            {/* Column 2: Connect Card CTA */}
            <div className="lg:col-span-1">
              <div className="glass-panel border-white/5 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 p-[2px] bg-gradient-to-tr from-blue-500 to-accent-cyan shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-display font-bold text-lg text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono text-gray-500 tracking-wide uppercase mb-6">Senior Full Stack Architect</p>

                <div className="flex flex-col gap-3 w-full">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Connect Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-xs text-gray-300 tracking-widest uppercase flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>View Network</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
