export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  featured?: boolean;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "flyrank-ai",
    role: "Frontend AI Engineering Intern",
    company: "FlyRank AI",
    location: "Remote",
    period: "July 2026 - Present",
    featured: true,
    summary:
      "Engineered production-grade frontend deliverables using AI as an active pair-programming partner across fast-iteration sprints, optimizing developer workflow telemetry and LLM response stability.",
    achievements: [
      "Engineered production-grade frontend deliverables using AI as an active pair-programming partner across fast-iteration sprints.",
      "Built CodeSense as internship capstone—an AI developer tool achieving a 99 Lighthouse performance score and automated dual-model fallback error recovery.",
      "Standardized AI-assisted engineering workflows across the team, reducing task turnaround times by 35% through structured prompt templates and TypeScript schema validation.",
    ],
    skills: ["Next.js 15", "Google Gemini API", "Claude API", "TypeScript", "Tailwind CSS", "Web Workers"],
  },
  {
    id: "trueminds-innovations",
    role: "Frontend Engineer Intern",
    company: "Trueminds Innovations Ltd",
    location: "Remote",
    period: "Feb 2026 - Apr 2026",
    featured: false,
    summary:
      "Collaborated within an agile engineering squad building responsive, cross-browser frontend user interfaces with pixel-perfect design parity and clean component separation.",
    achievements: [
      "Collaborated within an agile engineering squad building responsive, cross-browser frontend user interfaces with pixel-perfect design parity.",
      "Collaborated as Frontend Engineer on the TalentFlow team project, taking primary responsibility for engineering the platform marketing launch surface.",
      "Enforced strict component prop typing and shared design token adherence across Storybook documentation.",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Agile Squads", "Git Flow"],
  },
  {
    id: "independent-client",
    role: "Full-Stack Developer & Co-Founder",
    company: "Independent & Client Engagements",
    location: "Remote",
    period: "2025 - Present",
    featured: false,
    summary:
      "Architected, built, and shipped production-grade web applications for diverse commercial clients and venture prototypes with full end-to-end technical responsibility.",
    achievements: [
      "Engineered WestBridge News with dynamic SVG-to-Sharp social card synthesis, driving generation latency from 940ms to 78ms.",
      "Built Slotly SaaS multi-tenant appointment platform with strict PostgreSQL Row-Level Security (RLS) data isolation.",
      "Designed and delivered Darul-Hifdh bilingual education portal with seamless Arabic RTL and English LTR typography support.",
    ],
    skills: ["Next.js", "PostgreSQL", "Supabase RLS", "TypeScript", "Sharp / libvips", "Stripe API"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "layout",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", focus: "Server Components, RSC Caching, Streaming" },
      { name: "React 19 & TypeScript", level: "Advanced", focus: "Strict Types, Custom Hooks, Performance" },
      { name: "Tailwind CSS", level: "Advanced", focus: "Custom Design Systems, Tokens, Responsive" },
      { name: "State & Data Fetching", level: "Proficient", focus: "Zustand, TanStack Query, React Context" },
    ],
  },
  {
    title: "Backend & Systems",
    iconName: "database",
    skills: [
      { name: "PostgreSQL & Supabase", level: "Proficient", focus: "Row-Level Security (RLS), Indexing, Schemas" },
      { name: "Node.js & Edge Compute", level: "Proficient", focus: "Vercel Edge, Serverless Functions, REST APIs" },
      { name: "Prisma & Drizzle ORM", level: "Proficient", focus: "Type-safe migrations, complex relations" },
      { name: "Authentication & Security", level: "Proficient", focus: "JWT, Session tokens, OAuth, RBAC" },
    ],
  },
  {
    title: "AI Integration & Tooling",
    iconName: "cpu",
    skills: [
      { name: "LLM API Orchestration", level: "Proficient", focus: "Gemini 1.5/2.0, Claude 3.5, OpenAI, Fallbacks" },
      { name: "Structured JSON Parsing", level: "Proficient", focus: "Zod Schema validation, defensive prompting" },
      { name: "Developer Tooling", level: "Proficient", focus: "Git, Linux, Docker, Vite, Vitest, CI/CD" },
      { name: "Performance Profiling", level: "Advanced", focus: "Lighthouse CI, Core Web Vitals, Memory Profiling" },
    ],
  },
];
