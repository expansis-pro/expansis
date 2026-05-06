// src/components/CtaButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';

const CtaButton = ({ children, to, scrollTo, variant = 'primary', className = "" }) => {

    // 1. Mapeamos las variantes a tus clases de index.css
    const variantStyles = {
        primary: "btn-primary",
        secondary: "btn-secondary", // Ideal para fondos oscuros
        outline: "btn-outline"      // Ideal para fondos claros (borde azul)
    };

    // 2. Definimos la clase de la variante elegida (o primary por defecto)
    const selectedVariant = variantStyles[variant] || variantStyles.primary;

    // 3. AQUÍ ESTÁ EL TRUCO: Sumamos las clases (espacio de por medio)
    // En lugar de "O" (||), usamos una cadena que suma la variante + lo extra
    const finalClasses = `${selectedVariant} ${className}`;

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