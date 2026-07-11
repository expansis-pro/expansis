// src/utils/trackingUtils.js

// ==========================================
// 1. FUNCIONES BASE (Lógica de conversión)
// ==========================================

/**
 * Abre WhatsApp con un mensaje personalizado y envía señales a GTM y Google Ads.
 */
const sendWhatsAppMessageBase = (servicio = "Información General", metadata = {}) => {
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

    // Señal para Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'disparo_whatsapp_manual',
        'servicio_seleccionado': servicio,
        ...metadata
    });

    // Señal directa para Google Ads
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_',
            ...metadata
        });
    }

    // 3. NUEVO: Señal directa para el Píxel de Meta (Evento Contactar)
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', {
            content_category: 'WhatsApp',
            content_name: servicio,
            predicted_availability: metadata.click_location
        });
    }

    console.log("🚀 Eventos de WhatsApp enviados a Google y Meta con metadata:", metadata);
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
};

/**
 * Envía la conversión de formulario a GTM y Google Ads.
 */
const trackFormConversionBase = (formName = "Formulario General", metadata = {}) => {
    // Señal para Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'disparo_formulario_manual',
        'form_name': formName,
        ...metadata
    });

    // Señal directa para Google Ads
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16965295721/mRlTCNr00sIbEOm815k_',
            ...metadata
        });
    }

    // 3. NUEVO: Señal directa para el Píxel de Meta (Evento Cliente Potencial / Lead)
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
            content_name: formName,
            status: 'Formulario Enviado Exitosamente'
        });
    }

    console.log(`🚀 Conversión de formulario [${formName}] enviada a Google y Meta`);
};


// ==========================================
// 2. HELPERS EXPORTADOS (Los que usas en tus componentes)
// ==========================================

/**
 * Registra el clic de WhatsApp inyectando la ubicación del botón de forma dinámica.
 */
export const trackWhatsAppClick = (ubicacion, servicio = "Información General", extras = {}) => {
    const metadata = {
        'click_location': ubicacion,       // Ej: 'footer', 'nav', 'floating_button'
        'page_url': window.location.href,  // Captura la URL actual automáticamente
        ...extras
    };
    sendWhatsAppMessageBase(servicio, metadata);
};

/**
 * Registra el envío exitoso de un formulario.
 */
export const trackFormSubmit = (formName, extras = {}) => {
    const metadata = {
        'page_url': window.location.href,
        ...extras
    };
    trackFormConversionBase(formName, metadata);
};