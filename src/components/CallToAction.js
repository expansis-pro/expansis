import React from 'react';
import CtaButton from './CtaButton';
// 1. Importamos la utilidad
import { sendWhatsAppMessage } from '../utils/trackingUtils';

// Añadimos serviceName a las props (con "Información General" por defecto)
const CallToAction = ({ title, description, serviceName = "Información General" }) => {

    // 2. Eliminamos toda la lógica de construcción de links y tracking local
    // ya que ahora la gestiona whatsappUtils.js

    return (
        <section id="call-to-action" className="py-12 md:py-20 bg-white">
            <div className="md:max-w-6xl md:mx-auto bg-deepBlue text-ghostWhite px-6 py-12 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-center">

                <h2 className="text-ghostWhite mb-6">
                    {title || '¿Listo para expandir tu negocio?'}
                </h2>

                <p className="text-ghostWhite/80 mb-12 max-w-2xl mx-auto">
                    {description || 'Hablemos de tu proyecto. Elige la opción que más te acomode.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* 3. Reemplazamos el <a> por un <button> que llama a la utilidad */}
                    <button
                        onClick={() => sendWhatsAppMessage(serviceName)}
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
        </section>
    );
};

export default CallToAction;