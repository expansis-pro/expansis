'use client';

import React, { useState } from 'react';

const PhaseItem = ({ number, title, description, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex gap-6 md:gap-10">
            <div className="flex flex-col items-center">
                <button
                    onClick={handleToggle}
                    className={`z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-500 md:pointer-events-none ${isOpen
                        ? 'bg-primario border-primario text-white shadow-[0_0_15px_rgba(242,116,5,0.4)] scale-110'
                        : 'bg-white border-gray-200 text-gray-400 hover:border-primario/50'
                        } md:bg-deepBlue md:border-deepBlue md:text-white md:scale-100 md:shadow-none`}
                >
                    {number}
                </button>

                {!isLast && (
                    <div className={`w-0.5 flex-grow my-2 transition-colors duration-500 ${isOpen ? 'bg-primario' : 'bg-gray-100'
                        } md:bg-gray-200`}></div>
                )}
            </div>

            <div className="flex-grow pb-12">
                <div
                    onClick={handleToggle}
                    className={`cursor-pointer md:cursor-default transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                        } md:opacity-100`}
                >
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-deepBlue' : 'text-gray-500'
                        } md:text-deepBlue mb-0 md:mb-2`}>
                        {title}
                    </h3>
                </div>

                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                    } md:grid-rows-[1fr] md:opacity-100 md:mt-2`}>
                    <div className="overflow-hidden">
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p
                                className="text-gray-600 font-light leading-relaxed text-lg"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhaseItem;