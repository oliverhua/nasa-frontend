/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
// const plugin = require("tailwindcss/plugin");

// const Myclass = plugin(function ({ addUtilities }) {
//   addUtilities({
//     ".my-rotate-y-180": {
//       transform: "rotateY(180deg)",
//     },
//     ".preserve-3d": {
//       transformStyle: "preserve-3d",
//     },
//     ".perspective": {
//       perspective: "1000px",
//     },
//     ".backface-hidden": {
//       backfaceVisibility: "hidden",
//     },
//   });
// });

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()], // , Myclass
};
