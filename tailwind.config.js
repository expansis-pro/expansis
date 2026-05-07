// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepBlue': '#0F172A',   // Color de fondo del Hero
        'primario': '#F27405',   // Color del botón principal
        'ghostWhite': '#F8FAFC', // Color de las letras
        'secundario': '#f4ad72',
        // 'terciario': '#f2d905',
        'gris': '#cccccc',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Montserrat como fuente principal
      },
    },
  },
  plugins: [],
}