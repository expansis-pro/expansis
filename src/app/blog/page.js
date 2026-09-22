import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import SecondaryHero from '@/components/SecondaryHero';
import CallToAction from '@/components/CallToAction';
import JsonLd from '@/components/SEO/JsonLd';
import BlogImage from '@/components/BlogImage'; // <--- Importamos el componente seguro

export const metadata = {
    title: "Blog de Estrategia Digital, SEO y Desarrollo Web | Expansis Pro",
    description: "Artículos, guías técnicas y estrategias sobre posicionamiento SEO, diseño enfocado en conversión y desarrollo en React/Next.js.",
    alternates: {
        canonical: 'https://expansispro.com/blog',
    },
};

export default function BlogPage() {
    const baseUrl = 'https://expansispro.com';

    const approvedPosts = blogPosts.filter((post) => post.status === "aprobado");
    return (
        <main className="min-h-screen">
            {/* Schema JSON-LD de la Colección del Blog */}
            <JsonLd
                id="blog-hub-schema"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Blog de Expansis Pro",
                    "description": "Artículos de ingeniería digital, SEO y desarrollo web.",
                    "url": `${baseUrl}/blog`,
                    "publisher": {
                        "@type": "ProfessionalService",
                        "@id": `${baseUrl}/#agency`
                    }
                }}
            />

            <SecondaryHero
                title="Blog &amp; Recursos"
                subtitle="Estrategias, guías técnicas y visión de negocio para impulsar la presencia digital de tu marca."
                icon="fa-solid fa-newspaper"
                img="/assets/images/hero-services.webp"
            />

            <section className="section-padding bg-ghostWhite">
                <div className="container-pro">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {

                            approvedPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative aspect-video overflow-hidden bg-deepBlue/5">
                                        <BlogImage
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <span className="absolute top-4 left-4 bg-deepBlue/90 backdrop-blur-sm text-ghostWhite text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>

                                    <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-xs text-gray-400 font-light mb-3">
                                                <span>{post.date}</span>
                                                <span>&bull;</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h2 className="text-deepBlue text-xl font-bold mb-3 group-hover:text-primario transition-colors leading-snug">
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h2>
                                            <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 mb-6">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap gap-1.5 mb-6">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="text-[9px] bg-gray-100 text-gray-500 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="w-full inline-flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-bold text-primario uppercase tracking-wider group-hover:text-deepBlue transition-colors"
                                            >
                                                <span>Leer artículo completo</span>
                                                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1.5 transition-transform"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                    </div>
                </div>
            </section>

            <CallToAction
                title="¿Tienes un proyecto en mente?"
                description="Aplicamos estas mismas estrategias en el diseño de tu plataforma digital."
            />
        </main>
    );
}