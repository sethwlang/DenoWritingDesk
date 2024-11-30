const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'twd-blue': {
          'primary': '#c8e7ed',
          'secondary-light': '#eef8fa',
          'secondary-dark': '#a2d6e0',
          'dark':'#21626D'
        },
        'twd-grey': {
          'primary-light': '#6c6c6c',
          'primary-dark': '#535353',
          'secondary': '#393939'

        }

      }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {fontSize: theme('fontSize.3xl'), paddingTop:theme('pt.24'), paddingBottom:theme('pb.24')},
        'h2': {fontSize: theme('fontSize.2xl'), paddingTop:theme('pt.12'), paddingBottom:theme('pb.12')},
        'h3': {fontSize: theme('fontSize.xl')},
        'p':{fontSize: theme('fontSize.lg')},
        'strong':{fontSize: theme('weight.800')},
      })
    })
  ],
}
