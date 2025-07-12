// src/components/FaqItem.js
import React from 'react';
// --- CAMBIO: Se elimina la importación de ReadMore ---

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
                className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primario focus:ring-offset-2 rounded-md"
            >
                <span className={`text-lg font-medium ${isOpen ? 'text-primario' : 'text-gray-800'}`}>
                    {question}
                </span>

                <span className="ml-6 flex-shrink-0">
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            <div
                id={`faq-answer-${question.replace(/\s+/g, '-')}`}
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    {/* --- CAMBIO: Se renderiza la respuesta directamente --- */}
                    <div className="pt-2 pb-4 text-gray-700 text-base leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;