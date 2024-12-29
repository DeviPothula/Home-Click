/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}", // Include all files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
};
