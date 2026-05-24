// src/pages/Faqs.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faqData';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero';
import CtaButton from '../components/CtaButton';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const initialFaqsToShow = 4;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // 2. CONFIGURAMOS EL CANONICAL DINÁMICO
    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleShowAllToggle = () => {
        setShowAll(!showAll);
    };

    const faqsForDisplay = faqData.map(faq => ({
        question: faq.question,
        answer: faq.answerJSX
    }));

    // --- OPCIONAL: SCHEMA MARKUP PARA FAQ (Altamente recomendado para Google) ---
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answerText || item.question
            }
        }))
    };

    return (
        <main className=" min-h-screen">
            {/* --- CONFIGURACIÓN SEO (HELMET) --- */}
            <Helmet>
                <title>Preguntas Frecuentes | Desarrollo Web y Marketing en Chile | Expansis Pro</title>
                <meta
                    name="description"
                    content="Resuelve tus dudas sobre el diseño de landing pages, desarrollo de e-commerce a medida y campañas de Google/Meta Ads en Chile. Todo lo que necesitas saber antes de iniciar tu proyecto."
                />
                {/* Canonical automatizado */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Metas para Redes Sociales actualizados */}
                <meta property="og:title" content="Preguntas Frecuentes | Desarrollo Web y Marketing en Chile | Expansis Pro" />
                <meta property="og:description" content="¿Tienes dudas sobre cómo escalar tu canal digital en Chile? Resolvemos tus dudas sobre desarrollo web, e-commerce y publicidad." />
                <meta property="og:url" content={canonicalUrl} />
            </Helmet>
            {/* --- AÑADE ESTO AQUÍ --- */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
            <SecondaryHero
                title="Preguntas Frecuentes"
                subtitle="Si no encuentras tu respuesta, no dudes en escribirnos. Estamos para ayudarte."
                icon="fa-solid fa-circle-question"
            />

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">

                    <div className="space-y-2">
                        {/* FAQs SIEMPRE VISIBLES */}
                        {faqsForDisplay.slice(0, initialFaqsToShow).map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}

                        {/* FAQs EXTRA CON ANIMACIÓN DE ENTRADA Y SALIDA */}
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
                                        {faqsForDisplay.slice(initialFaqsToShow).map((faq, index) => (
                                            <FaqItem
                                                key={index + initialFaqsToShow}
                                                question={faq.question}
                                                answer={faq.answer}
                                                isOpen={openIndex === (index + initialFaqsToShow)}
                                                onToggle={() => handleToggle(index + initialFaqsToShow)}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* BOTÓN MOSTRAR MÁS/MENOS */}
                    <div className="text-center mt-12 flex flex-col items-center gap-8">
                        {faqsForDisplay.length > initialFaqsToShow && (
                            <button
                                onClick={handleShowAllToggle}
                                className="group flex items-center gap-2 text-primario  hover:text-deepBlue transition-colors"
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