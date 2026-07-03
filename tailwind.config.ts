import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        mist: "#f7f8fb",
        brand: {
          green: "#0f766e",
          coral: "#f9735b",
          gold: "#f5b544"
        }
      },
      boxShadow: {
        soft: "0 20px 70px rgba(17, 24, 39, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
