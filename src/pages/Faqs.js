import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero';
import CtaButton from '../components/CtaButton';

// Coloca aquí la URL de tu backend de Chatbot (ej: en producción o localhost)
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const Faqs = () => {
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const initialFaqsToShow = 4;

    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    // 1. LLAMADA EN VIVO AL CEREBRO DEL CHATBOT
    useEffect(() => {
        window.scrollTo(0, 0);

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

    // --- MÉTODOS DE FORMATEO (Del Paso 1) ---
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
            <title>Preguntas Frecuentes | Expansis Pro</title>
            <link rel="canonical" href={canonicalUrl} />

            {/* 🌟 SCHEMA MARKUP DINÁMICO (Google leerá siempre tu versión actualizada automáticamente) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map((faq) => ({
                        "@type": "Question",
                        "name": faq.pregunta,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.respuesta // Texto limpio que viene del backend
                        }
                    }))
                })}
            </script>

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
                                answer={formatResponseText(faq.respuesta)} // Inyección del formateador dinámico
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
                                className="group flex items-center gap-2 text-primario hover:text-deepBlue transition-colors"
                            >
                                {showAll ? 'Ver menos preguntas' : 'Ver más preguntas'}
                                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}></i>
                            </button>
                        )}

                        <div className="pt-8 border-t border-gray-100 w-full text-center">
                            <p className="text-gray-600 font-light mb-6">¿Aún tienes dudas?</p>
                            <CtaButton to="/contacto" variant="primary">
                                Contáctanos directamente
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Faqs;