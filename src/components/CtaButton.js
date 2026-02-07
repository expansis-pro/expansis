// src/components/CtaButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';

const CtaButton = ({ children, to, scrollTo, variant = 'primary', className = "" }) => {
    // 1. Estilos base compartidos (sin colores ni bordes fijos)
    const baseClasses = "inline-block transition-all duration-300 transform hover:scale-105 text-center cursor-pointer";

    // 2. Si NO hay className externo, usamos estos por defecto
    const defaultVariantClasses = variant === 'primary'
        ? "bg-primario text-ghostWhite px-8 py-3 rounded-lg shadow-lg"
        : "border-2 border-deepBlue text-deepBlue px-8 py-3 rounded-lg bg-white";

    // 3. Prioridad: baseClasses + (className externo O defaultVariantClasses)
    const finalClasses = `${baseClasses} ${className || defaultVariantClasses}`;

    if (scrollTo) {
        return (
            <button className={finalClasses} onClick={() => scrollToSection(scrollTo)}>
                {children}
            </button>
        );
    }

    // Aseguramos que siempre haya un destino para el Link
    return (
        <Link to={to || "/"} className={finalClasses}>
            {children}
        </Link>
    );
};

export default CtaButton;