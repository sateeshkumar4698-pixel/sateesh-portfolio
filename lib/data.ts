// Single source of truth for the portfolio site, the /resume page, and the
// downloadable PDF (generated from resume-source/resume.html). Keep in sync.

// basePath mirrors next.config.ts so static assets (e.g. the resume PDF) resolve
// correctly on GitHub Pages in production and at the root during local dev.
export const basePath = process.env.NODE_ENV === "production" ? "/sateesh-portfolio" : "";
export const resumePdf = `${basePath}/Sateesh_Kumar_Kollati_Resume.pdf`;

export const personal = {
  name: "Sateesh Kumar Kollati",
  title: "Senior Full-Stack Engineer",
  tagline: "Building high-performance web & AI products with React, Next.js, Node.js and Claude",
  email: "sateeshkumar4698@gmail.com",
  phone: "+91 99597 15252",
  phoneRaw: "+919959715252",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/sateesh-kumar-kollati/",
  github: "https://github.com/sateeshkumar4698-pixel",
  website: "https://sateeshkumar4698-pixel.github.io/sateesh-portfolio/",
  twitter: "https://x.com/home",
  instagram: "https://www.instagram.com/sateesh_dev46/",
  availableForRemote: true,
  yearsExperience: "6+",
  summary:
    "Senior Full-Stack Engineer with 6+ years building scalable, high-performance web and mobile products across fintech, insurance, e-commerce, and AI. Deep expertise in React, Next.js, TypeScript, and Node.js, with a track record of shipping production systems at MassMutual, Verizon (via GlobalLogic), and a Google engagement at TCS — including an agentic AI product taken solo from greenfield to a deployed MVP using Claude (Anthropic). Open to senior remote roles with US/UK companies (USD).",
};

export const experience = [
  {
    company: "MassMutual (GBS)",
    role: "Senior Software Engineer",
    period: "Nov 2025 – Present",
    location: "Hyderabad, India",
    description: [
      "Took a new initiative from greenfield setup to a deployed MVP, owning 100% of the full-stack build — frontend, backend, and deployment — while integrating Claude (Anthropic) to power agentic, autonomous workflows within the product.",
      "Engineered secure, scalable financial and insurance platforms with React.js, Next.js, TypeScript, and Node.js (SSR), integrated with Java microservices and Elasticsearch.",
      "Improved page load time by 30% through code refactoring, caching, and lazy-loading strategies.",
      "Designed and integrated secure payment gateways and multi-step order-management workflows, prioritizing data integrity and regulatory compliance.",
      "Built CI/CD pipelines for Canary and non-prod deployments, cutting release time by 40%.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Claude (Anthropic)", "Agentic AI", "Java Microservices", "Elasticsearch", "CI/CD"],
  },
  {
    company: "GlobalLogic (Verizon)",
    role: "Senior Software Engineer",
    period: "Jan 2025 – Aug 2025",
    location: "Hyderabad, India",
    description: [
      "Engineered micro-frontend modules (cart, checkout, product discovery) for a high-traffic Verizon e-commerce platform using React.js, Next.js, TypeScript, and Node.js with SSR, integrated with Java microservices.",
      "Modernized legacy storefront components, improving responsiveness and Core Web Vitals through code-splitting, caching, and lazy-loading.",
      "Drove defect triage across the e-commerce squad, reducing production bug resolution time by 25%.",
      "Designed secure payment gateway integrations and multi-step order-management flows for the checkout experience.",
      "Introduced automated CI/CD pipelines for Canary and non-prod environments, eliminating manual deployment steps and shortening release cycles by 40%.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Micro-Frontends", "Node.js", "Elasticsearch", "CI/CD"],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    period: "Oct 2021 – Nov 2024",
    location: "Hyderabad, India",
    description: [
      "Developed reusable UI component libraries in React.js and integrated high-traffic REST APIs.",
      "Increased automated test coverage to 85%+ using TDD (Jest) and documented APIs with Swagger/OpenAPI.",
      "Delivered scalable, production-grade web applications for Google under a client engagement, collaborating directly with Google stakeholders on requirements, code reviews, and delivery timelines.",
      "Mentored junior developers on best practices in UI development and API integration.",
    ],
    tech: ["React.js", "TypeScript", "REST APIs", "Jest", "TDD", "Swagger", "Google Cloud"],
  },
  {
    company: "Aguila IT Consulting",
    role: "Software Engineer",
    period: "Apr 2020 – Sep 2021",
    location: "Hyderabad, India",
    description: [
      "Delivered single-page and full-stack applications using the MERN stack.",
      "Built secure backend modules for authentication and role-based access control.",
      "Optimized database queries and API design, improving response times by 20%.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "MERN Stack", "JWT Auth"],
  },
];

export const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Tailwind CSS", "Material UI"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "REST & GraphQL", "Java (Spring Boot)", "WebSockets", "Kafka"] },
  { category: "AI / ML", items: ["Agentic AI", "Claude (Anthropic)", "LLM Integration", "OpenAI API", "LangChain", "Prompt Engineering", "Python"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Firestore", "DynamoDB", "Elasticsearch"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions", "Jenkins", "Vercel"] },
  { category: "Mobile", items: ["Flutter", "React Native"] },
  { category: "Testing & Tools", items: ["Jest", "TDD", "Cypress", "Playwright", "Postman", "Swagger", "Figma"] },
];

