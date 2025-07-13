import React from 'react';
import { Link } from 'react-router-dom';

// Importamos los componentes que queremos mostrar
import About from './About';
import MisionVision from './MisionVision';
import AboutMe from './AboutMe';
import MoveToUrlButton from '../components/MoveToUrlButton';

const QuienesSomos = () => {

    // Función para manejar el clic en el botón "Contáctanos"
    const handleContactButtonClick = () => {
        // Verifica que gtag esté disponible antes de enviar el evento
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'click_cta', { // Nombre del evento en snake_case para GA4
                event_category: 'Quienes Somos', // Categoría del evento
                event_label: 'Boton Contactanos' // Etiqueta del evento
            });
        }
    };

    return (
        <>
            {/* Metadatos para el SEO */}
            <title>Sobre Expansis - Expansis Pro</title>
            <meta name="description" content="Conoce la misión, visión y al equipo detrás de Expansis Pro. Soluciones digitales con un enfoque integral y personalizado." />
            <link rel="canonical" href="https://expansispro.com/quienes-somos" />

            <section id="quienes-somos" className="bg-gray-50 py-6 sm:py-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in">
                        Sobre Expansis
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 fade-in">
                        Conoce nuestra historia, valores y al equipo que lo hace posible.
                    </p>
                </div>

                {/* Contenido de la página */}
                <About />
                <MisionVision />
                <AboutMe />

                <MoveToUrlButton name="Contáctanos" url="/contacto" />


            </section>
        </>
    );
};

export default QuienesSomos;
