/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#03081b",
        background: "#dfe5fb",
        primary: "#7b0e26",
        secondary: "#cdd6f9",
        accent: "#267b0e",
      },
    },
  },
  plugins: [],
};
