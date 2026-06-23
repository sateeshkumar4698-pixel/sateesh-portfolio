"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white font-bold text-lg tracking-tight"
        >
          <span className="gradient-text">SK</span>
          <span className="text-white/70 text-sm ml-1">Kollati</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 group-hover:w-full transition-all duration-200" />
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/resume"
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} className="text-slate-300 hover:text-white text-sm w-full text-left">
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/resume" className="text-indigo-400 text-sm">Resume →</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
