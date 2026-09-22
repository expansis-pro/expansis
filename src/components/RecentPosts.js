'use client';
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import BlogImage from '@/components/BlogImage'; // 👈 Importamos el componente

export default function RecentPosts() {
    const recent = blogPosts.filter((post) => post.status === "aprobado").slice(0, 3);

    return (
        <section id="recent-posts" className="section-padding bg-ghostWhite">
            <div className="container-pro">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="text-primario text-xs font-extrabold uppercase tracking-[0.2em] block mb-2">
                            Artículos &amp; Estrategia
                        </span>
                        <h2 className="text-deepBlue mb-0">
                            Últimas Publicaciones del <span className="text-primario">Blog</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-2 text-deepBlue font-bold hover:text-primario transition-colors text-sm uppercase tracking-wider"
                    >
                        Ver todos los artículos
                        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recent.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden bg-deepBlue/5">
                                {/* Componente BlogImage optimizado */}
                                <BlogImage
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <span className="absolute top-4 left-4 bg-deepBlue/90 backdrop-blur-sm text-ghostWhite text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 font-light mb-3">
                                        <span>{post.date}</span>
                                        <span>&bull;</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-deepBlue text-xl font-bold mb-3 group-hover:text-primario transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 mb-4">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primario uppercase tracking-wider group-hover:text-deepBlue transition-colors">
                                    <span>Leer artículo</span>
                                    <i className="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}