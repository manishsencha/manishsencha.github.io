/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Code Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-primary": "#121212",
        "dark-secondary": "#2D3748",
        "dark-accent": "#3F51B5",
        "dark-text": "#FFFFFF",
        "dark-white": "#FFFFFF",
        "dark-gray": "#A0AEC0",
        "light-primary": "#FFFFFF",
        "light-secondary": "#F2F2F2",
        "light-accent": "#FF4081",
        "light-text": "#333333",
        "light-gray": "#A0AEC0",
      },
    },
  },
  plugins: [],
};
