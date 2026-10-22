// src/app/blog/[slug]/page.js
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import NotFound from '@/app/not-found';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';
import BlogContent from '@/components/BlogContent';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = blogPosts.find((p) => p.slug === slug && p.status === "aprobado");

    if (!post) {
        return {
            title: 'Artículo no encontrado | Expansis Pro',
            description: 'La publicación solicitada no existe en nuestro blog.',
        };
    }

    const title = `${post.title} | Blog Expansis Pro`;
    const canonicalUrl = `https://expansispro.com/blog/${slug}`;
    const imageUrl = post.image?.startsWith('http')
        ? post.image
        : `https://expansispro.com${post.image}`;

    return {
        title: title,
        description: post.excerpt,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: title,
            description: post.excerpt,
            url: canonicalUrl,
            siteName: 'Expansis Pro',
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: post.excerpt,
            images: [imageUrl],
        }
    };
}

export async function generateStaticParams() {
    return blogPosts
        .filter((post) => post.status === "aprobado")
        .map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = blogPosts.find((p) => p.slug === slug && p.status === "aprobado");

    if (!post) {
        return <NotFound />;
    }

    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.slug !== post.slug && p.status === "aprobado")
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-[#07090e] text-white scroll-smooth">
            <JsonLd
                type="BlogPosting"
                data={{
                    headline: post.title,
                    description: post.excerpt,
                    image: post.image?.startsWith('http') ? post.image : `https://expansispro.com${post.image}`,
                    author: {
                        "@type": "Person",
                        "name": post.author,
                    },
                    datePublished: post.date,
                    publisher: {
                        "@type": "Organization",
                        "name": "Expansis Pro",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://expansispro.com/assets/images/logo.webp"
                        }
                    }
                }}
            />

            {/* Cabecera Técnica del Artículo (Hero Inmersivo con Imagen de Fondo) */}
            <section className="relative pt-36 pb-24 px-4 border-b border-white/10 bg-[#0a0d14] overflow-hidden">
                {/* Capa de Imagen de Fondo */}
                {post.image && (
                    <>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 z-0 w-full h-full object-cover opacity-20 grayscale contrast-125 pointer-events-none"
                        />
                        {/* Velo oscuro para contraste y legibilidad */}
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
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                            {post.readTime}
                        </span>
                        <span className="text-zinc-600 font-mono text-xs hidden sm:inline">/</span>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">
                            {post.date}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]">
                        {post.title}
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10 border-l-2 border-primario pl-4 py-1">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-black shrink-0">
                            <img
                                src="/assets/images/Profile_Img_Expansis.webp"
                                alt={post.author}
                                className="w-full h-full object-cover grayscale opacity-90"
                            />
                        </div>
                        <div>
                            <span className="block text-sm font-medium text-white">{post.author}</span>
                            <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{post.authorRole}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido Editorial del Artículo */}
            <article className="py-20 px-4">
                <div className="container-pro max-w-4xl mx-auto">
                    <div className="bg-[#0f1420] p-8 md:p-12 border border-white/15 space-y-6 text-zinc-300 font-light text-base md:text-lg leading-relaxed blog-content-wrapper">
                        <BlogContent content={post.content} sources={post.sources} />
                    </div>

                    {/* Referencias Bibliográficas / Fuentes */}
                    {post.sources && post.sources.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-white/15 bg-black/40 p-6 md:p-8 border-l border-r border-b">
                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                                <i className="fa-solid fa-book-bookmark text-primario"></i>
                                Referencias y Bibliografía
                            </h4>
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
                                                {source.name}
                                                <i className="fa-solid fa-arrow-up-right-from-square text-[9px] ml-2 text-zinc-600 group-hover:text-primario transition-colors"></i>
                                            </span>
                                            <span className="block text-xs text-zinc-400 font-light truncate">
                                                {source.title}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    {post.tags && (
                        <div className="mt-12 flex flex-wrap gap-2 items-center">
                            <i className="fa-solid fa-tags text-zinc-500 mr-2 text-xs"></i>
                            {post.tags.map((tag) => (
                                <span key={tag} className="font-mono text-[10px] uppercase bg-black/40 border border-white/10 text-zinc-400 px-3 py-1.5 tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </article>

            {/* Artículos Relacionados */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-[#080b11] border-t border-white/10">
                    <div className="container-pro max-w-6xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2">
                                    [ PROFUNDIZAR ]
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-light text-white">
                                    Artículos Relacionados
                                </h3>
                            </div>
                            <Link href="/blog" className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors border border-white/20 px-4 py-2">
                                Ver todo el blog →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group border border-white/15 bg-[#0f1420] p-6 hover:border-primario/50 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-3">
                                            {related.date}
                                        </span>
                                        <h4 className="text-lg font-normal text-white group-hover:text-primario transition-colors mb-3 line-clamp-2">
                                            {related.title}
                                        </h4>
                                        <p className="text-xs text-zinc-400 font-light line-clamp-2">
                                            {related.excerpt}
                                        </p>
                                    </div>
                                    <span className="font-mono text-[10px] text-primario uppercase tracking-widest mt-6 block border-t border-white/10 pt-4">
                                        Leer Artículo →
                                    </span>
                                </Link>
                            ))}
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