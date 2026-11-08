/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/components/**/*.{js,jsx,mdx}', './src/app/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        deepBlue: '#0F172A',
        primario: '#F27405',
        ghostWhite: '#F8FAFC',
        secundario: '#f4ad72',
        gris: '#cccccc',
      },
    },
  },
  plugins: [],
};