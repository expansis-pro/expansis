/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#0F172A',   // Fondo principal
        primario: '#F27405',   // Naranja corporativo
        ghostWhite: '#F8FAFC', // Textos sobre fondo oscuro
        secundario: '#f4ad72', //[cite: 3]
        gris: '#cccccc',       //[cite: 3]
      },
    },
  },
  plugins: [],
}