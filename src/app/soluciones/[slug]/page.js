// src/app/soluciones/[slug]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSolutionBySlug, getAllSolutionSlugs } from '@/data/solutionsData';
import { getFaqsBySolutionSlug } from '@/data/faqsData'; // <-- Helper por Tag
import ProjectSection from '@/components/ProjectSection';
import ClientScrollButton from '@/components/ClientScrollButton';
import CallToAction from '@/components/CallToAction';
import SolutionFaqs from '@/components/SolutionFaqs'; // <-- Componente Acordeón

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

    // Obtenemos automáticamente las FAQs asociadas al slug de esta página
    const solutionFaqs = getFaqsBySolutionSlug(solution.slug);

    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            {/* 1. HERO INMERSIVO */}
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
                            className="w-full sm:w-auto py-4 px-10 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-primario/90 transition-all cursor-pointer flex items-center justify-center gap-3"
                        >
                            Solicitar Diagnóstico →
                        </ClientScrollButton>
                        <ClientScrollButton
                            targetId="alcance-tecnico"
                            className="w-full sm:w-auto py-3.5 px-8 border border-white/20 text-zinc-300 text-xs font-mono uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                        >
                            Ver Entregables ↓
                        </ClientScrollButton>
                    </div>
                </div>
            </section>

            {/* 2. DOLORES Y SOLUCIÓN */}
            <section className="py-20 bg-[#07090e] border-b border-white/10">
                <div className="container-pro max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500 block mb-2">
                                [ EL PROBLEMA ]
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
                                Por qué los canales tradicionales fallan
                            </h2>
                            <div className="space-y-6">
                                {solution.painPoints.map((pain, idx) => (
                                    <div key={idx} className="border-l-2 border-red-500/30 pl-4">
                                        <h3 className="text-sm font-medium text-white mb-1">{pain.title}</h3>
                                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{pain.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2">
                                [ LA SOLUCIÓN ]
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
                                {solution.tagline}
                            </h2>
                            <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                                {solution.targetAudience}
                            </p>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                Abordamos el problema desde su raíz arquitectónica. Eliminamos el código inflado de constructores visuales lentos, diseñamos rutas de conversión claras y conectamos el ecosistema directamente a las plataformas publicitarias para medir el retorno de cada peso invertido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ALCANCE TÉCNICO Y FINANCIERO */}
            <section id="alcance-tecnico" className="py-20 bg-[#0a0d14] border-b border-white/10 relative overflow-hidden">
                <div className="container-pro max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Izquierda: Entregables */}
                        <div className="lg:col-span-7">
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2">
                                [ COMPONENTES DEL PROGRAMA ]
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
                                Entregables Técnicos Incluidos
                            </h2>
                            <ul className="space-y-4 mb-8">
                                {solution.deliverables.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-sm font-light text-zinc-300">
                                        <span className="font-mono text-primario text-xs shrink-0 select-none mt-0.5">
                                            {(idx + 1).toString().padStart(2, '0')}.
                                        </span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 border border-white/10 bg-[#0f1420] text-xs font-light text-zinc-400 flex items-start gap-3">
                                <span className="text-primario font-mono text-sm leading-none shrink-0">■</span>
                                <span>Propiedad total: Expansis Pro no retiene activos. El cliente mantiene la titularidad absoluta sobre repositorios de código, accesos a paneles y cuentas publicitarias.</span>
                            </div>
                        </div>

                        {/* Derecha: Inversión */}
                        <div className="lg:col-span-5">
                            <div className="border border-white/15 bg-black/80 backdrop-blur-md p-6 sm:p-8 font-mono mb-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                    <span className="text-xs uppercase tracking-widest text-primario">Inversión Estimada</span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Valores Netos</span>
                                </div>

                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] uppercase text-zinc-500 block">Setup Inicial (Pago Único)</span>
                                        {solution.pricing?.promoTag && (
                                            <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/30">
                                                {solution.pricing.promoTag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-3 mt-1">
                                        <span className="text-2xl text-white font-medium block">{solution.pricing.setup}</span>
                                        {solution.pricing?.originalSetup && (
                                            <span className="text-xs text-zinc-500 line-through font-mono">{solution.pricing.originalSetup}</span>
                                        )}
                                    </div>
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
                                    <span>Condición de inicio:</span>
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
                    <div className="flex items-end justify-between mb-8 sm:mb-12">
                        <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2">
                                [ RUTA DE TRABAJO ]
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-light text-white">
                                Fases de Implementación
                            </h2>
                        </div>
                        <span className="font-mono text-[11px] text-zinc-500 sm:hidden">
                            Desliza ↔
                        </span>
                    </div>

                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
                        {solution.phases.map((ph, idx) => (
                            <div
                                key={idx}
                                className="p-6 border border-white/10 bg-[#0a0d14] hover:bg-[#0f1420] transition-colors group min-w-[240px] sm:min-w-[260px] md:min-w-0 shrink-0 snap-start flex flex-col justify-between"
                            >
                                <div>
                                    <span className="font-mono text-3xl font-bold text-white/10 group-hover:text-primario/30 transition-colors block mb-4">
                                        {ph.step}
                                    </span>
                                    <h3 className="text-sm font-medium text-white mb-3">{ph.name}</h3>
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{ph.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TÉRMINOS Y TRANSPARENCIA */}
            <section className="py-16 bg-[#0a0d14] border-b border-white/10">
                <div className="container-pro max-w-5xl mx-auto px-4">
                    <div className="p-6 sm:p-8 border border-white/10 bg-[#0f1420] text-xs text-zinc-400 font-light space-y-4">
                        <h3 className="font-mono text-white text-sm mb-4 tracking-wider uppercase">[ TÉRMINOS Y TRANSPARENCIA COMERCIAL ]</h3>
                        <p>
                            <strong className="text-white font-mono font-medium">[01. ALCANCE Y VALORES NETOS]</strong> Todos los valores de Setup y Mantención indicados en esta propuesta son montos netos (+ IVA). Corresponden a una base técnica de referencia y se confirman formalmente tras la sesión de diagnóstico inicial con nuestro equipo.
                        </p>
                        <p>
                            <strong className="text-white font-mono font-medium">[02. FACTURACIÓN]</strong> La mantención mensual cubre honorarios de soporte, servidor, diseño publicitario y optimización técnica. El saldo sugerido de pauta se cancela directamente por el cliente a las plataformas publicitarias (Google / Meta) utilizando su propia tarjeta corporativa, sin comisiones ocultas de intermediación por parte de la agencia.
                        </p>
                        <p>
                            <strong className="text-white font-mono font-medium">[03. APRENDIZAJE ALGORÍTMICO]</strong> El compromiso de 60 días no es una atadura comercial, sino un requerimiento técnico que permite a los algoritmos de Inteligencia Artificial de las plataformas recopilar datos estadísticamente significativos para estabilizar y optimizar el costo de adquisición de sus prospectos.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. PREGUNTAS FRECUENTES DEL PROGRAMA (ALINEADAS POR TAG CON ACORDEÓN) */}
            <SolutionFaqs faqs={solutionFaqs} solutionTitle={solution.title} />

            {/* 7. CASOS DE ÉXITO RELACIONADOS */}
            {solution.relatedProjects && solution.relatedProjects.length > 0 && (
                <ProjectSection
                    title="Casos Relacionados"
                    subtitle="Implementaciones similares desarrolladas bajo este estándar."
                    selectedIds={solution.relatedProjects}
                    showCta={false}
                />
            )}

            {/* 8. CTA FINAL */}
            <CallToAction
                source={`Solución: ${solution.title}`}
                title={`¿Listo para implementar ${solution.title}?`}
                description="Evaluaremos la viabilidad técnica y comercial de tu caso para entregarte una propuesta a medida."
            />
        </main>
    );
}