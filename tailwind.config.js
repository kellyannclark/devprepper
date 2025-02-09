/** @type {import('tailwindcss').Config} */
module.exports = {
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
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
        heading: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
