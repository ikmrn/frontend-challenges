/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkGray: "hsl(234, 29%, 20%)",
        charcoalGray: "hsl(235, 18%, 26%)",
        grayCustom: "hsl(231, 7%, 60%)",
      },
      borderRadius: {
        "5xl": "32px",
      },
    },
  },
  plugins: [],
};
