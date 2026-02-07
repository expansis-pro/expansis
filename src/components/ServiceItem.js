// src/components/ServiceItem.js
import React from 'react';
import CtaButton from './CtaButton';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";

    return (
        <div className="flex flex-col p-8 bg-deepBlue rounded-[2rem] shadow-xl w-72 md:w-80 min-h-[300px] my-4 snap-center text-left border border-gray-800">
            {/* Header: Título e Icono */}
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-ghostWhite text-2xl leading-tight max-w-[150px] font-bold">
                    {title}
                </h3>
                <div className="w-12 h-12 bg-primario rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${icon} text-ghostWhite text-xl`}></i>
                </div>
            </div>

            {/* Descripción */}
            <p className="text-ghostWhite/80 text-base font-light leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            {/* Botón: Ahora con variant primary para forzar el naranja */}
            {isLink && (
                <div className="mt-auto">
                    <CtaButton
                        to={`/servicios/${slug}`}
                        variant="primary"
                        className="bg-primario text-ghostWhite px-10 py-3 rounded-xl border-none shadow-md hover:brightness-110"
                    >
                        Saber Más
                    </CtaButton>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;