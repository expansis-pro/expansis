// src/components/VideoViewport.js
import React, { useRef, useEffect } from 'react';

export default function VideoViewport({ src, className = "" }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // El observador activa el video solo cuando asoma en la pantalla
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.2 } // Se activa cuando se ve el 20% del video
        );

        observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <video
                ref={videoRef}
                src={src}
                loop          // Bucle infinito sin cortes comerciales
                muted         // Requisito obligatorio para que Google/Safari permitan autoplay
                playsInline   // Evita que los iPhones fuercen la pantalla completa nativa
                preload="none" // No gasta datos hasta que el usuario llega a la sección
                className="w-full h-full object-cover"
            />
        </div>
    );
}