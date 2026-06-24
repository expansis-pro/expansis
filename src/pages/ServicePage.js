// src/pages/ServicePage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import ProjectSection from '../components/ProjectSection';
import ImageTextCTA from '../components/ImageTextCTA';
import { servicesData } from '../data/servicesData';
import NotFound from './NotFound';
import PhaseItem from '../components/PhaseItem';
import CallToAction from '../components/CallToAction';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero';
import { trackWhatsAppClick } from '../utils/trackingUtils';

// Importamos los formateadores globales y centralizados
import { formatResponseText } from '../utils/faqFormatter';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [openPhaseIndex, setOpenPhaseIndex] = useState(0);

    // Estados para las FAQs dinámicas del Chatbot
    const [serviceFaqs, setServiceFaqs] = useState([]);
    const [loadingFaqs, setLoadingFaqs] = useState(true);

    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    // Efecto para cargar y filtrar las FAQs según el slug activo de la landing
    useEffect(() => {
        if (!service) return;

        setLoadingFaqs(true);
        fetch(`${API_URL}/api/faq`)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    // Filtramos dinámicamente las preguntas del servicio o las generales
                    const filtered = res.data.filter(faq =>
                        faq.tags && (faq.tags.includes(slug) || faq.tags.includes('general'))
                    );
                    setServiceFaqs(filtered);
                }
                setLoadingFaqs(false);
            })
            .catch(err => {
                console.error("Error al sincronizar FAQs de servicios:", err);
                setLoadingFaqs(false);
            });
    }, [slug, service]);

    if (!service) {
        return <NotFound />;
    }

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const cleanHeroTitle = service.seo?.title ? service.seo.title.split('|')[0].trim() : service.title;

    return (
        <div className="min-h-screen ">
            <title>{service.seo?.title || service.title}</title>
            <meta name="description" content={service.seo?.description || service.description} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:title" content={service.seo?.title || service.title} />
            <meta property="og:description" content={service.seo?.description || service.description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="article" />
            <meta property="og:image" content={`${baseUrl}/assets/images/${service.slug}-hero.webp`} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": service.title,
                    "description": service.seo?.description || service.description,
                    "provider": {
                        "@type": "ProfessionalService",
                        "@id": "https://expansispro.com/#agency"
                    }
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://expansispro.com/" },
                        { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://expansispro.com/servicios" },
                        { "@type": "ListItem", "position": 3, "name": service.title, "item": canonicalUrl }
                    ]
                })}
            </script>

            <div className="relative">
                <SecondaryHero
                    title={cleanHeroTitle}
                    subtitle={service.longDescription}
                    icon={service.icon}
                    img={`/assets/images/${service.slug}-hero.webp`}
                />
                <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 z-30 px-4">
                    <button
                        onClick={() => trackWhatsAppClick('service_hero_floating', service.title)}
                        className="btn-primary"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        Cotizar {service.title}
                    </button>
                </div>
            </div>

            <div>
                {service.videoSection && (
                    <ImageTextCTA
                        subtitle={service.videoSection.subtitle}
                        title={service.videoSection.title}
                        text={service.videoSection.text}
                        imageDesktop={service.videoSection.imageDesktop}
                        alt={service.videoSection.alt}
                        imageSide={service.videoSection.imageSide}
                        vimeoId={service.videoSection.vimeoId}
                        buttonContent="Cotizar por WhatsApp"
                        buttonLink={`https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                        buttonVariant="primary"
                        secondaryButtonContent="Formulario de Contacto"
                        secondaryButtonLink="/contacto"
                        secondaryButtonVariant="outline"
                    />
                )}

                {service.targetAudience && (
                    <section id="service-target-section">
                        <ImageTextCTA
                            subtitle={service.targetAudience.subtitle}
                            title={service.targetAudience.title}
                            text={service.targetAudience.text}
                            imageDesktop="/assets/images/expansisPro_target.webp"
                            alt={service.targetAudience.alt}
                            imageSide={service.targetAudience.imageSide}
                            buttonContent="Evaluar mi Negocio"
                            buttonLink={`https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20quiero%20validar%20mi%20perfil%20para%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                            buttonVariant="primary"
                        />
                    </section>
                )}

                <section id="pricing" className="section-padding bg-ghostWhite">
                    <div className="container-pro">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-deepBlue ">Inversión y Escalabilidad</h2>
                            <p className="section-subtitle">Presupuestos transparentes diseñados para la expansión de tu marca.</p>
                        </div>
                        <div className="bg-deepBlue text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/10">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primario/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 p-8 md:p-16 lg:p-20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
                                    <div className="text-center lg:text-left">
                                        <span className="bg-primario text-deepBlue px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-black mb-8 inline-block">Punto de Partida</span>
                                        <div className="mb-6">
                                            <span className="text-sm text-white block uppercase tracking-widest mb-2">Inversión desde</span>
                                            <div className="flex items-baseline justify-center lg:justify-start gap-2">
                                                <p className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-none">{service.pricing.from}</p>
                                            </div>
                                        </div>
                                        <p className="text-primario text-sm font-medium leading-relaxed italic opacity-90">IVA Incluido <br className="hidden lg:block" />Configuración Base Profesional</p>
                                    </div>
                                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                        <p className="text-white/60 text-sm mb-8 font-light text-center lg:text-left">Tu proyecto incluye estándares de alta gama:</p>
                                        <ul className="space-y-5">
                                            {service.pricing.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-4">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-primario/20 flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-check text-primario text-[10px]"></i></div>
                                                    <span className="text-white/80 font-light text-base leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center w-full">
                                    {service.pricing.scalability && (
                                        <div className="max-w-2xl text-center mb-12">
                                            <h4 className="text-xs uppercase tracking-[0.3em] text-primario  mb-4">{service.pricing.scalability.title}</h4>
                                            <div className="text-white/50 text-sm font-light leading-relaxed italic" dangerouslySetInnerHTML={{ __html: service.pricing.scalability.description }} />
                                        </div>
                                    )}
                                    <button onClick={() => trackWhatsAppClick('service_pricing_card', service.title)} className="btn-primary py-5 px-12 text-lg shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"><i className="fa-brands fa-whatsapp text-2xl"></i>Cotizar {service.title}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="phases" className="section-padding pt-32">
                    <div className="container-pro">
                        <h2 className="text-center mb-12 text-deepBlue">Fases del Proyecto</h2>
                        <div className="space-y-2">
                            {service.phases.map((phase, index) => (
                                <PhaseItem key={index} number={index + 1} title={phase.title} description={phase.description} isOpen={openPhaseIndex === index} isLast={index === service.phases.length - 1} onToggle={() => setOpenPhaseIndex(openPhaseIndex === index ? null : index)} />
                            ))}
                        </div>
                    </div>
                </section>

                <ProjectSection title="Casos de Éxito" subtitle={`Mira cómo hemos aplicado la ingeniería de ${service.title} en otros ecosistemas.`} limit={3} />

                {/* Se renderiza el bloque de FAQs únicamente si terminó de cargar y existen preguntas asociadas */}
                {!loadingFaqs && serviceFaqs.length > 0 && (
                    <section id="service-faq" className="section-padding">
                        <div className="container-pro">
                            <h2 className="text-center mb-12">Preguntas Frecuentes</h2>
                            <div className="space-y-2">
                                {serviceFaqs.map((item, index) => (
                                    <FaqItem
                                        key={item.id || index}
                                        question={item.pregunta}
                                        answer={formatResponseText(item.respuesta)} // Inyección dinámica del formateador utilitario
                                        isOpen={openFaqIndex === index}
                                        onToggle={() => handleFaqToggle(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <CallToAction title={`¿Interesado en ${service.title}?`} serviceName={service.title} description="Conversemos sobre tu proyecto y cómo podemos ayudarte a crecer." />

                <section className="pb-20">
                    <div className="container-pro">
                        <div className="flex justify-center">
                            <Link to="/servicios" className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-deepBlue/5 text-deepBlue rounded-2xl hover:border-primario hover:text-primario transition-all duration-300">
                                <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-2"></i>
                                <span className="tracking-tight">Explorar todas las <span className="text-primario">especialidades</span></span>
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