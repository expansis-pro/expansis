// src/pages/NotFound.js
import React from 'react';

import MoveToUrlButton from '../components/MoveToUrlButton'; // Asegúrate de que la ruta sea correcta

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-gray-700 p-4">
            <h1 className="text-6xl sm:text-8xl  text-primario mb-4">404</h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">¡Ups! Parece que te has perdido.</p>
            <p className="text-lg text-gray-600 mb-8 text-center">La página que buscas no existe.</p>

            <MoveToUrlButton
                name="Volver al Inicio"
                url="/"
                category="404 Not Found"
                label="Boton Volver al Inicio"
            />
        </div>
    );
};

export default NotFound;