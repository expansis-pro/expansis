// src/components/CardCarousel.js
import React, { useState, useRef } from 'react';

const CardCarousel = ({ children }) => {
    const [index, setIndex] = useState(0);
    const scrollRef = useRef(null);
    const totalItems = React.Children.count(children);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const currentIndex = Math.round(scrollLeft / (clientWidth * 0.85));

            if (currentIndex !== index && currentIndex >= 0 && currentIndex < totalItems) {
                setIndex(currentIndex);
            }
        }
    };

    return (
        <div className="w-full py-2">
            {/* 🛠️ INGENIERÍA DE DISEÑO RESPONSIVO DE ALTA GAMA:
              - Móvil/Tablet (px-0): Forzamos un padding de 0 pixeles laterales. Las tarjetas tocarán 
                exactamente el borde de la pantalla permitiendo un deslizamiento infinito y limpio de borde a borde.
              - Desktop (md:max-w-7xl md:mx-auto...): En lugar de romper el componente con wrappers externos, inyectamos
                los mismos parámetros exactos de tu clase maestra '.container-pro' directamente a partir del breakpoint md.
                Esto asegura que en laptops y notebooks la grilla se centre y mantenga márgenes seguros sin tocar los bordes.
            */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 py-6 no-scrollbar px-0 md:max-w-7xl md:mx-auto md:px-6 lg:px-8 md:overflow-x-visible md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                `}} />

                {React.Children.map(children, (child, idx) => (
                    <div
                        key={idx}
                        /* Mantenemos w-[85%] en móvil combinado con el px-0 de arriba: 
                           La primera tarjeta se pegará al borde izquierdo, y la siguiente asomará un 15% 
                           en el borde derecho de manera perfecta, invitando nativamente al usuario a deslizar.
                        */
                        className="w-[85%] sm:w-[47%] md:w-full shrink-0 snap-center select-none"
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* --- INDICADORES (PUNTITOS) --- */}
            <div className="mt-2 flex justify-center items-center gap-2 md:hidden">
                {Array.from({ length: totalItems }).map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === index ? 'w-8 bg-primario' : 'w-2 bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;