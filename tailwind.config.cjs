/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      }
    },
  },
  plugins: [],
}
