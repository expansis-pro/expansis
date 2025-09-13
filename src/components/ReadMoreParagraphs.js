// src/components/ReadMoreParagraphs.js
import React from 'react';

const ReadMoreParagraphs = ({ paragraphs }) => {
    return (
        <>
            {/* Ahora siempre se muestran todos los párrafos */}
            {paragraphs.map((p, index) => (
                <p key={index} className="mb-6 last:mb-0" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
        </>
    );
};

export default ReadMoreParagraphs;