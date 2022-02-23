const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primaryColor': '#050F1E',
        'countryCode': '#989DA3',
      },
      maxWidth: {
        'header': '1200px',
      },
      height: {
        'header': '3rem',
      },
      width: {
        '7.5': '1.8rem',
      },
      fontSize: {
        'xxs': '.6rem',
      },
      dropShadow: {
        '3xl': '0 -3px 10px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
}
