// src/app/sitemap.js
import { solutionsData } from '@/data/solutionsData';
import { getPublishedPosts } from '@/lib/blog';
import { toISODate } from '@/lib/dates';
import { SITE_URL } from '@/lib/seo';

// Cambia la fecha de una página solo cuando cambie su contenido
const STATIC_PAGES = [
    ['/', '2026-11-08'],
    ['/soluciones', '2026-11-08'],
    ['/proyectos', '2026-11-08'],
    ['/quienes-somos', '2026-11-08'],
    ['/contacto', '2026-11-08'],
    ['/faq', '2026-11-08'],
];
const SOLUTIONS_UPDATED = '2026-11-08';

export default function sitemap() {
    const posts = getPublishedPosts();
    const latestPost = posts
        .map((p) => toISODate(p.updated || p.date))
        .filter(Boolean)
        .sort()
        .at(-1);

    const entries = [
        ...STATIC_PAGES.map(([path, lastModified]) => ({
            url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
            lastModified,
        })),
        { url: `${SITE_URL}/blog`, lastModified: latestPost },
        ...solutionsData.map((s) => ({
            url: `${SITE_URL}/soluciones/${s.slug}`,
            lastModified: s.updated || SOLUTIONS_UPDATED,
        })),
        ...posts.map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: toISODate(p.updated || p.date),
        })),
    ];

    // Una URL por entrada aunque se vuelva a colar un slug repetido
    return [...new Map(entries.map((e) => [e.url, e])).values()];
}