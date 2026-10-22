import { solutionsData } from '@/data/solutionsData';
import { blogPosts } from '@/data/blogData';

export default async function sitemap() {
    const baseUrl = 'https://expansispro.com';

    // Rutas estáticas principales
    const routes = [
        '',
        '/soluciones',
        '/proyectos',
        '/quienes-somos',
        '/contacto',
        '/faq',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Rutas dinámicas de soluciones activas
    const solutionRoutes = solutionsData.map((solution) => ({
        url: `${baseUrl}/soluciones/${solution.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const blogRoutes = blogPosts
        .filter((post) => post.status === "aprobado")
        .map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.7,
        }));

    return [...routes, ...solutionRoutes, ...blogRoutes];
}