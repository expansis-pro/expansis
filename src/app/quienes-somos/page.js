// app/quienes-somos/page.js
import React from 'react';
import Link from 'next/link';
import SecondaryHero from '@/components/SecondaryHero';
import ClientScrollButton from '@/components/ClientScrollButton';
import CallToAction from '@/components/CallToAction';

export const metadata = {
    title: "Sobre Expansis Pro | Nuestra Filosofía de Ingeniería",
    description: "Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica.",
    alternates: {
        canonical: 'https://expansispro.com/quienes-somos',
    },
    openGraph: {
        title: "Sobre Expansis Pro | Nuestra Filosofía de Ingeniería",
        description: "Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica.",
        url: 'https://expansispro.com/quienes-somos',
        siteName: 'Expansis Pro',
        locale: 'es_CL',
        type: 'website',
    },
};

export default function QuienesSomosPage() {
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}/quienes-somos`;

    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            {/* Schema de AboutPage + Datos de Autoridad del Fundador */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "ProfessionalService",
                            "@id": "https://expansispro.com/#agency"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Gonzalo Lobos",
                            "jobTitle": "Founder & Lead Software Engineer",
                            "sameAs": [
                                "https://gonzalobos.com/"
                            ]
                        }
                    })
                }}
            />

            {/* Breadcrumbs técnicos */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
                            { "@type": "ListItem", "position": 2, "name": "Sobre Expansis", "item": canonicalUrl }
                        ]
                    })
                }}
            />

            {/* --- 1. HERO TÉCNICO --- */}
            <SecondaryHero
                title="Sobre Expansis"
                subtitle="Conoce nuestra historia, rigor metodológico y al equipo detrás de la estrategia."
                icon="fa-solid fa-users"
                img="/assets/images/hero-about.webp"
                badge="EXPANSIS PRO // FILOSOFÍA & EQUIPO"
            />

            {/* --- 2. PERFIL DEL FUNDADOR (GRILLA SWISS MODULAR) --- */}
            <section id="about-founder" className="py-24 bg-[#0a0d14] border-b border-white/10">
                <div className="container-pro max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/15 bg-[#0d121d]">

                        {/* Contenido / Biografía (7 columnas) */}
                        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-1">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-3">
                                    [ PERFIL // FUNDADOR &amp; LEAD ENGINEER ]
                                </span>

                                <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-6">
                                    Detrás de Expansis Pro
                                </h2>

                                <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                                    <p className="border-l-2 border-primario pl-4 font-mono text-xs sm:text-sm text-zinc-200">
                                        Ingeniero Comercial con Máster en Psicología Organizacional (UAI), Fotógrafo Publicitario del Instituto ARCOS y desarrollador de software.
                                    </p>
                                    <p>
                                        Esta combinación define un enfoque híbrido en el mercado: rigor en métricas de rentabilidad, viabilidad financiera y psicología del consumidor, combinado con el valor de un relato visual cuidado y la disciplina analítica indispensable para estructurar código robusto.
                                    </p>
                                    <p>
                                        En Expansis Pro, aplicamos este criterio técnico, creativo y comercial para construir infraestructuras digitales coherentes, sólidas y preparadas para escalar operaciones reales.
                                    </p>
                                </div>
                            </div>

                            {/* Acciones y Enlaces de Autoridad */}
                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs">
                                <ClientScrollButton
                                    action="openDrawer"
                                    className="py-3.5 px-6 bg-primario text-white uppercase tracking-[0.18em] font-medium hover:bg-primario/90 transition-all text-center border border-primario rounded-none cursor-pointer"
                                >
                                    Agendar Diagnóstico →
                                </ClientScrollButton>

                                <a
                                    href="https://gonzalobos.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-3.5 px-5 border border-white/20 text-zinc-300 uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all text-center rounded-none"
                                >
                                    Web Personal ↗
                                </a>

                                <a
                                    href="https://linkedin.com/company/expansispro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-3.5 px-5 border border-white/20 text-zinc-300 uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all text-center rounded-none"
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full border-b lg:border-b-0 lg:border-l border-white/15 bg-[#090d15] order-1 lg:order-2">
                            <img
                                src="/assets/images/Profile_Img_Expansis.webp"
                                alt="Foto de perfil de Gonzalo Lobos, fundador de Expansis Pro"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-black/85 text-primario px-3 py-1 border border-primario/30">
                                GONZALO LOBOS // FOUNDER
                            </div>
                            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-zinc-400 bg-black/85 px-2 py-0.5 border border-white/10">
                                SANTIAGO, CHILE
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 3. NUESTRA FILOSOFÍA (MISIÓN & VISIÓN MODULAR) --- */}
            <section id="philosophy" className="py-24 bg-[#080b11] border-b border-white/10">
                <div className="container-pro max-w-6xl mx-auto px-4">

                    <div className="mb-14 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2">
                                [ BASES ESTRATÉGICAS / VALORES ]
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
                                Nuestra Filosofía de Trabajo
                            </h2>
                        </div>
                        <span className="font-mono text-xs text-zinc-500">
                            PRINCIPIOS // EXPANSIS PRO
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 border border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-[#0f1420]">

                        {/* Misión */}
                        <div className="p-8 sm:p-12 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-mono text-xs text-primario bg-primario/10 border border-primario/30 px-2.5 py-1">
                                        [ MOD-01 // MISIÓN ]
                                    </span>
                                    <span className="font-mono text-xs text-zinc-500">
                                        <i className="fa-solid fa-rocket" />
                                    </span>
                                </div>

                                <h3 className="text-2xl font-normal text-white mb-4">
                                    Misión Operativa
                                </h3>

                                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                                    Construir canales digitales a medida que impulsen la expansión de negocios con propósito, combinando software propietario en React con adquisición pagada de alta precisión.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 font-mono text-[11px] text-zinc-500">
                                OBJETIVO: RENTABILIDAD &amp; AUTORIDAD VERIFICABLE
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="p-8 sm:p-12 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-mono text-xs text-white bg-white/10 border border-white/20 px-2.5 py-1">
                                        [ MOD-02 // VISIÓN ]
                                    </span>
                                    <span className="font-mono text-xs text-zinc-500">
                                        <i className="fa-solid fa-eye" />
                                    </span>
                                </div>

                                <h3 className="text-2xl font-normal text-white mb-4">
                                    Visión Estratégica
                                </h3>

                                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                                    Ser el socio técnico preferente para empresas y especialistas que buscan un crecimiento digital auténtico, ordenado y libre de soluciones desechables.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 font-mono text-[11px] text-zinc-500">
                                ALCANCE: RELACIONES COMERCIALES DE LARGO PLAZO
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 4. PROPÓSITO ORGANIZACIONAL (ESTILO EDITORIAL 50/50) --- */}
            <section id="agency-purpose" className="py-24 bg-[#0a0d14] border-b border-white/10">
                <div className="container-pro max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/15 bg-[#0d121d]">


                        {/* Imagen de Contexto en Propósito */}
                        <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/15 bg-[#090d15]">
                            <img
                                src="/assets/images/expansisPro_aboutus.webp"
                                alt="Consultoría estratégica y diseño de ecosistemas digitales en Expansis Pro"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-black/85 text-primario px-3 py-1 border border-primario/30">
                                MANIFIESTO // PROPÓSITO
                            </div>
                        </div>

                        {/* Texto del Manifiesto */}
                        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-3">
                                    [ LA RAZÓN DE SER DE EXPANSIS PRO ]
                                </span>

                                <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-6">
                                    Un Propósito Más Allá del Código
                                </h2>

                                <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                                    <p>
                                        <strong className="text-white font-medium">Expansis Pro aspira a devolver el propósito a las organizaciones</strong> para usarlo como hoja de ruta definitiva en sus procesos de transformación digital, huyendo de proyectos repetitivos, plantillas genéricas y soluciones carentes de identidad.
                                    </p>
                                    <p>
                                        En un mercado saturado donde la prisa tecnológica fuerza a resolver solo el día a día, antes de programar alineamos tu canal digital con la propuesta de valor real y la solvencia operativa de tu negocio.
                                    </p>
                                    <p>
                                        Nuestra meta es entregar un activo que genere beneficio económico tangible para tu empresa y valor medible para tus clientes.
                                    </p>
                                </div>
                            </div>

                            {/* Botones de Cierre */}
                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 font-mono text-xs">
                                <ClientScrollButton
                                    action="openDrawer"
                                    className="py-3.5 px-8 bg-primario text-white uppercase tracking-[0.18em] font-medium hover:bg-primario/90 transition-all text-center border border-primario rounded-none cursor-pointer"
                                >
                                    Solicitar Asesoría Integral →
                                </ClientScrollButton>

                                <Link
                                    href="/contacto"
                                    className="py-3.5 px-8 border border-white/20 text-zinc-300 uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all text-center rounded-none"
                                >
                                    Formulario de Contacto
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 5. CIERRE TERMINAL --- */}
            <CallToAction
                source="Quienes Somos - Final de Página"
                title="¿Compartimos una visión?"
                description="Si buscas un socio estratégico comprometido con la rentabilidad técnica de tu negocio y no solo un proveedor de páginas, conversemos."
            />
        </main>
    );
}