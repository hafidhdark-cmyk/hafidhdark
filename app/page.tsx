import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "@/components/Typewriter";
import { ExperienceTabs } from "@/components/ExperienceTabs";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  TypeScriptIcon,
  ReactIcon,
  PostgresIcon,
  TailwindIcon,
  ApiIcon,
  MediaPipelineIcon,
  AudioWaveIcon,
  SparklesAiIcon,
  DockerIcon,
  GitBranchIcon,
} from "@/components/TechIcons";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col px-6 sm:px-12 lg:px-0 lg:pl-[116px] lg:pr-12 xl:pl-[132px] xl:pr-16">
      {/* ============================================================
          SECTION 01: HERO (#home)
          Vertically centered & brought down slightly on Desktop
          ============================================================ */}
      <section
        id="home"
        className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center py-12 sm:py-16 lg:pt-16 lg:pb-10"
      >
        {/* Organic Ambient Light / Warm Gold & Cyan Blob (centered on mobile, floating on desktop) */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-gold/20 via-primary/15 to-transparent blur-[90px] sm:h-[500px] sm:w-[500px] lg:top-1/3 lg:left-1/4 lg:h-[620px] lg:w-[620px] lg:blur-[130px]"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-24 lg:translate-y-12 xl:translate-y-12 lg:p-18 xl:p-18">
          {/* Left Column: Narrative, Typewriter, & 3 CTA Buttons */}
          <div className="flex flex-col items-start lg:col-span-8">
            {/* Greeting */}
            <span className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Hi, I&apos;m
            </span>

            {/* Display Name */}
            <h1 className="mt-1 font-heading text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[1.08]">
              dark<span className="text-primary">,</span>
            </h1>

            {/* Typewriter Role Line */}
            <div className="mt-2 min-h-[46px] sm:min-h-[56px] lg:min-h-[64px] flex items-center">
              <Typewriter
                words={[
                  "UI/UX Designer",
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Backend & Systems Architect",
                ]}
                typingSpeed={85}
                deletingSpeed={45}
                pauseTime={2000}
                className="font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl"
              />
            </div>

            {/* Bio Narrative */}
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build and run resilient full-stack web platforms, edge-rendered Next.js
              applications, and high-throughput backend APIs. Experienced in TypeScript,
              Node.js, PostgreSQL, and scalable cloud systems.
            </p>

            {/* 3 Action Buttons with 10° angled sweep hover */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="/resume.pdf"
                download
                className="dark-btn-sweep border border-primary px-6 py-3 font-mono text-xs font-semibold text-primary transition duration-200"
              >
                Resume CV ↗
              </a>

              <Link
                href="#my-work"
                className="dark-btn-sweep border border-border bg-surface px-6 py-3 font-mono text-xs font-semibold text-foreground transition duration-200 hover:border-primary"
              >
                Explore Work
              </Link>

              <a
                href="https://wa.me/2348127590526"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-btn-sweep border border-primary/50 bg-surface px-6 py-3 font-mono text-xs font-semibold text-primary transition duration-200 hover:border-primary"
              >
                Contact Me ↗
              </a>
            </div>
          </div>

          {/* Right Column: Organic Morphing Blob / Visual Element (Desktop) */}
          <div className="hidden lg:flex justify-center lg:col-span-4">
            <div className="relative flex h-72 w-72 items-center justify-center xl:h-100 xl:w-100">
              {/* Animated Floating Glow Outer Rings */}
              <div
                className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] border border-primary/30 bg-gradient-to-tr from-primary/10 via-transparent to-gold/15 opacity-80"
                aria-hidden="true"
              />
              <div
                className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-[55%_45%_35%_65%/60%_35%_65%_40%] border border-gold/30 bg-gradient-to-bl from-gold/10 via-transparent to-primary/10 opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION PLACEHOLDERS (To be built section by section)
          ============================================================ */}
      {/* ============================================================
          SECTION 02: ABOUT ME (#my-self)
          ============================================================ */}
      <section id="my-self" className="scroll-mt-28 py-20 lg:py-28">
        {/* Section Title with Trailing Line */}
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-baseline gap-2.5 font-mono text-sm sm:text-base font-semibold text-primary">
              <span>02.</span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                About Me
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-border/80 dark:bg-zinc-700 max-w-xs sm:max-w-md lg:max-w-lg" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Skills Grid */}
          <ScrollReveal animation="slide-right" className="flex flex-col gap-5 lg:col-span-7 xl:col-span-8">
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hello! I&apos;m <span className="text-foreground font-semibold">dark</span>, a Software Engineer and Full-Stack Developer passionate about architecting resilient digital systems, edge-rendered web platforms, and robust data infrastructures. My work focuses on end-to-end execution—translating complex requirements into scalable, type-safe production applications.
            </p>

            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              My core engineering focus spans high-performance Frontend Engineering (<span className="text-foreground font-medium">Next.js 14/15 App Router, React 18, TypeScript, custom design token architectures</span>) and solid Data &amp; Backend Systems. I engineer RESTful APIs, edge runtime route handlers, and multi-tenant database models using <span className="text-foreground font-medium">PostgreSQL and Supabase</span> protected by strict Row-Level Security (RLS) policies.
            </p>

            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond standard web development, I build specialized media pipelines—such as dynamic social-card generation engines with <span className="text-foreground font-medium">Sharp &amp; libvips</span> delivering sub-80ms execution speeds, interactive audio engines via the Web Audio API, and containerized AI agent workflows with the <span className="text-foreground font-medium">Google Gemini API</span> and Model Context Protocol (MCP).
            </p>

            {/* Skills Taxonomy Grid with Real Tech Icons */}
            <div className="mt-4 pt-4 border-t border-border/50">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {"// Core Technologies & Tooling I Work With:"}
              </span>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <TypeScriptIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">JavaScript (ES6+) &amp; TypeScript</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ReactIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Next.js 14/15 (App Router) &amp; React 18</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PostgresIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">PostgreSQL &amp; Supabase (RLS)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ApiIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">RESTful &amp; Edge Runtime APIs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <TailwindIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Tailwind CSS (v3/v4) &amp; Design Systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MediaPipelineIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Sharp &amp; libvips Image Pipelines</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <AudioWaveIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Web Audio API &amp; Dynamic SVG/Canvas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <SparklesAiIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Gemini API &amp; MCP Agent Tooling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <DockerIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Docker &amp; Google Cloud Run</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GitBranchIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">Git, GitHub &amp; Vercel CI/CD</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Profile Image Card with Offset Border */}
          <ScrollReveal animation="slide-left" delay={150} className="flex justify-center lg:col-span-5 xl:col-span-4 lg:pt-2">
            <div className="group relative w-full max-w-[280px] sm:max-w-[320px]">
              {/* Offset Geometric Accent Border Frame */}
              <div
                className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-[4px] border-2 border-primary transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:translate-y-2.5"
                aria-hidden="true"
              />

              {/* Photo Card Container */}
              <div className="relative overflow-hidden rounded-[4px] border border-border bg-surface shadow-2xl transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,184,192,0.18)]">
                {/* Subtle Interactive Color Tint Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-primary/20 mix-blend-multiply opacity-60 transition-opacity duration-300 group-hover:opacity-0"
                  aria-hidden="true"
                />

                {/* Profile Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-recessed">
                  <Image
                    src="/profile.jpg"
                    alt="dark - Software Engineer"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top filter grayscale contrast-125 transition-all duration-300 group-hover:filter-none group-hover:scale-[1.03]"
                    priority
                  />
                </div>

                {/* Card Sub-bar */}
                <div className="flex items-center justify-between border-t border-border/70 bg-surface px-4 py-3 font-mono text-[11px]">
                  <span className="font-semibold text-foreground">dark</span>
                  <span className="flex items-center gap-1.5 text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Software Engineer</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 03: WORK EXPERIENCE (#experience)
          ============================================================ */}
      <section id="experience" className="scroll-mt-28 py-20 lg:py-28">
        {/* Section Title with Trailing Line */}
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-baseline gap-2.5 font-mono text-sm sm:text-base font-semibold text-primary">
              <span>03.</span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Where I&apos;ve Worked
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-border/80 dark:bg-zinc-700 max-w-xs sm:max-w-md lg:max-w-lg" />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="pop" delay={100}>
          <ExperienceTabs />
        </ScrollReveal>
      </section>

      {/* ============================================================
          SECTION 04: FEATURED PROJECTS (#my-work)
          ============================================================ */}
      <ProjectsSection />

      {/* ============================================================
          SECTION 05: CLIENT REVIEWS (#reviews)
          ============================================================ */}
      <ReviewsSection />

      {/* ============================================================
          SECTION 06: CERTIFICATIONS & CREDENTIALS (#certifications)
          ============================================================ */}
      <CertificationsSection />

      {/* ============================================================
          SECTION 07: GET IN TOUCH (#contact)
          ============================================================ */}
      <ContactSection />
    </div>
  );
}
