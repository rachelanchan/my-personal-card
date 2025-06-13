/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // instead of 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // includes your app directory files
    "./pages/**/*.{js,ts,jsx,tsx}", // if you have pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // if you have components directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
