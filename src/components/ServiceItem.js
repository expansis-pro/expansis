import React from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../utils/trackingUtils';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isPhilosophy = slug === "mision" || slug === "vision";
    const isLink = !isPhilosophy;


    return (
        <div className={`
            flex flex-col bg-deepBlue shadow-xl border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 group
            /* Control de Ancho y Alto: Relativo para Filosofía, Fijo para Servicios */
            ${isPhilosophy
                ? 'w-full md:flex-1 min-h-[320px] p-10 md:p-14'
                : 'w-[280px] md:w-80 min-h-[440px] p-8 flex-shrink-0'
            }
        `}>

            {/* Header: Título e Icono */}
            <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-left text-ghostWhite text-2xl leading-tight flex-1 font-bold">
                    {title}
                </h3>
                <div className="w-12 h-12 bg-primario rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primario/20">
                    <i className={`${icon} text-ghostWhite text-xl`}></i>
                </div>
            </div>

            {/* Descripción */}
            <p className={`text-left text-ghostWhite/80 font-light leading-relaxed ${isPhilosophy ? 'text-lg' : 'text-base mb-8 flex-grow'}`}>
                {description}
            </p>

            {/* BLOQUE DE ACCIÓN ESTANDARIZADO */}
            {isLink && (
                <div className="mt-auto flex flex-col gap-3 w-full">
                    {/* Botón WhatsApp: Ahora solo llama a la función con el nombre del servicio */}
                    <button
                        onClick={() => trackWhatsAppClick('service_item', title)}
                        className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        Conversemos
                    </button>

                    <Link
                        to={`/servicios/${slug}`}
                        className="btn-secondary w-full text-center"
                    >
                        Ver más
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;