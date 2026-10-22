// app/page.js
import React from 'react';
import { servicesData } from '@/data/servicesData';
import CarouselItem from '@/components/CarouselItem';
import ProjectSection from '@/components/ProjectSection';
import CardCarousel from '@/components/CardCarousel';
import ImageTextCTA from '@/components/ImageTextCTA';
import CtaButton from '@/components/CtaButton';
import CallToAction from '@/components/CallToAction';
import RecentPosts from '@/components/RecentPosts';
import HeroAnimation from '@/components/HeroAnimation';
import EcosystemFlow from '@/components/EcosystemFlow';
import EcosystemPricing from '@/components/EcosystemPricing';
import HomeSolutionsFinder from '@/components/HomeSolutionsFinder';

export const metadata = {
    title: "Expansis Pro | Canales Digitales y Performance en Chile",
    description: "Infraestructuras digitales completas: desarrollo web en React, captación con Google/Meta Ads y telemetría avanzada para especialistas, empresas B2B y comercio electrónico.",
    alternates: {
        canonical: 'https://expansispro.com',
    },
    openGraph: {
        title: "Expansis Pro | Ecosistemas Digitales para Empresas y Especialistas",
        description: "Construimos canales digitales a medida donde tu infraestructura web y tus campañas publicitarias operan en conjunto para generar crecimiento predecible.",
        url: 'https://expansispro.com',
        siteName: 'Expansis Pro',
        locale: 'es_CL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Expansis Pro | Ecosistemas Digitales y Ads",
        description: "Desarrollo web corporativo, adquisición pagada y analítica en tiempo real.",
    },
};

export default function Home() {
    return (
        <>
            {/* --- 1. HERO SECTION CON VIDEO DE FONDO --- */}
            <section id="home" className="relative h-[85vh] min-h-[620px] flex items-center justify-start md:justify-center overflow-hidden bg-[#07090e] px-6 border-b border-white/10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/images/hero-poster.webp"
                    fetchPriority="high"
                    className="absolute inset-0 z-0 w-full h-full object-cover opacity-25 brightness-[0.6] grayscale"
                >
                    <source src="/assets/videos/hero-expansis.mp4" type="video/mp4" />
                </video>

                {/* Filtro lineal sutil en lugar de degradado radial */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#07090e]/40 via-[#07090e]/70 to-[#07090e]"></div>

                <div className="relative z-20 max-w-5xl md:mx-auto w-full">
                    <HeroAnimation>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 bg-primario animate-pulse" />
                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-300">
                                SISTEMA INTEGRAL DE ADQUISICIÓN &amp; DESARROLLO WEB
                            </span>
                        </div>

                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6">
                            Canales digitales<br className="hidden sm:block" />{" "}
                            <span className="text-white font-medium border-b-2 border-primario pb-0">sintonizados con tu objetivo</span>
                        </h1>

                        <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-2xl font-light leading-relaxed">
                            Desarrollo Web  en React y Shopify, captación activa en Google/Meta Ads y control de rentabilidad en tiempo real. Cero piezas sueltas: un solo ecosistema digital.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <CtaButton
                                scrollTo="planes-ecosistema"
                                variant="primary"
                                category="Home"
                                label="Boton Ver Planes"
                            >
                                Soluciones →
                            </CtaButton>

                            <CtaButton
                                scrollTo="ecosystem-flow"
                                variant="secondary"
                                category="Home"
                                label="Boton Ver Metodologia"
                            >
                                Flujo de Trabajo →
                            </CtaButton>
                        </div>
                    </HeroAnimation>
                </div>
            </section>

            {/* --- 2. EL MÉTODO: Flujo del Ecosistema --- */}
            <div id="ecosystem-flow">
                <EcosystemFlow />
            </div>

            {/* --- 3. LA OFERTA PRINCIPAL: Planes por Perfil de Cliente --- */}
            <EcosystemPricing />


            {/* --- 5. CASOS DE ÉXITO --- */}
            <ProjectSection
                title="Casos de Éxito"
                subtitle="Mira cómo hemos aplicado nuestra ingeniería en diversos ecosistemas digitales."
                selectedIds={["estudio-brkovic", "2v-express", "lobos-miniexcavadoras"]}
                showCta={true}
            />

            {/* --- 6. ARTÍCULOS RECIENTES --- */}
            <RecentPosts />

            {/* --- 7. DETRÁS DE LA ESTRATEGIA (TEASER) --- */}
            <section id="about-teaser">
                <ImageTextCTA
                    imageDesktop="/assets/images/expansisPro_aboutus.webp"
                    alt="Consultoría y estrategia digital en las oficinas de Expansis Pro"
                    subtitle="DETRÁS DE LA ESTRATEGIA"
                    trackLocation="brand_philosophy"
                    title="Somos Socios en la Transformación Digital"
                    text={[
                        "Expansis Pro es un espacio que aspira a devolver el propósito a las organizaciones para usarlo como hoja de ruta definitiva para los procesos de transformación digital.",
                        "Conoce nuestra historia, nuestra filosofía de trabajo y al equipo que lo hace posible."
                    ]}
                    imageSide="left"
                    buttonContent="Conoce nuestra historia"
                    buttonLink="/quienes-somos"
                    buttonVariant="primary"
                    secondaryButtonContent="Ver Proyectos"
                    secondaryButtonLink="/proyectos"
                    secondaryButtonVariant="outline"
                />
            </section>

            {/* --- 8. CIERRE / FORMULARIO GLOBAL --- */}


            <CallToAction
                source="Home - Final de Página"
                title="¿Listo para dar el salto?"
                description="Hablemos de tu proyecto. Completa el formulario y analizaremos tu caso."
            />


        </>
    );
}