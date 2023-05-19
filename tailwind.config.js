/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1E1E1E",
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
