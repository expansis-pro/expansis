import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectSection from '../components/ProjectSection';

import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import NotFound from './NotFound';
import PhaseItem from '../components/PhaseItem';
import CallToAction from '../components/CallToAction';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero';
import { sendWhatsAppMessage } from '../utils/trackingUtils';
import { Helmet } from 'react-helmet-async';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [openPhaseIndex, setOpenPhaseIndex] = useState(0); // Empezamos con la Fase 1 abierta

    if (!service) {
        return <NotFound />;
    }


    // Filtrar FAQs por slug del servicio o generales
    const serviceFaqs = faqData.filter(faq =>
        faq.tags && (faq.tags.includes(slug) || faq.tags.includes('general'))
    );

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    // --- SCHEMA: BREADCRUMBS (Miga de pan) ---
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://expansispro.com/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://expansispro.com/servicios" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://expansispro.com/servicios/${slug}` }
        ]
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
        <div className="min-h-screen ">

            <Helmet>
                {/* Título único por servicio */}
                <title>{`${service.title} | Expansis Pro`}</title>

                {/* Descripción única (tomada de tus datos) */}
                <meta name="description" content={service.longDescription} />

                {/* Canonical URL para evitar contenido duplicado */}
                <link rel="canonical" href={`https://expansispro.com/servicios/${slug}`} />

                {/* Open Graph para redes sociales */}
                <meta property="og:title" content={`${service.title} | Expansis Pro`} />
                <meta property="og:description" content={service.longDescription} />
                <meta property="og:url" content={`https://expansispro.com/servicios/${slug}`} />
            </Helmet>

            {/* Inyectamos ambos Schemas */}
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

            {/* --- HEADER / HERO CON BOTÓN DE CONVERSIÓN --- */}
            <div className="relative">
                <SecondaryHero
                    title={service.title}
                    subtitle={service.longDescription}
                    icon={service.icon}
                    img={`/assets/${service.slug}-hero.webp`}
                />

                {/* Floating CTA Button */}
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
            <div >

                {/* --- NUEVA SECCIÓN DE FASES DESPLEGABLES --- */}
                <section id="phases" className="section-padding pt-32">
                    <div className="container-pro">

                        <h2 className="text-center mb-12  text-deepBlue">Fases del Proyecto</h2>
                        <div className="space-y-2">
                            {service.phases.map((phase, index) => (
                                <PhaseItem
                                    key={index}
                                    number={index + 1}
                                    title={phase.title}
                                    description={phase.description}
                                    isOpen={openPhaseIndex === index}
                                    isLast={index === service.phases.length - 1} // <--- Nueva Prop
                                    onToggle={() => setOpenPhaseIndex(openPhaseIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN DE INVERSIÓN --- */}
                <section id="pricing" className="section-padding bg-ghostWhite">
                    <div className="container-pro">

                        {/* 1. ENCABEZADO DE SECCIÓN (Fuera de la card para que respire) */}
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-deepBlue ">Inversión y Escalabilidad</h2>
                            <p className="section-subtitle">
                                Presupuestos transparentes diseñados para la expansión de tu marca.
                            </p>
                        </div>

                        {/* 2. CARD MAESTRA DE PRECIOS */}
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-deepBlue text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/10">

                                {/* Decoración de fondo */}
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primario/10 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10 p-8 md:p-16 lg:p-20">

                                    {/* GRID DE DOS COLUMNAS (Desktop) */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">

                                        {/* COLUMNA IZQUIERDA: El Precio */}
                                        <div className="text-center lg:text-left">
                                            <span className="bg-primario text-deepBlue px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-black mb-8 inline-block">
                                                Punto de Partida
                                            </span>

                                            <div className="mb-6">
                                                <span className="text-sm text-white block uppercase tracking-widest mb-2">Inversión desde</span>
                                                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                                                    <p className="text-6xl md:text-5xl lg:text-6xl  text-white tracking-tighter leading-none">
                                                        {service.pricing.from}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-primario text-sm font-medium leading-relaxed italic opacity-90">
                                                IVA Incluido <br className="hidden lg:block" />
                                                Configuración Base Profesional
                                            </p>
                                        </div>

                                        {/* COLUMNA DERECHA: Características */}
                                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                            <p className="text-white/60 text-sm mb-8 font-light text-center lg:text-left">
                                                Tu proyecto incluye estándares de alta gama:
                                            </p>

                                            <ul className="space-y-5">
                                                {service.pricing.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-4">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-primario/20 flex items-center justify-center flex-shrink-0">
                                                            <i className="fa-solid fa-check text-primario text-[10px]"></i>
                                                        </div>
                                                        <span className="text-white/80 font-light text-base leading-snug">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* --- ÁREA DE ACCIÓN (Debajo de las dos columnas) --- */}
                                    <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center w-full">

                                        {service.pricing.scalability && (
                                            <div className="max-w-2xl text-center mb-12">
                                                <h4 className="text-xs uppercase tracking-[0.3em] text-primario  mb-4">
                                                    {service.pricing.scalability.title}
                                                </h4>
                                                <div
                                                    className="text-white/50 text-sm font-light leading-relaxed italic"
                                                    dangerouslySetInnerHTML={{ __html: service.pricing.scalability.description }}
                                                />
                                            </div>
                                        )}

                                        <button
                                            onClick={() => sendWhatsAppMessage(service.title)}
                                            className="btn-primary py-5 px-12 text-lg shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
                                        >
                                            <i className="fa-brands fa-whatsapp text-2xl"></i>
                                            Cotizar {service.title}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // Dentro del return de ServicePage: */}
                <ProjectSection
                    title="Casos de Éxito"
                    subtitle={`Mira cómo hemos aplicado la ingeniería de ${service.title} en otros ecosistemas.`}
                    limit={2} // Aquí puedes limitar a 2 para no alargar tanto la página de servicios
                />
                {/* FAQs */}
                {serviceFaqs.length > 0 && (
                    <section id="service-faq" className="section-padding">
                        <div className="container-pro">

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
                        </div>
                    </section>
                )}

                <CallToAction
                    title={`¿Interesado en ${service.title}?`}
                    serviceName={service.title}
                    description="Conversemos sobre tu proyecto y cómo podemos ayudarte a crecer."
                />

                {/* --- NAVEGACIÓN INFERIOR --- */}
                <section className="pb-20">
                    <div className="container-pro">
                        <div className="flex justify-center">
                            <Link
                                to="/servicios"
                                className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-deepBlue/5 text-deepBlue  rounded-2xl hover:border-primario hover:text-primario transition-all duration-300"
                            >
                                {/* Flecha con animación de "empuje" hacia la izquierda */}
                                <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-2"></i>

                                <span className="tracking-tight">
                                    Explorar todas las <span className="text-primario">especialidades</span>
                                </span>

                                {/* Sutil brillo al hacer hover */}
                                <div className="absolute inset-0 rounded-2xl bg-primario/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicePage;