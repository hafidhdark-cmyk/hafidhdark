import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-28 py-20 lg:py-28">
      {/* Section Title with Trailing Line */}
      <ScrollReveal animation="fade-up">
        <div className="flex items-center gap-4 mb-14">
          <div className="flex items-baseline gap-2.5 font-mono text-sm sm:text-base font-semibold text-primary">
            <span>05.</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Client Feedback &amp; Delivery Proof
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-border/80 dark:bg-zinc-700 max-w-xs sm:max-w-md lg:max-w-lg" />
        </div>
      </ScrollReveal>

      {/* 2-Column Grid of Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {testimonials.map((item, index) => {
          const isEmerald = item.badgeColor === "emerald";

          return (
            <ScrollReveal
              key={item.id}
              animation="pop"
              delay={index * 150}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between rounded-[4px] border border-border bg-surface p-7 sm:p-8 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_15px_30px_rgba(0,184,192,0.12)]">
                {/* Top Row: Quotation Mark & Verified Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-indigo-400 dark:text-indigo-400 leading-none select-none">
                    &ldquo;&ldquo;
                  </span>

                  <div
                    className={`inline-flex items-center gap-1.5 rounded-[4px] px-3 py-1 font-mono text-[11px] font-medium shadow-sm ${
                      isEmerald
                        ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Middle Quote */}
                <blockquote className="my-6 font-sans text-base sm:text-lg leading-relaxed text-foreground/90 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Bottom Author Row */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-border/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-indigo-500/30 bg-indigo-500/10 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-sm">
                    {item.avatar}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="font-heading text-sm sm:text-base font-bold text-foreground truncate">
                      {item.author}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground truncate">
                      {item.organization}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
