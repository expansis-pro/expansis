// src/components/CarouselItem.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const CarouselItem = ({
    title,
    description,
    slug,
    category,
    titleTag: TitleTag = 'h3' // <--- Por defecto es h3
}) => {
    const imagePath = `/assets/${slug}-hero.webp`;

    const handleImgError = (e) => {
        e.target.style.display = 'none';
    };
    const srcset = `
    /assets/${slug}-sm.webp 600w,
    /assets/${slug}-md.webp 800w,
    /assets/${slug}-lg.webp 1200w
  `;

    return (
        <NavLink
            to={`/servicios/${slug}`}
            className="flex-shrink-0 w-[300px] md:w-[350px] h-[450px] relative rounded-3xl overflow-hidden shadow-lg group snap-center border border-white/10 block transition-transform duration-300 active:scale-95"
        >
            {/* Imagen de Fondo */}
            <img
                src={imagePath}
                alt={`Especialidad en ${title} | Expansis Pro`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={handleImgError}
                srcSet={srcset}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                {/* USAMOS EL TAG DINÁMICO AQUÍ */}
                <TitleTag className="text-white text-2xl font-bold mb-2 leading-tight group-hover:text-primario transition-colors">
                    {title}
                </TitleTag>

                {/* 2. Lógica responsiva para el texto:
                    Visible por defecto (opacity-100) en mobile.
                    Oculto (md:opacity-0) y aparece en hover (md:group-hover:opacity-100) en desktop.
                */}
                <p className="text-gray-200 text-sm font-light leading-relaxed mb-6 
                    line-clamp-3 transition-all duration-500
                   translate-y-0
                     md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0"
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