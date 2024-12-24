/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid'
  ],
  theme: {
    extend: {
      height: {
        '94' : '24rem'
      }
    },
  },
  plugins: [],
}

