// src/app/soluciones/page.js
import React from 'react';
import Link from 'next/link';
import SecondaryHero from '@/components/SecondaryHero';
import { solutionsData } from '@/data/solutionsData';
import CallToAction from '@/components/CallToAction';

const solutionImages = {
    'marca-personal-profesionales': '/assets/images/marca-personal.webp',
    'empresas-b2b': '/assets/images/empresa-b2b.webp',
    'ecommerce': '/assets/images/ecommerce.webp',
};

export const metadata = {
    title: "Programas de Ingeniería & Adquisición | Expansis Pro",
    description: "Ecosistemas digitales que combinan desarrollo en React, pauta en Google/Meta Ads y control de rentabilidad para empresas B2B y profesionales.",
    alternates: {
        canonical: 'https://expansispro.com/soluciones',
    },
};

export default function SolucionesHubPage() {
    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            <SecondaryHero
                title="Programas de Ingeniería"
                subtitle="Infraestructuras digitales completas: desde la arquitectura en React hasta la captación en Google Ads y el control de rentabilidad."
                icon="fa-solid fa-layer-group"
                badge="EXPANSIS PRO // SOLUCIONES"
            />

            <section className="py-24 bg-[#0a0d14] border-b border-white/10">
                <div className="container-pro max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-[#0f1420]">
                        {solutionsData.map((solution, idx) => (
                            <Link
                                key={solution.slug}
                                href={`/soluciones/${solution.slug}`}
                                className="group relative flex flex-col justify-between p-8 sm:p-10 overflow-hidden hover:border-primario/40 transition-colors"
                            >
                                <img
                                    src={solutionImages[solution.slug] || '/assets/images/expansisPro_target.webp'}
                                    alt={solution.title}
                                    className="absolute inset-0 z-0 w-full h-full object-cover opacity-15 grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                                />
                                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/90 to-[#0f1420]/70 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                                            [ MOD-0{idx + 1} ]
                                        </span>
                                        <span className="w-8 h-8 flex items-center justify-center border border-white/15 bg-black/60 text-primario group-hover:border-primario transition-colors">
                                            <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </span>
                                    </div>

                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primario block mb-3">
                                        {solution.badge}
                                    </span>

                                    <h2 className="text-xl sm:text-2xl font-light text-white mb-4 group-hover:text-primario transition-colors">
                                        {solution.title}
                                    </h2>

                                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                                        {solution.tagline}
                                    </p>
                                </div>

                                <div className="relative z-10 pt-6 border-t border-white/10 mt-6 flex flex-col space-y-2">
                                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                                        INVERSIÓN BASE:
                                    </span>
                                    <span className="text-sm font-mono text-white">
                                        {solution.pricing.setup}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction
                source="Hub de Soluciones"
                title="¿No estás seguro de cuál necesitas?"
                description="Hablemos de tus metas comerciales y auditaremos tu situación actual para recomendarte la infraestructura correcta."
            />
        </main>
    );
}