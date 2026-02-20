import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";

    // --- LÓGICA DE WHATSAPP ---
    const phoneNumber = "56965961086";
    const message = encodeURIComponent(`¡Hola! Me interesa el servicio de *${title}*. ¿Me podrías dar más información?`);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const handleWhatsappClick = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
            });
        }
    };

    return (
        /* Contenedor principal con altura mínima para consistencia visual */
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

            {/* --- BLOQUE DE ACCIÓN ESTANDARIZADO --- */}
            {isLink && (
                <div className="mt-auto flex flex-col gap-3 w-full">

                    {/* 1. Botón Principal: Usa la clase .btn-primary */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsappClick}
                        className="btn-primary w-full text-sm py-3"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        Contactar por WhatsApp
                    </a>

                    {/* 2. Botón Secundario: Usa la clase .btn-secondary */}
                    <Link
                        to={`/servicios/${slug}`}
                        className="btn-secondary w-full"
                    >
                        Ver detalles del servicio
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;