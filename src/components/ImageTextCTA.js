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

    // MODIFICACIÓN AQUÍ: 
    // 1. Reducimos de max-w-md (448px) a max-w-[340px] para que no sea gigante.
    // 2. Cambiamos aspect-square por aspect-[4/5] para un look de retrato más elegante.
    // 3. Añadimos un borde sutil para que la foto "respire" sobre el fondo blanco.
    const imageContainerClasses = "relative w-full max-w-[340px] mx-auto aspect-[4/5] bg-[#E2E8F0] rounded-[60px_10px_60px_10px] overflow-hidden flex items-center justify-center shadow-2xl border border-gray-100";

    // 4. Usamos object-top por si la foto es de cuerpo medio, para que no te "corte" la frente.
    const imageClasses = "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700";

    return (
        <section className="w-full py-12 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Contenedor de Imagen */}
                    <div className={`${imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                        <div className={imageContainerClasses}>
                            <img src={imageDesktop} alt={alt} className={imageClasses} />
                        </div>
                    </div>

                    {/* Contenedor de Texto */}
                    <div className={`text-left ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                        {subtitle && (
                            <span className="block text-primario uppercase tracking-widest mb-4 text-sm">
                                {subtitle}
                            </span>
                        )}
                        {title && <h2 className="text-deepBlue mb-8 leading-tight text-3xl md:text-4xl ">{title}</h2>}

                        <div className="space-y-6 text-gray-600 leading-relaxed text-justify font-light text-lg">
                            <ReadMoreParagraphs paragraphs={text} />
                        </div>

                        {buttonContent && (
                            <div className="mt-12 flex justify-start">
                                <CtaButton
                                    to={buttonLink}
                                    variant={buttonVariant}
                                    className={
                                        buttonVariant === 'primary'
                                            ? "bg-primario text-ghostWhite px-10 py-4 rounded-xl shadow-lg hover:shadow-primario/20 transition-all"
                                            : "border-2 border-deepBlue text-deepBlue bg-white hover:bg-deepBlue hover:text-white px-10 py-4 rounded-xl transition-all font-medium"
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