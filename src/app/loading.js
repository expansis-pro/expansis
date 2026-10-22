// src/app/loading.js
'use client';

import React, { useState, useEffect } from 'react';

export default function Loading() {
    const [showDelayedMessage, setShowDelayedMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDelayedMessage(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#07090e] text-zinc-300 font-mono">
            <div className="animate-spin rounded-none h-12 w-12 border-2 border-primario border-t-transparent mb-4"></div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Cargando infraestructura...</p>

            {showDelayedMessage && (
                <p className="text-[11px] text-zinc-600 mt-4 font-mono animate-fadeIn">
                    [ CONEXIÓN LENTA: SINCRONIZANDO DATOS ]
                </p>
            )}
        </div>
    );
}