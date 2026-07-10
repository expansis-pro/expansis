// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://expansispro.com';
const BUILD_DIR = path.join(__dirname, '../build');

// Función para buscar recursivamente todos los index.html generados por react-snap
function getRoutes(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getRoutes(filePath, fileList);
        } else if (file === 'index.html') {
            let relativePath = path.relative(BUILD_DIR, dir);
            relativePath = relativePath.replace(/\\/g, '/'); // Normalizar barras para Linux/Windows
            fileList.push(relativePath);
        }
    });
    return fileList;
}

// Ejecutar rastreo de rutas en la carpeta build
const routes = getRoutes(BUILD_DIR);
const today = new Date().toISOString().split('T')[0]; // Fecha actual dinámica (AAAA-MM-DD)

// Construir el XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => {
    const url = `${BASE_URL}/${route}`.replace(/\/$/, ""); // Evitar doble barra al final

    // Asignar prioridades automáticas según la ruta detectada
    let priority = '0.5';
    let changefreq = 'monthly';

    if (route === '') { priority = '1.0'; changefreq = 'weekly'; }
    else if (route === 'servicios') { priority = '0.9'; }
    else if (route.startsWith('servicios/')) { priority = '0.8'; }
    else if (route === 'proyectos') { priority = '0.7'; changefreq = 'weekly'; }
    else if (route === 'quienes-somos') { priority = '0.6'; }
    else if (route === 'contacto') { priority = '0.5'; changefreq = 'yearly'; }

    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('')}
</urlset>`;

// Escribir el sitemap final directamente en la carpeta de distribución
fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemapContent.trim());
console.log('🚀 ¡Sitemap.xml dinámico generado con éxito en la carpeta build!');