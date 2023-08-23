/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#078F04',
        primary_2:"#489503",
        customRed:"#FF0000",
        backgroundTransparent: "#FFFFFF",
        footerBackground:"#454545"
      },
    },
  },
  plugins: [],
}