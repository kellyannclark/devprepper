import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EAE2B7",
        foreground: "#003049",
        primary: "#D62828",
        secondary: "#F77F00",
        accent: "#FCBF49",
        darkBlue: "#003049",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Updated body font
        serif: ["Merriweather", "serif"],
        heading: ["Bebas Neue", "sans-serif"], // New heading font
      },
    },
  },
  plugins: [],
} satisfies Config;
