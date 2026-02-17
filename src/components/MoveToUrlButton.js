import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente reutilizable para un botón de acción que navega a una URL específica.
 * Incluye el seguimiento de Google Analytics 4.
 *
 * @param {string} [url='/'] - La URL de destino a la que navegará el botón.
 * @param {string} [name='Botón'] - El texto que se mostrará en el botón.
 * @param {string} [category='General'] - Categoría del evento para GA4.
 * @param {string} [label] - Etiqueta del evento para GA4. Por defecto, incluirá el nombre del botón y la URL de destino.
 */
const MoveToUrlButton = ({ url = '/', name = 'Botón', category = 'General', label }) => {

    // Si no se proporciona una etiqueta personalizada, la construimos incluyendo el nombre del botón y la URL de destino.
    const finalLabel = label || `${name} a ${url}`;

    // Función para manejar el clic en el botón
    const handleButtonClick = () => {
        // Verifica que gtag esté disponible antes de enviar el evento
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'click_cta', { // Nombre del evento en snake_case para GA4
                event_category: category, // Categoría del evento, puede ser personalizada
                event_label: finalLabel // Etiqueta del evento, ahora incluye el nombre y la URL de destino por defecto
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto text-center py-6">
            <Link
                to={url} // Usa la prop 'url' para la URL de destino
                className="inline-block bg-primario text-white  py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105"
                onClick={handleButtonClick} // Añade el manejador de clic aquí
            >
                {name} {/* Usa la prop 'name' para el texto del botón */}
            </Link>
        </div>
    );
};

export default MoveToUrlButton;
