/** @type {import('tailwindcss').Config} */


const { nextui } = require("@nextui-org/react");

export default {
  mode: 'jit',
  content: [
    "./public/*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    light: {
      colors: {
        zinc: "#D4D4D8",
      },
    },
    extend: {
      backgroundImage: {
        bg1: "url('/background/bg1.png')",
        bg2: "url('/background/bg2.png')",
        bg3: "url('/background/bg3.png')",
        bg4: "url('/background/bg4.png')",
        bg5: "url('/background/bg5.png')",
        bg6: "url('/background/bg6.png')",
        bg7: "url('/background/bg7.png')",
        bg8: "url('/background/bg8.png')",
        bg9: "url('/background/bg9.png')",
        ResultBackground:
          "url('./src/assets/images/StageCardImage/Stage=Ocean.png')",
      },
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
