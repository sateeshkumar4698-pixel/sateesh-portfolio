import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/lib/data";

const SITE_URL = "https://sateeshkumar4698-pixel.github.io/sateesh-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sateesh Kumar Kollati — Senior Full-Stack Engineer",
  description:
    "Sateesh Kumar Kollati — Senior Full-Stack Engineer with 6+ years building production React, Next.js, TypeScript and AI applications across fintech, insurance and e-commerce. Open to senior remote roles paying in USD.",
  keywords: [
    "Sateesh Kumar Kollati",
    "Senior Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Agentic AI",
    "Remote Software Engineer",
    "Hyderabad",
  ],
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sateesh Kumar Kollati — Senior Full-Stack Engineer",
    description: "Building high-performance web & AI applications with React, Next.js, Node.js and Claude. 6+ years. Open to senior remote roles (USD).",
    url: SITE_URL,
    siteName: "Sateesh Kumar Kollati — Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sateesh Kumar Kollati — Senior Full-Stack Engineer",
    description: "6+ years building production React, Next.js & AI apps. Open to senior remote roles paying in USD.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  email: `mailto:${personal.email}`,
  telephone: personal.phoneRaw,
  url: SITE_URL,
  sameAs: [personal.linkedin, personal.github],
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  description: personal.summary,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
