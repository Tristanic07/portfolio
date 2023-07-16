/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(10deg)" },
          "30%": { transform: "rotate(-10deg)" },
          "40%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
      fontFamily: {
        body: ['Lobster'],
        tektur: ['Tektur']
      }
    },
  },
  plugins: [],
};
