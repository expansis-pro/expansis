// src/pages/ServicePage.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import NotFound from './NotFound';
import CallToAction from '../components/CallToAction';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero'; // <-- Importación

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    if (!service) {
        return <NotFound />;
    }

    const serviceFaqs = faqData.filter(faq =>
        faq.tags && (faq.tags.includes(slug) || faq.tags.includes('general'))
    );

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

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

            {/* Uso del nuevo componente */}
            <SecondaryHero
                title={service.title}
                subtitle={service.longDescription}
                icon={service.icon}
            />

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="max-w-4xl mx-auto py-16 px-4">

                {/* Fases del Proyecto */}
                <section id="phases" className="mb-20">
                    <h2 className="text-center mb-12">Fases del Proyecto</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {service.phases.map((phase, index) => (
                            <div key={index} className="p-8 rounded-2xl shadow-sm border border-gray-100 bg-ghostWhite flex items-start gap-6">
                                <span className="flex-shrink-0 w-10 h-10 bg-primario text-ghostWhite rounded-full flex items-center justify-center ">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="text-deepBlue">{phase.title}</h3>
                                    <p className="text-gray-600 font-light">{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Valores / Pricing */}
                <section id="pricing" className="mb-20">
                    <h2 className="text-center mb-12">Inversión</h2>
                    <div className="bg-deepBlue p-10 sm:p-16 rounded-[2.5rem] shadow-2xl text-center text-ghostWhite relative overflow-hidden">
                        {/* Decoración sutil */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primario/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                        <p className="text-sm uppercase tracking-widest text-primario font-semibold mb-2">Valor Inicial</p>
                        <p className="text-5xl sm:text-6xl  my-4">{service.pricing.from}</p>

                        <ul className="mt-10 space-y-4 inline-block text-left">
                            {service.pricing.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-ghostWhite/80">
                                    <i className="fa-solid fa-check text-primario"></i>
                                    <span className="font-light">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* FAQs específicas */}
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

                {/* Call to Action Final */}
                <CallToAction
                    source={`Servicio: ${service.title}`} // <--- Esto le pasará el nombre real (ej: Servicio: Desarrollo Web)
                    title={`¿Listo para potenciar tu ${service.title}?`}
                    description="Conversemos y diseñemos una solución a la medida de tus objetivos de negocio."
                />

                <div className="text-center mt-12">
                    <Link
                        to="/servicios"
                        className="text-primario font-medium hover:underline inline-flex items-center gap-2"
                    >
                        <span>&larr;</span> Volver a ver todos los servicios
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;