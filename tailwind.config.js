/* eslint-disable global-require */
const colors = require("./src/theme/colors");
const typography = require("./src/theme/typography");
const shadows = require("./src/theme/shadows");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // faster build times
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      typography,
      shadows,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
};
