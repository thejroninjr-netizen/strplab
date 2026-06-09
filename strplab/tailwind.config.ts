import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-white": "#FFFFFF",
        "brand-off": "#F7F7F7",
        "brand-text": "#111111",
        "brand-secondary": "#666666",
        "brand-black": "#0A0A0A",
        "brand-carbon": "#171717",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-sm": ["clamp(2.5rem, 8vw, 5rem)", { lineHeight: "0.95" }],
        "hero": ["clamp(3.5rem, 10vw, 6rem)", { lineHeight: "0.92" }],
        "hero-lg": ["clamp(4rem, 12vw, 8rem)", { lineHeight: "0.88" }],
        "editorial": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.05" }],
      },
      spacing: {
        "section": "120px",
        "section-sm": "80px",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
