"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { CVTriggerButton } from "@/components/CVProvider";

const NAV_ITEMS = [
  { num: "01.", label: "Home", href: "#home" },
  { num: "02.", label: "About Me", href: "#my-self" },
  { num: "03.", label: "Experience", href: "#experience" },
  { num: "04.", label: "Projects", href: "#my-work" },
  { num: "05.", label: "Reviews", href: "#reviews" },
  { num: "06.", label: "Certifications", href: "#certifications" },
  { num: "07.", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const mounted = React.useSyncExternalStore(
    () => () => { },
    () => true,
    () => false
  );

  const toggleTheme = () => {
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center justify-between border-b border-border/40 bg-canvas/80 px-6 backdrop-blur-md transition-colors duration-200 sm:px-10 lg:pl-[116px] lg:pr-12 xl:pl-[132px] xl:pr-16">
        {/* Left: Brand Mark & Profile Avatar */}
        <Link
          href="#home"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          aria-label="dark. - Software Engineer"
        >
          <div className="relative flex h-10 w-10 overflow-hidden rounded-full border border-primary/50 shadow-[0_0_15px_rgba(0,184,192,0.25)] transition-all duration-200 group-hover:border-primary">
            <Image
              src="/profile.jpg"
              alt="dark"
              width={40}
              height={40}
              className="h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
              priority
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            dark<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Right: Actions & Normal Hamburger */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-border bg-surface text-muted-foreground transition-all duration-150 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
          >
            {mounted ? (
              (resolvedTheme || theme) === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>

          {/* Download CV CTA (Triggers Prompt) */}
          <CVTriggerButton className="dark-btn-sweep border border-primary px-4 py-2 font-mono text-xs font-semibold text-primary transition duration-200 sm:px-5 sm:py-2.5">
            Download CV
          </CVTriggerButton>

          {/* Standard Clean Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-border bg-surface text-foreground transition duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Normal Hamburger Off-Canvas Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${menuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <nav
          aria-label="Site Navigation Drawer"
          className={`absolute top-0 right-0 flex h-full w-full max-w-sm flex-col justify-between border-l border-border bg-surface p-8 shadow-2xl transition-transform duration-300 ease-out sm:max-w-md ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Top Row: Drawer Header */}
          <div className="flex items-center justify-between border-b border-border/60 pb-5">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {"// Navigation"}
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-border text-muted-foreground hover:border-primary hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-5 py-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between font-heading text-xl font-bold text-foreground transition-colors duration-150 hover:text-primary sm:text-2xl"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 text-primary" />
              </Link>
            ))}
          </div>

          {/* Drawer Footer: Direct Contact & Transmission */}
          <div className="border-t border-border/60 pt-6">
            <p className="font-mono text-[11px] text-muted-foreground">
              Direct Contact
            </p>
            <a
              href="mailto:hafidhdark@gmail.com"
              className="mt-1 block font-mono text-xs text-primary hover:underline"
            >
              hafidhdark@gmail.com
            </a>
            <a
              href="https://wa.me/2348127590526"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              WhatsApp: +2348127590526 ↗
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
