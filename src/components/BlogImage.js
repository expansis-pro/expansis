'use client';

import React, { useState, useEffect } from 'react';

export default function BlogImage({
    src,
    alt,
    className = "",
    containerClassName = "",
    priority = false,
    hideOnFallback = false
}) {
    const [hasError, setHasError] = useState(false);

    // Resetea el estado de error al cambiar la fuente (src)
    useEffect(() => {
        setHasError(false);
    }, [src]);

    // Si hay error de carga o src no existe, muestra el Fallback Genérico
    if (hasError || !src) {
        if (hideOnFallback) return null;

        return (
            <div className={`w-full h-full bg-deepBlue flex flex-col items-center justify-center p-4 text-center relative overflow-hidden select-none ${className}`}>
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-primario/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-primario/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 w-full h-full">
                    <div className="w-8 h-8 rounded-lg bg-primario/10 border border-primario/30 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-newspaper text-primario text-sm"></i>
                    </div>
                    <span className="text-ghostWhite text-xs font-bold tracking-wider leading-tight">
                        Expansis <span className="text-primario">Pro</span>
                    </span>
                    <span className="text-gray-400 text-[10px] font-light tracking-wider truncate max-w-[90%]">
                        Blog &amp; Recursos
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

    if (containerClassName) {
        return <div className={containerClassName}>{imageElement}</div>;
    }

    return imageElement;
}