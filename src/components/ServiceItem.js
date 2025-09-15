import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon, title, description, slug }) => {
    const isLink = slug !== "mision" && slug !== "vision";
    const Tag = isLink ? Link : 'div';

    return (
        <Tag
            to={isLink ? `/servicios/${slug}` : undefined}
            // --- CAMBIO: Ancho responsivo. w-72 en móvil, w-80 en escritorio ---
            className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl border-t-4 border-primario transition-shadow duration-300 flex-shrink-0 w-72 md:w-80 h-80 flex flex-col my-4 snap-center"
        >
            <div className="flex flex-col items-center text-center space-y-4 flex-grow justify-center">
                <i className={`${icon} text-5xl text-primario`}></i>
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="text-base text-gray-600">{description}</p>
                {isLink && (
                    <p className="text-sm font-semibold text-primario group-hover:underline mt-auto pt-4">
                        Ver más detalles
                    </p>
                )}
            </div>
        </Tag>
    );
};

export default ServiceItem;