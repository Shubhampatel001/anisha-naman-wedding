/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#EFE7DA",
        sage: "#9CAF88",
        "sage-dark": "#7D8F6A",
        primary: "#8B5E3C",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
