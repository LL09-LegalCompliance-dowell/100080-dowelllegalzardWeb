/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#078F04',
        backgroundTransparent: "#FFFFFF"
      },
    },
  },
  plugins: [],
}