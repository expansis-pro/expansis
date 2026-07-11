// src/components/CallToAction.js
import React from 'react';
import CtaButton from './CtaButton';
// Importamos la utilidad de WhatsApp existente
import { trackWhatsAppClick } from '../utils/trackingUtils';

// Añadimos 'source' a las props para capturar dinámicamente la ubicación exacta
const CallToAction = ({ title, description, serviceName = "Información General", source }) => {

    // 🟢 TELEMETRÍA EXCLUSIVA INTENCIÓN FORMULARIO
    const handleContactClick = () => {
        // Si se pasa un 'source' (ej: "FAQs - Final de Página"), lo usamos; si no, cae en el genérico
        const cleanLocation = source ? `cta_block_${source.toLowerCase().replace(/ /g, '_')}` : 'cta_block_generic';

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'click_contacto_manual',
            'servicio_seleccionado': serviceName,
            'click_location': cleanLocation,
            'page_url': window.location.href
        });

        if (typeof window.fbq === 'function') {
            window.fbq('track', 'FindLocation', {
                content_name: 'Intención de Formulario',
                content_category: serviceName,
                predicted_availability: cleanLocation
            });
        }
    };

    // Dinamizamos también la ubicación de WhatsApp basándonos en el origen
    const whatsAppLocation = source ? `cta_block_${source.toLowerCase().replace(/ /g, '_')}` : 'cta_block';

    return (
        <section id="call-to-action" className=" section-padding ">
            <div className="container-pro">

                <div className="bg-deepBlue text-ghostWhite px-8 py-12 md:p-20 rounded-3xl shadow-2xl text-center overflow-hidden relative">

                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primario/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10">

                        <h2 className="text-ghostWhite mb-6 text-3xl md:text-5xl">
                            {title || '¿Listo para expandir tu negocio?'}
                        </h2>

                        <p className="text-ghostWhite/80 mb-12 max-w-2xl mx-auto">
                            {description || 'Hablemos de tu proyecto. Elige la opción que más te acomode.'}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            {/* Botón 1: WhatsApp (Llama a la utilidad global con ubicación dinámica) */}
                            <button
                                onClick={() => trackWhatsAppClick(whatsAppLocation, serviceName)}
                                className="btn-primary w-full sm:w-auto"
                            >
                                <i className="fa-brands fa-whatsapp text-2xl"></i>
                                Hablemos por WhatsApp
                            </button>

                            {/* Botón 2: Formulario de Contacto (Gatilla handleContactClick al hacer clic) */}
                            <CtaButton
                                to="/contacto"
                                variant="secondary"
                                className="w-full sm:w-auto"
                                onClick={handleContactClick}
                            >
                                Envíanos un Mensaje
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;