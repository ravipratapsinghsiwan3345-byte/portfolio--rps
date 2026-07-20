import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, FolderGit2, ArrowUpRight, Github, Code, Check, Play } from "lucide-react";
import { PROJECTS } from "../data";
import ProjectSimulator from "./ProjectSimulator";

function ProjectImage({ src, alt, title }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#05070c] via-[#0b0e17] to-[#121626] flex flex-col items-center justify-center p-4 relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
        <div className="absolute w-24 h-24 rounded-full border border-accent-purple/10 animate-pulse" />
        
        <Code className="w-8 h-8 text-accent-purple mb-2 opacity-80" />
        <span className="font-display font-bold text-sm text-gray-200 text-center tracking-tight px-4 relative z-10 select-none">
          {title}
        </span>
        <span className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-widest relative z-10">
          Source Repository
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [simulatingProjectId, setSimulatingProjectId] = useState(null);
  const [simulatingProjectTitle, setSimulatingProjectTitle] = useState("");

  const categories = ["all", "Full Stack", "Frontend", "System"];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = activeTab === "all" || project.category === activeTab;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/4 w-[25rem] h-[25rem] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-accent-purple font-mono text-xs tracking-widest uppercase mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>03 / RECENT ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Selected <span className="text-gradient-tricolor">Engineering Work</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-blue mt-4 rounded-full" />
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 p-6 glass-panel rounded-2xl">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-xl border border-white/5 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center cursor-pointer ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search stack, title, feature..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 outline-none focus:border-accent-purple transition-all"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group flex flex-col justify-between glass-panel rounded-2xl overflow-hidden relative"
              >
                <div>
                  {/* Image wrapper with Zoom effect */}
                  <div className="relative aspect-video overflow-hidden">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      title={project.title}
                    />
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-transparent to-transparent opacity-80" />
                    
                    {/* Category Overlay Pill */}
                    <span className="absolute top-4 right-4 px-3 py-1 bg-dark-bg/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-accent-cyan tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-8">
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features bullet list */}
                    <div className="space-y-2 mb-8 border-t border-white/5 pt-6">
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase mb-3">Architectural Highlights</h4>
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with buttons and tech pills */}
                <div className="p-8 pt-0 mt-auto">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                   <div className="flex flex-col gap-3 border-t border-white/5 pt-6">
                    <button
                      onClick={() => {
                        setSimulatingProjectId(project.id);
                        setSimulatingProjectTitle(project.title);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue hover:from-accent-purple/80 hover:to-accent-blue/80 text-xs font-bold text-white tracking-widest uppercase flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-accent-purple/15 cursor-pointer"
                    >
                      <Play className="w-4 h-4 text-accent-cyan fill-accent-cyan/20" />
                      <span>View Live Mockup</span>
                    </button>

                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold text-gray-300 tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors duration-300"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold text-gray-300 tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors duration-300"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Conditionally Render Interactive Simulation Device Overlay */}
      <AnimatePresence>
        {simulatingProjectId && (
          <ProjectSimulator
            projectId={simulatingProjectId}
            projectTitle={simulatingProjectTitle}
            onClose={() => {
              setSimulatingProjectId(null);
              setSimulatingProjectTitle("");
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
