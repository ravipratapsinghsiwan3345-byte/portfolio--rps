import { motion } from "motion/react";
import { Briefcase, Award, Calendar, MapPin, ExternalLink, QrCode, ShieldCheck } from "lucide-react";
import { EXPERIENCES, CERTIFICATIONS } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Work Experience Timeline - Centered and Spacious Layout */}
        <div className="max-w-4xl mx-auto mb-24">
          {/* Section Title */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 text-accent-purple font-mono text-xs tracking-widest uppercase mb-3">
              <Briefcase className="w-4 h-4" />
              <span>05 / PROFESSIONAL PROGRESSION</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Work <span className="text-gradient-purple-blue">Experience Timeline</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue mt-4 rounded-full" />
          </div>

          {/* Vertical timeline */}
          <div className="space-y-12 relative border-l border-white/5 pl-6 sm:pl-8 ml-3">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-bg border-2 border-accent-purple flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple group-hover:bg-accent-cyan animate-pulse" />
                </div>

                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-accent-purple transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-accent-cyan tracking-wider uppercase">
                      {exp.company === "PravRaha" ? (
                        <a 
                          href="https://pravraha.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          PravRaha <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-gray-500 gap-1">
                    <span className="flex items-center sm:justify-end gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-600" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-600" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements and metrics bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-gray-300 text-xs sm:text-sm leading-relaxed flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tag cloud */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 group-hover:border-accent-purple/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Certifications - Wide Section with Full Grid Layout */}
        <div className="border-t border-white/5 pt-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-accent-cyan font-mono text-xs tracking-widest uppercase mb-3">
                <Award className="w-4 h-4" />
                <span>06 / VERIFIED CREDENTIALS</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                Industry <span className="text-gradient-cyan-blue">Certifications</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-accent-cyan to-accent-blue mt-4 rounded-full" />
            </div>

            <div className="max-w-lg rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md">
              <span className="text-[10px] font-mono font-bold tracking-wider text-accent-cyan uppercase block mb-1">Cisco Networking Academy & Partners</span>
              <p className="text-gray-400 text-xs leading-relaxed">
                Professional badges verifying rigorous course completions in advanced Routing & Switching (CCNA track), Cyber Security, Python OOP structures, and Data Science models.
              </p>
            </div>
          </div>

          {/* Certifications Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 hover:border-accent-cyan/30 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/5 hover:translate-y-[-4px]"
              >
                {/* Radial Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div>
                  {/* Card Header: Verification and QR Vector */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-accent-cyan transition-colors duration-300">
                      <QrCode className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Issuer and Conferred Date */}
                  <div className="flex items-center space-x-1.5 text-accent-cyan font-mono text-[10px] tracking-wider uppercase mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-display font-bold text-base text-white group-hover:text-accent-cyan transition-colors duration-300 leading-snug mb-3">
                    {cert.title}
                  </h3>

                  {/* Course Highlights Description */}
                  {cert.description && (
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills Learned Tag Cloud */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-6">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-gray-400 group-hover:text-white group-hover:border-accent-cyan/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer actions */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                  <div className="text-[10px] font-mono text-gray-500">
                    Conferred: <span className="text-gray-300 font-semibold">{cert.date}</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono font-bold tracking-wider text-accent-cyan group-hover:text-white flex items-center gap-1 uppercase transition-colors"
                    >
                      <span>Credentials</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
