
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'red': 'hls(#D9072D)',
        'grey': 'hls(#B4BBBF)',
        'dark-grey': 'hls(#B0BFBE)',
        'dark-black': 'hls(#0D0D0D)',
      }
    },
  },
  plugins: [],
}
