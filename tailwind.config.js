/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default font for your project
        poppins: ["Poppins", "sans-serif"], // Custom utility for Poppins
      },
    },
  },
  plugins: [],
};
