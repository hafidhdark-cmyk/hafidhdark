import * as React from "react";
import { Award, ShieldCheck, GraduationCap, Cpu, Globe, ExternalLink } from "lucide-react";
import { certifications, Certification } from "@/data/certifications";
import { ScrollReveal } from "@/components/ScrollReveal";

function getBadgeIcon(type: Certification["badgeType"]) {
  switch (type) {
    case "microsoft":
      return <Cpu className="h-5 w-5 text-sky-500 shrink-0" />;
    case "trueminds":
      return <ShieldCheck className="h-5 w-5 text-indigo-500 shrink-0" />;
    case "jobberman":
      return <Globe className="h-5 w-5 text-amber-500 shrink-0" />;
    case "niit":
    case "uopeople":
      return <GraduationCap className="h-5 w-5 text-emerald-500 shrink-0" />;
    default:
      return <Award className="h-5 w-5 text-primary shrink-0" />;
  }
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-28 py-20 lg:py-28">
      {/* Section Title with Trailing Line */}
      <ScrollReveal animation="fade-up">
        <div className="flex items-center gap-4 mb-14">
          <div className="flex items-baseline gap-2.5 font-mono text-sm sm:text-base font-semibold text-primary">
            <span>06.</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Certifications &amp; Credentials
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-border/80 dark:bg-zinc-700 max-w-xs sm:max-w-md lg:max-w-lg" />
        </div>
      </ScrollReveal>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          return (
            <ScrollReveal
              key={cert.id}
              animation="pop"
              delay={index * 80}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between rounded-[4px] border border-border bg-surface p-6 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_12px_28px_rgba(0,184,192,0.12)] hover:-translate-y-1">
                {/* Top Row: Icon + Date / Verification */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-border bg-surface-recessed shadow-inner transition-transform duration-300 group-hover:scale-105">
                      {getBadgeIcon(cert.badgeType)}
                    </div>

                    <span className="font-mono text-[11px] font-medium text-muted-foreground border border-border/60 bg-surface-recessed px-2.5 py-1 rounded-[4px]">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="mt-1 font-mono text-xs font-medium text-primary">
                    {cert.issuer}
                  </div>

                  {/* Credential ID badge if present */}
                  {cert.credentialId && (
                    <div className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 rounded-[4px]">
                      <span className="text-indigo-400 font-semibold">ID:</span>
                      <span className="font-mono">{cert.credentialId}</span>
                    </div>
                  )}

                  {/* Summary */}
                  <p className="mt-3.5 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cert.summary}
                  </p>
                </div>

                {/* Bottom Tags & External Link */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground bg-surface-recessed border border-border/50 px-2 py-0.5 rounded-[4px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary hover:underline"
                    >
                      <span>View Curriculum / Credential</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
