// src/components/PhaseItem.js
import React from 'react';

const PhaseItem = ({ number, title, description, isOpen, onToggle, isLast }) => {
    return (
        <div className="relative flex gap-6 md:gap-10">
            {/* LÍNEA Y NÚMERO (Columna Izquierda) */}
            <div className="flex flex-col items-center">
                {/* Círculo con Número */}
                <button
                    onClick={onToggle}
                    className={`z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-500 ${isOpen
                            ? 'bg-primario border-primario text-white shadow-[0_0_15px_rgba(242,116,5,0.4)] scale-110'
                            : 'bg-white border-gray-200 text-gray-400 hover:border-primario/50'
                        }`}
                >
                    {number}
                </button>

                {/* Línea Conectora */}
                {!isLast && (
                    <div className={`w-0.5 flex-grow my-2 transition-colors duration-500 ${isOpen ? 'bg-primario' : 'bg-gray-100'
                        }`}></div>
                )}
            </div>

            {/* CONTENIDO (Columna Derecha) */}
            <div className="flex-grow pb-12">
                <div
                    onClick={onToggle}
                    className={`cursor-pointer transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                        }`}
                >
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-deepBlue' : 'text-gray-500'
                        }`}>
                        {title}
                    </h3>
                </div>

                {/* Contenido Desplegable */}
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}>
                    <div className="overflow-hidden">
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <p
                                className="text-gray-600 font-light leading-relaxed text-lg"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhaseItem;