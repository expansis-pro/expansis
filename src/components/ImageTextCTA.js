// src/components/ImageTextCTA.js
import React from 'react';
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
    imageSide = 'left'
}) => {

    // LÓGICA DE INGENIERÍA DE IMAGEN
    const baseImagePath = imageDesktop ? imageDesktop.replace('.webp', '') : '';

    // Generamos el catálogo de tamaños (sm: 480px, md: 800px, lg: 1200px)
    const imageSrcSet = imageDesktop ? `
        ${baseImagePath}-sm.webp 480w,
        ${baseImagePath}-md.webp 800w,
        ${baseImagePath}-lg.webp 1200w
    ` : '';

    /* EXPLICACIÓN DE SIZES:
           - Si la pantalla es > 1024px (lg), la imagen ocupa el 50% del contenedor (50vw).
           - En móviles, ocupa casi todo el ancho (100vw).
        */
    const imageSizes = "(max-width: 1024px) 100vw, 600px";

    const imageContainerClasses = "relative w-full   bg-[#E2E8F0] rounded-[60px_10px_60px_10px] overflow-hidden flex items-center justify-center shadow-2xl ";
    const imageClasses = "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700";

    return (
        /* Usamos la nueva clase maestra section-padding */
        <section className="w-full section-padding  overflow-hidden">
            <div className="container-pro">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Contenedor de Imagen */}
                    <div className={`${imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                        <div className={imageContainerClasses}>
                            <img
                                src={imageDesktop} // Fallback
                                srcSet={imageSrcSet}
                                sizes={imageSizes}
                                alt={alt}
                                className={imageClasses}
                                loading="lazy"      // <--- ESTO activa el Lazy Loading nativo
                                decoding="async"    // <--- Ayuda a que el navegador no se bloquee al procesar la imagen
                            />
                        </div>
                    </div>

                    {/* Contenedor de Texto */}
                    <div className={`text-left ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                        {subtitle && (
                            <span className="block text-primario uppercase tracking-widest mb-4 text-sm font-bold">
                                {subtitle}
                            </span>
                        )}
                        {title && <h2 className="text-deepBlue mb-8 leading-tight text-3xl md:text-4xl">{title}</h2>}

                        <div className="space-y-6 text-gray-600 leading-relaxed text-justify font-light text-lg">
                            <ReadMoreParagraphs paragraphs={text} />
                        </div>

                        {/* --- CONTENEDOR DE BOTONES EN IMAGETEXTCTA.JS --- */}
                        {(buttonContent || secondaryButtonContent) && (
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-4 md:gap-6 w-full">

                                {/* Botón Principal */}
                                {buttonContent && (
                                    <CtaButton
                                        to={buttonLink}
                                        variant={buttonVariant}
                                        className="w-full sm:w-auto" // En mobile ocupan todo el ancho
                                    >
                                        {buttonContent}
                                    </CtaButton>
                                )}

                                {/* Botón Secundario */}
                                {secondaryButtonContent && (
                                    <CtaButton
                                        to={secondaryButtonLink}
                                        variant={secondaryButtonVariant}
                                        className="w-full sm:w-auto"
                                    >
                                        {secondaryButtonContent}
                                    </CtaButton>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageTextCTA;