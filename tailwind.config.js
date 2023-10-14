/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./public/**/*.html', './src/**/*.{astro,js,ts}'],
    options: {
      safelist: ['dark'],
    },
  },
  theme: {
    colors: {
      ...colors,
      // Shades-of-X
      primary: colors.purple[700],
      primaryDark: colors.purple[300],
      primarySecondary: colors.purple[800],
      primarySecondaryDark: colors.purple[500],
    },
    fontFamily: {
      sans: ['Fira Code', ...fontFamily.sans],
    },
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}

