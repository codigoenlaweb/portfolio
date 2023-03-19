/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        typography: {
          "ligh": "#cacaca",
          "dark": "#8a8a8a",
          "mid": "#9a9a9a",
        },
        primary: {
          "focus": "#A4DEEE",
          "pressed": "#295B69",
          "hover": "#58D2F5",
          "border": "#53C6E6",
          "secondary": "#BBF0FF",
          "main": "#61DAFB",
        },
        secondary: {
          "secondary": "#323232",
          "main": "#2f2f2f",
          "focus": "#2c2c2c",
          "hover": "#242424",
          "pressed": "#1f1f1f",
        },
      },
    },
  },
  plugins: [],
};

defaultTheme.fontFamily.lato;
