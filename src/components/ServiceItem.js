// src/components/ServiceItem.js
import React from 'react';
import CtaButton from './CtaButton';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";

    return (
        /* Añadimos 'flex-shrink-0' para que el carrusel no aplaste la card 
           y cambiamos el ancho para que sea consistente.
        */
        <div className="flex flex-col p-8 bg-deepBlue rounded-[2rem] shadow-xl w-[280px] md:w-80 min-h-[360px] my-4 snap-center text-left border border-gray-800 flex-shrink-0">

            {/* Header: Título e Icono */}
            {/* Usamos un gap-4 para asegurar separación física siempre */}
            <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-ghostWhite text-2xl leading-tight  flex-1">
                    {title}
                </h3>
                {/* El icono tiene flex-shrink-0 para que NUNCA se achique */}
                <div className="w-12 h-12 bg-primario rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primario/20">
                    <i className={`${icon} text-ghostWhite text-xl`}></i>
                </div>
            </div>

            {/* Descripción */}
            <p className="text-ghostWhite/80 text-base font-light leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            {/* Botón */}
            {isLink && (
                <div className="mt-auto">
                    <CtaButton
                        to={`/servicios/${slug}`}
                        variant="primary"
                        className="bg-primario text-ghostWhite px-10 py-3 rounded-xl border-none shadow-md hover:brightness-110 transition-all inline-block text-center w-full sm:w-auto"
                    >
                        Saber Más
                    </CtaButton>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;