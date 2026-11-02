// src/utils/trackingUtils.js

// ==========================================
// 1. FUNCIONES BASE (Lógica de conversión)
// ==========================================

/**
 * Abre WhatsApp con un mensaje personalizado y envía señales a GTM y Google Ads.
 */
// const sendWhatsAppMessageBase = (servicio = "Información General", metadata = {}) => {
//     const phoneNumber = "56988318443";
//     const frasesContexto = {
//         "Desarrollo Web": "potenciar mi negocio con un *Desarrollo Web* a medida",
//         "Marketing Digital": "mejorar mi visibilidad online con *Marketing Digital*",
//         "Consultoría Digital": "agendar una *Consultoría Digital* para mi empresa",
//         "Información General": "recibir información general sobre sus soluciones"
//     };

//     const accionTexto = frasesContexto[servicio] || `saber más sobre el servicio de *${servicio}*`;
//     const mensaje = `¡Hola! \n\nMe gustaría ${accionTexto}.\n\n¿Podrían darme más detalles?`;
//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

//     // Señal para Google Tag Manager
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//         'event': 'disparo_whatsapp_manual',
//         'servicio_seleccionado': servicio,
//         ...metadata
//     });



//     // 3. NUEVO: Señal directa para el Píxel de Meta (Evento Contactar)
//     if (typeof window.fbq === 'function') {
//         window.fbq('track', 'Contact', {
//             content_category: 'WhatsApp',
//             content_name: servicio,
//             predicted_availability: metadata.click_location
//         });
//     }

//     console.log("🚀 Eventos de WhatsApp enviados a Google y Meta con metadata:", metadata);
//     window.open(whatsappLink, '_blank', 'noopener,noreferrer');
// };

// src/utils/trackingUtils.js

const trackFormConversionBase = (formName = "Formulario General", metadata = {}) => {
    const isQualified = metadata.is_qualified ?? true; // Por defecto calificado si no se especifica
    const qualificationReason = metadata.qualification_reason || 'cumple_criterios';

    // 1. Google Tag Manager / GA4 (Recibe TODOS los envíos con su etiqueta de estado)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': isQualified ? 'disparo_formulario_calificado' : 'disparo_formulario_descalificado',
        'form_name': formName,
        'lead_status': isQualified ? 'qualified' : 'unqualified',
        'qualification_reason': qualificationReason,
        ...metadata
    });


    // 3. Meta Píxel
    if (typeof window.fbq === 'function') {
        if (isQualified) {
            // Evento Estándar: Alimenta el algoritmo de optimización de compras/leads
            window.fbq('track', 'Lead', {
                content_name: formName,
                status: 'Calificado',
                currency: 'CLP',
                ...metadata
            });
        } else {
            // Evento Personalizado: Solo para métricas y auditoría, NO afecta el algoritmo
            window.fbq('trackCustom', 'UnqualifiedLead', {
                content_name: formName,
                status: 'Descalificado',
                reason: qualificationReason,
                ...metadata
            });
        }
    }

    console.log(`📡 Formulario [${formName}] procesado. Estado: ${isQualified ? 'CALIFICADO' : 'DESCALIFICADO'} (${qualificationReason})`);
};


// ==========================================
// 2. HELPERS EXPORTADOS (Los que usas en tus componentes)
// ==========================================

/**
 * Registra el clic de WhatsApp inyectando la ubicación del botón de forma dinámica.
 */
// export const trackWhatsAppClick = (ubicacion, servicio = "Información General", extras = {}) => {
//     const metadata = {
//         'click_location': ubicacion,       // Ej: 'footer', 'nav', 'floating_button'
//         'page_url': window.location.href,  // Captura la URL actual automáticamente
//         ...extras
//     };
//     sendWhatsAppMessageBase(servicio, metadata);
// };

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