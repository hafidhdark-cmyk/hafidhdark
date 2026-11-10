import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Terminal, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

interface Project {
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  badgeText: string;
  metric: string;
  subMetric: string;
  accentColor: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    kicker: "01 // FULL-STACK DIGITAL PUBLISHING",
    title: "WestBridge News",
    description:
      "Architected and deployed a high-traffic digital news platform publishing 1,000+ articles. Engineered a custom server-side social card generation engine using Sharp and libvips, eliminating headless browser cold-start latency and slashing execution time to under 80ms with 98 Lighthouse performance.",
    tags: ["Next.js 14/15", "TypeScript", "PostgreSQL", "Supabase", "Sharp & libvips", "Tailwind CSS"],
    liveUrl: "https://westbridgenews.com",
    githubUrl: "https://github.com/hafidhdark-cmyk/West-Bridge-Network",
    badgeText: "libvips C++ Binary Rasterizer",
    metric: "<80ms Execution",
    subMetric: "1,000+ Published Articles",
    accentColor: "from-cyan-500/20 via-primary/10 to-transparent",
    image: "/projects/westbridge.jpg",
  },
  {
    kicker: "02 // MULTI-TENANT SAAS BOOKING ENGINE",
    title: "Slotly",
    description:
      "Engineered a multi-tenant SaaS appointment scheduling engine with atomic reservation locking and PostgreSQL Row-Level Security (RLS) data protection. Features timezone-aware booking pipelines, automated conflict prevention, and real-time appointment telemetry across distributed client calendars.",
    tags: ["React 18", "TypeScript", "PostgreSQL", "Supabase RLS", "Tailwind CSS", "Edge Routes"],
    liveUrl: "https://8hzktqwt5lgpcu0utli3vx3mx.bolt.host",
    githubUrl: "https://github.com/hafidhdark-cmyk/Slotly",
    badgeText: "Atomic Reservation Locking",
    metric: "Sub-120ms Latency",
    subMetric: "Multi-Tenant Isolation",
    accentColor: "from-amber-500/20 via-gold/10 to-transparent",
    image: "/projects/slotly.jpg",
  },
  {
    kicker: "03 // AI DEVELOPER DIAGNOSTICS",
    title: "CodeSense",
    description:
      "Engineered an intelligent code diagnostic and explanation platform powered by the Google Gemini API with automated dual-model fallback error recovery. Features Web Worker telemetry parsing, structured TypeScript AST schema validation, and achieves a 99 Lighthouse performance score.",
    tags: ["Next.js 15", "Google Gemini API", "TypeScript", "Tailwind CSS", "Web Workers"],
    liveUrl: "https://codesense-chi.vercel.app/",
    githubUrl: "https://github.com/hafidhdark-cmyk/CodeSense",
    badgeText: "Dual-Model Gemini Fallback",
    metric: "99 Lighthouse Score",
    subMetric: "AST Telemetry Parsing",
    accentColor: "from-emerald-500/20 via-primary/10 to-transparent",
    image: "/projects/codesense.png",
  },
  {
    kicker: "04 // FOOD COMMERCE & WHATSAPP LOGISTICS",
    title: "JollofPlus",
    description:
      "Client web application engineered for Abeokuta's premier smoky jollof food brand. Features responsive menu browsing, multi-branch order routing across Ori-Omi and Ita-Eko, and direct automated WhatsApp checkout dispatch.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Direct Dispatch", "Vercel"],
    liveUrl: "https://jollofplus.vercel.app/",
    badgeText: "Instant WhatsApp Checkout",
    metric: "Sub-Minute Dispatch",
    subMetric: "Multi-Branch Routing (Ori-Omi & Ita-Eko)",
    accentColor: "from-rose-500/20 via-primary/10 to-transparent",
    image: "/projects/jollofplus.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section id="my-work" className="scroll-mt-28 py-20 lg:py-28">
      {/* Section Title with Trailing Line */}
      <ScrollReveal animation="fade-up">
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-baseline gap-2.5 font-mono text-sm sm:text-base font-semibold text-primary">
            <span>04.</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Things I&apos;ve Built
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-border/80 dark:bg-zinc-700 max-w-xs sm:max-w-md lg:max-w-lg" />
        </div>
      </ScrollReveal>

      {/* Projects List with Alternating Asymmetrical Layout */}
      <div className="flex flex-col gap-20 sm:gap-24 lg:gap-32">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <ScrollReveal
              key={project.title}
              animation="pop"
              delay={idx * 100}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
              {/* Mockup Window Screen Container */}
              <div
                className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"
                  }`}
              >
                <div className="group relative overflow-hidden rounded-[4px] border border-border bg-surface shadow-2xl transition-all duration-300 hover:border-primary/50">
                  {/* macOS Window Title Bar */}
                  <div className="flex items-center justify-between border-b border-border/80 bg-surface-recessed px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f56]/90 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/90 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-[#27c93f]/90 shadow-sm" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground/80">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                    <div className="w-10" />
                  </div>

                  {/* Window Screen Content / Stylized Visual Canvas or Real Thumbnail */}
                  {project.image ? (
                    <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/img relative block aspect-[16/10] w-full overflow-hidden bg-surface-recessed cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
                        priority={idx === 0}
                      />

                      {/* Subtle hover gradient wash */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 opacity-40 transition-opacity duration-300 group-hover/img:opacity-65" />

                      {/* Floating Glass Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-white/20 bg-black/65 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-medium text-white shadow-md backdrop-blur-md">
                          <Terminal className="h-3 w-3 text-primary" />
                          <span>{project.badgeText}</span>
                        </span>

                        <span className="rounded-[4px] border border-primary/40 bg-black/65 px-3 py-1 font-mono text-[10px] sm:text-xs font-bold text-primary shadow-md backdrop-blur-md">
                          {project.metric}
                        </span>
                      </div>

                      {/* Floating Bottom Sub-metric Strip */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between font-mono text-[10px] text-white/95 border border-white/15 bg-black/65 px-3 py-1.5 rounded-[4px] backdrop-blur-md">
                        <span className="font-medium truncate">{project.subMetric}</span>
                        <span className="flex items-center gap-1.5 text-emerald-400 shrink-0 ml-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>LIVE</span>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div
                      className={`relative flex min-h-[220px] sm:min-h-[260px] flex-col justify-between p-6 sm:p-8 bg-gradient-to-br ${project.accentColor} transition-transform duration-300 group-hover:scale-[1.01]`}
                    >
                      {/* Top Row: System Badge */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-border/60 bg-surface/90 px-3 py-1 font-mono text-[11px] text-foreground shadow-sm backdrop-blur-sm">
                          <Terminal className="h-3 w-3 text-primary" />
                          <span>{project.badgeText}</span>
                        </span>

                        <span className="font-mono text-xs font-bold text-primary">
                          {project.metric}
                        </span>
                      </div>

                      {/* Middle Graphic Preview */}
                      <div className="my-6 flex flex-col items-center justify-center text-center">
                        <div className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                          {project.title}
                        </div>
                        <div className="mt-1 font-mono text-xs text-muted-foreground">
                          {project.subMetric}
                        </div>
                      </div>

                      {/* Bottom Status Row */}
                      <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground border-t border-border/40 pt-3">
                        <span>STATUS // PRODUCTION READY</span>
                        <span className="flex items-center gap-1.5 text-emerald-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>VERIFIED</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Narrative Text Container */}
              <div
                className={`flex flex-col lg:col-span-5 ${isEven ? "lg:order-1 text-left" : "lg:order-2 text-left"
                  }`}
              >
                {/* Monospace Kicker */}
                <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.kicker}
                </span>

                {/* Project Title */}
                <h3 className="mt-1.5 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>

                {/* Description Card */}
                <div className="mt-4 rounded-[4px] border border-border bg-surface p-5 shadow-lg backdrop-blur-sm font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </div>

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[4px] border border-border/70 bg-surface-recessed px-2.5 py-1 text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-6 flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark-btn-sweep inline-flex items-center gap-1.5 border border-primary px-5 py-2 font-mono text-xs font-semibold text-primary transition duration-200"
                    >
                      <span>Live Project</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark-btn-sweep inline-flex items-center gap-1.5 border border-border bg-surface px-5 py-2 font-mono text-xs font-semibold text-foreground transition duration-200 hover:border-primary"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
        })}
      </div>

      {/* View All Projects CTA */}
      <ScrollReveal animation="fade-up" delay={150} className="mt-20 flex justify-center">
        <Link
          href="/projects"
          className="dark-btn-sweep border border-primary bg-surface px-8 py-3.5 font-mono text-xs font-semibold text-primary transition duration-200 hover:border-primary shadow-[0_0_20px_rgba(0,184,192,0.15)] flex items-center gap-2.5"
        >
          <span>View Full Project Archive ({projects.length} Engineered Builds)</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
