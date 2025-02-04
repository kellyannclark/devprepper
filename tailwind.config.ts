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
        background: "#EAE2B7", // Light Beige
        foreground: "#003049", // Dark Blue
        primary: "#D62828", // Red
        secondary: "#F77F00", // Orange
        accent: "#FCBF49", // Yellow
        darkBlue: "#003049", // ✅ Explicitly add dark blue
      },
    },
  },
  plugins: [],
} satisfies Config;
