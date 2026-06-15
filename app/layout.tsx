import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sateesh Kumar Kollati — Senior Full-Stack Engineer",
  description: "Senior Full-Stack Engineer specialising in React, Next.js, TypeScript and AI. Open to remote roles paying in USD.",
  openGraph: {
    title: "Sateesh Kumar Kollati — Senior Full-Stack Engineer",
    description: "Building high-performance web apps with React, Next.js & AI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
