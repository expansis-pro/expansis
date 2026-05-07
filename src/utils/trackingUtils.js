// src/utils/whatsappUtils.js
export const sendWhatsAppMessage = (servicio = "Información General") => {
    const phoneNumber = "56988318443";
    const frasesContexto = {
        "Desarrollo Web": "potenciar mi negocio con un *Desarrollo Web* a medida",
        "Marketing Digital": "mejorar mi visibilidad online con *Marketing Digital*",
        "Consultoría Digital": "agendar una *Consultoría Digital* para mi empresa",
        "Información General": "recibir información general sobre sus servicios"
    };

    const accionTexto = frasesContexto[servicio] || `saber más sobre el servicio de *${servicio}*`;

    const mensaje = `¡Hola! \n\nMe gustaría ${accionTexto}.\n\n¿Podrían darme más detalles?`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

    // 1. Señal para GTM (Recomendado para eventos personalizados)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'disparo_whatsapp_manual',
        'servicio_seleccionado': servicio
    });

    // 2. Señal directa para Google Ads (Opcional, si tienes gtag.js cargado)
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
        });
    }

    console.log("🚀 Evento de WhatsApp enviado a GTM/Ads");
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
};


export const trackFormConversion = () => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16965295721/mRlTCNr00sIbEOm815k_'
        });
        console.log("Evento de conversión de formulario enviado a Google Ads");
    }
};