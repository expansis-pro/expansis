import React from 'react';
import CtaButton from './CtaButton';

const CallToAction = ({ title, description, source = "CTA Principal" }) => {
    const phoneNumber = "56965961086";

    const message = encodeURIComponent(
        `¡Hola! Vengo de la sección *${source}* y quiero descubrir cómo Expansis Pro puede ayudarme.`
    );

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const handleWhatsappClick = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
            });
        }
    };

    return (
        <section id="call-to-action" className="py-12 md:py-20 bg-white">
            {/* CAMBIOS:
               1. mx-4: Más espacio para el contenido en mobile.
               2. px-6 py-12: Padding interno equilibrado (menos a los lados, suficiente arriba/abajo).
               3. rounded-[2rem]: Un radio un poco más contenido para que no "muerda" el texto en las esquinas.
            */}
            <div className="md:max-w-6xl md:mx-auto bg-deepBlue text-ghostWhite px-6 py-12 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-center">

                <h2 className="text-ghostWhite mb-6">
                    {title || '¿Listo para expandir tu negocio?'}
                </h2>

                <p className="text-ghostWhite/80 mb-12 max-w-2xl mx-auto">
                    {description || 'Hablemos de tu proyecto. Elige la opción que más te acomode.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsappClick}
                        className="btn-primary w-full sm:w-auto"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        Hablemos por WhatsApp
                    </a>

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