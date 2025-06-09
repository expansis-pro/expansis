// src/components/FaqItem.js
import React from 'react';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        // Contenedor de cada item del FAQ con un borde inferior.
        <div className="border-b border-gray-200 py-4">
            {/* Contenedor de la pregunta, que es clickeable. */}
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center text-left focus:outline-none"
            >
                {/* Texto de la pregunta */}
                <span className="text-lg font-medium text-gray-800">{question}</span>

                {/* Ícono que rota basado en el estado 'isOpen'. */}
                <span className="ml-6 flex-shrink-0">
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            {/* Contenedor de la respuesta:
        - La magia de la animación ocurre aquí.
        - `grid`: Permite que la altura se anime de 0 a su contenido.
        - `transition-all duration-500 ease-in-out`: Define la animación.
        - Si está cerrado (`!isOpen`), la altura es 0 (`grid-rows-[0fr] opacity-0`).
        - Si está abierto (`isOpen`), la altura se ajusta al contenido (`grid-rows-[1fr] opacity-100`).
      */}
            <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    {/* El contenido de la respuesta con padding y estilos de texto. */}
                    <div className="pt-2 pb-4 text-gray-600 text-left">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;