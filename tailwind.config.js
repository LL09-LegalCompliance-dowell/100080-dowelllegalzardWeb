/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
      fontSize: {
          sm: '1.1rem',
          xsm: '14px',
          md: '18px',
          clg:'48px',
      },
      letterSpacing:{
          wide:'0.2rem',
      },
      fontWeight: {
          thin: 200,
          semiLight: 300,
          light: 400,
          normal: 500,
          medium: 600,
          bold: 700,
          smbold: 800,
          xbold: 900,
      },
      extend: {
        colors: {
          Primary: '#078F04',
          green:'#078F04',
          backgroundTransparent: "#FFFFFF"
        },
      },
  },
  plugins: [],
}