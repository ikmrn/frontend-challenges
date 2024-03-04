/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
      colors: {
        lightRedStudy: "hsl(348, 100%, 68%)",
        lightRedWork: "hsl(15, 100%, 70%)",
        softBLuePlay: "hsl(195, 74%, 62%)",
        darkBlue: "hsl(235, 46%, 20%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
        blue: "hsl(246, 80%, 60%)",
        limeGreenExercise: "hsl(145, 58%, 55%)",
        violetSocial: "hsl(264, 64%, 52%)",
        softOrangeSelfCare: "hsl(43, 84%, 65%)",
      },
    },
  },
  plugins: [],
};
