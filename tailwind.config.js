/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./colors");
module.exports = {
  darkMode: "class",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    extend: {
      colors,
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)",
      "lg-dark":
        "0 0 0 1px rgba(255,255,255,.15), 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      nav: "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,.10)",
      "nav-dark":
        "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,.05)",
      inner: "inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)",
      "inner-border": "inset 0 0 0 1px rgba(0, 0, 0, 0.08)",
      "inner-border-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
      "outer-border": "0 0 0 1px rgba(0, 0, 0, 0.1)",
      "outer-border-dark": "0 0 0 1px rgba(255, 255, 255, 0.1)",
      "secondary-button-stroke": "inset 0 0 0 1px #D9DBE3",
      "secondary-button-stroke-dark": "inset 0 0 0 1px #404756",
      none: "none",
    },
    fontSize: {
      "6xl": "52px",
      "5xl": "40px",
      "4xl": "32px",
      "3xl": "28px",
      "2xl": "24px",
      xl: "20px",
      lg: "17px",
      base: "15px",
      sm: "13px",
      xs: "11px",
      code: "calc(1em - 20%)",
    },
  },
  plugins: [],
};
