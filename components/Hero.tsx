"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { personal, resumePdf } from "@/lib/data";
import { ArrowDown, Code2, Link, Mail, Download } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - d / 120)})`;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-indigo-400 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Remote Roles · USD Pay
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          {personal.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="gradient-text">{personal.name.split(" ").slice(2).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-indigo-300 font-medium mb-4"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25"
          >
            <Link size={18} /> LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-indigo-500/50 transition-all duration-200"
          >
            <Mail size={18} /> Hire Me
          </a>
          <a
            href={resumePdf}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-indigo-500/50 transition-all duration-200"
          >
            <Download size={18} /> Résumé
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <Code2 size={18} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "6+", label: "Years Experience" },
            { value: "4", label: "Companies" },
            { value: "React", label: "Primary Stack" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={20} />
        </motion.div>
      </button>
    </section>
  );
}
