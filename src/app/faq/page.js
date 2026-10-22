// src/app/faq/page.js
'use client';

import React, { useState, useEffect } from 'react';
import FaqItem from '@/components/FaqItem';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function FaqsPage() {
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const initialFaqsToShow = 5;

    useEffect(() => {
        fetch(`${API_URL}/api/faq`)
            .then(res => res.json())
            .then(res => {
                // ✅ Extraemos el arreglo de res.data, igual que lo tenías originalmente
                if (res.success && Array.isArray(res.data)) {
                    setFaqData(res.data);
                } else {
                    setFaqData([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error cargando las FAQs del servidor:", err);
                setLoading(false);
            });
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const displayedFaqs = showAll ? faqData : faqData.slice(0, initialFaqsToShow);

    // Estado de Carga Oscuro
    if (loading) {
        return (
            <main className="min-h-screen bg-[#07090e] text-white flex flex-col items-center justify-center font-mono">
                <div className="w-10 h-10 border-2 border-primario border-t-transparent animate-spin mb-4" />
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Sincronizando Base de Preguntas...
                </span>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            {/* Schema SEO para Google FAQ */}
            <JsonLd
                type="FAQPage"
                data={{
                    mainEntity: faqData.map(item => ({
                        "@type": "Question",
                        "name": item.pregunta,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.respuesta
                        }
                    }))
                }}
            />

            {/* Cabecera Técnica */}
            <section className="relative pt-36 pb-20 px-4 border-b border-white/10 bg-[#0a0d14] overflow-hidden">
                <div className="container-pro max-w-4xl mx-auto relative z-10 text-left">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-3">
                        [ CENTRO DE CONSULTA &amp; TRANSPARENCIA ]
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
                        Respuestas directas sobre nuestros programas de ingeniería web, modelos de cobro, gestión de pauta y entrega de repositorios.
                    </p>
                </div>
            </section>

            {/* Listado de Preguntas */}
            <section className="py-20 px-4 border-b border-white/10">
                <div className="container-pro max-w-4xl mx-auto">
                    <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 font-mono text-xs">
                        <span className="text-zinc-500 uppercase tracking-wider">
                            REGISTROS DISPONIBLES: [{faqData.length}]
                        </span>
                        <span className="text-primario uppercase tracking-wider hidden sm:block">
                            DESPLIEGUE MODULAR
                        </span>
                    </div>

                    <div className="space-y-3">
                        {displayedFaqs.map((faq, index) => (
                            <FaqItem
                                key={faq.id || index}
                                index={index}
                                question={faq.pregunta}
                                answer={faq.respuesta}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>

                    {/* Botón de Expansión Estilo Terminal */}
                    {faqData.length > initialFaqsToShow && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="py-3.5 px-8 border border-white/20 text-zinc-300 text-xs font-mono uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all cursor-pointer inline-flex items-center gap-3"
                            >
                                <span>{showAll ? 'Ver Menos Preguntas' : `Cargar Más Consultas (${faqData.length - initialFaqsToShow})`}</span>
                                <span className="text-primario font-bold">{showAll ? '▲' : '▼'}</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <CallToAction
                source="Página de Preguntas Frecuentes"
                serviceName="Información General"
                title="¿Tienes una duda técnica particular?"
                description="Escríbenos directamente o agenda una sesión de evaluación para revisar la factibilidad de tu proyecto sin compromiso."
            />
        </main>
    );
}