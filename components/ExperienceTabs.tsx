"use client";

import * as React from "react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  link?: string;
  highlights: string[];
  skills: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "FlyRank AI",
    role: "Frontend AI Engineering Intern",
    period: "July 2026 - Present",
    location: "Remote",
    link: "https://flyrank.ai",
    highlights: [
      "Engineered production-grade frontend deliverables using AI as an active pair-programming partner across fast-iteration sprints, optimizing developer workflow telemetry and LLM response stability.",
      "Built CodeSense as internship capstone—an AI developer tool achieving a 99 Lighthouse performance score and automated dual-model fallback error recovery.",
      "Standardized AI-assisted engineering workflows across the team, reducing task turnaround times by 35% through structured prompt templates and TypeScript schema validation.",
      "Collaborated on containerized model integrations with the Google Gemini API and Model Context Protocol (MCP) tooling.",
    ],
    skills: ["Next.js 15", "Google Gemini API", "Claude API", "TypeScript", "Tailwind CSS", "Web Workers"],
  },
  {
    company: "Trueminds Innovations",
    role: "Frontend Engineer Intern",
    period: "Feb 2026 - Apr 2026",
    location: "Remote",
    link: "https://truemindsltd.com/",
    highlights: [
      "Collaborated within an agile engineering squad building responsive, cross-browser frontend user interfaces with pixel-perfect design parity and clean component separation.",
      "Collaborated as Frontend Engineer on the TalentFlow team project, taking primary responsibility for engineering the platform marketing launch surface.",
      "Enforced strict component prop typing, accessibility (WCAG AA), and shared design token adherence across Storybook documentation.",
      "Streamlined Git flow and PR code reviews, eliminating cross-browser layout bugs prior to deployment.",
    ],
    skills: ["React 18", "TypeScript", "Tailwind CSS", "Storybook", "Agile Squads", "Git Flow"],
  },
  {
    company: "WestBridge News",
    role: "Lead Full-Stack Architect & Consultant",
    period: "2025 - 2026",
    location: "Remote",
    link: "https://westbridgenews.com",
    highlights: [
      "Architected and deployed WestBridge News—a full-stack digital news platform serving 1,000+ published articles with a custom social card engine built with Sharp and libvips executing in sub-80ms.",
      "Built custom oscillator-based ambient audio synthesizer engines and interactive visualizers using the browser-native Web Audio API and HTML5 Canvas.",
      "Designed and deployed containerized microservices to Google Cloud Run and Vercel with automated CI/CD pipelines.",
    ],
    skills: ["Next.js 14/15", "PostgreSQL", "Supabase RLS", "Sharp & libvips", "Web Audio API", "Docker"],
  },
];

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  const current = EXPERIENCES[activeTab];

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12 w-full max-w-4xl">
      {/* Left Column: Vertical Company Tabs with Sliding Accent Bar */}
      <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-56 shrink-0 border-b md:border-b-0 border-border/60">
        {/* Desktop Vertical Track Line */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-border/60 dark:bg-zinc-800">
          {/* Animated Sliding Accent Bar */}
          <div
            className="w-full bg-primary transition-transform duration-300 ease-out"
            style={{
              height: "44px",
              transform: `translateY(${activeTab * 44}px)`,
            }}
          />
        </div>

        {/* Mobile Horizontal Track Line */}
        <div className="md:hidden absolute left-0 right-0 bottom-0 h-[2px] bg-border/60 dark:bg-zinc-800">
          <div
            className="h-full bg-primary transition-transform duration-300 ease-out"
            style={{
              width: `${100 / EXPERIENCES.length}%`,
              transform: `translateX(${activeTab * 100}%)`,
            }}
          />
        </div>

        {/* Tab Buttons */}
        {EXPERIENCES.map((exp, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={exp.company}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex items-center text-left h-11 px-4 md:pl-6 md:pr-4 font-mono text-xs tracking-wide transition-all duration-200 whitespace-nowrap rounded-t-[4px] md:rounded-t-none md:rounded-r-[4px] ${isSelected
                ? "text-primary font-semibold bg-primary/10 md:bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                }`}
              aria-selected={isSelected}
              role="tab"
            >
              <span>{exp.company}</span>
            </button>
          );
        })}
      </div>

      {/* Right Column: Experience Details Panel */}
      <div className="flex-1 w-full min-w-0">
        {/* Role & Company Header */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            <span>{current.role}</span>{" "}
            <span className="text-primary font-semibold">
              @{" "}
              {current.link ? (
                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <span>{current.company}</span>
                  <ExternalLink className="h-3.5 w-3.5 inline-block opacity-75" />
                </a>
              ) : (
                current.company
              )}
            </span>
          </h3>

          {/* Period & Location Meta */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span>{current.period}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{current.location}</span>
            </span>
          </div>
        </div>

        {/* Bulleted Achievements */}
        <div className="mt-6 flex flex-col gap-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
          {current.highlights.map((item, i) => (
            <div key={i} className="relative pl-6">
              <span className="absolute left-0 top-0.5 font-mono text-sm font-bold text-primary">
                ▹
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40 font-mono text-xs text-muted-foreground">
          {current.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-[4px] border border-border bg-surface px-2.5 py-1 text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
