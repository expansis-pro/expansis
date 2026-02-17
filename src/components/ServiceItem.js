import React from 'react';
import CtaButton from './CtaButton';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";

    return (
        <div className="flex flex-col p-8 bg-deepBlue shadow-xl w-[280px] md:w-80 min-h-[360px] my-4 snap-center text-left border border-gray-800 flex-shrink-0 rounded-2xl overflow-hidden transition-all hover:border-gray-700">

            {/* Header: Título e Icono */}
            <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-ghostWhite text-2xl leading-tight flex-1 font-bold">
                    {title}
                </h3>

                <div className="w-12 h-12 bg-primario rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primario/20">
                    <i className={`${icon} text-ghostWhite text-xl`}></i>
                </div>
            </div>

            {/* Descripción */}
            <p className="text-ghostWhite/80 text-base font-light leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            {/* Botón Ensanchado */}
            {isLink && (
                <div className="mt-auto w-full">
                    <CtaButton
                        to={`/servicios/${slug}`}
                        variant="primary"
                        /* CAMBIOS:
                           1. Quitamos 'sm:w-auto' para que no se encoja en escritorio.
                           2. Mantenemos 'w-full' para que ocupe todo el ancho disponible.
                           3. 'block' en lugar de 'inline-block' para asegurar el comportamiento de bloque.
                        */
                        className="w-full block bg-primario text-ghostWhite py-3 rounded-xl border-none shadow-md hover:brightness-110 transition-all text-center font-bold"
                    >
                        Saber Más
                    </CtaButton>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;