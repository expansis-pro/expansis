// src/components/ProjectSection.js (Rediseño Estilo Grilla Técnica)
'use client';
import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';

export default function ProjectSection({ title, subtitle, selectedIds = [], showCta = true }) {
    const displayedProjects = selectedIds.length > 0
        ? projectsData.filter((p) => selectedIds.includes(p.id))
        : projectsData.slice(0, 3);

    return (
        <section className="py-24 bg-[#0a0d14] text-white border-b border-white/10">
            <div className="container-pro max-w-6xl mx-auto px-4">

                {/* Cabecera de Sección */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2">
                            [ EVIDENCIA TÉCNICA / CASOS DE ESTUDIO ]
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                            {title || 'Casos de Éxito'}
                        </h2>
                    </div>
                    {subtitle && (
                        <p className="text-sm font-light text-zinc-400 max-w-md leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Grilla Modular de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-[#0f1420]">
                    {displayedProjects.map((project, idx) => (
                        <div key={project.id} className="flex flex-col justify-between group">
                            {/* Imagen Técnica */}
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 border border-white/20 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                                    {(idx + 1).toString().padStart(2, '0')} // {project.sector}
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-primario block mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-normal text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-xs text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3"
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                    />
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.slice(0, 2).map((tag, tIdx) => (
                                            <span key={tIdx} className="font-mono text-[10px] text-zinc-500 bg-white/[0.03] px-2 py-0.5 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-xs text-zinc-400 hover:text-white transition-colors"
                                    >
                                        Visitar ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showCta && (
                    <div className="mt-12 text-center">
                        <Link
                            href="/proyectos"
                            className="inline-flex items-center gap-3 py-3.5 px-8 border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all"
                        >
                            <span>Ver Registro Completo de Proyectos</span>
                            <span>→</span>
                        </Link>
                    </div>
                )}

            </div>
        </section >
    );
}