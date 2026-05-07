import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {

    // LÓGICA DE OPTIMIZACIÓN:
    // Extraemos la ruta base quitando la extensión .webp
    const baseImagePath = project.image ? project.image.replace('.webp', '') : '';

    // Construimos el srcset
    // sm: 480px, md: 800px, lg: 1200px
    const imageSrcSet = project.image ? `
        ${baseImagePath}-sm.webp 480w,
        ${baseImagePath}-md.webp 800w,
        ${baseImagePath}-lg.webp 1200w
    ` : '';

    // El contenido que se repite, ya sea con link o sin él
    const CardInner = (
        <>
            {/* Contenedor de Imagen con Aspect Ratio 16:9 */}
            <div className="relative w-full aspect-video overflow-hidden">
                {project.image ? (
                    <img
                        srcSet={imageSrcSet}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        src={project.image}
                        alt={`Proyecto ${project.title} desarrollado por Expansis Pro`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-deepBlue/5 text-deepBlue/20">
                        <i className="fa-solid fa-laptop-code text-5xl mb-2"></i>
                    </div>
                )}

                {/* Overlay en Hover */}
                {project.liveUrl && (
                    <div className="absolute inset-0 bg-deepBlue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                            <i className="fa-solid fa-arrow-up-right-from-square text-2xl mb-2 text-primario"></i>
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Ver Proyecto</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Cuerpo de la Tarjeta */}
            <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primario bg-primario/10 px-3 py-1 rounded-full border border-primario/20">
                        {project.category}
                    </span>
                    {project.liveUrl && (
                        <div className="text-gray-300 transition-all duration-500 group-hover:text-primario">
                            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                        </div>
                    )}
                </div>

                <h3 className="text-deepBlue text-2xl font-bold mb-1 group-hover:text-primario transition-colors">
                    {project.title}
                </h3>

                <p className="text-xs text-gray-400 font-medium mb-6 uppercase tracking-tight">
                    Sector: {project.sector}
                </p>

                <p
                    className="text-gray-600 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Hitos Logrados */}
                {project.results && (
                    <div className="mb-8 p-5  rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-bold text-deepBlue uppercase tracking-widest mb-3">Hitos Logrados:</p>
                        <ul className="space-y-2">
                            {project.results.map((res, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-snug">
                                    <i className="fa-solid fa-circle-check text-green-500 mt-1 text-[12px]"></i>
                                    <span dangerouslySetInnerHTML={{ __html: res }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group  border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    {CardInner}
                </a>
            ) : (
                <div className="flex flex-col h-full">
                    {CardInner}
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;