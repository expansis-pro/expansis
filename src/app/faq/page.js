'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaqItem from '@/components/FaqItem';
import SecondaryHero from '@/components/SecondaryHero';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function FaqsPage() {
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const initialFaqsToShow = 4;

    useEffect(() => {
        fetch(`${API_URL}/api/faq`)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    setFaqData(res.data);
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

    const handleShowAllToggle = () => {
        setShowAll(!showAll);
    };

    const parseBoldText = (text) => {
        const parts = text.split(/(\*\*?.*?\*\*?)/g);
        return parts.map((part, i) => {
            if (part.startsWith('*') && part.endsWith('*')) {
                return <strong key={i} className="font-semibold text-gray-900">{part.replace(/\*/g, '')}</strong>;
            }
            return part;
        });
    };

    const formatResponseText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, index) => {
            let trimmed = line.trim();
            if (!trimmed) return <div key={index} className="h-2" />;
            if (trimmed.startsWith('•')) {
                return (
                    <ul key={index} className="list-disc pl-5 my-1 text-gray-700">
                        <li>{parseBoldText(trimmed.substring(1).trim())}</li>
                    </ul>
                );
            }
            return <p key={index} className="text-justify mb-2 text-gray-700">{parseBoldText(trimmed)}</p>;
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-deepBlue text-white">
                <p className="animate-pulse">Sincronizando base de conocimiento...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen">
            <JsonLd
                id="faqs-page-schema"
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map(faq => ({
                        "@type": "Question",
                        "name": faq.pregunta,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.respuesta
                        }
                    }))
                }}
            />

            <SecondaryHero
                title="Preguntas Frecuentes"
                subtitle="Si no encuentras tu respuesta, no dudes en escribirnos. Estamos para ayudarte."
                icon="fa-solid fa-circle-question"
            />

            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-2">
                        {faqData.slice(0, initialFaqsToShow).map((faq, index) => (
                            <FaqItem
                                key={faq.id || index}
                                question={faq.pregunta}
                                answer={formatResponseText(faq.respuesta)}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}

                        <AnimatePresence>
                            {showAll && (
                                <motion.div
                                    key="extra-content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: 1,
                                        height: 'auto',
                                        transition: { height: { duration: 0.5, ease: "easeInOut" }, opacity: { duration: 0.3 } }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0,
                                        transition: { height: { duration: 0.4, ease: "easeInOut" }, opacity: { duration: 0.2 } }
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="space-y-2 pt-2">
                                        {faqData.slice(initialFaqsToShow).map((faq, index) => (
                                            <FaqItem
                                                key={faq.id || (index + initialFaqsToShow)}
                                                question={faq.pregunta}
                                                answer={formatResponseText(faq.respuesta)}
                                                isOpen={openIndex === (index + initialFaqsToShow)}
                                                onToggle={() => handleToggle(index + initialFaqsToShow)}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="text-center mt-12 flex flex-col items-center gap-8">
                        {faqData.length > initialFaqsToShow && (
                            <button
                                onClick={handleShowAllToggle}
                                className="group flex items-center gap-2 text-primario hover:text-deepBlue transition-colors cursor-pointer"
                            >
                                {showAll ? 'Ver menos preguntas' : 'Ver más preguntas'}
                                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}></i>
                            </button>
                        )}
                    </div>
                </div>

                <CallToAction
                    source="FAQs - Final de Página"
                    serviceName="Información General"
                    title="¿No encontraste lo que buscabas?"
                    description="Hablemos de tu proyecto. Elige la opción que más te acomode."
                />
            </section>
        </main>
    );
}