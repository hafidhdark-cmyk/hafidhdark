export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  kicker?: string;
  flagshipHighlight?: string;
  category: "fullstack" | "ai" | "client" | "team";
  categories: ("fullstack" | "ai" | "client" | "team")[];
  description: string;
  longDescription?: string;
  featured?: boolean;
  role: string;
  year: string;
  tags: string[];
  metrics?: ProjectMetric[];
  highlights?: string[];
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  image?: string;
}

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ai", label: "AI Systems" },
  { id: "client", label: "Client Work" },
  { id: "team", label: "Team Engineering" },
] as const;

export const projects: Project[] = [
  {
    id: "westbridge-news",
    slug: "westbridge-news",
    title: "WestBridge News",
    kicker: "01 // FULL-STACK DIGITAL PUBLISHING",
    flagshipHighlight:
      "Dynamic social-card engine built with Sharp/libvips, reducing payload from 1.5MB to 127KB with sub-80ms execution. 1,000+ published articles.",
    category: "fullstack",
    categories: ["fullstack", "client"],
    featured: true,
    role: "Lead Full-Stack Architect",
    year: "2026",
    description:
      "High-traffic digital news platform publishing 1,000+ articles. Engineered a custom server-side social card generation engine in Node.js with Sharp and libvips, cutting generation latency to under 80ms with 98 Lighthouse performance.",
    longDescription:
      "Solved WhatsApp preview failures caused by oversized social-card images by architecting a dynamic generation engine in Node.js and Sharp, with dual-photo composition and brand watermarking. Cut each social card from 1.5MB to 127KB with progressive MozJPEG compression, reducing generation time to under 80ms. Implemented Supabase PostgreSQL storage, real-time comments, and article view counts, plus SEO metadata, XML sitemaps, RSS feeds, and JSON-LD structured data.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Sharp & libvips", "Tailwind CSS"],
    metrics: [
      { label: "Card Render Latency", value: "78ms" },
      { label: "Payload Reduction", value: "1.5MB → 127KB" },
      { label: "Published Articles", value: "1,000+" },
      { label: "Lighthouse Performance", value: "98/100" },
    ],
    highlights: [
      "Sub-80ms dynamic MozJPEG OpenGraph image synthesis with Sharp/libvips",
      "Custom editorial admin with authentication, media handling, and client-side compression",
      "Supabase PostgreSQL storage with real-time views and comments",
    ],
    links: {
      live: "https://westbridgenews.com",
      github: "https://github.com/hafidhdark-cmyk/West-Bridge-Network",
    },
    image: "/projects/westbridge.jpg",
  },
  {
    id: "slotly",
    slug: "slotly",
    title: "Slotly",
    kicker: "02 // MULTI-TENANT SAAS BOOKING ENGINE",
    flagshipHighlight:
      "Direct appointment booking and scheduling platform for independent service providers with atomic reservation locking and PostgreSQL Row-Level Security.",
    category: "fullstack",
    categories: ["fullstack", "client"],
    featured: true,
    role: "Co-Founder & Full-Stack Developer",
    year: "2026",
    description:
      "Multi-tenant SaaS appointment scheduling engine with atomic reservation locking and PostgreSQL Row-Level Security (RLS) data protection. Features timezone-aware booking pipelines, automated conflict prevention, and real-time appointment telemetry.",
    longDescription:
      "Co-built a booking platform that helps barbers, nail artists, and hairstylists manage their bookings. Developed frontend and backend, designed the PostgreSQL database architecture, and implemented authentication. Uses Deno Edge Functions and Gemini API for intelligent booking reminders and scheduling assistance.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "PostgreSQL", "Row Level Security", "Deno Edge"],
    metrics: [
      { label: "Booking Latency", value: "<120ms" },
      { label: "Data Isolation", value: "100% RLS" },
      { label: "Conflict Prevention", value: "Atomic Locking" },
    ],
    highlights: [
      "Strict PostgreSQL Row-Level Security (RLS) enforcement ensuring absolute tenant isolation",
      "Atomic reservation locking preventing double-booking race conditions",
      "Custom business dashboards with deposit tracking and customer management",
    ],
    links: {
      live: "https://8hzktqwt5lgpcu0utli3vx3mx.bolt.host",
      github: "https://github.com/hafidhdark-cmyk/Slotly",
    },
    image: "/projects/slotly.jpg",
  },
  {
    id: "codesense",
    slug: "codesense",
    title: "CodeSense",
    kicker: "03 // AI DEVELOPER DIAGNOSTICS",
    flagshipHighlight:
      "AI code explainer with automated dual-model fallback error recovery, structured AST parsing, and 99 Lighthouse performance.",
    category: "ai",
    categories: ["ai", "fullstack"],
    featured: true,
    role: "AI Engineering Intern / Capstone Author",
    year: "2026",
    description:
      "Intelligent code diagnostic and explanation platform powered by the Google Gemini API with automated dual-model fallback error recovery. Features Web Worker telemetry parsing, structured TypeScript AST schema validation, and achieves a 99 Lighthouse score.",
    longDescription:
      "Built an application that explains code in any programming language, with beginner-friendly or technical explanations. Integrated the Google Gemini API through a server-side REST route (POST /api/explain) keeping API keys confidential, and added session history and input validation. Implemented model fallback that retries a backup model when primary returns HTTP 503 or 429.",
    tags: ["Next.js 15", "Google Gemini API", "TypeScript", "Tailwind CSS v4", "Vitest", "Web Workers"],
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Best Practices & SEO", value: "100/100" },
      { label: "Fallback Recovery", value: "Automated Dual-Model" },
    ],
    highlights: [
      "Automated fallback cascading between primary and secondary Gemini models on 503/429",
      "Server-side REST route with strict session history and input sanitization",
      "Comprehensive test coverage using Vitest assertions",
    ],
    links: {
      live: "https://codesense-chi.vercel.app/",
      github: "https://github.com/hafidhdark-cmyk/CodeSense",
    },
    image: "/projects/codesense.png",
  },
  {
    id: "jollofplus",
    slug: "jollofplus",
    title: "JollofPlus",
    kicker: "CLIENT ENGAGEMENT // FOOD COMMERCE & WHATSAPP DISPATCH",
    flagshipHighlight:
      "Abeokuta's premier firewood smoky jollof platform with multi-branch routing and direct automated WhatsApp checkout dispatch.",
    category: "client",
    categories: ["client", "fullstack"],
    featured: true,
    role: "Full-Stack Developer (Client Contract)",
    year: "2026",
    description:
      "Client web application engineered for Abeokuta's premier smoky jollof food brand. Features responsive menu browsing, multi-branch order routing across Ori-Omi and Ita-Eko, and direct automated WhatsApp checkout dispatch.",
    longDescription:
      "Engineered a high-conversion food commerce and ordering platform for Abeokuta's premier smoky jollof restaurant. Implemented pocket-friendly meal pack calculators, 30-minute delivery routing for Ori-Omi and Ita-Eko branches, verified customer review showcases, and one-tap WhatsApp checkout payloads with zero drop-off.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Direct Dispatch", "Vercel"],
    metrics: [
      { label: "Delivery Dispatch", value: "30-Min Fast" },
      { label: "Branch Coverage", value: "Ori-Omi & Ita-Eko" },
      { label: "Customer Rating", value: "4.9 / 5.0" },
    ],
    highlights: [
      "Direct automated WhatsApp checkout payload formulation with instant branch notification",
      "Dynamic meal pack explorer and pocket-friendly pricing tiers",
      "Seamless mobile-first ordering experience optimized for low-latency connections",
    ],
    links: {
      live: "https://jollofplus.vercel.app/",
    },
    image: "/projects/jollofplus.jpg",
  },
  {
    id: "darul-hifdh",
    slug: "darul-hifdh",
    title: "Darul-Hifdh",
    kicker: "CLIENT ENGAGEMENT // ONLINE ISLAMIC INSTITUTION",
    category: "client",
    categories: ["client", "fullstack"],
    featured: false,
    role: "Full-Stack Developer (Independent Client)",
    year: "2026",
    description:
      "Bilingual English and Arabic educational portal with RTL/LTR responsive typography, student/teacher enrollment workflows, and WhatsApp submission integration.",
    longDescription:
      "Designed and developed the full website independently for an online Islamic institution. Built student and teacher application flows with form validation and WhatsApp-based submission. Implemented bilingual English and Arabic interfaces with RTL/LTR support, interactive components, and responsive layouts.",
    tags: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS v4", "RTL / LTR", "Vercel"],
    metrics: [
      { label: "RTL Switching", value: "0ms Jitter" },
      { label: "Mobile Responsiveness", value: "100% Fluid" },
    ],
    highlights: [
      "Seamless Arabic RTL and English LTR bidirectional layouts",
      "Interactive course explorer with instant WhatsApp admission submission",
    ],
    links: {
      live: "https://darul-hifdh.vercel.app",
      github: "https://github.com/hafidhdark-cmyk/darul-hifdh-website",
    },
  },
  {
    id: "chuks-kitchen",
    slug: "chuks-kitchen",
    title: "Chuks Kitchen",
    kicker: "INTERNSHIP DELIVERABLE // TRUEMINDS INNOVATIONS",
    category: "client",
    categories: ["client"],
    featured: false,
    role: "Frontend Engineer Intern",
    year: "2026",
    description:
      "Responsive culinary showcase web app with interactive menu browsing, category filtering, and online table reservations.",
    longDescription:
      "Built a responsive restaurant web application with menu browsing, category filtering, and table reservations in HTML, CSS, and JavaScript as an individual internship deliverable at Trueminds Innovations Ltd.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "GitHub Pages"],
    metrics: [
      { label: "Page Load Speed", value: "<1s" },
      { label: "Accessibility", value: "High Contrast" },
    ],
    highlights: [
      "Dynamic category filtering for culinary menus",
      "Interactive table reservation form with instant client-side validation",
    ],
    links: {
      live: "https://hafidhdark-cmyk.github.io/Chuks-Kitchen",
      github: "https://github.com/hafidhdark-cmyk/Chuks-Kitchen",
    },
  },
  {
    id: "talentflow",
    slug: "talentflow",
    title: "TalentFlow",
    kicker: "TEAM SQUAD PROJECT // TRUEMINDS INNOVATIONS",
    category: "team",
    categories: ["team"],
    featured: false,
    role: "Frontend Engineer (Team of 4)",
    year: "2026",
    description:
      "Modern talent acquisition and learning platform marketing surface engineered within an agile squad with pixel-perfect design parity.",
    longDescription:
      "Developed the landing page for TalentFlow, a learning and talent platform, as part of an agile engineering team at Trueminds Innovations. Enforced strict component prop typing, shared design tokens, and clean cross-browser responsive delivery.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Agile Sprints", "Storybook"],
    metrics: [
      { label: "Design Parity", value: "Pixel-Accurate" },
      { label: "Sprint Delivery", value: "Ahead of Schedule" },
    ],
    highlights: [
      "Collaborative agile squad workflow with Git Flow and PR reviews",
      "Modular hero, feature showcase, and pricing conversion components",
    ],
  },
  {
    id: "flowstate-zen",
    slug: "flowstate-zen",
    title: "FlowState Zen",
    kicker: "DEVELOPER TOOLING // PRODUCTIVITY",
    category: "fullstack",
    categories: ["fullstack"],
    featured: false,
    role: "Creator & Lead Developer",
    year: "2025",
    description:
      "Minimalist developer focus environment featuring local-first state, keyboard hotkeys, and ambient audio synthesis via Web Audio API.",
    longDescription:
      "Engineered an ambient focus environment for software engineers with custom oscillator-based soundscapes, Pomodoro timers, and zero external runtime dependencies.",
    tags: ["TypeScript", "Web Audio API", "React", "Zustand", "Tailwind CSS"],
    metrics: [
      { label: "Audio Latency", value: "<15ms" },
      { label: "Bundle Size", value: "38KB" },
    ],
    highlights: [
      "Native Web Audio API synthesizer generating organic ambient soundscapes",
      "Full keyboard navigation palette for distraction-free operation",
    ],
  },
];
