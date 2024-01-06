/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
  module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors:{
      primary: '#FFA500',
      secondary: '#FFD700',
      white: '#FFFFFF',
      black: '#000000',
      aibr:{
        1000: '#690D1D',
        1050: '#4C0310',
      },
      gray: {
        50: '#F2F2F2',
        70: '#D9D9D9',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#475569',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        950: '#242424',
      },
    },
    extend: {
    },
  },
  plugins: [
    nextui(),
  ],
}
