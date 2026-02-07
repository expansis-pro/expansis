// src/components/CallToAction.js
import React from 'react';
import CtaButton from './CtaButton';

const CallToAction = ({ title, description }) => {
    const phoneNumber = "56965961086";
    const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const handleWhatsappClick = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
            });
        }
    };

    return (
        <section id="call-to-action" className="py-12 bg-white">
            {/* Contenedor principal con fondo DeepBlue y bordes muy redondeados como en Figma */}
            <div className="max-w-6xl mx-auto bg-deepBlue text-ghostWhite p-12 sm:p-20 rounded-[3rem] shadow-2xl text-center">

                {/* Título: El tamaño y peso vienen del h2 en index.css. Forzamos color para fondo oscuro. */}
                <h2 className="text-ghostWhite">
                    {title || '¿Listo para expandir tu negocio?'}
                </h2>

                {/* Descripción: Hereda font-light del body. Usamos opacidad para jerarquía visual. */}
                <p className="text-ghostWhite/80 mb-12 max-w-2xl mx-auto">
                    {description || 'Hablemos de tu proyecto. Elige la opción que más te acomode.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Botón WhatsApp: Naranja sólido */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsappClick}
                        className="inline-block w-full sm:w-auto bg-primario text-ghostWhite py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 text-center shadow-lg"
                    >
                        Hablemos por WhatsApp
                    </a>

                    {/* Botón Mensaje: Variante Secundaria (Borde blanco sobre fondo oscuro) */}
                    <CtaButton
                        to="/contacto"
                        variant="secondary"
                        className="border-2 border-ghostWhite text-ghostWhite bg-transparent hover:bg-ghostWhite hover:text-deepBlue px-10 py-4 rounded-xl shadow-none"
                    >
                        Envíanos un Mensaje
                    </CtaButton>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;