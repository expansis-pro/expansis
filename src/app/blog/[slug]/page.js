import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import NotFound from '@/app/not-found';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';
import BlogImage from '@/components/BlogImage';
import BlogContent from '@/components/BlogContent'; // 👈 Importamos el nuevo componente

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
                    url: `https://expansispro.com${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const post = blogPosts.find((p) => p.slug === slug && p.status === "aprobado");

    if (!post) {
        return <NotFound />;
    }

    const baseUrl = 'https://expansispro.com';

    const relatedPosts = blogPosts
        .filter((p) => p.slug !== slug && p.status === "aprobado")
        .slice(0, 2);

    return (
        <main className="min-h-screen bg-ghostWhite scroll-smooth">
            <JsonLd
                id={`blog-post-schema-${post.slug}`}
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.excerpt,
                    "image": `${baseUrl}${post.image}`,
                    "datePublished": post.date,
                    "author": {
                        "@type": "Person",
                        "name": post.author,
                        "jobTitle": post.authorRole,
                        "url": `${baseUrl}/quienes-somos`
                    },
                    "publisher": {
                        "@type": "ProfessionalService",
                        "@id": `${baseUrl}/#agency`
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `${baseUrl}/blog/${post.slug}`
                    }
                }}
            />

            {/* Cabecera del Artículo */}
            <section className="bg-deepBlue text-ghostWhite pt-36 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primario hover:text-ghostWhite transition-colors text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <i className="fa-solid fa-arrow-left text-[10px]"></i> Volver al Blog
                    </Link>
                    <span className="block text-secundario text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {post.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-400 font-light">
                        <span>Por <strong className="text-ghostWhite">{post.author}</strong> ({post.authorRole})</span>
                        <span>&bull;</span>
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Cuerpo del Artículo */}
            <article className="section-padding">
                <div className="max-w-3xl mx-auto px-4">
                    <BlogImage
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        containerClassName="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100"
                        priority={true}
                        hideOnFallback={true}
                    />

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6 text-gray-700 text-lg font-light leading-relaxed">
                        {/* 👈 Renderizado interactivo del contenido con citas */}
                        <BlogContent content={post.content} sources={post.sources} />

                        {/* BLOQUE DE REFERENCIAS BIBLIOGRÁFICAS */}
                        {post.sources && post.sources.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-gray-100 bg-gray-50/80 p-6 md:p-8 rounded-2xl">
                                <h4 className="text-xs uppercase tracking-widest text-deepBlue font-bold mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-graduation-cap text-primario text-base"></i>
                                    Fuentes Consultadas &amp; Referencias Bibliográficas
                                </h4>
                                <ol className="space-y-3 text-xs text-gray-600 list-none">
                                    {post.sources.map((src) => (
                                        <li
                                            id={`fuente-${src.num}`}
                                            key={src.num}
                                            className="flex items-start gap-3 p-2 rounded-lg transition-all duration-500 hover:bg-white border border-transparent hover:border-gray-100"
                                        >
                                            <span className="font-extrabold text-primario bg-primario/10 px-2 py-0.5 rounded text-[11px] shrink-0">
                                                [{src.num}]
                                            </span>
                                            <div className="leading-relaxed">
                                                <strong className="text-deepBlue font-semibold">{src.name}:</strong>{" "}
                                                <span>"{src.title}"</span>.{" "}
                                                <a
                                                    href={src.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primario hover:underline font-medium break-all ml-1 inline-flex items-center gap-1"
                                                >
                                                    <span>Ver publicación oficial</span>
                                                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}

                        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Artículos Relacionados */}
            {relatedPosts.length > 0 && (
                <section className="pb-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-deepBlue text-2xl font-bold mb-8 text-center">Artículos Relacionados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/blog/${related.slug}`}
                                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-[9px] text-primario font-bold uppercase tracking-wider">{related.category}</span>
                                        <h4 className="text-deepBlue text-lg font-bold mt-2 group-hover:text-primario transition-colors">{related.title}</h4>
                                        <p className="text-gray-500 text-xs font-light mt-2 line-clamp-2">{related.excerpt}</p>
                                    </div>
                                    <span className="text-xs text-primario font-bold mt-4 block">Leer más &rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CallToAction
                title="¿Quieres aplicar esto en tu empresa?"
                description="Conversemos por WhatsApp y estructuremos el ecosistema ideal para tu marca."
            />
        </main>
    );
}