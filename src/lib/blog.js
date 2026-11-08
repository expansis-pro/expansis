// src/lib/blog.js
import 'server-only';
import { blogPosts } from '@/data/blogData';
import { toISODate, parseBlogDate } from '@/lib/dates';

export const getPublishedPosts = () =>
    blogPosts
        .filter((p) => p?.status === 'aprobado')
        .sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date));

export const getPostBySlug = (slug) => getPublishedPosts().find((p) => p.slug === slug);

export const toPostSummary = ({ id, slug, title, excerpt, category, date, readTime, image }) => ({
    id, slug, title, excerpt, category, date, readTime,
    isoDate: toISODate(date),
    image: image?.trim(),
});

// Falla en desarrollo si hay slugs repetidos
if (process.env.NODE_ENV !== 'production') {
    const seen = new Set();
    for (const p of blogPosts) {
        if (p.status !== 'aprobado') continue;
        if (seen.has(p.slug)) throw new Error(`[blogData] slug duplicado: ${p.slug}`);
        seen.add(p.slug);
    }
}