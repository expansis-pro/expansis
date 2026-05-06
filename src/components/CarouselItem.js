// src/components/CarouselItem.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const CarouselItem = ({ title, description, image, slug, category }) => {
    // Construimos la ruta de la imagen siguiendo tu convención del Hero
    const imagePath = `/assets/${slug}-hero.webp`;
    // Función de seguridad: Si la imagen falla, la ocultamos para ver el fondo sólido
    const handleImgError = (e) => {
        e.target.style.display = 'none';
    };


    return (
        <NavLink
            to={`/servicios/${slug}`}
            className="flex-shrink-0 w-[300px] md:w-[350px] h-[450px] relative rounded-3xl overflow-hidden shadow-lg group snap-center border border-white/10 block transition-transform duration-300 active:scale-95"
        >
            {/* Imagen de Fondo */}
            <img
                src={imagePath}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={handleImgError}
            />

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-deepBlue via-deepBlue/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Contenido */}
            <div className="relative z-20 h-full p-8 flex flex-col justify-end text-left">
                {category && (
                    <span className="mb-4 self-start bg-primario text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {category}
                    </span>
                )}

                <h3 className="text-white text-2xl font-bold mb-2 leading-tight group-hover:text-primario transition-colors">
                    {title}
                </h3>

                {/* 2. Lógica responsiva para el texto:
                    Visible por defecto (opacity-100) en mobile.
                    Oculto (md:opacity-0) y aparece en hover (md:group-hover:opacity-100) en desktop.
                */}
                <p className="text-gray-200 text-sm font-light leading-relaxed mb-6 
                    line-clamp-3 transition-all duration-500
                    opacity-100 translate-y-0
                    md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                >
                    {description}
                </p>

                <NavLink
                    to={`/servicios/${slug}`}
                    className="inline-flex items-center text-white font-bold text-xs uppercase tracking-widest group-hover:text-primario transition-colors"
                >
                    Saber más <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-2"></i>
                </NavLink>
            </div>
        </NavLink>
    );
};

export default CarouselItem; // <--- CRÍTICO: Exportar el componente