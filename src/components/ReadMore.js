import React, { useState } from 'react';

const ReadMore = ({ text, maxLength = 300 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Determina si el texto realmente necesita ser acortado.
    const needsTruncation = text.length > maxLength;

    // Si el texto es corto, simplemente lo muestra completo.
    if (!needsTruncation) {
        return <div dangerouslySetInnerHTML={{ __html: text }} />;
    }

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            {/* Versión para Móvil: Muestra el texto acortado o expandido según el estado. */}
            <div className="md:hidden"
                dangerouslySetInnerHTML={{
                    __html: isExpanded ? text : `${text.slice(0, maxLength)}...`
                }}
            />

            {/* Versión para Desktop: Muestra siempre el texto completo. */}
            <div className="hidden md:block"
                dangerouslySetInnerHTML={{ __html: text }}
            />

            {/* Botón "Ver más / Ver menos": Solo visible en móvil. */}
            <button
                onClick={toggleExpansion}
                className="text-primario font-bold hover:underline md:hidden mt-2"
            >
                {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
        </div>
    );
};

export default ReadMore;