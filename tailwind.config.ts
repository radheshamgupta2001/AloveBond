// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Enable dark mode with class-based toggling
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFF1E6",
          "500": "#FF7000", // Primary color (used for buttons and highlights)
        },
        dark: {
          "100": "#000000", // Dark mode background
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#101012", // Dark text color
        },
        light: {
          "900": "#FFFFFF", // Light background (default)
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
};

export default config;
