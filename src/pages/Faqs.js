import React, { useState } from 'react';
import FaqItem from '../components/FaqItem';
import MoveToUrlButton from '../components/MoveToUrlButton';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faqData'


const Faqs = () => {
    const faqsForDisplay = faqData.map(faq => ({
        question: faq.question,
        answer: faq.answerJSX
    }));

    const faqsForSchema = faqData.map(faq => ({
        q: faq.question,
        a: faq.answerText
    }));

    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const initialFaqsToShow = 4;

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleShowAllToggle = () => {
        setShowAll(!showAll);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsForSchema.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section id="faqs" className="py-6 sm:py-6 px-4 sm:px-6 lg:px-8">
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-lg text-primario font-semibold mb-12 fade-in">
                        Si no encuentras tu respuesta, no dudes en escribirnos.
                    </p>
                </div>

                {/* --- CAMBIO: Lógica de renderizado con animación --- */}
                <div className="space-y-4">
                    {/* Renderiza las primeras FAQs siempre */}
                    {faqsForDisplay.slice(0, initialFaqsToShow).map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}

                    {/* Anima la aparición del resto de las FAQs */}
                    <AnimatePresence>
                        {showAll && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-4 overflow-hidden"
                            >
                                {faqsForDisplay.slice(initialFaqsToShow).map((faq, index) => (
                                    <FaqItem
                                        key={index + initialFaqsToShow}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === (index + initialFaqsToShow)}
                                        onToggle={() => handleToggle(index + initialFaqsToShow)}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-8">
                    {faqsForDisplay.length > initialFaqsToShow && (
                        <div className="mb-8">
                            <button
                                onClick={handleShowAllToggle}
                                className="text-primario font-bold hover:underline"
                            >
                                {showAll ? 'Ver menos preguntas' : 'Ver más preguntas'}
                            </button>
                        </div>
                    )}
                    <div>
                        <MoveToUrlButton
                            name="¿Tienes otra duda? Contáctanos"
                            url="/contacto"
                            category="FAQ"
                            label="Boton Contactanos desde FAQ"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;