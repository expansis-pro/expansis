import React from 'react';
import { Link } from 'react-router-dom';
// Importamos la lógica centralizada
import { sendWhatsAppMessage } from '../utils/trackingUtils';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";

    return (
        <div className="flex flex-col p-8 bg-deepBlue shadow-xl w-[280px] md:w-80 min-h-[440px] my-4 snap-center text-left border border-gray-800 flex-shrink-0 rounded-2xl overflow-hidden transition-all hover:border-gray-700">

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

            {/* BLOQUE DE ACCIÓN ESTANDARIZADO */}
            {isLink && (
                <div className="mt-auto flex flex-col gap-3 w-full">
                    {/* Botón WhatsApp: Ahora solo llama a la función con el nombre del servicio */}
                    <button
                        onClick={() => sendWhatsAppMessage(title)}
                        className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        Contactar por WhatsApp
                    </button>

                    <Link
                        to={`/servicios/${slug}`}
                        className="btn-secondary w-full text-center"
                    >
                        Ver detalles del servicio
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;