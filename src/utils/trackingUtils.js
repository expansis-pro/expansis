// src/utils/trackingUtils.js

/**
 * 1. Envío genérico de eventos a la capa de datos de Google Tag Manager
 */
export const pushEvent = (event, params = {}) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
};

/**
 * 2. Registro de envío de formulario (conversión de Lead para Meta Ads y GA4).
 *    Llamar SOLO cuando /api/contact respondió OK.
 *    No incluyas nombre, email ni teléfono: el dataLayer llega a GA4 y Meta.
 */
export const trackFormSubmit = (formName = 'formulario_diagnostico', extras = {}) => {
    if (typeof window === 'undefined') return;

    const payload = {
        form_name: formName,
        page_url: window.location.href,
        ...extras,
    };

    // GTM escucha `generate_lead` y dispara el evento estándar "Lead" del Meta Pixel
    pushEvent('generate_lead', payload);

    if (process.env.NODE_ENV !== 'production') {
        console.log(`[Analytics] generate_lead desde: ${formName}`, payload);
    }
};