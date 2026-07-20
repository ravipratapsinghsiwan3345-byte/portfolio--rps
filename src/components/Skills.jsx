import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Terminal,
  Cpu,
  FileCode,
  Code,
  Server,
  Zap,
  Database,
  Globe,
  Layers,
  Binary,
  BarChart,
  Cloud,
  Sparkles,
  GitBranch,
  Github,
  Atom,
  Award,
  Box,
  Shield,
  Palette
} from "lucide-react";
import { SKILLS } from "../data";

// Dynamic Icon Registry
const ICON_REGISTRY = {
  Terminal,
  Cpu,
  FileCode,
  Code,
  ReactIcon: Atom, // map custom ReactIcon tag to Lucide Atom
  Server,
  Zap,
  Database,
  Globe,
  Layers,
  Binary,
  BarChart,
  Cloud,
  Sparkles,
  GitBranch,
  Github,
  Box,
  Shield,
  FileHtml: FileCode, // Map FileHtml to FileCode
  Palette
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getAccentColor = (category) => {
    switch (category) {
      case "programming": return "from-accent-purple to-purple-600 shadow-accent-purple/20 text-accent-purple border-accent-purple/20";
      case "development": return "from-accent-blue to-blue-600 shadow-accent-blue/20 text-accent-blue border-accent-blue/20";
      case "other": return "from-accent-cyan to-cyan-600 shadow-accent-cyan/20 text-accent-cyan border-accent-cyan/20";
      default: return "from-gray-500 to-gray-600 text-gray-400";
    }
  };

  const getProgressBarColor = (category) => {
    switch (category) {
      case "programming": return "bg-accent-purple";
      case "development": return "bg-accent-blue";
      case "other": return "bg-accent-cyan";
      default: return "bg-gray-400";
    }
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      {/* Visual background ambient glow gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-accent-purple font-mono text-xs tracking-widest uppercase mb-3">
              <Award className="w-4 h-4" />
              <span>02 / TECHNICAL MATRIX</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              My <span className="text-gradient-cyan-blue">Skills & Competency</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue mt-4 rounded-full" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0 bg-white/5 p-1 rounded-xl border border-white/5 backdrop-blur-md">
            {(["all", "programming", "development", "other"]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold shadow-md shadow-accent-purple/10"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Stack" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_REGISTRY[skill.iconName] || Code;
            const accentClass = getAccentColor(skill.category);
            const progressBarColor = getProgressBarColor(skill.category);

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl glass-panel p-6 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* Glowing Icon Wrapper */}
                    <div className={`w-12 h-12 rounded-xl bg-white/5 border flex items-center justify-center transition-colors duration-300 ${accentClass}`}>
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Numeric percentage */}
                    <span className="font-mono text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-gradient-purple-blue transition-colors duration-300 mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">
                    {skill.category} MODULE
                  </p>
                </div>

                {/* Level Progress Indicator */}
                <div className="space-y-2 mt-auto">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full ${progressBarColor}`}
                    />
                  </div>
                </div>

                {/* Subtle border shine card background */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/5 pointer-events-none transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
