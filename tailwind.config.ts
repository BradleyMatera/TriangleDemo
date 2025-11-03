import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(120% 120% at 90% 10%, rgba(103, 132, 255, 0.55) 0%, rgba(21, 21, 34, 0.9) 55%, rgba(8, 8, 11, 1) 100%)"
      },
      colors: {
        brand: {
          DEFAULT: "#6C8CFF",
          foreground: "#0B1026",
          subtle: "#9BA6FF",
          accent: "#A855F7"
        }
      },
      boxShadow: {
        glow: "0 0 65px rgba(108, 140, 255, 0.25)",
        card: "0 20px 45px rgba(17, 24, 39, 0.18)"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui(), typography(), forms()]
};

export default config;
