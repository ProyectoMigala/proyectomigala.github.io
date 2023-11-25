/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [`./layouts/**/*.html`, `./content/**/*.md`],
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
  variants: {},
  plugins: []
}
