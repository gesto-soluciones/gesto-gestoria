/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#5E376D",
        secondary:"#EAD70B"
      },
      fontFamily:{
        sans:["Hind Madurai, sans-serif;"],
        heading:["Montserrat, sans-serif"]
      }
    },
  },
  plugins: [],
}
