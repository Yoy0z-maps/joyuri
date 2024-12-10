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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navigation: "var(--navigation)",
        "digital-single": "var(--digital-single)",
        "single-1": "var(--single-1)",
        "mini-1": "var(--mini-1)",
        "single-2": "var(--single-2)",
        "mini-2": "var(--mini-2)",
        mylove: "var(--mylove)",
        "digital-single-2": "var(--digital-single-2)",
        "digital-single-3": "var(--digital-single-3)",
        "digital-single-4": "var(--digital-single-4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
