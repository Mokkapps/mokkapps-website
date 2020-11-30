module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Domine', 'sans-serif'],
      },
      fontSize: {
        '10xl': '5rem'
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '60%',
        '3/4': '75%',
        full: '100%',
      },
      screens: {
        xxl: '1920px',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
