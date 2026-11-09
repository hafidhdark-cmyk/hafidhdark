import * as React from "react";
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-20 lg:py-28">
      {/* Container */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Kicker & Big Headline */}
        <ScrollReveal animation="fade-up">
          <div className="flex items-center justify-center gap-2 font-mono text-sm sm:text-base font-semibold text-primary mb-3">
            <span>07.</span>
            <span>What&apos;s Next?</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Get In Touch
          </h2>
        </ScrollReveal>

        {/* Bio Narrative */}
        <ScrollReveal animation="fade-up" delay={80}>
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
            I&apos;m currently open to full-time remote engineering roles, high-impact contracts, and ambitious freelance builds. Whether you have a project in mind, an architectural challenge to discuss, or just want to connect—my inbox and WhatsApp are always open.
          </p>
        </ScrollReveal>

        {/* Action Buttons with 10° angled sweep hover */}
        <ScrollReveal animation="pop" delay={140}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hafidhdark@gmail.com"
              className="dark-btn-sweep border border-primary bg-primary px-8 py-3.5 font-mono text-xs font-semibold text-canvas transition duration-200 hover:bg-transparent hover:text-primary shadow-[0_0_20px_rgba(0,184,192,0.25)] flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>Say Hello</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://wa.me/2348127590526"
              target="_blank"
              rel="noopener noreferrer"
              className="dark-btn-sweep border border-primary/50 bg-surface px-8 py-3.5 font-mono text-xs font-semibold text-primary transition duration-200 hover:border-primary flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Direct Detail Cards */}
        <ScrollReveal animation="pop" delay={200} className="w-full">
          <div className="mt-14 grid w-full grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* Email */}
            <div className="rounded-[4px] border border-border bg-surface p-5 transition-colors hover:border-primary/40">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                Email
              </span>
              <a
                href="mailto:hafidhdark@gmail.com"
                className="mt-1.5 flex items-center justify-between font-mono text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate"
              >
                <span className="truncate">hafidhdark@gmail.com</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 ml-1" />
              </a>
            </div>

            {/* WhatsApp / Phone */}
            <div className="rounded-[4px] border border-border bg-surface p-5 transition-colors hover:border-primary/40">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                WhatsApp / Phone
              </span>
              <a
                href="https://wa.me/2348127590526"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 flex items-center justify-between font-mono text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span>+234 812 759 0526</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 ml-1" />
              </a>
            </div>

            {/* Location */}
            <div className="rounded-[4px] border border-border bg-surface p-5 transition-colors hover:border-primary/40">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                Location
              </span>
              <div className="mt-1.5 flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Abeokuta, Nigeria (Remote)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Social Links Row */}
        <ScrollReveal animation="fade-up" delay={260}>
          <div className="mt-8 flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <a
              href="https://github.com/hafidhdark-cmyk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/abdulmuhmeen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/_your_fav_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <XIcon className="h-3.5 w-3.5" />
              <span>Twitter</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer Attribution */}
      <ScrollReveal animation="fade-up" delay={120}>
        <footer className="mt-24 pt-8 pb-12 border-t border-border/40 text-center font-mono text-xs text-muted-foreground">
          <p>
            Designed &amp; Engineered by{" "}
            <span className="font-semibold text-primary">dark.</span>
          </p>
        </footer>
      </ScrollReveal>
    </section>
  );
}
