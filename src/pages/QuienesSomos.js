// src/pages/QuienesSomos.js

import React from 'react';

// Importamos los componentes que queremos mostrar
import WhatIsExpansisPro from '../components/WhatIsExpansisPro';
import OurStory from '../components/OurStory'; // <-- NUEVO
import MisionVision from './MisionVision';
import AboutMe from './AboutMe';
import CallToAction from '../components/CallToAction';

const QuienesSomos = () => {

    return (
        <>
            {/* Metadatos para el SEO */}
            <title>Sobre Expansis - Expansis Pro</title>
            <meta name="description" content="Conoce la misión, visión y al equipo detrás de Expansis Pro. Soluciones digitales con un enfoque integral y personalizado." />
            <link rel="canonical" href="https://expansispro.com/quienes-somos" />

            <section id="quienes-somos" className="py-6 sm:py-6">
                <div className="max-w-6xl mx-auto text-center ">
                    <h2 className="fade-in">
                        Sobre Expansis
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 fade-in">
                        Conoce nuestra historia, valores y al equipo que lo hace posible.
                    </p>
                </div>

                {/* Contenido de la página */}
                <WhatIsExpansisPro />
                <MisionVision />
                <OurStory /> {/* <-- COMPONENTE AÑADIDO */}
                <AboutMe />

                <CallToAction />

            </section>
        </>
    );
};

export default QuienesSomos;