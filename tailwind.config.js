/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#f27405',
        'secundario': '#f4ad72',
        'terciario': '#f2d905',
        'gris': '#cccccc',
      }
    },
  },
  plugins: [],
}