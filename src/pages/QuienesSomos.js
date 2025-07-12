// src/pages/QuienesSomos.js
import React from 'react';
// 1. Importamos el componente Link
import { Link } from 'react-router-dom';


// Importamos los componentes que queremos mostrar
import About from './About';
import MisionVision from './MisionVision';
import AboutMe from './AboutMe';

const QuienesSomos = () => {
    return (
        <>
            {/* Metadatos para el SEO */}
            <title>Quiénes Somos - Expansis Pro</title>
            <meta name="description" content="Conoce la misión, visión y al equipo detrás de Expansis Pro. Soluciones digitales con un enfoque integral y personalizado." />
            <link rel="canonical" href="https://expansispro.com/quienes-somos" />

            <section id="quienes-somos" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in">
                        Quiénes Somos
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 fade-in">
                        Conoce nuestra historia, valores y al equipo que lo hace posible.
                    </p>
                </div>

                {/* Contenido de la página */}
                <About />
                <MisionVision />
                <AboutMe />

                {/* 2. Añadimos el botón de "Contáctanos" al final */}
                <div className="max-w-7xl mx-auto text-center mt-16">
                    <Link
                        to="/contacto"
                        className="inline-block bg-primario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105"
                    >
                        Contáctanos
                    </Link>
                </div>

            </section>
        </>
    );
};

export default QuienesSomos;