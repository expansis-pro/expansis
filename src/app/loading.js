'use client';

import React, { useState, useEffect } from 'react';

export default function Loading() {
    const [showDelayedMessage, setShowDelayedMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDelayedMessage(true);
        }, 20000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primario mb-4"></div>
            <p className="text-xl font-semibold">Cargando contenido...</p>

            {showDelayedMessage && (
                <p className="text-sm text-gray-400 mt-4 animate-fade-in">
                    Esto puede demorar unos minutos en conexiones lentas.
                </p>
            )}
        </div>
    );
}