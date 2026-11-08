// src/app/blog/page.js
import React from 'react';
import BlogExplorer from '@/components/BlogExplorer';
import { getPublishedPosts, toPostSummary } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Blog de Analítica, GA4, Looker Studio y Meta Ads | Expansis Pro',
    description:
        'Guías prácticas sobre análisis de datos, Google Analytics 4, Looker Studio y Meta Ads para emprendedores y empresas en Chile.',
    path: '/blog',
});

export default function BlogPage() {
    const posts = getPublishedPosts().map(toPostSummary);

    return (
        <main className="min-h-screen bg-[#07090e] text-white pt-32 pb-24 border-b border-white/10">
            <div className="container-pro max-w-6xl mx-auto px-4">
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
                <BlogExplorer posts={posts} />
            </div>
        </main>
    );
}