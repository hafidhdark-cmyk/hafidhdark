"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed z-40 bottom-[76px] right-4 lg:bottom-8 lg:right-20 xl:right-24 transition-all duration-300 ${
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="dark-btn-sweep flex h-10 w-10 items-center justify-center rounded-[4px] border border-primary/60 bg-surface/95 text-primary shadow-[0_8px_24px_rgba(0,184,192,0.2)] backdrop-blur-md hover:border-primary cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
