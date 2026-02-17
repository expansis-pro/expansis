import React from "react";

const Whatsapp = () => {
    const phoneNumber = "56965961086";
    const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Función para manejar el clic en el botón de WhatsApp
    const handleWhatsappClick = () => {


        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
            });
        }
    };

    return (
        <section id="whatsapp" className="py-6 sm:py-6 ">
            <div className="max-w-4xl mx-auto text-center  p-6 sm:p-12 rounded-xl shadow-2xl border-t-4 border-primario">

                <h2 className="text-3xl sm:text-4xl  text-gray-900 mb-4">
                    ¿Tienes una idea en mente?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Hablemos directamente por WhatsApp y démosle vida a tu proyecto.
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsappClick}
                    className="block mx-auto max-w-xs sm:inline-flex items-center justify-center whitespace-nowrap bg-[#25D366] hover:bg-[#128C7E] text-white  text-lg sm:text-xl py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl mr-3"></i>
                    <span>Conversemos</span>
                </a>
            </div>
        </section>
    );
};

export default Whatsapp;