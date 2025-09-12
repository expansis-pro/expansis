// src/components/ServiceItem.js
import React, { useState } from 'react';

const ServiceItem = ({ icon, title, description, details }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="group h-80 w-full cursor-pointer [perspective:1000px]"
            onClick={handleFlip}
        >
            <div
                className={`relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
            >
                {/* Cara Frontal de la Tarjeta */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    {/* --- CAMBIO: Se ajustó el layout a justify-evenly y se eliminaron márgenes fijos --- */}
                    <div className="flex h-full flex-col items-center justify-evenly rounded-xl bg-white p-6 text-center border-t-4 border-primario">
                        <i className={`${icon} text-5xl text-primario`}></i>
                        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                        <p className="text-base text-gray-600">{description}</p>
                        <p className="text-sm font-semibold text-primario group-hover:underline">
                            Haz clic para saber más
                        </p>
                    </div>
                </div>

                {/* Cara Trasera de la Tarjeta */}
                <div className="absolute inset-0 rounded-xl bg-gray-800 p-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-left">
                            {details && details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;