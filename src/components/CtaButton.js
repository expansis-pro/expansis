// src/components/CtaButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';

const CtaButton = ({ children, to, scrollTo, variant = 'primary', className = "", onClick }) => {

    // 1. Mapeamos las variantes a tus clases de index.css
    const variantStyles = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline"
    };

    // 2. Definimos la clase de la variante elegida
    const selectedVariant = variantStyles[variant] || variantStyles.primary;
    const finalClasses = `${selectedVariant} ${className}`;

    if (scrollTo) {
        return (
            <button
                className={finalClasses}
                onClick={(e) => {
                    if (onClick) onClick(e);
                    scrollToSection(scrollTo);
                }}
            >
                {children}
            </button>
        );
    }

    // Aseguramos que siempre haya un destino para el Link y pasamos el onClick
    return (
        <Link to={to || "/"} className={finalClasses} onClick={onClick}>
            {children}
        </Link>
    );
};

export default CtaButton;