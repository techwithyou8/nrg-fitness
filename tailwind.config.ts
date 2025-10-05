import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B5FF3B",
          dark: "#9DE62C",
          light: "#C7FF6B",
        },
        secondary: {
          DEFAULT: "#FF8748",
          dark: "#E66F2F",
          light: "#FFA066",
        },
        dark: {
          DEFAULT: "#1C1F22",
          light: "#2A2E33",
          lighter: "#3A3F45",
        },
        neutral: {
          50: "#F5F7F8",
          100: "#E8ECEF",
          200: "#D1D8DD",
          300: "#B0BBC4",
          400: "#8896A3",
          500: "#667A8A",
          600: "#4F6070",
          700: "#3F4D5A",
          800: "#2F3840",
          900: "#1F2428",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "soft": "0 4px 20px rgba(0, 0, 0, 0.08)",
        "glow": "0 0 30px rgba(181, 255, 59, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
