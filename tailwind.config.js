/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
      },
      backgroundColor: {
        "tailwind-black": "#1e293b",
      },
    },
  },
  plugins: [],
};
