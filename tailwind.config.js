/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        icterine: "#F5F5DC",
        orangeWheel: "#000000",
        syracuseRedOrange: "#FFDEAD",
        cafeNoir: "#8B4513",
        myrtleGreen: "#D2691E",
      },
    },
  },
  plugins: [],
};
