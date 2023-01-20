/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "1xl": "12px",
        "3xl": "30px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          50: "#F9F5FF",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
        },
        success: {
          50: "#ECFDF3",
          700: "#027A48",
        },
      },
    },
  },
  plugins: [],
};
