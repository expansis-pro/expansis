import React from 'react';
import CtaButton from './CtaButton';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";

    // --- LÓGICA DE WHATSAPP ---
    const phoneNumber = "56965961086";
    // Usamos el 'title' del servicio para que el mensaje sea único
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

            {/* Botón Ensanchado hacia WhatsApp */}
            {isLink && (
                <div className="mt-auto w-full">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsappClick}
                        className="w-full block bg-primario text-ghostWhite py-3 rounded-xl border-none shadow-md hover:brightness-110 transition-all text-center font-bold"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;