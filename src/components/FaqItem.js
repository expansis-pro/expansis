'use client';

import React from 'react';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div
            className={`transition-all duration-300 rounded-2xl mb-4 border ${isOpen
                    ? 'border-primario bg-ghostWhite shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
        >
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-primario' : 'text-deepBlue'}`}>
                    {question}
                </span>

                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg
                        className={`w-6 h-6 ${isOpen ? 'text-primario' : 'text-gray-400'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-6 text-gray-600 font-light leading-relaxed">
                        <div className="pt-4 border-t border-gray-100">
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;