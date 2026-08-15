'use client';
import React, { useState, useRef, useEffect } from 'react';
export default function LoomLazyEmbed({ videoId, className = "" }) {
    const [shouldLoad, setShouldLoad] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.unobserve(container);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(container);

        return () => {
            if (container) observer.unobserve(container);
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden bg-deepBlue/5 ${className}`}>
            {shouldLoad ? (
                <iframe
                    src={`https://www.loom.com/embed/${videoId}?autoplay=1&muted=1&hide_owner=true&hide_share=true&hide_title=true&hide_embed_top_bar=true`}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                    className="absolute top-0 left-0 w-full h-full"
                    title="Demostración de Oficina Digital Expansis Pro"
                />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-deepBlue/40 text-xs font-medium p-4 text-center">
                    <div className="animate-pulse mb-2">⚡</div>
                    Cargando demostración de la infraestructura...
                </div>
            )}
        </div>
    );
}