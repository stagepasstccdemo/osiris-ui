/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // faster build times
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "os-primary": {
          100: "#F26A0F",
          200: "#F59415",
          300: "#FBD592",
        },
        "os-secondary": {
          100: "#221B3C",
          200: "#3889CB",
          300: "#758296",
        },
        "os-ternary": {
          100: "#34D0CB",
          200: "#F600FF",
          300: "#7D6FEC",
        },
        grays: {
          100: "#FFFFFF",
          200: "#EEEFFC",
          300: "#D2D3E0",
          400: "#858699",
          500: "#6B6F76",
          600: "#292A35",
          700: "#151621",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
};
