/**
 * Description : tailwind.config.mjs - 📌 React + Vite
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

// tailwind.config.mjs
import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "sans-serif"
        ]
      },

      colors: {
        brand: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1e40af"
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6"
      },

      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.05)",
        modal: "0 20px 40px rgba(0,0,0,0.15)"
      }
    }
  },

  plugins: [typography, forms, lineClamp, aspectRatio]
};

export default config;
