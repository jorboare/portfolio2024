/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff8cd",
        secondary: "#63784B",
        accent: "#A3C6C4",
        background: "#2b2b2b",
        secondaryBg: "#3b3b3b",
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        accent: ["Bebas Neue", " sans-serif"],
      },
      screens: {
        sm: "300px",
        md: "760px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-custom": {
          background: "rgba(0, 0, 0, 0.2)",
          "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": "blur(8.3px)",
          "-webkit-backdrop-filter": "blur(8.3px)",
          overflow: "hidden",
        },
        ".transition-noTransform": {
          transition:
            "width 0.5s ease, heigth 0.5s ease, background 0.5s ease, border 0.1s ease, border-radius 0.5s ease",
        },
        ".crop-circle": {
          "clip-path":
            "polygon(0% 0%, 44% 0%, 44% 5%,56% 5%, 56% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        ".crop-circle-big-gap": {
          "clip-path":
            "polygon(0% 0%, 40% 0%, 40% 5%,60% 5%, 60% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      });
    },
  ],
};
