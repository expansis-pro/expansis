// src/app/soluciones/[slug]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSolutionBySlug, getAllSolutionSlugs } from '@/data/solutionsData';
import ProjectSection from '@/components/ProjectSection';
import ClientScrollButton from '@/components/ClientScrollButton';
import CallToAction from '@/components/CallToAction';

const solutionImages = {
    'marca-personal-profesionales': '/assets/images/web-para-profesionales.webp',
    'empresas-b2b': '/assets/images/desarrollo-web.webp',
    'ecommerce': '/assets/images/ecommerce.webp',
};

export async function generateStaticParams() {
    return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const solution = getSolutionBySlug(resolvedParams.slug);
    if (!solution) return {};
    return {
        title: solution.seo?.title || `${solution.title} | Expansis Pro`,
        description: solution.seo?.description || solution.heroText,
        alternates: {
            canonical: `https://expansispro.com/soluciones/${solution.slug}`,
        },
    };
}

export default async function SolutionDetailPage({ params }) {
    const resolvedParams = await params;
    const solution = getSolutionBySlug(resolvedParams.slug);

    if (!solution) {
        notFound();
    }

    const bgImage = solutionImages[solution.slug] || '/assets/images/expansisPro_target.webp';

    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            {/* 1. HERO INMERSIVO CON IMAGEN DE FONDO ATENUADA */}
            <section className="relative pt-36 pb-24 px-4 border-b border-white/10 bg-[#0a0d14] overflow-hidden">
                <img
                    src={bgImage}
                    alt={solution.title}
                    className="absolute inset-0 z-0 w-full h-full object-cover opacity-15 grayscale contrast-125 pointer-events-none"
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/85 to-[#07090e]/70 pointer-events-none" />

                <div className="container-pro max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <Link href="/soluciones" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors">
                            [ PROGRAMAS ]
                        </Link>
                        <span className="text-zinc-600 font-mono text-xs">/</span>
                        <span className="font-mono text-xs uppercase tracking-widest text-primario bg-primario/10 px-2 py-0.5 border border-primario/30">
                            {solution.badge}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
                        {solution.title}
                    </h1>

                    <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-10">
                        {solution.heroText}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <ClientScrollButton
                            action="openDrawer"
                            className="w-full py-4 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold hover:bg-primario/90 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            Iniciar Evaluación →
                        </ClientScrollButton>

                        <ClientScrollButton
                            targetId="alcance-tecnico"
                            className="btn-secondary py-4 px-8 text-xs font-mono uppercase tracking-[0.2em] font-medium"
                        >
                            Ver Alcance Técnico ↓
                        </ClientScrollButton>
                    </div>
                </div>
            </section>

            {/* 2. DIAGNÓSTICO: PAIN POINTS QUE RESOLVEMOS */}
            <section className="py-20 bg-[#080b11] border-b border-white/10">
                <div className="container-pro max-w-5xl mx-auto px-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2">
                        [ DIAGNÓSTICO PREVIO ]
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-white mb-10">
                        Fricciones críticas que eliminamos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 border border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-[#0d121d]">
                        {solution.painPoints.map((item, idx) => (
                            <div key={idx} className="p-6 sm:p-8">
                                <span className="font-mono text-xs text-primario block mb-3">0{idx + 1}.</span>
                                <h3 className="text-base font-normal text-white mb-2">{item.title}</h3>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ALCANCE TÉCNICO Y CONDICIONES COMERCIALES */}
            <section id="alcance-tecnico" className="py-20 bg-[#0a0d14] border-b border-white/10">
                <div className="container-pro max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Entregables */}
                        <div className="lg:col-span-7 border border-white/15 bg-[#0f1420] p-8 sm:p-10">
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-6">
                                [ ESPECIFICACIÓN DE ENTREGABLES ]
                            </span>
                            <ul className="divide-y divide-white/10 border-t border-b border-white/10 mb-8">
                                {solution.deliverables.map((d, dIdx) => (
                                    <li key={dIdx} className="py-3 flex items-start gap-4 text-xs sm:text-sm font-light text-zinc-300">
                                        <span className="font-mono text-primario text-xs shrink-0 select-none">
                                            {(dIdx + 1).toString().padStart(2, '0')}.
                                        </span>
                                        <span className="leading-relaxed">{d}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 border border-white/10 bg-black/40 text-xs font-light text-zinc-300 flex items-start gap-3">
                                <span className="text-primario font-mono text-sm leading-none shrink-0">■</span>
                                <span>Propiedad total: el cliente mantiene la titularidad absoluta de repositorios, accesos y campañas.</span>
                            </div>
                        </div>

                        {/* Módulo Financiero */}
                        <div className="lg:col-span-5 border border-white/15 bg-[#0f1420] p-8 font-mono">
                            <span className="text-[10px] uppercase tracking-widest text-primario block mb-4">
                                CONDICIONES COMERCIALES
                            </span>
                            <div className="border border-white/10 bg-black/60 divide-y divide-white/10 mb-6">
                                <div className="p-4">
                                    <span className="text-[10px] uppercase text-zinc-500 block">Setup Base</span>
                                    <span className="text-2xl text-white font-medium block mt-1">{solution.pricing.setup}</span>
                                    <span className="text-[10px] text-zinc-500">{solution.pricing.setupNote}</span>
                                </div>
                                <div className="p-4 flex items-center justify-between text-xs">
                                    <span className="text-zinc-400">Mantención mensual:</span>
                                    <span className="text-white">{solution.pricing.maintenance}</span>
                                </div>
                                <div className="p-4 flex items-center justify-between text-xs">
                                    <span className="text-zinc-400">Pauta sugerida ({solution.pricing.adSpendPlatform}):</span>
                                    <span className="text-primario">{solution.pricing.adSpendSuggested}</span>
                                </div>
                                <div className="p-3 bg-white/[0.02] text-[10px] text-zinc-500 flex justify-between">
                                    <span>Condición:</span>
                                    <span className="text-zinc-400">{solution.pricing.commitment}</span>
                                </div>
                            </div>

                            <ClientScrollButton
                                action="openDrawer"
                                className="w-full py-4 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold hover:bg-primario/90 transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                                Iniciar Evaluación →
                            </ClientScrollButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FASES DE IMPLEMENTACIÓN */}
            <section className="py-20 bg-[#080b11] border-b border-white/10">
                <div className="container-pro max-w-5xl mx-auto px-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2">
                        [ RUTA DE TRABAJO ]
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-white mb-10">
                        Fases de Ejecución del Programa
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/15 bg-[#0d121d]">
                        {solution.phases.map((ph) => (
                            <div key={ph.step} className="p-6">
                                <span className="font-mono text-2xl font-light text-white/30 block mb-2">{ph.step}</span>
                                <h3 className="text-sm font-medium text-white mb-2">{ph.name}</h3>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">{ph.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PREGUNTAS FRECUENTES DEL PERFIL */}
            {solution.faqs && solution.faqs.length > 0 && (
                <section className="py-20 bg-[#0a0d14] border-b border-white/10">
                    <div className="container-pro max-w-4xl mx-auto px-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2">
                            [ DUDAS FRECUENTES ]
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-light text-white mb-10">
                            Preguntas sobre este programa
                        </h2>

                        <div className="space-y-4">
                            {solution.faqs.map((faq, idx) => (
                                <div key={idx} className="border border-white/10 bg-[#0f1420] p-6">
                                    <h3 className="text-base font-normal text-white mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. CASOS DE ÉXITO RELACIONADOS */}
            {solution.relatedProjects && solution.relatedProjects.length > 0 && (
                <ProjectSection
                    title="Casos Relacionados"
                    subtitle="Implementaciones similares desarrolladas bajo este estándar."
                    selectedIds={solution.relatedProjects}
                    showCta={false}
                />
            )}

            {/* 7. CTA FINAL */}
            <CallToAction
                source={`Solución: ${solution.title}`}
                title={`¿Listo para implementar ${solution.title}?`}
                description="Evaluaremos la viabilidad técnica y comercial de tu caso para entregarte una propuesta a medida."
            />
        </main>
    );
}