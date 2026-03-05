import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // <-- Se añadió motion y AnimatePresence

const CardCarousel = ({ children }) => {
    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    // Función para revisar la posición del scroll
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft === 0);
            // Se añade un pequeño margen de 1px por si hay decimales en los cálculos del navegador
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        }
    };

    // Revisa la posición del scroll cada vez que el carrusel se mueva
    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            // Revisa la posición inicial y cada vez que cambia el tamaño o los hijos
            checkScrollPosition();
            currentRef.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, [children]); // Se ejecuta si los hijos del carrusel cambian

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 280 * direction;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 px-4 py-12 md:flex-wrap md:justify-center md:gap-6 md:space-x-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
                {children}
            </div>

            {/* --- BOTONES ANIMADOS --- */}
            <AnimatePresence>
                {!isAtStart && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => scroll(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 shadow-md md:hidden flex items-center justify-center text-xl"
                        aria-label="Anterior"
                    >
                        &#8249;
                    </motion.button>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {!isAtEnd && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => scroll(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 shadow-md md:hidden flex items-center justify-center text-xl"
                        aria-label="Siguiente"
                    >
                        &#8250;
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CardCarousel;