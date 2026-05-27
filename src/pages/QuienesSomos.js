// src/pages/QuienesSomos.js
import React, { useEffect } from 'react';
import SecondaryHero from '../components/SecondaryHero';
import { Helmet } from 'react-helmet-async';
import WhatIsExpansisPro from '../components/WhatIsExpansisPro';
import OurStory from '../components/OurStory';
import MisionVision from '../components/MisionVision';
import AboutMe from '../components/AboutMe';

import CallToAction from '../components/CallToAction';

const QuienesSomos = () => {
    // Aseguramos que la página cargue en el inicio para el efecto del Nav transparente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className=" min-h-screen">
            {/* --- CONFIGURACIÓN SEO (HELMET) --- */}
            <Helmet>
                <title>Sobre Expansis Pro | Nuestra Filosofía de Ingeniería</title>
                <meta
                    name="description"
                    content="Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica."
                />
                <link rel="canonical" href="https://expansispro.com/quienes-somos" />

                {/* Open Graph para que se vea bien al compartir el link */}
                <meta property="og:title" content="Sobre Expansis Pro | Nuestra Filosofía de Ingeniería" />
                <meta property="og:description" content="Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica." />
                <meta property="og:url" content="https://expansispro.com/quienes-somos" />
            </Helmet>

            {/* --- HERO SECUNDARIO --- 
                Sustituye al section id="quienes-somos" anterior para eliminar la franja blanca.
            */}
            <SecondaryHero
                title="Sobre Expansis"
                subtitle="Conoce Nuestra Historia, Valores y al Equipo Que Lo Hace Posible."
                icon="fa-solid fa-users"
                img="/assets/hero-about.webp"
            />

            {/* Contenido de la página con espaciado consistente */}
            <div className="space-y-0">
                <AboutMe />
                <MisionVision />
                <WhatIsExpansisPro />
                {/* <OurStory /> */}
            </div>

            <CallToAction
                title="¿Compartimos una visión?"
                description="Si buscas un socio estratégico comprometido con tu crecimiento, hablemos."
            />
        </main>
    );
};

export default QuienesSomos;