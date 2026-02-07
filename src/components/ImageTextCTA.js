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
    buttonVariant = 'secondary', // Prop nueva con 'secondary' por defecto
    subtitle,
    title,
    imageSide = 'left'
}) => {

    const imageContainerClasses = "relative w-full max-w-md mx-auto aspect-square bg-[#E2E8F0] rounded-[60px_10px_60px_10px] overflow-hidden flex items-center justify-center";
    const imageClasses = "w-full h-full object-cover";

    return (
        <section className="w-full py-12 lg:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">

                    {/* Contenedor de Imagen */}
                    <div className={`${imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className={imageContainerClasses}>
                            <img src={imageDesktop} alt={alt} className={imageClasses} />
                        </div>
                    </div>

                    {/* Contenedor de Texto */}
                    <div className={`text-left ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                        {subtitle && (
                            <span className="block text-primario uppercase tracking-wider mb-3 font-semibold text-sm">
                                {subtitle}
                            </span>
                        )}
                        {title && <h2 className="text-deepBlue mb-6 leading-tight">{title}</h2>}

                        <div className="space-y-6 text-gray-600 leading-relaxed text-justify font-light">
                            <ReadMoreParagraphs paragraphs={text} />
                        </div>

                        {/* Lógica de Botón Dinámica */}
                        {buttonContent && (
                            <div className="mt-10 flex justify-start">
                                <CtaButton
                                    to={buttonLink}
                                    variant={buttonVariant}
                                    // Si es primario, usa el naranja. Si es secundario, usa el borde azul de Figma.
                                    className={
                                        buttonVariant === 'primary'
                                            ? "bg-primario text-ghostWhite px-10 py-3 rounded-lg"
                                            : "border-2 border-deepBlue text-deepBlue bg-white hover:bg-deepBlue hover:text-white px-10 py-3 rounded-lg"
                                    }
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