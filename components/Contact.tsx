"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Mail, Phone, Link, Code2, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Opens mail client as fallback — replace with Resend/Nodemailer API route for production
    const subject = encodeURIComponent(`Hiring Enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setTimeout(() => { setLoading(false); setSent(true); }, 800);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            I'm open to senior remote roles, freelance projects, and consulting. USD contracts preferred.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            {[
              { icon: <Mail size={18} />, label: "Email", value: personal.email, href: `mailto:${personal.email}`, external: false },
              { icon: <Phone size={18} />, label: "Phone", value: personal.phone, href: `tel:${personal.phoneRaw}`, external: false },
              { icon: <Link size={18} />, label: "LinkedIn", value: "sateesh-kumar-kollati", href: personal.linkedin, external: true },
              { icon: <Code2 size={18} />, label: "GitHub", value: "View my code", href: personal.github, external: true },
            ].map(({ icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500">{label}</div>
                  <div className="text-sm text-white">{value}</div>
                </div>
              </a>
            ))}

            <div className="p-4 glass rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available Now
              </div>
              <p className="text-slate-400 text-xs">Open to remote roles. Response within 24 hours.</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 glass rounded-2xl border border-green-500/20 p-10">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="text-white font-semibold text-lg">Message sent!</h3>
                <p className="text-slate-400 text-sm">Your email client should have opened. I'll reply within 24 hours.</p>
                <button onClick={() => setSent(false)} className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl border border-white/5 p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Your Name", placeholder: "Jane Smith", type: "text" },
                    { key: "email", label: "Email Address", placeholder: "jane@company.com", type: "email" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs text-slate-400 mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25 disabled:opacity-60"
                >
                  {loading ? "Opening email..." : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-24 text-slate-600 text-sm"
      >
        Built with Next.js, TypeScript & Framer Motion · Deployed on Vercel
      </motion.div>
    </section>
  );
}
