// src/components/Whatsapp.js
import React from "react";

const Whatsapp = () => {
    // La lógica para generar el enlace es perfecta y no necesita cambios.
    const phoneNumber = "56965961086"; // No es necesario el '+' para el enlace wa.me
    const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        // Contenedor de la sección con un fondo verde distintivo y padding.
        <section id="whatsapp" className="bg-[#25D366] text-white py-62 sm:py-6">
            <div className="max-w-4xl mx-auto text-center px-4">

                {/* Título de la sección */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Conversemos por WhatsApp
                </h2>

                {/* Botón de Llamada a la Acción (CTA) */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Estilos del botón:
                    // - `inline-flex items-center`: Para alinear el ícono y el texto.
                    // - `bg-white text-gray-800`: Colores que contrastan con el fondo verde.
                    // - `font-bold text-lg sm:text-xl`: Tamaño de fuente.
                    // - `py-3 px-8`: Padding.
                    // - `rounded-full shadow-lg`: Bordes completamente redondeados y sombra.
                    // - `transition-transform transform hover:scale-105`: Animación al pasar el mouse.
                    className="inline-flex items-center justify-center bg-white text-gray-800 font-bold text-lg sm:text-xl py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    {/* Ícono de WhatsApp */}
                    <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl mr-3"></i>

                    {/* Texto del botón */}
                    <span>Click aquí</span>
                </a>
            </div>
        </section>
    );
};

export default Whatsapp;