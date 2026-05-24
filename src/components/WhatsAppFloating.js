// src/components/WhatsAppFloating.js
import React from 'react';
import { motion } from 'framer-motion';
import { trackWhatsAppClick } from '../utils/trackingUtils';

const WhatsAppFloating = () => {
    return (
        <motion.button
            onClick={() => trackWhatsAppClick('viewport_floating', 'Información General')}
            // CAMBIO AQUÍ: Añadidos w-14 y h-14 fijando dimensiones idénticas
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors focus:outline-none group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Contactar por WhatsApp"
        >
            {/* Efecto de pulso de ondas de fondo */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none group-hover:hidden"></span>

            {/* Icono de WhatsApp de FontAwesome */}
            <i className="fa-brands fa-whatsapp text-3xl relative z-10"></i>

            {/* Tooltip sutil que aparece en Hover (Desktop) */}
            <span className="absolute right-16 bg-deepBlue text-ghostWhite text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none hidden sm:inline-block border border-gray-800">
                ¿Necesitas ayuda? Escríbenos
            </span>
        </motion.button>
    );
};

export default WhatsAppFloating;