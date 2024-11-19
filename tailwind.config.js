/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dong_primary: "#FFD332",
        dong_secondary: "#3284FF",
        dong_white: "#FFFFFF",
        dong_light_gray: "#F1F1F1",
        dong_deep_gray: "#CDCDCD",
        dong_black: "#000000",

        dong_light_yellow: "#fff3cf",
        dong_green: "#34a853",
      },
      fontFamily: {
        goorm: ["Goorm Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
