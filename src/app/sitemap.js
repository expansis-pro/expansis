import { servicesData } from '@/data/servicesData';

export default async function sitemap() {
    const baseUrl = 'https://expansispro.com';

    // Rutas estáticas principales
    const routes = [
        '',
        '/servicios',
        '/proyectos',
        '/quienes-somos',
        '/contacto',
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Rutas dinámicas de los servicios
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/servicios/${service.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...serviceRoutes];
}