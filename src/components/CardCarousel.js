import React, { useState, useRef } from 'react';

const CardCarousel = ({ children }) => {
    const [index, setIndex] = useState(0);
    const scrollRef = useRef(null);
    const totalItems = React.Children.count(children);

    // Monitorea el scroll nativo del dispositivo para encender los puntitos
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Evaluamos el cambio de tarjeta basado en el 80% del ancho visible
            const currentIndex = Math.round(scrollLeft / (clientWidth * 0.8));

            if (currentIndex !== index && currentIndex >= 0 && currentIndex < totalItems) {
                setIndex(currentIndex);
            }
        }
    };

    return (
        <div className="w-full py-2">
            {/* LA SOLUCIÓN MAESTRA:
              1. Eliminamos por completo Framer Motion de este componente (adiós saltos).
              2. Agregamos 'px-[10%]' directamente al contenedor de scroll. Esto genera un colchón 
                 simétrico del 10% a la izquierda y derecha de la pantalla.
              3. Como la tarjeta mide 'w-[80%]', encaja matemáticamente en el centro a la perfección.
            */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 py-6 no-scrollbar px-[5%] md:px-0 md:justify-center md:snap-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                `}} />

                {React.Children.map(children, (child, idx) => (
                    <div
                        key={idx}
                        // Cada tarjeta toma el 80% del ancho disponible y se imanta al centro
                        className="w-[100%] md:w-[350px] shrink-0 snap-center select-none"
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