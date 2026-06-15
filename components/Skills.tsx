"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend: "from-indigo-500 to-violet-500",
  Backend: "from-violet-500 to-purple-500",
  "AI / ML": "from-purple-500 to-fuchsia-500",
  Mobile: "from-fuchsia-500 to-pink-500",
  Tools: "from-sky-500 to-indigo-500",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${categoryColors[group.category] ?? "from-indigo-500 to-purple-500"}`} />
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + j * 0.04, duration: 0.3 }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:border-indigo-500/20 group-hover:text-slate-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
