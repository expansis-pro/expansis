// app/blog/page.js
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import BlogImage from '@/components/BlogImage';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [searchQuery, setSearchQuery] = useState('');

    const approvedPosts = useMemo(() => {
        return blogPosts.filter((post) => post && post.status === 'aprobado');
    }, []);

    const categories = useMemo(() => {
        const uniqueCategories = new Set(
            approvedPosts.map((post) => post.category).filter(Boolean)
        );
        return ['Todas', ...Array.from(uniqueCategories)];
    }, [approvedPosts]);

    const filteredPosts = useMemo(() => {
        return approvedPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === 'Todas' || post.category === selectedCategory;

            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                (post.title && post.title.toLowerCase().includes(query)) ||
                (post.excerpt && post.excerpt.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [approvedPosts, selectedCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-[#07090e] text-white pt-32 pb-24 border-b border-white/10">
            <div className="container-pro max-w-6xl mx-auto px-4">

                {/* Cabecera Editorial Técnica */}
                <div className="mb-16 pb-8 border-b border-white/10">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2">
                        [ BASE DE CONOCIMIENTO &amp; ANÁLISIS ]
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4">
                        Blog &amp; Recursos Digitales
                    </h1>
                    <p className="text-sm font-light text-zinc-400 max-w-xl leading-relaxed">
                        Publicaciones sobre ingeniería web, analítica en GA4, estrategias de adquisición pagada y marcos metodológicos de datos.
                    </p>
                </div>

                {/* Filtros Geométricos */}
                <div className="border border-white/15 bg-[#0d121d] mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/15 items-center">
                        {/* Buscador */}
                        <div className="md:col-span-5 p-4 flex items-center gap-3">
                            <span className="font-mono text-xs text-zinc-500">SEARCH:</span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Escribe un tema..."
                                className="w-full bg-transparent font-mono text-xs text-white placeholder-zinc-600 focus:outline-none"
                            />
                        </div>

                        {/* Selector de Categorías Horizontal */}
                        <div className="md:col-span-7 p-3 flex flex-wrap gap-2">
                            {categories.map((cat) => {
                                const isActive = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`py-1.5 px-3 font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${isActive
                                            ? 'bg-white text-black border-white'
                                            : 'bg-black/30 text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Listado de Artículos */}
                {filteredPosts.length === 0 ? (
                    <div className="p-16 border border-white/15 bg-[#0d121d] text-center">
                        <span className="font-mono text-xs text-zinc-500 block mb-2">[ 0 RESULTADOS ]</span>
                        <p className="text-zinc-400 text-sm font-light">No encontramos artículos para los criterios especificados.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/15 divide-y md:divide-y-0 md:border-r-0 bg-[#0f1420]">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col justify-between border-b md:border-r border-white/15 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
                                    <BlogImage
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <span className="absolute top-3 left-3 bg-black/90 px-2 py-0.5 border border-white/20 font-mono text-[9px] uppercase tracking-wider text-zinc-300">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">
                                            {post.date} // {post.readTime}
                                        </div>
                                        <h2 className="text-lg font-normal text-white group-hover:text-primario transition-colors mb-3 leading-snug">
                                            {post.title}
                                        </h2>
                                        <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500 group-hover:text-white transition-colors">
                                        <span>LEER COMPLETO</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </main>
    );
}