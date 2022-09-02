/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,ts,ejs}', './resources/**/*.{html,js,ts,ejs}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    rtl: true,
  },
}
