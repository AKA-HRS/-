/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        growWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        nowidth: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        growWidth: "growWidth 0.25s ease-in-out forwards",
        nowidth: "nowidth 0.25s ease-in-out forwards",
      },
      fontFamily: {
        Varela: ['"Varela Round"']
      }
    },
  },
  plugins: [],
};
