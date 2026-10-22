// src/components/ContactFloating.js
'use client';
import React from 'react';

const ContactFloating = () => {
    const handleAction = () => {
        // Dispara el evento global para abrir el panel Off-Canvas
        window.dispatchEvent(new Event('open-contact-drawer'));
    };

    return (
        <button
            onClick={handleAction}
            aria-label="Abrir formulario de contacto"
            className="fixed bottom-6 right-6 z-50 bg-primario hover:bg-primario/90 text-ghostWhite p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        >
            <i className="fa-regular fa-envelope text-2xl"></i>
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-semibold">
                Contactar
            </span>
        </button>
    );
};

export default ContactFloating;