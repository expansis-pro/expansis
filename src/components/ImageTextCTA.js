// src/components/ImageTextCTA.js
import React, { useState, useEffect } from 'react';
import CtaButton from './CtaButton';
import ReadMoreParagraphs from './ReadMoreParagraphs';

const ImageTextCTA = ({
    imageDesktop,
    alt,
    text,
    buttonContent,
    buttonLink,
    buttonVariant = 'primary',
    secondaryButtonContent,
    secondaryButtonLink,
    secondaryButtonVariant = 'secondary',
    subtitle,
    title,
    imageSide = 'left',
    vimeoId = null,
    imageShape = 'video',
    showLinkedIn = false,    // 👈 NUEVA PROP: Controla el enlace de LinkedIn
    showPersonalWeb = false  // 👈 NUEVA PROP: Controla tu web personal

}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Bloquear scroll del body (esto sí es necesario por UX)
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    // LÓGICA DE IMAGEN RESPONSIVA
    const baseImagePath = imageDesktop ? imageDesktop.replace('.webp', '') : '';
    const imageSrcSet = imageDesktop ? `${baseImagePath}-sm.webp 480w, ${baseImagePath}-md.webp 800w, ${baseImagePath}-lg.webp 1200w` : '';
    const imageSizes = "(max-width: 1024px) 100vw, 600px";



    // 🛠️ ASIGNACIÓN DINÁMICA DE CLASES SEGÚN EL FORMATO
    // Si es 'square', reduce el tamaño máximo en desktop para que no se vea gigante y redondea de forma premium
    const imageContainerClasses = imageShape === 'square'
        ? 'aspect-square max-w-sm mx-auto rounded-[60px_10px_60px_10px]'
        : 'aspect-video w-full rounded-[60px_10px_60px_10px]';
    return (
        <section className="w-full section-padding overflow-hidden">
            <div className="container-pro">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Contenedor de Imagen */}
                    <div className={`${imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'} flex justify-center w-full`}>
                        <div
                            // CORRECCIÓN: Ahora el div consume dinámicamente el aspecto y el redondeado correspondientes
                            className={`relative bg-[#E2E8F0] overflow-hidden flex items-center justify-center shadow-2xl ${imageContainerClasses} ${vimeoId ? 'cursor-pointer group/video' : ''}`}
                            onClick={() => vimeoId && setIsModalOpen(true)}
                        >
                            <img
                                src={imageDesktop}
                                srcSet={imageSrcSet}
                                sizes={imageSizes}
                                alt={alt}
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />

                            {vimeoId && (
                                <div className="absolute inset-0 bg-deepBlue/20 group-hover/video:bg-deepBlue/40 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-primario text-white rounded-full flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-transform duration-300">
                                        <i className="fa-solid fa-play text-2xl ml-1"></i>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contenedor de Texto */}
                    <div className={`text-left ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                        {subtitle && <span className="block text-primario uppercase tracking-widest mb-4 text-sm font-bold">{subtitle}</span>}
                        {title && <h2 className="text-deepBlue mb-8 leading-tight text-3xl md:text-4xl">{title}</h2>}
                        <div className="space-y-6 text-gray-600 leading-relaxed text-justify font-light text-lg">
                            <ReadMoreParagraphs paragraphs={text} />
                        </div>

                        {(buttonContent || secondaryButtonContent) && (
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-4 md:gap-6 w-full">
                                {buttonContent && <CtaButton to={buttonLink} variant={buttonVariant} className="w-full sm:w-auto">{buttonContent}</CtaButton>}
                                {secondaryButtonContent && <CtaButton to={secondaryButtonLink} variant={secondaryButtonVariant} className="w-full sm:w-auto">{secondaryButtonContent}</CtaButton>}
                            </div>
                        )}


                        {/* ========================================================================= */}
                        {/* 🚀 ENLACES PROFESIONALES EXTERNOS (CONDICIONALES CON _BLANK)              */}
                        {/* ========================================================================= */}
                        {(showLinkedIn || showPersonalWeb) && (
                            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6">
                                <span className="text-gray-400 font-light text-xs uppercase tracking-widest block w-full sm:w-auto">
                                    Descubre más en:
                                </span>

                                {showPersonalWeb && (
                                    <a
                                        href="https://gonzalobos.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-deepBlue hover:text-primario transition-colors font-medium text-sm"
                                    >
                                        <i className="fa-solid fa-globe text-primario"></i>
                                        gonzalobos.com
                                    </a>
                                )}

                                {showLinkedIn && (
                                    <a
                                        href="https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-deepBlue hover:text-primario transition-colors font-medium text-sm"
                                    >
                                        <i className="fa-brands fa-linkedin text-primario text-base"></i>
                                        Perfil de LinkedIn
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* ========================================================================= */}
            {/* MODAL SIMPLIFICADO CON ANIMACIÓN CSS NATIVA (FADE-IN AL ENTRAR) */}
            {/* ========================================================================= */}
            {vimeoId && isModalOpen && (
                <div
                    // Usamos la nueva clase limpia inyectada en el CSS global
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fadeIn"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Botón de cerrar flotante */}
                    <button
                        className="absolute top-6 right-6 text-white hover:text-primario text-3xl transition-colors focus:outline-none z-50"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div
                        className="w-full max-w-5xl aspect-video bg-[#020617] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            className="absolute top-0 left-0 w-full h-full"
                            title={title || alt}
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageTextCTA;