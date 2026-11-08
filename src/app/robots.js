// src/app/robots.js
import { SITE_URL } from '@/lib/seo';

export default function robots() {
    // En Vercel, las previews no deben indexarse
    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
        return { rules: { userAgent: '*', disallow: '/' } };
    }
    return {
        rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}