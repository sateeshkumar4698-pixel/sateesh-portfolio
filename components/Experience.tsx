"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "linear-gradient(180deg, var(--bg) 0%, #0d0d18 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-5 w-4 h-4 rounded-full bg-indigo-500 border-2 border-indigo-300 shadow-lg shadow-indigo-500/50 md:left-1/2 md:-translate-x-1/2" />

                {/* Content card — alternates sides on desktop */}
                <div className={`${i % 2 === 0 ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 text-indigo-400 text-sm mt-1">
                          <Building2 size={13} />
                          {job.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs whitespace-nowrap">
                        <Calendar size={11} />
                        {job.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {job.description.map((point, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-400">
                          <span className="text-indigo-500 mt-1 flex-shrink-0">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
