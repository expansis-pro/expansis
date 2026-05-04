// src/utils/trackingUtils.js
export const sendWhatsAppMessage = (servicio = "Información General") => {

    console.log("Boton Whatsapp Clickeado!");
    const phoneNumber = "56988318443";
    const frasesContexto = {
        "Desarrollo Web": "potenciar mi negocio con un *Desarrollo Web* a medida",
        "Marketing Digital": "mejorar mi visibilidad online con *Marketing Digital*",
        "Consultoría Digital": "agendar una *Consultoría Digital* para mi empresa",
        "Información General": "recibir información general sobre sus servicios"
    };

    const accionTexto = frasesContexto[servicio] || `saber más sobre el servicio de *${servicio}*`;

    const mensaje = `¡Hola Expansis Pro! \n\nMe gustaría ${accionTexto}.\n\n¿Podrían darme más detalles?`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

    // Centralizamos el tracking aquí para no olvidarlo nunca
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
        });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'disparo_whatsapp_manual',
            'servicio_consultado': servicio
        });
        console.log("✅ Señal enviada a DataLayer y Ads");
    }


    window.open(whatsappLink, '_blank');
};


export const trackFormConversion = () => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16965295721/mRlTCNr00sIbEOm815k_'
        });
        console.log("Evento de conversión de formulario enviado a Google Ads");
    }
};