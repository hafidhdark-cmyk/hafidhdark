import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "muted-foreground": "var(--text-muted)",
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
          recessed: "var(--surface-recessed)",
        },
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          accent: "var(--primary-accent)",
          hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary-accent)",
          accent: "var(--secondary-accent)",
        },
        gold: {
          DEFAULT: "var(--gold)",
        },
        text: {
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
          mono: "var(--text-mono)",
        },
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "4px",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
