/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        icterine: "#f7f052",
        orangeWheel: "#f28123",
        syracuseRedOrange: "#d34e24",
        cafeNoir: "#563f1b",
        myrtleGreen: "#38726c",
      },
    },
  },
  plugins: [],
};