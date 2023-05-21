/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/tw-elements/dist/js/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      bl: "#3b82f680",
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik distressed", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
};
