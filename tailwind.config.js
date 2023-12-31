/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#078F04",
        customRed: "#FF0000",
        backgroundTransparent: "#FFFFFF",
        footerBackground: "#454545",
      },
      fontSize: {
        sm: "1.1rem",
        xsm: "14px",
        md: "18px",
        clg: "48px",
      },
      letterSpacing: {
        wide: "0.2rem",
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
    },
  },
  plugins: [],
};
