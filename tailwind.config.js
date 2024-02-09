/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
        danger: colors.red,
        facebook: 'bg-blue-500',
        'blueOne': '#1B1464',
        'blueTwo': '#289FD8',
        'blueTree': '#1F4464',
        'GrayOne': '#A1B5C6',
        'blackBack': '#373737'
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1536px',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin') // add this line
  ],
}
