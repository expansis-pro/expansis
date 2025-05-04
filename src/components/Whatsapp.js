import React from "react";


const Whatsapp = () => {
    // Número de teléfono con código de país (sin símbolos)
    const phoneNumber = "+56965961086";
    // Mensaje prediseñado (codificado para URL)
    const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
    // Construir el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className="section whatsapp-section">
            <h2>Conversemos por Whatsapp</h2>
            <a
                href={whatsappLink}
                target="_blank" // Abre el enlace en una nueva pestaña
                rel="noopener noreferrer" // Recomendado por seguridad al usar target="_blank"
                className='cta-button cta-button-whatsapp'
            >

                <i className="fa-brands fa-whatsapp"></i> Iniciar chat

            </a>
        </section>
    );
};

export default Whatsapp;