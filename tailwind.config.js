/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#3173B0",
        anotherblue: "#243A66",
        Newblue: "#253A67",
        bggrey: "#DBE2EC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
