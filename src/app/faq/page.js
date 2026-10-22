// src/app/faq/page.js
'use client';

import React, { useState } from 'react';
import FaqItem from '@/components/FaqItem';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';
import { faqsData } from '@/data/faqsData';

const categories = [
    { label: "Todas", tag: "all" },
    { label: "Profesionales", tag: "marca-personal-profesionales" },
    { label: "Empresas B2B", tag: "empresas-b2b" },
    { label: "E-commerce", tag: "ecommerce" },
    { label: "Facturación & Pauta", tag: "pauta" }
];

export default function FaqsPage() {
    const [selectedTag, setSelectedTag] = useState("all");
    const [openIndex, setOpenIndex] = useState(null);

    // Filtro reactivo según la categoría seleccionada
    const filteredFaqs = selectedTag === "all"
        ? faqsData
        : faqsData.filter(faq => faq.tags && faq.tags.includes(selectedTag));

    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            {/* Schema SEO para Google FAQ */}
            <JsonLd
                type="FAQPage"
                data={{
                    mainEntity: faqsData.map(item => ({
                        "@type": "Question",
                        "name": item.pregunta,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.respuesta_web || item.respuesta
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

                    {/* Selector de Categorías / Tags */}
                    <div className="flex flex-wrap gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.tag}
                                onClick={() => {
                                    setSelectedTag(cat.tag);
                                    setOpenIndex(null);
                                }}
                                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${selectedTag === cat.tag
                                        ? "bg-primario border-primario text-white font-medium"
                                        : "bg-[#07090e] border-white/15 text-zinc-400 hover:border-white/40 hover:text-white"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Listado de Preguntas */}
            <section className="py-20 px-4 border-b border-white/10">
                <div className="container-pro max-w-4xl mx-auto">
                    <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 font-mono text-xs">
                        <span className="text-zinc-500 uppercase tracking-wider">
                            CONSULTAS DISPONIBLES: [{filteredFaqs.length}]
                        </span>
                        <span className="text-primario uppercase tracking-wider hidden sm:block">
                            RESPUESTAS TÉCNICAS OFICIALES
                        </span>
                    </div>

                    <div className="space-y-3">
                        {filteredFaqs.map((faq, index) => (
                            <FaqItem
                                key={faq.id || index}
                                index={index}
                                question={faq.pregunta}
                                answer={faq.respuesta_web || faq.respuesta}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
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