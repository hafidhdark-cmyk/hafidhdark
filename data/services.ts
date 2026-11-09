export interface ServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  output: string;
}

export interface EngagementModel {
  title: string;
  badge: string;
  description: string;
  features: string[];
  bestFor: string;
}

export interface LandingCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const landingCapabilities: LandingCapability[] = [
  {
    id: "custom-web-saas",
    number: "01",
    title: "Custom Web & SaaS Applications",
    description:
      "Full-stack platforms engineered with Next.js, React, and dependable database architectures.",
    tags: ["Architecture Design", "Relational DBs", "Responsive Web"],
  },
  {
    id: "ai-solutions-apis",
    number: "02",
    title: "AI-Powered Solutions & APIs",
    description:
      "Intelligent automation, LLM API integrations (Gemini), and resilient backend services.",
    tags: ["Gemini API Integration", "Resilient Microservices", "Tool Automation"],
  },
  {
    id: "performance-maintenance",
    number: "03",
    title: "Performance, Optimization & Maintenance",
    description:
      "Sub-second page speeds, architecture refactoring, and ongoing technical support.",
    tags: ["90+ Lighthouse Audits", "Edge Caching", "Ongoing SLA Support"],
  },
];

export const services: ServiceCapability[] = [
  {
    id: "custom-websites",
    number: "01",
    title: "Custom Website Design & Development",
    description:
      "Bespoke digital experiences built from scratch without bloated templates. High visual fidelity, accessible semantics, responsive ergonomics, and strict sub-second performance profiles.",
    deliverables: [
      "Custom responsive layouts for desktop, tablet, and mobile",
      "Interactive component design with subtle micro-interactions",
      "Full SEO metadata, OpenGraph cards, and schema.org integration",
      "Sub-second Lighthouse scores across all 4 categories",
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "fullstack-apps",
    number: "02",
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end software architecture bridging responsive user interfaces with rock-solid server-side backends, authentication pipelines, and type-safe data communication layers.",
    deliverables: [
      "Type-safe client-to-server contracts and form validation",
      "Role-based authentication & session lifecycle management",
      "Real-time event handling via WebSockets and server-sent events",
      "Continuous integration, regression tests, and preview environments",
    ],
    techStack: ["Next.js App Router", "Node.js", "PostgreSQL", "Supabase", "Prisma/Drizzle"],
  },
  {
    id: "saas-engineering",
    number: "03",
    title: "SaaS & Product Platform Engineering",
    description:
      "Transforming complex product specs into reliable, multi-tenant digital utilities. Engineered for deterministic data isolation, subscription lifecycles, and resilient scaling.",
    deliverables: [
      "Multi-tenant database tenancy with strict Row-Level Security (RLS)",
      "Stripe payment gateway integration and invoice orchestration",
      "Granular user roles, permissions, and audit event logs",
      "Telemetry, error logging, and operational health dashboards",
    ],
    techStack: ["PostgreSQL", "Supabase RLS", "Stripe API", "Vercel Edge", "Redis"],
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI-Powered Solutions & Automation",
    description:
      "Operationalizing Large Language Models (LLMs) and autonomous workflows with defensive fallbacks, strict JSON schema output parsing, and low latency caching layers.",
    deliverables: [
      "Multi-model fallback cascading (Gemini, Claude, OpenAI)",
      "Prompt engineering with structured JSON schema outputs",
      "Automated batch pipelines and streaming response interfaces",
      "Cost optimization via smart prompt token caching and pruning",
    ],
    techStack: ["Google Gemini API", "Anthropic Claude API", "LangChain", "Vercel AI SDK"],
  },
  {
    id: "api-database",
    number: "05",
    title: "API & Database Architecture",
    description:
      "High-throughput schema modeling, query indexing, and REST/GraphQL interface design. Built for high concurrency, zero data integrity corruption, and predictable response times.",
    deliverables: [
      "Normalized relational schema design with optimized index strategies",
      "Secure REST and GraphQL endpoints with Zod request validation",
      "Connection pooling and distributed caching architectures",
      "Database migration scripts with zero-downtime rollback safety",
    ],
    techStack: ["PostgreSQL", "Redis", "Zod", "Drizzle ORM", "Docker"],
  },
  {
    id: "optimization-maintenance",
    number: "06",
    title: "Website Optimization, Auditing & Maintenance",
    description:
      "Comprehensive performance retrospectives and code health audits. Eliminating layout shifts, optimizing bundles, and hardening application security.",
    deliverables: [
      "Deep Core Web Vitals audit (LCP, INP, CLS) targeting green scores",
      "Bundle size decomposition and dynamic import code splitting",
      "Security audit for dependency vulnerabilities and CSRF/XSS vectors",
      "Scheduled monthly dependency upgrades and uptime SLA guarantee",
    ],
    techStack: ["Lighthouse CI", "Next.js Bundle Analyzer", "Chrome DevTools", "Snyk"],
  },
];

export const technicalGuarantees = [
  {
    title: "Sub-100ms Responses",
    description: "Edge-rendered and caching optimized across global points of presence.",
  },
  {
    title: "Deterministic Security",
    description: "Strict schema constraints, SQL parameterization, and zero-trust auth.",
  },
  {
    title: "Strict Typing",
    description: "100% TypeScript compile-time contracts from database schemas to client props.",
  },
];

export const methodology: MethodologyStep[] = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "Deconstruct business objectives, target audience requirements, technical constraints, and measurable success criteria into an actionable architectural scope.",
    output: "System Requirements Brief & Architecture Blueprint",
  },
  {
    step: "02",
    title: "Feasibility & Problem Analysis",
    description:
      "Evaluate third-party APIs, database schemas, compute requirements, and security compliance to eliminate hidden downstream bottlenecks before code is written.",
    output: "Technical Feasibility Matrix & Threat Model",
  },
  {
    step: "03",
    title: "Requirements & Architecture Planning",
    description:
      "Produce component tree hierarchies, state management schemas, database entity-relationship models, and sprint milestone schedules.",
    output: "Data Schemas, API Specs & Sprint Roadmap",
  },
  {
    step: "04",
    title: "Iterative Development",
    description:
      "Engineering organized in fast, 1-to-2 week sprints. Continuous deployment to ephemeral staging environments with live stakeholder progress previews.",
    output: "Working Staging Builds & Incremental PRs",
  },
  {
    step: "05",
    title: "Verification, QA & Client Refinement",
    description:
      "Cross-browser testing, automated regression runs, Lighthouse performance tuning, accessibility audits, and feedback cycles.",
    output: "QA Sign-off & Audit Compliance Report",
  },
  {
    step: "06",
    title: "Production Deployment & Ongoing Support",
    description:
      "Zero-downtime domain DNS propagation, SSL provisioning, edge caching configuration, and an included 14-day post-launch warranty window.",
    output: "Production Release & Full Repository Handover",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Fixed-Scope Sprint",
    badge: "Milestone-Based",
    description:
      "Ideal for well-defined web applications, MVP builds, or targeted refactoring with clear acceptance criteria.",
    features: [
      "Guaranteed delivery timeline with weekly sprint reviews",
      "Staged payments tied directly to verified milestone approvals",
      "Full IP and repository transfer upon project completion",
      "14-day complimentary post-launch bug warranty",
    ],
    bestFor: "MVPs, Website redesigns, and discrete feature modules",
  },
  {
    title: "Monthly Retainer",
    badge: "Ongoing Partnership",
    description:
      "Continuous engineering capacity integrated into your product team for rapid feature iteration, scaling, and maintenance.",
    features: [
      "Dedicated weekly engineering hours with prioritized response",
      "Direct Slack/Discord async collaboration and standup syncs",
      "Proactive performance audits, telemetry monitoring, and patch maintenance",
      "Flexible scope adaptation as roadmap priorities evolve",
    ],
    bestFor: "Growing startups and continuous product development",
  },
];
