'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import BlogImage from '@/components/BlogImage';
import SecondaryHero from '@/components/SecondaryHero';

export default function BlogPage() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [searchQuery, setSearchQuery] = useState('');

    // 1. Obtener publicaciones aprobadas
    const approvedPosts = useMemo(() => {
        return blogPosts.filter((post) => post && post.status === 'aprobado');
    }, []);

    // 2. Extraer lista dinámica de categorías únicas
    const categories = useMemo(() => {
        const uniqueCategories = new Set(
            approvedPosts.map((post) => post.category).filter(Boolean)
        );
        return ['Todas', ...Array.from(uniqueCategories)];
    }, [approvedPosts]);

    // 3. Filtrar publicaciones por categoría y término de búsqueda
    const filteredPosts = useMemo(() => {
        return approvedPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === 'Todas' || post.category === selectedCategory;

            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                (post.title && post.title.toLowerCase().includes(query)) ||
                (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
                (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)));

            return matchesCategory && matchesSearch;
        });
    }, [approvedPosts, selectedCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-ghostWhite pb-20">
            {/* --- HERO DEL BLOG --- */}
            <SecondaryHero
                title="Blog & Recursos Digitales"
                subtitle="Explora nuestras guías, metodologías y artículos sobre analítica de datos, inteligencia artificial y estrategia digital."
                icon="fa-solid fa-newspaper"
            />

            <section className="container-pro pt-12">
                {/* --- BARRA DE HERRAMIENTAS: FILTROS Y CONTROLES --- */}
                <div className="bg-white p-5 md:p-6 rounded-3xl border border-gray-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">

                    {/* BUSCADOR */}
                    <div className="relative w-full md:w-80">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                        <input
                            type="text"
                            placeholder="Buscar artículos o tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-9 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-primario focus:bg-white transition-all font-light"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-deepBlue text-xs p-1"
                                title="Limpiar búsqueda"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        )}
                    </div>

                    {/* SELECTOR DE CATEGORÍAS */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                                        ? 'bg-deepBlue text-ghostWhite shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* CONMUTADOR DE VISTA (GRID / LIST) */}
                    <div className="flex items-center bg-gray-100 p-1 rounded-2xl border border-gray-200 shrink-0 self-end md:self-auto">
                        <button
                            onClick={() => setViewMode('grid')}
                            title="Vista en Tarjetas"
                            className={`px-3 py-2 rounded-xl text-sm transition-all ${viewMode === 'grid'
                                    ? 'bg-white text-primario shadow-sm'
                                    : 'text-gray-400 hover:text-deepBlue'
                                }`}
                        >
                            <i className="fa-solid fa-border-all"></i>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            title="Vista en Lista"
                            className={`px-3 py-2 rounded-xl text-sm transition-all ${viewMode === 'list'
                                    ? 'bg-white text-primario shadow-sm'
                                    : 'text-gray-400 hover:text-deepBlue'
                                }`}
                        >
                            <i className="fa-solid fa-list"></i>
                        </button>
                    </div>
                </div>

                {/* --- RESULTADOS DE BÚSQUEDA / CONTADOR --- */}
                <div className="flex justify-between items-center mb-6 px-2 text-xs text-gray-500 font-light">
                    <span>
                        Mostrando <strong>{filteredPosts.length}</strong> de {approvedPosts.length} artículos
                    </span>
                    {(selectedCategory !== 'Todas' || searchQuery) && (
                        <button
                            onClick={() => {
                                setSelectedCategory('Todas');
                                setSearchQuery('');
                            }}
                            className="text-primario font-bold hover:underline"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>

                {/* --- RENDERING DE ARTÍCULOS --- */}
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <i className="fa-solid fa-folder-open text-4xl text-gray-300 mb-4 block"></i>
                        <h3 className="text-deepBlue text-lg font-bold mb-2">
                            No se encontraron artículos
                        </h3>
                        <p className="text-gray-500 text-sm font-light">
                            Intenta ajustar los términos de búsqueda o cambiar la categoría seleccionada.
                        </p>
                    </div>
                ) : viewMode === 'grid' ? (
                    /* VISTA EN CUADRÍCULA (GRID CARDS) */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <Link
                                key={`grid-${post.slug}-${post.id}`}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
                            >
                                <div className="relative aspect-video w-full overflow-hidden bg-deepBlue/5 shrink-0">
                                    <BlogImage
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <span className="absolute top-4 left-4 z-10 bg-deepBlue/90 backdrop-blur-sm text-ghostWhite text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
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
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider group-hover:text-primario text-deepBlue transition-colors">
                                        <span>Leer artículo</span>
                                        <i className="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* VISTA EN LISTA (HORIZONTALES) */
                    <div className="flex flex-col gap-4">
                        {filteredPosts.map((post) => (
                            <Link
                                key={`list-${post.slug}-${post.id}`}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-3xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center cursor-pointer"
                            >
                                <div className="relative w-full sm:w-52 h-44 sm:h-36 shrink-0 rounded-2xl overflow-hidden bg-deepBlue/5">
                                    <BlogImage
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <span className="absolute top-3 left-3 sm:hidden z-10 bg-deepBlue/90 backdrop-blur-sm text-ghostWhite text-[8px] font-bold px-2.5 py-1 rounded-full uppercase">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between flex-grow w-full h-full">
                                    <div>
                                        <div className="hidden sm:flex items-center gap-3 text-xs mb-2">
                                            <span className="bg-primario/10 text-primario font-bold px-2.5 py-0.5 rounded-md uppercase text-[10px] tracking-wider">
                                                {post.category}
                                            </span>
                                            <span className="text-gray-400 font-light">{post.date}</span>
                                            <span className="text-gray-400 font-light">&bull;</span>
                                            <span className="text-gray-400 font-light">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-deepBlue text-lg md:text-xl font-bold mb-2 group-hover:text-primario transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2 mb-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-gray-400 font-light pt-3 border-t border-gray-50">
                                        <span>Por {post.author}</span>
                                        <span className="text-deepBlue font-bold group-hover:text-primario uppercase tracking-wider text-[11px] flex items-center gap-1">
                                            Leer <i className="fa-solid fa-arrow-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}