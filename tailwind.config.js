/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      colors: {
        brand: {
          green: "#4a8840",
          dark: "#0d1a0e",
          card: "rgba(255,255,255,0.03)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};