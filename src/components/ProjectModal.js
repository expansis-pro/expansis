import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose, onContinue = null }) => {
    const modalRef = useRef();

    // EFECTO: Cerrar modal si se hace clic afuera del contenido
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // EFECTO: Bloquear el scroll del body
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deepBlue/80 z-[100] p-4 md:p-6 flex items-center justify-center backdrop-blur-sm"
        >
            {/* Reducimos a max-w-4xl para que el formato vertical sea armónico y elegante */}
            <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col"
            >
                {/* BOTÓN CERRAR REDONDO (Mantiene su diseño perfecto para Mobile y Desktop) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-gray-400 hover:text-primario transition-all bg-white/95 w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-100 active:scale-95"
                    aria-label="Cerrar detalles"
                >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                {/* 🌟 BLOQUE SUPERIOR: Imagen Panorámica 16:9 Real (Cero espacio gris, cero recortes) */}
                <div className="w-full aspect-video shrink-0 bg-gray-50 overflow-hidden rounded-t-3xl border-b border-gray-100">
                    {project.image && (
                        <img
                            src={project.image}
                            alt={`Vista detallada del proyecto ${project.title}`}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* 🌟 BLOQUE INFERIOR: Detalles del Proyecto */}
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                    <div className="mb-6 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primario bg-primario/10 px-3 py-1.5 rounded-full border border-primario/20 mb-2.5 inline-block">
                                {project.category}
                            </span>
                            <h2 className="text-deepBlue text-2xl md:text-3xl font-black leading-none tracking-tighter">
                                {project.title}
                            </h2>
                        </div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider sm:text-right shrink-0">
                            Sector: {project.sector}
                        </p>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <p
                            className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        />

                        {project.results && (
                            <div className="p-5 rounded-2xl bg-gray-50/50 border border-gray-100">
                                <p className="text-[10px] font-bold text-deepBlue uppercase tracking-widest mb-3">Hitos Logrados:</p>
                                <ul className="space-y-2">
                                    {project.results.map((res, i) => (
                                        <li key={i} className="text-xs md:text-sm text-gray-600 flex items-start gap-2 leading-snug">
                                            <i className="fa-solid fa-circle-check text-green-500 mt-1 text-[11px] shrink-0"></i>
                                            <span dangerouslySetInnerHTML={{ __html: res }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-[9px] bg-gray-100 text-gray-500 px-2.5 py-1 rounded font-bold uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CONTENEDOR DE BOTONES DE ACCIÓN */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end items-center w-full">
                        <button
                            onClick={onContinue || onClose}
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-100 text-deepBlue px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors shrink-0 order-2 sm:order-1 active:scale-98"
                        >
                            Continuar
                        </button>

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primario text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-deepBlue transition-colors shadow-lg shadow-primario/20 shrink-0 order-1 sm:order-2"
                            >
                                Visitar Sitio Web
                                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                            </a>
                        )}
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;