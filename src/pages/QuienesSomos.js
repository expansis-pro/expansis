// src/pages/QuienesSomos.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SecondaryHero from '../components/SecondaryHero';
import { Helmet } from 'react-helmet-async';
import WhatIsExpansisPro from '../components/WhatIsExpansisPro';
import OurStory from '../components/OurStory';
import MisionVision from '../components/MisionVision';
import AboutMe from '../components/AboutMe';
import CallToAction from '../components/CallToAction';

const QuienesSomos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 🌟 Configuración del Canonical Dinámico de Expansis Pro
    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    return (
        <main className="min-h-screen">
            <Helmet>
                <title>Sobre Expansis Pro | Nuestra Filosofía de Ingeniería</title>
                <meta
                    name="description"
                    content="Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica."
                />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:title" content="Sobre Expansis Pro | Nuestra Filosofía de Ingeniería" />
                <meta property="og:description" content="Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica." />
                <meta property="og:url" content={canonicalUrl} />

                {/* 🌟 1. Schema de AboutPage + Datos de Autoridad del Fundador */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "ProfessionalService",
                            "@id": "https://expansispro.com/#agency"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Gonzalo Lobos", // Vincula directamente con tu data personal
                            "jobTitle": "Founder & Lead Software Engineer",
                            "sameAs": [
                                "https://gonzalobos.com/" // Tu marca personal cruzada
                            ]
                        }
                    })}
                </script>

                {/* 🌟 2. Breadcrumbs técnicos */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
                            { "@type": "ListItem", "position": 2, "name": "Sobre Expansis", "item": canonicalUrl }
                        ]
                    })}
                </script>
            </Helmet>

            <SecondaryHero
                title="Sobre Expansis"
                subtitle="Conoce Nuestra Historia, Valores y al Equipo Que Lo Hace Posible."
                icon="fa-solid fa-users"
                img="/assets/hero-about.webp"
            />

            <div className="space-y-0">
                <AboutMe />
                <MisionVision />
                <WhatIsExpansisPro />
            </div>

            <CallToAction
                title="¿Compartimos una visión?"
                description="Si buscas un socio estratégico comprometido con tu crecimiento, hablemos."
            />
        </main>
    );
};

export default QuienesSomos;