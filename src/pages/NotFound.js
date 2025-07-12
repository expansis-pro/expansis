// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Necesitas Link para volver a Home

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 p-4">
            <h1 className="text-6xl sm:text-8xl font-bold text-primario mb-4">404</h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">¡Ups! Parece que te has perdido.</p>
            <p className="text-lg text-gray-600 mb-8 text-center">La página que buscas no existe.</p>
            <Link
                to="/"
                className="inline-block bg-primario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105"
            >
                Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFound;