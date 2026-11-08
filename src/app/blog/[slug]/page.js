// src/app/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import { buildMetadata, absoluteUrl, SITE_URL } from '@/lib/seo';
import { getPublishedPosts, getPostBySlug } from '@/lib/blog';
import { toISODate } from '@/lib/dates';

export const dynamicParams = false; // slugs fuera de la lista → 404 real

const ogImageFor = (src) => {
    const url = absoluteUrl(src);
    if (!url) return undefined;
    if (url.includes('images.unsplash.com')) {
        const u = new URL(url);
        u.searchParams.set('w', '1200');
        u.searchParams.set('h', '630');
        u.searchParams.set('fit', 'crop');
        u.searchParams.set('auto', 'format');
        return { url: u.toString(), width: 1200, height: 630 };
    }
    return { url };
};

export async function generateStaticParams() {
    return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const published = toISODate(post.date);
    const modified = toISODate(post.updated) || published;
    const img = ogImageFor(post.ogImage || post.image);

    return buildMetadata({
        title: post.seoTitle || post.title, // agrega seoTitle (≤ 55 car.) a los posts largos
        description: post.seoDescription || post.excerpt,
        path: `/blog/${post.slug}`,
        type: 'article',
        images: img ? [{ ...img, alt: post.title }] : undefined,
        openGraph: {
            publishedTime: published,
            modifiedTime: modified,
            authors: [`${SITE_URL}/quienes-somos`],
            section: post.category,
            tags: post.tags,
        },
    });
}