export const projects = [
  {
    title: "FinFlow — Financial Analytics Platform",
    description:
      "Full-stack financial dashboard with real-time data streaming, portfolio tracking, and asset allocation charts. Built with React 18, TypeScript, Recharts, and Tailwind CSS. Deployed via GitHub Actions CI/CD to GitHub Pages.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    tech: ["React", "TypeScript", "Recharts", "Tailwind CSS", "GitHub Actions", "Vite"],
    liveUrl: "https://sateeshkumar4698-pixel.github.io/finflow-dashboard/",
    githubUrl: "https://github.com/sateeshkumar4698-pixel/finflow-dashboard",
    featured: true,
    stats: "Real-time charts · Portfolio tracker · CI/CD deployed",
  },
  {
    title: "ShopFront — Micro-Frontend E-Commerce",
    description:
      "Production-grade e-commerce storefront with shopping cart, wishlist, real-time search and category filters. Mobile-responsive with slide-out cart drawer. Built with React 18, TypeScript, Lucide React, deployed via GitHub Actions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "GitHub Actions", "Vite"],
    liveUrl: "https://sateeshkumar4698-pixel.github.io/shopfront-ecommerce/",
    githubUrl: "https://github.com/sateeshkumar4698-pixel/shopfront-ecommerce",
    featured: true,
    stats: "Full cart · Wishlist · Search & filters · CI/CD",
  },
  {
    title: "AgentFlow — AI Workflow Automation",
    description:
      "Agentic AI platform with multi-agent chat interface — CodeAgent, WebAgent, DataAgent. Context-aware responses, copy-to-clipboard, conversation history, streaming UX with typewriter effect. Switch agents mid-conversation.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "GitHub Actions", "Vite"],
    liveUrl: "https://sateeshkumar4698-pixel.github.io/agentflow-ai/",
    githubUrl: "https://github.com/sateeshkumar4698-pixel/agentflow-ai",
    featured: true,
    stats: "Multi-agent · AI chat · Streaming UX · CI/CD",
  },
  {
    title: "DevCollab — Team Project Management",
    description:
      "Full-stack project management SaaS with real-time collaboration, role-based access control, and Kanban boards. MERN stack with JWT auth, WebSocket live updates, and a mobile-responsive design. 85%+ test coverage with Jest.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux", "WebSockets", "Jest"],
    liveUrl: "https://github.com/sateeshkumar4698-pixel",
    githubUrl: "https://github.com/sateeshkumar4698-pixel",
    featured: false,
    stats: "85%+ test coverage · Real-time collab · RBAC",
  },
];

// Professional / client work projects — shown on the resume (no public demo links).
export const keyProjects = [
  {
    title: "FinPlan — Financial Transaction Platform",
    description:
      "Built a full-stack financial transaction management platform from the ground up — robust backend logic and an intuitive frontend to streamline complex, compliance-sensitive workflows.",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "SoloK — Retirement Fund Management",
    description:
      "Developed a full-stack Solo 401(k) retirement-fund administration application from scratch, focused on secure, efficient, and auditable fund operations.",
    tech: ["NestJS", "PostgreSQL", "React"],
  },
  {
    title: "Starplayers — Fantasy Sports App",
    description:
      "Cross-platform fantasy sports application; designed GraphQL APIs and optimized response times for real-time scoring and leaderboards.",
    tech: ["Flutter", "Node.js", "MongoDB", "GraphQL"],
  },
  {
    title: "ORN-ai — AI EdTech Platform",
    description:
      "AI-driven EdTech platform with a React/Node GraphQL backend powering learner performance tracking and reporting.",
    tech: ["React.js", "Node.js", "GraphQL"],
  },
  {
    title: "Inventory Management System",
    description:
      "Role-based, secure inventory platform with REST APIs and granular access control for multi-warehouse operations.",
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Acharya Nagarjuna University",
    year: "2019 – 2021",
    grade: "",
  },
  {
    degree: "B.Sc. — Computer Science",
    college: "S.V.R.M College (Acharya Nagarjuna University), Andhra Pradesh",
    year: "2016 – 2019",
    grade: "7.3 CGPA",
  },
];

export const certifications = [
  { name: "Professional Cloud Architect", issuer: "Google Cloud" },
  { name: "Professional Cloud Developer", issuer: "Google Cloud" },
  { name: "Professional Data Engineer", issuer: "Microsoft Azure" },
  { name: "Prompt Engineering in Generative AI", issuer: "Udemy" },
  { name: "Full-Stack Development (MERN)", issuer: "Udemy" },
];
