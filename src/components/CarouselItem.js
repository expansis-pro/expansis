// src/components/CarouselItem.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const CarouselItem = ({
    title,
    description,
    slug,
    category,
    titleTag: TitleTag = 'h3'
}) => {
    // 🌟 El fallback apunta al banner original por si acaso
    const imagePath = `/assets/images/${slug}-hero.webp`;

    const handleImgError = (e) => {
        e.target.style.display = 'none';
    };

    // 🌟 CORRECCIÓN ULTRA-LIMPIA: Las tarjetas leen directamente los nombres amigables
    const srcset = `
        /assets/images/${slug}-sm.webp 600w,
        /assets/images/${slug}-md.webp 800w,
        /assets/images/${slug}-lg.webp 1200w
    `;

    return (
        <NavLink
            to={`/servicios/${slug}`}
            className="block w-full h-[450px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-100 transition-all duration-300 group text-left"
        >
            {/* Contenedor de Imagen con Efecto Zoom */}
            <div className="w-full h-44 overflow-hidden bg-gray-50 relative">
                <img
                    src={imagePath}
                    alt={`Especialidad en ${title} | Expansis Pro`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={handleImgError}
                    srcSet={srcset}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {category && (
                    <span className="absolute top-4 left-4 bg-deepBlue/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {category}
                    </span>
                )}
            </div>

            {/* Bloque de Texto y Enfoque de Servicio */}
            <div className="p-6 flex flex-col h-[274px] justify-between">
                <div>
                    <TitleTag className="text-deepBlue text-xl font-bold mb-3 leading-snug group-hover:text-primario transition-colors duration-300">
                        {title}
                    </TitleTag>
                    <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>

                <div className="inline-flex items-center text-gray-400 font-bold text-xs uppercase tracking-wildest group-hover:text-primario transition-colors duration-300">
                    <span className="border-b border-transparent group-hover:border-primario pb-0.5 transition-all duration-300">
                        Saber más sobre {title}
                    </span>
                    <svg
                        className="w-3.5 h-3.5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </NavLink>
    );
};

export default CarouselItem;