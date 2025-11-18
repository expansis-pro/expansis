import React from "react";

const Whatsapp = () => {
    // La lógica para generar el enlace es perfecta y no necesita cambios.
    const phoneNumber = "56965961086";
    const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Función para manejar el clic en el botón de WhatsApp
    const handleWhatsappClick = () => {
        // Verifica que gtag esté disponible antes de enviar el evento
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'click_whatsapp', { // Nombre del evento en snake_case para GA4
                event_category: 'Contacto', // Categoría del evento
                event_label: 'Boton Conversemos WhatsApp', // Etiqueta del evento
                link_url: whatsappLink // URL del enlace de WhatsApp
            });
        }


        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-TU_ID_DE_CONVERSION/TU_LABEL_WHATSAPP'
                // ↑↑↑ ¡IMPORTANTE! Reemplaza esto con tu otra etiqueta de conversión
            });
        }



    };

    return (
        // Contenedor de la sección, ahora transparente para mostrar el fondo global
        <section id="whatsapp" className="py-6 sm:py-6 ">
            {/* Contenedor tipo tarjeta para que el contenido destaque */}
            <div className="max-w-4xl mx-auto text-center  p-6 sm:p-12 rounded-xl shadow-2xl border-t-4 border-primario">

                {/* Título de la sección, ahora con texto oscuro */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    ¿Tienes una idea en mente?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Hablemos directamente por WhatsApp y démosle vida a tu proyecto.
                </p>

                {/* Botón de Llamada a la Acción (CTA) */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsappClick} // Añade el manejador de clic aquí
                    // --- CAMBIO REALIZADO: Eliminar 'gap-x-5' ---
                    className="block mx-auto max-w-xs sm:inline-flex items-center justify-center whitespace-nowrap bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg sm:text-xl py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    {/* Ícono de WhatsApp - Se añade 'mr-3' de nuevo para el espaciado */}
                    <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl mr-3"></i>

                    {/* Texto del botón */}
                    <span>Conversemos</span>
                </a>
            </div>
        </section>
    );
};

export default Whatsapp;
