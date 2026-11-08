// src/lib/seo.js
export const SITE_URL = 'https://expansispro.com';
export const SITE_NAME = 'Expansis Pro';
export const DEFAULT_OG_IMAGE = {
    url: '/OGimage_1200x630_Expansis.jpg',
    width: 1200,
    height: 630,
    alt: 'Expansis Pro — Desarrollo web, Google y Meta Ads en Chile',
};

export const absoluteUrl = (src) => {
    if (!src) return undefined;
    const clean = src.trim();
    return clean.startsWith('http') ? clean : `${SITE_URL}${clean}`;
};

export function buildMetadata({ title, description, path = '/', images, type = 'website', openGraph = {} }) {
    const ogImages = images?.length ? images : [DEFAULT_OG_IMAGE];
    return {
        title,
        description,
        alternates: { canonical: `${SITE_URL}${path === '/' ? '' : path}` },
        openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: SITE_NAME, locale: 'es_CL', type, images: ogImages, ...openGraph },
        twitter: { card: 'summary_large_image', title, description, images: ogImages.map((i) => i.url) },
    };
}