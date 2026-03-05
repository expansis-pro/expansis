import React from 'react';
import { projectsData } from '../data/projectsData';
import SecondaryHero from '../components/SecondaryHero';
import CallToAction from '../components/CallToAction';

const ProjectsPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <SecondaryHero
                title="Proyectos Realizados"
                subtitle="Transformando visiones en resultados digitales medibles y plataformas de alto rendimiento."
                icon="fa-solid fa-rocket"
            />

            <div className="max-w-6xl mx-auto section-padding px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projectsData.map((project) => {
                        // Definimos el contenido de la tarjeta por separado para no repetir código
                        const CardContent = (
                            <>
                                {/* --- CONTENEDOR DE IMAGEN --- */}
                                <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-deepBlue/5 text-deepBlue/20">
                                            <i className="fa-solid fa-laptop-code text-5xl mb-2"></i>
                                        </div>
                                    )}

                                    {/* Overlay con mensaje - Solo se muestra si hay link (manejado por el padre) */}
                                    {project.liveUrl && (
                                        <div className="absolute inset-0 bg-deepBlue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                                                <i className="fa-solid fa-arrow-up-right-from-square text-2xl mb-2 text-primario"></i>
                                                <span className="text-sm font-bold uppercase tracking-[0.2em]">Ver Proyecto</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* --- CONTENIDO DE TEXTO --- */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primario bg-primario/10 px-3 py-1 rounded-full border border-primario/20">
                                            {project.category}
                                        </span>
                                        {/* El símbolo ahora es solo visual, ya que la card es el link */}
                                        {project.liveUrl && (
                                            <div className="text-gray-300 transition-all duration-500 ease-in-out transform 
                                                group-hover:text-primario">
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

                                    <p className="text-gray-600 font-light leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    {/* Bloque de Resultados */}
                                    {project.results && (
                                        <div className="mb-8 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                            <p className="text-[10px] font-bold text-deepBlue uppercase tracking-widest mb-3">Hitos Logrados:</p>
                                            <ul className="space-y-2">
                                                {project.results.map((res, i) => (
                                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-snug">
                                                        <i className="fa-solid fa-circle-check text-green-500 mt-1 text-[12px]"></i>
                                                        {res}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tags de tecnología */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
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
                            <div key={project.id} className="group bg-ghostWhite border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                {project.liveUrl ? (
                                    /* Si hay link, toda la tarjeta es un enlace */
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col h-full"
                                    >
                                        {CardContent}
                                    </a>
                                ) : (
                                    /* Si no hay link, es un div normal */
                                    <div className="flex flex-col h-full">
                                        {CardContent}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-4xl mx-auto pb-20 px-4">
                <CallToAction
                    source="Página de Proyectos"
                    title="¿Quieres resultados similares en tu negocio?"
                    description="Apliquemos mi experiencia en marcas globales a tu proyecto."
                />
            </div>
        </div>
    );
};

export default ProjectsPage;