/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '3rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}