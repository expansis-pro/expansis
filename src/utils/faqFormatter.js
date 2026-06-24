// src/utils/faqFormatter.js
import React from 'react';

// Procesa textos entre asteriscos para transformarlos en negritas válidas
export const parseBoldText = (text) => {
    if (!text) return '';
    const parts = text.split(/(\*\*?.*?\*\*?)/g);
    return parts.map((part, i) => {
        if (part.startsWith('*') && part.endsWith('*')) {
            return <strong key={i} className="font-semibold text-gray-900">{part.replace(/\*/g, '')}</strong>;
        }
        return part;
    });
};

// Convierte saltos de línea y viñetas del backend en etiquetas HTML limpias
export const formatResponseText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
        let trimmed = line.trim();
        if (!trimmed) return <div key={index} className="h-2" />;
        if (trimmed.startsWith('•')) {
            return (
                <ul key={index} className="list-disc pl-5 my-1 text-gray-700">
                    <li>{parseBoldText(trimmed.substring(1).trim())}</li>
                </ul>
            );
        }
        return <p key={index} className="text-justify mb-2 text-gray-700">{parseBoldText(trimmed)}</p>;
    });
};