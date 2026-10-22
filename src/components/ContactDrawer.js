// src/components/ContactDrawer.js
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        const handleClose = () => setIsOpen(false);

        window.addEventListener('open-contact-drawer', handleOpen);
        window.addEventListener('close-contact-drawer', handleClose);

        return () => {
            window.removeEventListener('open-contact-drawer', handleOpen);
            window.removeEventListener('close-contact-drawer', handleClose);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex justify-end">
                    {/* Fondo oscuro traslúcido */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Contenedor Rectangular Tipo Terminal */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="relative w-full md:w-[540px] h-[100dvh] bg-[#0c1018] text-white border-l border-white/15 flex flex-col z-10 rounded-none shadow-2xl"
                    >
                        {/* Cabecera Técnica */}
                        <div className="flex items-center justify-between p-6 bg-[#07090e] border-b border-white/15 shrink-0">
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-1">
                                    [ FORMULARIO DE INGRESO ]
                                </span>
                                <h3 className="text-xl font-light text-white">
                                    Hablemos de tu proyecto
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="font-mono text-xs text-zinc-400 hover:text-white px-2.5 py-1 border border-white/15 hover:border-white/40 cursor-pointer"
                            >
                                [✕ ESC]
                            </button>
                        </div>

                        {/* Cuerpo Desplazable */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar bg-[#0c1018]">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}