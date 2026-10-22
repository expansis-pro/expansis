// src/components/ProjectSection.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';

export default function ProjectSection({
    title,
    subtitle,
    selectedIds = [],
    showCta = true,
    initialCount = 9,
    isCatalog = false
}) {
    const [showAll, setShowAll] = useState(false);

    // Si vienen IDs seleccionados (Home o Soluciones), filtramos por ellos;
    // de lo contrario (página /proyectos), tomamos todo el catálogo.
    const allEligibleProjects = selectedIds.length > 0
        ? projectsData.filter((p) => selectedIds.includes(p.id))
        : projectsData;

    const baseProjects = isCatalog
        ? allEligibleProjects
        : (selectedIds.length > 0 ? allEligibleProjects : allEligibleProjects.slice(0, 3));

    const displayedProjects = isCatalog && !showAll
        ? baseProjects.slice(0, initialCount)
        : baseProjects;

    const remainingCount = baseProjects.length - initialCount;

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

                {/* Grilla Modular */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="border border-white/15 bg-[#0f1420] flex flex-col justify-between group hover:border-white/30 transition-colors"
                        >
                            {/* Imagen a Color con Zoom Suave */}
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 border border-white/20 font-mono text-[10px] uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
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
                                            <span
                                                key={tIdx}
                                                className="font-mono text-[10px] text-zinc-400 bg-white/[0.05] px-2 py-0.5 border border-white/10"
                                            >
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

                {/* Botón Ver Más interactivo para /proyectos */}
                {isCatalog && baseProjects.length > initialCount && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-3 py-3.5 px-8 border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                        >
                            <span>
                                {showAll ? 'Ver menos proyectos' : `Cargar más proyectos (${remainingCount})`}
                            </span>
                            <span className="text-primario font-bold">
                                {showAll ? '▲' : '▼'}
                            </span>
                        </button>
                    </div>
                )}

                {/* Botón hacia /proyectos para la Home */}
                {!isCatalog && showCta && (
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
        </section>
    );
}