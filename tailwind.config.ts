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
        navy: {
          DEFAULT: "#1C2B3A",
          light: "#263d52",
          dark: "#131f29",
        },
        ember: {
          DEFAULT: "#C96A3A",
          light: "#d8825a",
          dark: "#a8542d",
        },
        sage: {
          DEFAULT: "#5C8272",
          light: "#7a9e8d",
          dark: "#456659",
        },
        slate: {
          warm: "#6B7A8D",
        },
        parchment: {
          DEFAULT: "#F5F1EB",
          dark: "#EAE6DE",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1C2B3A",
            fontFamily: "var(--font-jost)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
