import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        text: "#0d0d0d",
        muted: "#888888",
        accent: "#4f8ef7",
        dark: "#0d0d0d"
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
