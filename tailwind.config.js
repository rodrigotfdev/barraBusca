/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1497px',
      },
      colors: {
        'theme-red': '#D02030',
        'price-green': '#16E024'
      }
    },
  },
  plugins: [],
}