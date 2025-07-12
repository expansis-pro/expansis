// src/components/ReadMoreParagraphs.js
import React, { useState } from 'react';

const ReadMoreParagraphs = ({ paragraphs, maxLength = 300 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Calcula la longitud total para ver si se necesita acortar el texto
    const totalLength = paragraphs.join(' ').length;
    const needsTruncation = totalLength > maxLength;

    // Si el texto no es largo, simplemente muestra todos los párrafos
    if (!needsTruncation) {
        return (
            <>
                {/* CAMBIO REALIZADO: Añadir mb-6 last:mb-0 a cada p */}
                {paragraphs.map((p, index) => (
                    <p key={index} className="mb-6 last:mb-0" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
            </>
        );
    }

    return (
        <div>
            {/* Vista para Móvil (md:hidden) */}
            <div className="md:hidden">
                {isExpanded ? (
                    // Si está expandido, muestra todos los párrafos
                    // CAMBIO REALIZADO: Añadir mb-6 last:mb-0 a cada p
                    paragraphs.map((p, index) => <p key={index} className="mb-6 last:mb-0" dangerouslySetInnerHTML={{ __html: p }} />)
                ) : (
                    // Si está colapsado, muestra solo el primer párrafo con "..."
                    // CAMBIO REALIZADO: Añadir mb-6 last:mb-0 al p colapsado
                    <p className="mb-6 last:mb-0" dangerouslySetInnerHTML={{ __html: paragraphs[0] + '...' }} />
                )}
            </div>

            {/* Vista para Desktop (hidden md:block) - Muestra siempre todos los párrafos */}
            <div className="hidden md:block">
                {/* CAMBIO REALIZADO: Añadir mb-6 last:mb-0 a cada p */}
                {paragraphs.map((p, index) => (
                    <p key={index} className="mb-6 last:mb-0" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
            </div>

            {/* Botón para expandir/colapsar, solo visible en móvil */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primario font-bold hover:underline md:hidden mt-2"
            >
                {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
        </div>
    );
};

export default ReadMoreParagraphs;