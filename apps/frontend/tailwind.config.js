/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:"100vhd",
    },
    screens:{
      'xs': '500px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}