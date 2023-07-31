/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        light: '#ede7de',
        splash: '#3a5e52'
      }
    },
  },
  plugins: [],
}
