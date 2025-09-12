// src/components/CtaButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils'; // Importamos la utilidad de scroll

const CtaButton = ({ children, to, scrollTo, variant = 'primary', category = 'General', label }) => {

    // Define estilos base y específicos para cada variante
    const baseClasses = "inline-block w-full sm:w-auto font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-center";
    const primaryClasses = "bg-primario text-white hover:bg-secundario";
    const secondaryClasses = "bg-transparent border-2 border-primario text-primario hover:bg-primario hover:text-white";

    const finalClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;

    // Función para el seguimiento de clics
    const handleAnalyticsClick = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'click_cta', {
                event_category: category,
                event_label: label || children,
            });
        }
    };

    // Si se proporciona la prop "scrollTo", renderiza un botón con la función de scroll
    if (scrollTo) {
        return (
            <button
                className={finalClasses}
                onClick={() => {
                    scrollToSection(scrollTo);
                    handleAnalyticsClick();
                }}
            >
                {children}
            </button>
        );
    }

    // De lo contrario, renderiza un Link para navegar a otra página
    return (
        <Link
            to={to}
            className={finalClasses}
            onClick={handleAnalyticsClick}
        >
            {children}
        </Link>
    );
};

export default CtaButton;