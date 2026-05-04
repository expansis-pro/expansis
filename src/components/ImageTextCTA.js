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
    buttonVariant = 'secondary',
    subtitle,
    title,
    imageSide = 'left'
}) => {

    const imageContainerClasses = "relative w-full   bg-[#E2E8F0] rounded-[60px_10px_60px_10px] overflow-hidden flex items-center justify-center shadow-2xl ";
    const imageClasses = "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700";

    return (
        /* Usamos la nueva clase maestra section-padding */
        <section className="w-full section-padding bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Contenedor de Imagen */}
                    <div className={`${imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                        <div className={imageContainerClasses}>
                            <img
                                src={imageDesktop}
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

                        {buttonContent && (
                            <div className="mt-12 w-full flex justify-start">
                                <CtaButton
                                    to={buttonLink}
                                    variant={buttonVariant}
                                    /* w-full en mobile, md:w-auto en desktop */
                                    className={`${buttonVariant === 'primary' ? 'btn-primary' : 'btn-outline'
                                        } w-full md:w-auto`}
                                >
                                    {buttonContent}
                                </CtaButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageTextCTA;