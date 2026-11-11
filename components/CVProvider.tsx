"use client";

import * as React from "react";
import { FileText, Download, X, ExternalLink } from "lucide-react";

interface CVContextValue {
  openCVPrompt: () => void;
}

const CVContext = React.createContext<CVContextValue>({
  openCVPrompt: () => {},
});

export function useCVPrompt() {
  return React.useContext(CVContext);
}

export function CVTriggerButton({
  children,
  className = "",
  ariaLabel = "Download CV",
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const { openCVPrompt } = useCVPrompt();

  return (
    <button
      type="button"
      onClick={openCVPrompt}
      aria-label={ariaLabel}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export function CVProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openCVPrompt = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePrompt = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close on Escape & prevent background scrolling when open
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleConfirmDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abdul-Muhmeen-Adeyeri-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <CVContext.Provider value={{ openCVPrompt }}>
      {children}

      {/* Global CV Download Confirmation Modal (Desktop & Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          onClick={closePrompt}
        >
          <div
            className="relative w-full max-w-md rounded-[4px] border border-border bg-surface p-6 sm:p-7 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closePrompt}
              aria-label="Close download prompt"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-[4px] border border-border bg-surface-recessed text-muted-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header Kicker & Icon */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-primary/40 bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {"// Document Transmission"}
                </span>
                <h3
                  id="cv-modal-title"
                  className="font-heading text-lg sm:text-xl font-bold text-foreground"
                >
                  Download Resume / CV?
                </h3>
              </div>
            </div>

            {/* File Metadata Card */}
            <div className="mt-5 rounded-[4px] border border-border/80 bg-surface-recessed p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-foreground font-semibold">
                <span className="truncate">Abdul-Muhmeen-Adeyeri-CV.pdf</span>
                <span className="ml-2 shrink-0 rounded-[4px] border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                  PDF &bull; 2 Pages
                </span>
              </div>
              <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Would you like to download a copy of <span className="text-foreground font-medium">dark&apos;s</span> Software Engineer Curriculum Vitae to your device?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={closePrompt}
                className="rounded-[4px] border border-border bg-surface px-4 py-2.5 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground cursor-pointer"
              >
                Cancel
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePrompt}
                className="dark-btn-sweep inline-flex items-center justify-center gap-1.5 border border-border bg-surface-recessed px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-colors hover:border-primary"
              >
                <span>Preview</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={handleConfirmDownload}
                className="dark-btn-sweep inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-canvas shadow-[0_0_16px_rgba(0,184,192,0.25)] transition duration-200 hover:bg-transparent hover:text-primary cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Yes, Download</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </CVContext.Provider>
  );
}
