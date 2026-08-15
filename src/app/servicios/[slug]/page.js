'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import ProjectSection from '@/components/ProjectSection';
import ImageTextCTA from '@/components/ImageTextCTA';
import { servicesData } from '@/data/servicesData';
import NotFound from '@/app/not-found';
import PhaseItem from '@/components/PhaseItem';
import CallToAction from '@/components/CallToAction';
import FaqItem from '@/components/FaqItem';
import SecondaryHero from '@/components/SecondaryHero';
import VideoViewport from '@/components/VideoViewport';
import JsonLd from '@/components/SEO/JsonLd';
import { formatResponseText } from '@/utils/faqFormatter';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function ServicePage({ params }) {
    // Si usas React 19 / Next 15 se resuelve params con React.use(params) o directamente params.slug
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [serviceFaqs, setServiceFaqs] = useState([]);
    const [loadingFaqs, setLoadingFaqs] = useState(true);

    useEffect(() => {
        if (!service) return;

        setLoadingFaqs(true);
        fetch(`${API_URL}/api/faq`)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
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
    const maintenancePrice = service.pricing?.maintenance || "$30.000 CLP / mes";

    const fireWhatsAppTelemetry = (location, serviceName) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'disparo_whatsapp_manual',
            'servicio_seleccionado': serviceName,
            'click_location': location,
            'page_url': window.location.href
        });

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_'
            });
        }

        if (typeof window.fbq === 'function') {
            window.fbq('track', 'Contact', {
                content_category: 'WhatsApp',
                content_name: serviceName,
                predicted_availability: location
            });
        }
    };

    return (
        <div className="min-h-screen">
            <JsonLd
                id={`service-schema-${service.slug}`}
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": service.title,
                    "description": service.seo?.description || service.description,
                    "provider": {
                        "@type": "ProfessionalService",
                        "@id": "https://expansispro.com/#agency"
                    }
                }}
            />

            {/* FLOATING HERO CTA SECTION */}
            <div className="relative">
                <SecondaryHero
                    title={cleanHeroTitle}
                    subtitle={service.longDescription}
                    icon={service.icon}
                    img={`/assets/images/${service.slug}-hero.webp`}
                />
                <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 z-30 px-4">
                    <a
                        href={`https://wa.me/56988318443?text=¡Hola!%20Me%20interesa%20cotizar%20el%20servicio%20de%20*${encodeURIComponent(service.title)}*.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => fireWhatsAppTelemetry('service_hero_floating', service.title)}
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        Cotizar {service.title}
                    </a>
                </div>
            </div>

            <div>
                {slug === 'web-para-profesionales' && (
                    <section id="exclusive-walkthrough" className="section-padding bg-ghostWhite pt-24 pb-12">
                        <div className="container-pro max-w-4xl text-center">
                            <span className="font-black bg-primario px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] text-white mb-6 inline-block">
                                Demostración Tecnológica en Vivo
                            </span>
                            <h2 className="text-deepBlue mb-6">Tu Próxima Oficina Digital por Dentro</h2>
                            <p className="section-subtitle max-w-2xl mx-auto mb-12">
                                Preparamos un recorrido estratégico exclusivo para que evalúes la velocidad de renderizado de React, el comportamiento responsivo impecable y la sencillez de administración mediante Strapi CMS.
                            </p>
                            <VideoViewport
                                src="/assets/videos/demo-onepage.mp4"
                                className="w-full aspect-video rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden bg-slate-950"
                            />
                        </div>
                    </section>
                )}

                {service.videoSection && (
                    <ImageTextCTA
                        subtitle={service.videoSection.subtitle}
                        title={service.videoSection.title}
                        serviceName={service.title}
                        text={service.videoSection.text}
                        imageDesktop={service.videoSection.imageDesktop}
                        alt={service.videoSection.alt}
                        trackLocation="commercial_profile"
                        imageSide={service.videoSection.imageSide}
                        vimeoId={service.videoSection.vimeoId}
                        showWhatsAppButton={true}
                        whatsAppButtonContent="Cotizar por WhatsApp"
                        whatsAppButtonLink={`https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                        showContactButton={true}
                        contactButtonContent="Formulario de Contacto"
                        contactButtonVariant="outline"
                        contactButtonLink="/contacto"
                    />
                )}

                {/* PRICING */}
                <section id="pricing" className="section-padding bg-ghostWhite">
                    <div className="container-pro">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-deepBlue">Inversión y Escalabilidad</h2>
                            <p className="section-subtitle">Presupuestos transparentes diseñados para la expansión de tu marca.</p>
                        </div>

                        <div className="bg-deepBlue text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/10">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primario/10 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 p-6 md:p-14 lg:p-16">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                                    <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-center lg:text-left">
                                        <div>
                                            <span className="bg-primario text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-black mb-4 inline-block">
                                                Estructura Comercial
                                            </span>
                                        </div>

                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner">
                                            <span className="text-xs text-white/50 block uppercase tracking-widest mb-1 font-medium">
                                                Inversión de Implementación
                                            </span>
                                            <p className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter">
                                                {service.pricing.from}
                                            </p>
                                            <span className="text-[11px] text-primario block mt-1 font-light italic">
                                                Pago único de configuración base &bull; IVA Incluido
                                            </span>
                                        </div>

                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 bg-primario/20 text-primario text-[8px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                                                Soporte Activo
                                            </div>
                                            <span className="text-xs text-white/50 block uppercase tracking-widest mb-1 font-medium">
                                                Infraestructura &amp; Mantención
                                            </span>
                                            <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                {maintenancePrice}
                                            </p>
                                            <span className="text-[11px] text-white/40 block mt-1 font-light leading-snug">
                                                Incluye: Servidor de Alta Velocidad, Licencia CMS, Respaldos y Seguridad SSL.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7 bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-between">
                                        <div>
                                            <p className="text-white text-base font-semibold tracking-wide mb-6 text-left border-b border-white/10 pb-4">
                                                Estándares de Ingeniería Incluidos de Serie:
                                            </p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {service.pricing.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-3 text-left">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-primario/20 flex items-center justify-center flex-shrink-0">
                                                            <i className="fa-solid fa-check text-primario text-[10px]"></i>
                                                        </div>
                                                        <span className="text-white/80 font-light text-sm leading-snug">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center w-full">
                                    {service.pricing.scalability && (
                                        <div className="max-w-2xl text-center mb-8">
                                            <h4 className="text-xs uppercase tracking-[0.3em] text-primario font-bold mb-2">
                                                {service.pricing.scalability.title}
                                            </h4>
                                            <div
                                                className="text-white/60 text-sm font-light leading-relaxed italic"
                                                dangerouslySetInnerHTML={{ __html: service.pricing.scalability.description }}
                                            />
                                        </div>
                                    )}
                                    <a
                                        href={`https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20cotizar%20el%20ecosistema%20de%20*${encodeURIComponent(service.title)}*.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => fireWhatsAppTelemetry('service_pricing_card', service.title)}
                                        className="btn-primary py-5 px-12 text-lg shadow-xl hover:scale-105 transition-transform w-full sm:w-auto inline-flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                                        Cotizar Ecosistema de {service.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {service.targetAudience && (
                    <section id="service-target-section">
                        <ImageTextCTA
                            subtitle={service.targetAudience.subtitle}
                            title={service.targetAudience.title}
                            serviceName={service.title}
                            text={service.targetAudience.text}
                            imageDesktop="/assets/images/expansisPro_target.webp"
                            alt={service.targetAudience.alt}
                            trackLocation="client_profile"
                            imageSide={service.targetAudience.imageSide}
                            buttonContent="Formulario de Contacto"
                            buttonLink="/contacto"
                            buttonVariant="outline"
                            showWhatsAppButton={true}
                            whatsAppButtonContent="Evaluar mi Negocio"
                            whatsAppButtonLink={`https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20quiero%20validar%20mi%20perfil%20para%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                        />
                    </section>
                )}

                <section id="phases" className="section-padding pt-32">
                    <div className="container-pro">
                        <h2 className="text-center mb-12 text-deepBlue">Fases del Proyecto</h2>
                        <div className="space-y-2">
                            {service.phases.map((phase, index) => (
                                <PhaseItem
                                    key={index}
                                    number={index + 1}
                                    title={phase.title}
                                    description={phase.description}
                                    isLast={index === service.phases.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <ProjectSection title="Casos de Éxito" subtitle={`Mira cómo hemos aplicado nuestra ingeniería en diversos ecosistemas.`} limit={3} />

                {!loadingFaqs && serviceFaqs.length > 0 && (
                    <section id="service-faq" className="section-padding">
                        <div className="container-pro">
                            <h2 className="text-center mb-12">Preguntas Frecuentes</h2>
                            <div className="space-y-2">
                                {serviceFaqs.map((item, index) => (
                                    <FaqItem
                                        key={item.id || index}
                                        question={item.pregunta}
                                        answer={formatResponseText(item.respuesta)}
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
                            <Link href="/servicios" className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-deepBlue/5 text-deepBlue rounded-2xl hover:border-primario hover:text-primario transition-all duration-300">
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
}