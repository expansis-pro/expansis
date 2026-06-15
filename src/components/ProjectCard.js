import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal'; // 🌟 Importamos el modal desde su nuevo archivo

const ProjectCard = ({ project, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // LÓGICA DE OPTIMIZACIÓN DE IMÁGENES
    const baseImagePath = project.image ? project.image.replace('.webp', '') : '';
    const imageSrcSet = project.image ? `
        ${baseImagePath}-sm.webp 480w,
        ${baseImagePath}-md.webp 800w,
        ${baseImagePath}-lg.webp 1200w
    ` : '';

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* --- TARJETA PREVIEW (Grilla) --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full cursor-pointer"
                onClick={openModal}
            >
                {/* Contenedor de Imagen */}
                <div className="relative w-full aspect-video overflow-hidden bg-deepBlue/5 shrink-0">
                    {project.image ? (
                        <img
                            srcSet={imageSrcSet}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            src={project.image}
                            alt={`Proyecto ${project.title} desarrollado por Expansis Pro`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-deepBlue/20">
                            <i className="fa-solid fa-laptop-code text-4xl mb-2"></i>
                        </div>
                    )}
                </div>

                {/* Cuerpo de la Tarjeta Preview */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-wrap">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-primario bg-primario/10 px-2.5 py-1 rounded-full border border-primario/20">
                                {project.category}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-deepBlue text-lg font-bold group-hover:text-primario transition-colors leading-snug">
                                {project.title}
                            </h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                {project.sector}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 w-full text-center">
                        <span className="text-[10px] font-bold text-primario uppercase tracking-wider flex items-center justify-center gap-1.5">
                            Ver detalles
                            <i className="fa-solid fa-chevron-right text-[9px]"></i>
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* --- MODAL EXTRAÍDO (Renderizado condicional controlado por AnimatePresence) --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <ProjectModal
                        project={project}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;