"use client";
import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";
import { GraduationCap, BadgeCheck } from "lucide-react";

export default function EducationCerts() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-indigo-500/30 pl-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-white text-sm font-medium leading-snug">{edu.degree}</h4>
                    <span className="text-slate-500 text-xs whitespace-nowrap mt-0.5">{edu.year}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">{edu.college}</p>
                  {edu.grade && <p className="text-indigo-400/80 text-xs mt-1">{edu.grade}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <BadgeCheck size={18} />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/5"
                >
                  <BadgeCheck size={15} className="text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-slate-200 text-sm leading-tight">{cert.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
