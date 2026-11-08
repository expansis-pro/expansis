// src/app/blog/[slug]/page.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';
import BlogContent from '@/components/BlogContent';
import { buildMetadata, absoluteUrl, SITE_URL } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { getPublishedPosts, getPostBySlug } from '@/lib/blog';
import { toISODate, formatDateEs } from '@/lib/dates';

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
        title: post.seoTitle || post.title,
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

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const url = `${SITE_URL}/blog/${post.slug}`;
    const published = toISODate(post.date);
    const modified = toISODate(post.updated) || published;
    const heroImage = post.image?.trim();

    const relatedPosts = getPublishedPosts()
        .filter((p) => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-[#07090e] text-white scroll-smooth">
            <JsonLd
                id="article-jsonld"
                type="BlogPosting"
                data={{
                    '@id': `${url}#article`,
                    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
                    headline: post.title.slice(0, 110),
                    description: post.excerpt,
                    image: heroImage ? [absoluteUrl(heroImage)] : undefined,
                    datePublished: published,
                    dateModified: modified,
                    inLanguage: 'es-CL',
                    articleSection: post.category,
                    keywords: post.tags?.join(', '),
                    author: {
                        '@type': 'Person',
                        '@id': `${SITE_URL}/quienes-somos#gonzalo-lobos`,
                        name: post.author,
                        url: `${SITE_URL}/quienes-somos`,
                    },
                    publisher: { '@id': `${SITE_URL}/#agency` },
                }}
            />
            <JsonLd
                id="breadcrumb-jsonld"
                data={breadcrumbSchema([
                    ['Inicio', '/'],
                    ['Blog', '/blog'],
                    [post.title, `/blog/${post.slug}`],
                ])}
            />

            {/* Cabecera del artículo */}
            <section className="relative pt-36 pb-24 px-4 border-b border-white/10 bg-[#0a0d14] overflow-hidden">
                {heroImage && (
                    <>
                        <Image
                            src={heroImage}
                            alt=""
                            fill
                            preload
                            sizes="100vw"
                            className="z-0 object-cover opacity-25 pointer-events-none"
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07090e] via-[#0a0d14]/90 to-[#07090e]/75 pointer-events-none" />
                    </>
                )}

                <div className="container-pro max-w-4xl mx-auto relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Link href="/blog" className="font-mono text-xs text-zinc-500 hover:text-white transition-colors">
                            [ BLOG &amp; RECURSOS ]
                        </Link>
                        <span className="text-zinc-600 font-mono text-xs">/</span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-primario bg-primario/10 px-2.5 py-1 border border-primario/30">
                            {post.category}
                        </span>
                        <span className="text-zinc-600 font-mono text-xs">/</span>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{post.readTime}</span>
                        <span className="text-zinc-600 font-mono text-xs hidden sm:inline">/</span>
                        <time dateTime={published} className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">
                            {published ? formatDateEs(published) : post.date}
                        </time>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]">
                        {post.title}
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10 border-l-2 border-primario pl-4 py-1">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="relative w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-black shrink-0">
                            <Image src="/assets/images/Profile_Img_Expansis.webp" alt={post.author} fill sizes="40px" className="object-cover" />
                        </div>
                        <div>
                            <span className="block text-sm font-medium text-white">{post.author}</span>
                            <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{post.authorRole}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido */}
            <article className="py-20 px-4">
                <div className="container-pro max-w-4xl mx-auto">
                    <div className="bg-[#0f1420] p-8 md:p-12 border border-white/15 space-y-6 text-zinc-300 font-light text-base md:text-lg leading-relaxed blog-content-wrapper">
                        <BlogContent content={post.content} sources={post.sources} />
                    </div>

                    {post.sources && post.sources.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-white/15 bg-black/40 p-6 md:p-8 border-l border-r border-b">
                            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-6">
                                Referencias y Bibliografía
                            </h2>
                            <div className="space-y-4">
                                {post.sources.map((source) => (
                                    <a
                                        key={source.num}
                                        id={`fuente-${source.num}`}
                                        href={source.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-3 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 group"
                                    >
                                        <span className="font-mono text-primario bg-primario/10 px-2 py-0.5 border border-primario/30 text-[10px] shrink-0 mt-0.5">
                                            [{source.num}]
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <span className="block text-sm font-medium text-white mb-0.5 group-hover:text-primario transition-colors">
                                                {source.name} <span aria-hidden="true" className="text-[10px] text-zinc-600 group-hover:text-primario">↗</span>
                                            </span>
                                            <span className="block text-xs text-zinc-400 font-light truncate">{source.title}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {post.tags && (
                        <ul className="mt-12 flex flex-wrap gap-2 items-center" aria-label="Etiquetas">
                            {post.tags.map((tag) => (
                                <li key={tag} className="font-mono text-[10px] uppercase bg-black/40 border border-white/10 text-zinc-400 px-3 py-1.5 tracking-wider">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className="py-20 bg-[#080b11] border-t border-white/10">
                    <div className="container-pro max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2">[ PROFUNDIZAR ]</span>
                                <h2 className="text-2xl sm:text-3xl font-light text-white">Artículos Relacionados</h2>
                            </div>
                            <Link href="/blog" className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors border border-white/20 px-4 py-2">
                                Ver todo el blog →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => {
                                const relDate = toISODate(related.date);
                                return (
                                    <Link
                                        key={related.slug}
                                        href={`/blog/${related.slug}`}
                                        className="group border border-white/15 bg-[#0f1420] p-6 hover:border-primario/50 transition-colors flex flex-col justify-between"
                                    >
                                        <div>
                                            <time dateTime={relDate} className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-3">
                                                {relDate ? formatDateEs(relDate) : related.date}
                                            </time>
                                            <h3 className="text-lg font-normal text-white group-hover:text-primario transition-colors mb-3 line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-xs text-zinc-400 font-light line-clamp-2">{related.excerpt}</p>
                                        </div>
                                        <span className="font-mono text-[10px] text-primario uppercase tracking-widest mt-6 block border-t border-white/10 pt-4">
                                            Leer: {related.title.length > 40 ? `${related.title.slice(0, 40)}…` : related.title} →
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            <CallToAction
                source={`Blog: ${post.title}`}
                title="¿Aplicamos esto a tu negocio?"
                description="Hablemos de tus metas comerciales y analizaremos la viabilidad técnica de tu proyecto sin compromiso."
            />
        </main>
    );
}