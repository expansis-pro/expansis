import React from 'react';
import CtaButton from './CtaButton';

// Añadimos 'source' a las props, con un valor por defecto
const CallToAction = ({ title, description, source = "CTA Principal" }) => {
    const phoneNumber = "56965961086";

    // El mensaje ahora incluye la variable 'source'
    // Usamos asteriscos (*) para que en WhatsApp la palabra salga en negrita
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
            <div className="mx-6 md:max-w-6xl md:mx-auto bg-deepBlue text-ghostWhite p-10 md:p-20 rounded-[2.5rem] shadow-2xl text-center">

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
                        className="inline-block w-full sm:w-auto bg-primario text-ghostWhite py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 text-center shadow-lg"
                    >
                        Hablemos por WhatsApp
                    </a>

                    <CtaButton
                        to="/contacto"
                        variant="secondary"
                        className="w-full sm:w-auto border-2 border-ghostWhite text-ghostWhite bg-transparent hover:bg-ghostWhite hover:text-deepBlue px-10 py-4 rounded-xl shadow-none"
                    >
                        Envíanos un Mensaje
                    </CtaButton>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;