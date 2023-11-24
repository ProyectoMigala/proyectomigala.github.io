/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'migala': '#5b0089',
        'main': {
          'bg': '#0a0000',
          'bgw': '#f8f8f8'
        }
      }
    },
  },
  plugins: [],
}

