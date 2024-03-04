/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    fontFamily: {
      sans: "Hanken Grotesk, sans-serif",
    },
    extend: {
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        orangyYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        lightBlue: "hsl(252, 100%, 67%)",
        royalBlueBg: "hsl(241, 81%, 54%)",
        violetBlueBg: "hsla(256, 72%, 46%, 1)",
        persianBlueCircle: "hsla(241, 72%, 46%, 0)",
        cobaltBlueCircle: "hsl(234, 85%, 45%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        grayBlue: " hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
