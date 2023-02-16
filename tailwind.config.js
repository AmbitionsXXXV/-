// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// ../node_modules/pliny/dist/**/*.mjs is needed for monorepo setup
/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: ['./pages/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  darkMode: 'class'
}
