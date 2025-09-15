import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import NotFound from './NotFound';
import CallToAction from '../components/CallToAction';
import FaqItem from '../components/FaqItem';
import { faqData } from '../data/faqData';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    if (!service) {
        return <NotFound />;
    }

    const serviceFaqs = faqData.filter(faq =>
        service.faqQuestions?.includes(faq.question)
    );

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto py-12">
            <header className="text-center mb-12">
                <i className={`${service.icon} text-6xl text-primario mb-4`}></i>
                <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
                <p className="text-xl text-gray-600 mt-2 text-justify">{service.longDescription}</p>
            </header>

            <section id="phases" className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Fases del Proyecto</h2>
                <div className="space-y-8">
                    {service.phases.map((phase, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md border-l-4 border-primario text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">{phase.title}</h3>
                            {/* --- CAMBIO: Se eliminó "text-justify" --- */}
                            <p className="mt-2 text-gray-700">{phase.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="pricing" className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Valores</h2>
                <div className="bg-white p-8 rounded-lg shadow-2xl text-left sm:text-center border-t-4 border-primario">
                    <p className="text-lg text-gray-600">Desde</p>
                    <p className="text-4xl sm:text-5xl font-bold text-gray-900 my-4">{service.pricing.from}</p>
                    <ul className="space-y-2 text-gray-700">
                        {service.pricing.features.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start sm:justify-center">
                                <i className="fa-solid fa-check text-green-500 mr-2"></i>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {serviceFaqs && serviceFaqs.length > 0 && (
                <section id="service-faq" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
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
                description="Conversemos sobre tu proyecto y cómo podemos ayudarte a crecer."
            />

            <div className="text-center mt-8">
                <Link
                    to="/servicios"
                    className="text-primario font-bold hover:underline"
                >
                    &larr; Volver a Todos los Servicios
                </Link>
            </div>
        </div>
    );
};

export default ServicePage;