import React from 'react';
import CtaButton from './CtaButton';
// 1. Importamos la utilidad
import { trackWhatsAppClick } from '../utils/trackingUtils';

// Añadimos serviceName a las props (con "Información General" por defecto)
const CallToAction = ({ title, description, serviceName = "Información General" }) => {

    // 2. Eliminamos toda la lógica de construcción de links y tracking local
    // ya que ahora la gestiona whatsappUtils.js

    return (
        <section id="call-to-action" className="max-w-4xl mx-auto section-padding ">
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
                            {/* 3. Reemplazamos el <a> por un <button> que llama a la utilidad */}
                            <button
                                onClick={() => trackWhatsAppClick('cta_block', serviceName)}
                                className="btn-primary w-full sm:w-auto"
                            >
                                <i className="fa-brands fa-whatsapp text-2xl"></i>
                                Hablemos por WhatsApp
                            </button>

                            <CtaButton
                                to="/contacto"
                                variant="secondary"
                                className="btn-secondary w-full sm:w-auto"
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