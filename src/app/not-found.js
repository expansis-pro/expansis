import React from 'react';
import MoveToUrlButton from '@/components/MoveToUrlButton';

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#020617] text-white p-6 overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#f8fafc 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primario/5 rounded-full blur-[120px] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center max-w-lg">
                <h1 className="text-[120px] sm:text-[160px] font-black text-primario leading-none mb-4 tracking-tighter opacity-80">
                    404
                </h1>

                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 text-center uppercase tracking-wider">
                    Error de Arquitectura
                </h2>

                <p className="text-gray-400 font-light text-lg mb-10 text-center leading-relaxed">
                    La coordenada solicitada no existe o ha sido reubicada dentro de nuestra infraestructura digital.
                </p>

                <MoveToUrlButton
                    name="Reiniciar Navegación"
                    url="/"
                    category="404 Not Found"
                    label="Boton Volver al Inicio"
                    className="shadow-xl shadow-primario/20"
                />
            </div>
        </div>
    );
}