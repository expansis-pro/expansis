// src/components/Whatsapp.jsx
import React from "react";
// 🟢 Corregimos la importación para usar el helper exportado
import { trackWhatsAppClick } from "../utils/trackingUtils";

const Whatsapp = () => {
    return (
        <section id="whatsapp" className="py-12 sm:py-16 px-4">
            <div className="max-w-4xl mx-auto text-center p-8 sm:p-16 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primario rounded-b-full"></div>

                <h2 className="text-3xl sm:text-4xl font-bold text-deepBlue mb-6">
                    ¿Tienes una idea en mente?
                </h2>

                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light">
                    Hablemos directamente por WhatsApp. Te asesoramos sin compromiso para darle vida a tu próximo paso digital.
                </p>

                {/* 🟢 Cambiamos la función para que use los parámetros correctos */}
                <button
                    onClick={() => trackWhatsAppClick("floating_card_section", "Consulta General")}
                    className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1eb956] text-white font-bold text-lg py-4 px-10 rounded-2xl shadow-xl shadow-green-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                    <i className="fa-brands fa-whatsapp mr-3 text-2xl"></i>
                    Conversemos
                </button>
            </div>
        </section>
    );
};

export default Whatsapp;