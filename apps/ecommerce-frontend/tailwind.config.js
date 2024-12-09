const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: 'inter var,ui-sans-serif,system-ui',
      serif: 'inter var,ui-sans-serif,system-ui',
    },
    fontSize: {
      sm: '0.075rem',
      base: '1.3rem',
      xl: '1.55rem',
      '2xl': '1.563rem',
      '3xl': '1.953',
      '4xl': '2441rem',
      '5xl': '3.652rem',
    },
    daisyui: {
      themes: {
        fantasy: {
          primary: '#0000ff',
          'primary-content': 'white',
          secondary: '#f6f6f6',
          neutral: '#e8e8e8',
        },
      },
      base: true,
      styled: true,
      utils: true,
      prefix: '',
      logs: true,
      themeRoot: ':root',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
