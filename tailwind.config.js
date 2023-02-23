/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0c0d11",
        card: "#111217",
        redAccent: "#b93753",
        text: "#7f86a6",
      },
      fontFamily: {
        sans: ["Signika Negative", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};
