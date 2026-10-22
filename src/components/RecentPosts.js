// src/components/RecentPosts.js
'use client';
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import BlogImage from '@/components/BlogImage';

export default function RecentPosts() {
    const recent = blogPosts.filter((post) => post.status === "aprobado").slice(0, 3);

    return (
        <section id="recent-posts" className="py-24 bg-[#0a0d14] text-white border-b border-white/10">
            <div className="container-pro max-w-6xl mx-auto px-4">

                {/* Cabecera Técnica */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2">
                            [ DIVULGACIÓN TÉCNICA &amp; ESTRATEGIA ]
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                            Publicaciones del Blog
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
                    >
                        <span>Ver Registro Completo</span>
                        <span>→</span>
                    </Link>
                </div>

                {/* Grilla Modular de Artículos */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-[#0f1420]">
                    {recent.map((post, idx) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
                        >
                            {/* Imagen Rectangular */}
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
                                <BlogImage
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                                />
                                <span className="absolute top-3 left-3 bg-black/90 px-2 py-0.5 border border-white/20 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                                    {post.category}
                                </span>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                                        <span>[0{idx + 1}]</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-base sm:text-lg font-normal text-white group-hover:text-primario transition-colors mb-3 leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500 group-hover:text-white transition-colors">
                                    <span>LEER ARTÍCULO</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}