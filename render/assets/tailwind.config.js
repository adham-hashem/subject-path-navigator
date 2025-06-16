/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#3b82f6',
        accent: '#f59e0b',
        neutral: '#f4f4f9',
        text: '#1f2937',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};