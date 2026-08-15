'use client';

import React from 'react';
import Link from 'next/link'; // 👈 Reemplazo de react-router-dom
import { scrollToSection } from '@/utils/scrollUtils';

const CtaButton = ({ children, to, scrollTo, variant = 'primary', className = "", onClick }) => {
    const variantStyles = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline"
    };

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

    return (
        <Link href={to || "/"} className={finalClasses} onClick={onClick}>
            {children}
        </Link>
    );
};

export default CtaButton;