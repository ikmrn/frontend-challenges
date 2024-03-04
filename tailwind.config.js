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
        lightRedBg: "hsla(0, 100%, 50%, 0.125)",
        orangyYellow: "hsl(39, 100%, 56%)",
        orangyYellowBg: "hsla(39, 100%, 56%, 0.3)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealBg: "hsla(166, 100%, 37%, 0.2)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueBg: "hsla(234, 85%, 45%, 0.125)",

        violetBlueCircle: "hsla(256, 72%, 46%, 1)",
        persianBlueCircle: "hsla(241, 72%, 46%, 0)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        grayBlue: " hsl(224, 30%, 27%)",
        lightBlueBg: "hsl(252, 100%, 67%)",
        royalBlueBg: "hsl(241, 81%, 54%)",
      },
    },
  },
  plugins: [],
};
