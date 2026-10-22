// src/components/CallToAction.js (Rediseño Estilo Terminal)
'use client';
import React from 'react';

export default function CallToAction({ title, description, serviceName = "Información General", source }) {
    const handleContactClick = () => {
        const cleanLocation = source ? `cta_block_${source.toLowerCase().replace(/ /g, '_')}` : 'cta_block_generic';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'click_contacto_manual',
            servicio_seleccionado: serviceName,
            click_location: cleanLocation,
            page_url: window.location.href,
        });
    };

    return (
        <section id="call-to-action" className="py-24 bg-[#0a0d14] text-white">
            <div className="container-pro max-w-5xl mx-auto px-4">
                <div className="border border-white/15 bg-[#0f1420] p-8 sm:p-16 text-center relative">

                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-3">
                        [ INICIO DE EVALUACIÓN ]
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                        {title || '¿Listo para implementar tu canal digital?'}
                    </h2>

                    <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
                        {description || 'Evaluaremos la viabilidad técnica y comercial de tu proyecto para formular una propuesta formal sin fricciones.'}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                        <button
                            onClick={() => {
                                handleContactClick();
                                window.dispatchEvent(new Event('open-contact-drawer'));
                            }}
                            className="w-full sm:w-auto py-4 px-10 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-primario/90 transition-all cursor-pointer flex items-center justify-center gap-3"
                        >
                            <span>Abrir Formulario de Diagnóstico</span>
                            <span>→</span>
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 font-mono text-[11px] text-zinc-500">
                        RESPUESTA ESTIMADA: &lt; 24 HORAS HÁBILES // SIN COSTOS DE DIAGNÓSTICO
                    </div>

                </div>
            </div>
        </section>
    );
}