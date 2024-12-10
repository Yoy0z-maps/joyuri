import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        navigation: "#c3b6d8",
        "digital-single": "#b6c5d0",
        "single-1": "#eb2d41",
        "mini-1": "#2bab5e",
        "single-2": "#b2b1d9",
        "mini-2": "#f0b903",
        "my-love": "#d9d1e8",
        "digital-single-2": "#7e9c59",
        "digital-single-3": "#cbc9cc",
        "digital-single-4": "#eaca38",
      },
    },
  },
  plugins: [],
} satisfies Config;
