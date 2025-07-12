// src/components/ImageTextCTA.js
import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import ReadMoreParagraphs from './ReadMoreParagraphs';

const ImageTextCTA = ({ imageDesktop, alt, text, buttonContent, buttonLink, subtitle, title, imageSide = 'left', links = [] }) => {

    const imageOrderClass = imageSide === 'left' ? 'lg:order-1' : 'lg:order-2';
    const textOrderClass = imageSide === 'left' ? 'lg:order-2' : 'lg:order-1';

    return (
        <section className="w-full flex justify-center items-center py-6 lg:py-6">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

                    {/* Columna de la Imagen */}
                    <div className={imageOrderClass}>
                        <img src={imageDesktop} alt={alt} className="w-full h-auto object-cover rounded-lg shadow-xl mx-auto max-w-lg" />
                    </div>

                    {/* Columna del Texto y Botón (CTA) */}
                    <div className={`text-center lg:text-left ${textOrderClass}`}>
                        {title && <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>}
                        {subtitle && <h3 className="text-xl font-semibold text-primario mb-2">{subtitle}</h3>}

                        {/* --- CAMBIO REALIZADO: Se usa el nuevo componente para párrafos --- */}
                        <div className="space-y-4 text-gray-600 text-base">
                            <ReadMoreParagraphs paragraphs={text} />
                        </div>

                        {/* Botón (si se proporciona) */}
                        {buttonContent && (
                            <div className="mt-8">
                                <button onClick={() => scrollToSection(buttonLink)}
                                    className="inline-block bg-primario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105">
                                    {buttonContent}
                                </button>
                            </div>
                        )}

                        {/* Enlaces Adicionales */}
                        {links.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                                    {links.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-gray-700 hover:text-primario font-semibold transition-colors"
                                        >
                                            <i className={link.icon}></i>
                                            <span>{link.text}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageTextCTA;