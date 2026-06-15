"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Background glow rings */}
              <div className="absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(circle at center, rgba(99,102,241,0.2) 0%, transparent 70%)" }} />
              <div className="absolute inset-4 rounded-2xl glass border border-indigo-500/20 flex flex-col items-center justify-center gap-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <Code2 size={36} className="text-indigo-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text">5+</div>
                  <div className="text-slate-400 text-sm mt-1">Years of Production React</div>
                </div>
                <div className="w-full grid grid-cols-2 gap-3">
                  {[
                    { icon: <Briefcase size={14} />, text: "MassMutual India" },
                    { icon: <MapPin size={14} />, text: "Hyderabad, India" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 rounded-lg px-3 py-2">
                      <span className="text-indigo-400">{icon}</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="space-y-6">
            {[
              {
                text: "I'm a Senior Full-Stack Engineer with 5+ years of experience building production-grade web applications. My core stack is React, Next.js, and TypeScript — and I bring full-stack depth with Node.js, REST APIs, and databases.",
              },
              {
                text: "Currently at MassMutual India, I build high-traffic financial platforms that serve thousands of daily users. Before that, I shipped features at GlobalLogic and Tata Consultancy Services across web and mobile.",
              },
              {
                text: "I'm passionate about Agentic AI and actively integrating LLMs into products. I'm open to senior remote roles with US or UK companies — I work async-first and communicate in clear English.",
              },
            ].map(({ text }, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-slate-400 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Agentic AI", "Flutter"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full glass border border-indigo-500/20 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
