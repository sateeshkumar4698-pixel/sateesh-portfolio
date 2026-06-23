import { personal, experience, skills, education, certifications, keyProjects } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";

export const metadata: Metadata = {
  title: "Resume — Sateesh Kumar Kollati",
  description: "Senior Full-Stack Engineer with 6+ years across fintech, insurance, e-commerce and AI. React, Next.js, TypeScript, Node.js.",
};

export default function Resume() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          @page { margin: 1.2cm; size: A4; }
        }
        body { background: #f1f5f9; }
      `}</style>

      <div className="no-print fixed top-4 right-4 flex gap-2 z-50">
        <Link href="/" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm hover:bg-slate-100 transition-colors bg-white shadow">
          ← Portfolio
        </Link>
        <DownloadButton />
      </div>

      <div className="min-h-screen py-10 px-4" style={{ background: "#f1f5f9" }}>
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

          {/* Header */}
          <div style={{ background: "linear-gradient(135deg, #4338ca, #7c3aed)", padding: "40px 48px 32px" }}>
            <h1 style={{ color: "white", fontSize: "2rem", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
              {personal.name}
            </h1>
            <p style={{ color: "#c7d2fe", fontSize: "1.05rem", marginTop: 6, fontWeight: 500 }}>
              {personal.title}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: 14, fontSize: "0.8rem" }}>
              {[
                { label: personal.email, href: `mailto:${personal.email}` },
                { label: personal.phone, href: `tel:${personal.phoneRaw}` },
                { label: personal.location },
                { label: "LinkedIn", href: personal.linkedin },
                { label: "GitHub", href: personal.github },
              ].map(({ label, href }) => (
                <span key={label} style={{ color: "#a5b4fc" }}>
                  {href ? <a href={href} style={{ color: "#a5b4fc", textDecoration: "none" }}>{label}</a> : label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ padding: "36px 48px" }}>

            {/* Summary */}
            <Section title="Professional Summary">
              <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "0.875rem" }}>
                {personal.summary}
              </p>
            </Section>

            {/* Experience */}
            <Section title="Work Experience">
              {experience.map((job, i) => (
                <div key={job.company} style={{ marginBottom: i < experience.length - 1 ? 22 : 0, paddingBottom: i < experience.length - 1 ? 22 : 0, borderBottom: i < experience.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.95rem", margin: 0 }}>{job.role}</h3>
                      <p style={{ color: "#6366f1", fontSize: "0.82rem", fontWeight: 600, margin: "3px 0 0" }}>{job.company} · {job.location}</p>
                    </div>
                    <span style={{ color: "#94a3b8", fontSize: "0.78rem", whiteSpace: "nowrap", marginLeft: 12, marginTop: 2 }}>{job.period}</span>
                  </div>
                  <ul style={{ margin: "8px 0 8px 16px", padding: 0 }}>
                    {job.description.map((point, j) => (
                      <li key={j} style={{ color: "#475569", fontSize: "0.84rem", lineHeight: 1.65, marginBottom: 4 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {job.tech.map((t) => (
                      <span key={t} style={{ fontSize: "0.72rem", padding: "2px 8px", borderRadius: 4, background: "#ede9fe", color: "#6d28d9", fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Section>

            {/* Skills */}
            <Section title="Technical Skills">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                {skills.map((group) => (
                  <div key={group.category} style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 12px" }}>
                    <p style={{ fontWeight: 700, fontSize: "0.72rem", color: "#4f46e5", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 5px" }}>
                      {group.category}
                    </p>
                    <p style={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>{group.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Key Projects */}
            <Section title="Selected Projects">
              <div style={{ display: "grid", gap: "12px" }}>
                {keyProjects.map((proj) => (
                  <div key={proj.title}>
                    <h3 style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.88rem", margin: 0 }}>{proj.title}</h3>
                    <p style={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.6, margin: "3px 0 5px" }}>{proj.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {proj.tech.map((t) => (
                        <span key={t} style={{ fontSize: "0.7rem", padding: "2px 8px", borderRadius: 4, background: "#eef2ff", color: "#4338ca", fontWeight: 500 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education">
              {education.map((edu, i) => (
                <div key={edu.degree} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: i < education.length - 1 ? 12 : 0 }}>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.9rem", margin: 0 }}>{edu.degree}</h3>
                    <p style={{ color: "#64748b", fontSize: "0.82rem", margin: "3px 0 0" }}>{edu.college}</p>
                    {edu.grade && <p style={{ color: "#94a3b8", fontSize: "0.76rem", margin: "2px 0 0" }}>{edu.grade}</p>}
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: "0.78rem", whiteSpace: "nowrap", marginLeft: 12 }}>{edu.year}</span>
                </div>
              ))}
            </Section>

            {/* Certifications */}
            <Section title="Certifications">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                {certifications.map((cert) => (
                  <div key={cert.name} style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "#1e293b", fontSize: "0.82rem", fontWeight: 600 }}>{cert.name}</span>
                    <span style={{ color: "#94a3b8", fontSize: "0.74rem" }}>{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <h2 style={{ fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#4f46e5", whiteSpace: "nowrap", margin: 0 }}>
          {title}
        </h2>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #e0e7ff, transparent)" }} />
      </div>
      {children}
    </div>
  );
}
