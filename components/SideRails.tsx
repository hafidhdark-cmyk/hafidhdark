import * as React from "react";

// Official GitHub Icon (24x24)
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// Official LinkedIn Icon (24x24)
function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

// Official X / Twitter Icon (24x24)
function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Authentic Official WhatsApp Logo (Phone receiver handset inside speech bubble)
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WhatsApp</title>
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.135.56 4.14 1.536 5.882l-1.636 5.974 6.136-1.609c1.691.923 3.631 1.453 5.964 1.453 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 22c-1.892 0-3.664-.537-5.18-1.465l-.372-.224-3.649.957.974-3.559-.245-.39c-1.018-1.619-1.568-3.498-1.568-5.319 0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/hafidhdark",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hafidhdark",
    icon: LinkedinIcon,
  },
  {
    name: "X",
    href: "https://x.com/hafidhdark",
    icon: XIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2348127590526",
    icon: WhatsAppIcon,
  },
];

export function SideRails() {
  return (
    <>
      {/* ============================================================
          DESKTOP RAILS (hidden below lg)
          ============================================================ */}
      {/* Left Rail: Social Icons */}
      <aside
        aria-label="Social Profiles Rail"
        className="fixed bottom-0 left-7 xl:left-9 z-40 hidden lg:flex flex-col items-center gap-5 text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-5">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="p-1.5 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <Icon className="h-[21px] w-[21px]" />
            </a>
          ))}
        </div>
        <div
          className="h-28 w-[1.5px] bg-border transition-colors duration-200 dark:bg-zinc-700"
          aria-hidden="true"
        />
      </aside>

      {/* Right Rail: Monospace Email */}
      <aside
        aria-label="Direct Transmission Rail"
        className="fixed bottom-0 right-7 xl:right-9 z-40 hidden lg:flex flex-col items-center gap-6 text-muted-foreground"
      >
        <a
          href="mailto:hafidhdark@gmail.com"
          aria-label="Send email to hafidhdark@gmail.com"
          className="p-1 font-mono text-[13px] font-medium tracking-[0.14em] text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-primary [writing-mode:vertical-rl] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          hafidhdark@gmail.com
        </a>
        <div
          className="h-28 w-[1.5px] bg-border transition-colors duration-200 dark:bg-zinc-700"
          aria-hidden="true"
        />
      </aside>

      {/* ============================================================
          MOBILE FLOATING DOCK (visible below lg, exactly like Image 1)
          ============================================================ */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex lg:hidden items-center justify-between w-[92%] max-w-[395px] px-4 py-2.5 rounded-full bg-zinc-900/95 dark:bg-black/95 text-white backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] border border-white/10">
        {/* Social Icons on Left */}
        <div className="flex items-center gap-3.5">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="p-1 text-zinc-300 transition-colors duration-150 hover:text-primary active:scale-95"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Vertical Divider */}
        <div className="h-4 w-[1px] bg-zinc-700 mx-1" aria-hidden="true" />

        {/* Email on Right */}
        <a
          href="mailto:hafidhdark@gmail.com"
          className="font-mono text-[11px] sm:text-xs text-zinc-300 hover:text-primary transition-colors tracking-tight whitespace-nowrap"
        >
          hafidhdark@gmail.com
        </a>
      </div>
    </>
  );
}
