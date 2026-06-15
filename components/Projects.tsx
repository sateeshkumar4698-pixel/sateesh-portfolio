"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Code2, Star, TrendingUp } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #0d0d18 0%, var(--bg) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
            Production-grade applications built across financial services, e-commerce, and AI automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Project image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95) 100%)" }} />
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-yellow-400 bg-black/60 backdrop-blur px-2 py-1 rounded-full border border-yellow-400/30">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </div>
                )}
                {/* Stats badge */}
                {project.stats && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-green-400 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full border border-green-400/20">
                    <TrendingUp size={11} />
                    {project.stats}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors flex-1 justify-center"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-300 glass border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Code2 size={13} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
