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
        primary: "#5C9EAD", // Teal-like color
        secondary: "#326273", // Deep teal
        accent: "#E39774", // Peach-like color
        light: "#EEEEEE", // Light gray
        white: "#FFFFFF", // Pure white
      },
    },
  },
  plugins: [],
} satisfies Config;
