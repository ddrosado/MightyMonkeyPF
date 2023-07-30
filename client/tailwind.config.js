/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './client/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './client/components/**/*.{js,ts,jsx,tsx,mdx}',
    './client/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        100: '#fefce7',
        200: '#fcf8cf',
        300: '#f9f29f',
        400: '#F8EF88', // default
        500: '#ab9e07',
        600: '#605806',
        700: '#484304',
        800: '#181701',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('flowbite/plugin'),
  ],
  darkMode: "class",
}
