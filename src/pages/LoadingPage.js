// src/pages/LoadingPage.js
import React, { useState, useEffect } from 'react'; // Importar useState y useEffect

const LoadingPage = () => {
    // Estado para controlar la visibilidad del mensaje de retraso
    const [showDelayedMessage, setShowDelayedMessage] = useState(false);

    useEffect(() => {
        // Establecer un temporizador para mostrar el mensaje después de 20 segundos
        const timer = setTimeout(() => {
            setShowDelayedMessage(true);
        }, 20000); // 20000 milisegundos = 20 segundos

        // Limpiar el temporizador si el componente se desmonta antes de que se active
        return () => clearTimeout(timer);
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primario mb-4"></div>
            <p className="text-xl font-semibold">Cargando contenido...</p>

            {/* Mensaje que aparece después de 20 segundos */}
            {showDelayedMessage && (
                <p className="text-sm text-gray-400 mt-4 animate-fade-in">
                    Esto puede demorar unos minutos en conexiones lentas.
                </p>
            )}
        </div>
    );
};

export default LoadingPage;