/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
      },

      fontFamily: {
        kalam: ["Kalam", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        playwrite: ["Playwrite AR", " cursive"],
        DMSANS: ["DM Sans", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
