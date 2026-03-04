import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import NotFound from './NotFound';
import CallToAction from '../components/CallToAction';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero'; import { sendWhatsAppMessage } from '../utils/trackingUtils';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    if (!service) {
        return <NotFound />;
    }

    // --- LÓGICA DE RASTREO Y CONTACTO ---
    const phoneNumber = "56965961086";





    // Filtrar FAQs por slug del servicio o generales
    const serviceFaqs = faqData.filter(faq =>
        faq.tags && (faq.tags.includes(slug) || faq.tags.includes('general'))
    );

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Schema.org para SEO
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "name": `Expansis Pro - ${service.title}`,
        "description": service.longDescription,
        "provider": {
            "@type": "Organization",
            "name": "Expansis Pro",
            "url": "https://expansispro.com/"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>

            {/* --- HEADER / HERO CON BOTÓN DE CONVERSIÓN --- */}
            <div className="relative">
                <SecondaryHero
                    title={service.title}
                    subtitle={service.longDescription}
                    icon={service.icon}
                />

                {/* BOTÓN 1: CONTACTO RÁPIDO (Debajo del Hero) */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 z-30 px-4">
                    <button
                        onClick={() => sendWhatsAppMessage(service.title)}
                        className="btn-primary"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        Cotizar {service.title}
                    </button>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="max-w-4xl mx-auto pt-24 pb-16 px-4">

                {/* Fases del Proyecto */}
                <section id="phases" className="mb-20">
                    <h2 className="text-center mb-12">Fases del Proyecto</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {service.phases.map((phase, index) => (
                            <div key={index} className="p-8 rounded-2xl shadow-sm border border-gray-100 bg-ghostWhite flex items-start gap-6">
                                <span className="flex-shrink-0 w-10 h-10 bg-primario text-white rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="text-deepBlue text-xl font-bold mb-2">{phase.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección de Inversión */}
                <section id="pricing" className="mb-20 px-2">
                    <h2 className="text-center mb-12">Inversión y Escalabilidad</h2>

                    <div className="bg-deepBlue text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10">
                        <div className="relative z-10 p-8 md:p-16 flex flex-col items-center">

                            <span className="bg-primario/20 text-primario px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-6 border border-primario/30">
                                Punto de Partida
                            </span>

                            <div className="text-center">
                                <p className="text-5xl md:text-7xl font-bold text-white">
                                    {service.pricing.from}
                                </p>
                                <p className="text-primario text-sm font-medium mt-2">Configuración Base Esencial</p>
                            </div>

                            <div className="w-full max-w-xs h-[1px] bg-white/10 my-8"></div>

                            <div className="w-full max-w-md">
                                <p className="text-center text-white/60 text-sm mb-6">
                                    Ideal para iniciar tu presencia digital con estándares profesionales:
                                </p>

                                <ul className="space-y-4">
                                    {service.pricing.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <i className="fa-solid fa-check text-primario mt-1"></i>
                                            <span className="text-white/80 font-light text-sm md:text-base">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-xs uppercase tracking-widest text-primario font-bold mb-3">Escalabilidad Disponible</p>
                                    <p className="text-white/70 text-sm font-light">
                                        ¿Necesitas más potencia? Podemos integrar: <strong>E-commerce, Paneles autogestionables, SEO avanzado, o Integraciones con CRMs.</strong>
                                    </p>
                                </div>
                            </div>

                            {/* BOTÓN 2: CONTACTO DESDE PRECIOS */}
                            <div className="mt-12 w-full max-w-xs">
                                <button
                                    onClick={() => sendWhatsAppMessage(service.title)}
                                    className="btn-primary w-full text-center block"
                                >
                                    Cotizar Proyecto a Medida
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                {serviceFaqs.length > 0 && (
                    <section id="service-faq" className="mb-20">
                        <h2 className="text-center mb-12">Preguntas Frecuentes</h2>
                        <div className="space-y-2">
                            {serviceFaqs.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answerJSX}
                                    isOpen={openFaqIndex === index}
                                    onToggle={() => handleFaqToggle(index)}
                                />
                            ))}
                        </div>
                    </section>
                )}

                <CallToAction
                    title={`¿Interesado en ${service.title}?`}
                    serviceName={service.title}
                    description="Conversemos sobre tu proyecto y cómo podemos ayudarte a crecer."
                />

                <div className="text-center mt-12">
                    <Link
                        to="/servicios"
                        className="text-primario font-medium hover:underline inline-flex items-center gap-2 transition-all"
                    >
                        <span>&larr;</span> Volver a ver todos los servicios
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;