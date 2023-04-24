/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        hanson: ["hanson"],
      },
      colors: {
        "brand-pink": "#F9577E",
        "feedback-success": "#00aa30",
        "feedback-warning": "#ffc737",
        "feedback-error": "#cc0000",
        "feedback-info": "#5df2fe",
      },
      screens: {
        xs: "320px",
        md: "1024px",
        mg: "1440px",
        lg: "1920px",
      },
    },
  },
  plugins: [],
};
