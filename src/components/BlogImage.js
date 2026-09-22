'use client';

import React, { useState } from 'react';

export default function BlogImage({
    src,
    alt,
    className = "",
    containerClassName = "",
    priority = false,
    hideOnFallback = false // <--- Si es true, oculta la imagen y el contenedor si falla
}) {
    const [hasError, setHasError] = useState(false);

    // Si falló la imagen o no viene src:
    if (hasError || !src) {
        if (hideOnFallback) {
            return null; // No renderiza NADA (oculta el bloque)
        }

        // Respaldo genérico para el catálogo o Home
        return (
            <div className={`w-full h-full bg-deepBlue flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none ${className}`}>
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primario/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primario/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primario/10 border border-primario/30 flex items-center justify-center mb-1">
                        <i className="fa-solid fa-newspaper text-primario text-lg"></i>
                    </div>
                    <span className="text-ghostWhite font-extrabold text-lg sm:text-xl tracking-wider uppercase">
                        Expansis <span className="text-primario">Pro</span>
                    </span>
                    <span className="text-gray-400 text-xs font-light tracking-widest uppercase">
                        Blog &amp; Recursos Digitales
                    </span>
                </div>
            </div>
        );
    }

    const imageElement = (
        <img
            src={src}
            alt={alt || "Imagen de blog Expansis Pro"}
            className={className}
            loading={priority ? "eager" : "lazy"}
            onError={() => setHasError(true)}
        />
    );

    // Si se especificó un contenedor, lo envuelve
    if (containerClassName) {
        return <div className={containerClassName}>{imageElement}</div>;
    }

    return imageElement;
}