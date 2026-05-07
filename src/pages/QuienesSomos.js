// src/pages/QuienesSomos.js
import React, { useEffect } from 'react';
import SecondaryHero from '../components/SecondaryHero';
import WhatIsExpansisPro from '../components/WhatIsExpansisPro';
import OurStory from '../components/OurStory';
import MisionVision from '../components/MisionVision';

import CallToAction from '../components/CallToAction';

const QuienesSomos = () => {
    // Aseguramos que la página cargue en el inicio para el efecto del Nav transparente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className=" min-h-screen">
            {/* Metadatos SEO */}
            <title>Sobre Expansis - Expansis Pro</title>
            <meta name="description" content="Conoce la misión, visión y al equipo detrás de Expansis Pro. Soluciones digitales con un enfoque integral y personalizado." />
            <link rel="canonical" href="https://expansispro.com/quienes-somos" />

            {/* --- HERO SECUNDARIO --- 
                Sustituye al section id="quienes-somos" anterior para eliminar la franja blanca.
            */}
            <SecondaryHero
                title="Sobre Expansis"
                subtitle="Conoce Nuestra Historia, Valores y al Equipo Que Lo Hace Posible."
                icon="fa-solid fa-users"
            />

            {/* Contenido de la página con espaciado consistente */}
            <div className="space-y-0">
                <WhatIsExpansisPro />
                <MisionVision />
                <OurStory />

            </div>

            <CallToAction
                title="¿Compartimos una visión?"
                description="Si buscas un socio estratégico comprometido con tu crecimiento, hablemos."
            />
        </main>
    );
};

export default QuienesSomos;