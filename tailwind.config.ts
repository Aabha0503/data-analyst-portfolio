import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dashboard: {
          background: "#0F172A",
          surface: "#1E293B",
          surfaceMuted: "#263449",
          border: "#334155",
          primary: "#38BDF8",
          success: "#22C55E",
          text: "#E2E8F0",
          muted: "#94A3B8",
          subtle: "#64748B"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        dashboard: "0 18px 40px rgb(2 6 23 / 0.28)"
      },
      borderRadius: {
        component: "0.5rem"
      },
      maxWidth: {
        dashboard: "1440px"
      }
    }
  },
  plugins: []
};

export default config;
