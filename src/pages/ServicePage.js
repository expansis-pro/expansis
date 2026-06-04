import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import ProjectSection from '../components/ProjectSection';
import ImageTextCTA from '../components/ImageTextCTA';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import NotFound from './NotFound';
import PhaseItem from '../components/PhaseItem';
import CallToAction from '../components/CallToAction';
import FaqItem from '../components/FaqItem';
import SecondaryHero from '../components/SecondaryHero';
import { trackWhatsAppClick } from '../utils/trackingUtils';
import { Helmet } from 'react-helmet-async';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [openPhaseIndex, setOpenPhaseIndex] = useState(0); // Empezamos con la Fase 1 abierta


    // 2. CONFIGURAMOS EL ENRUTADOR PARA EL CANONICAL DINÁMICO
    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    // 3. MAPEO DE CONTENIDO SEO OPTIMIZADO PARA EL MERCADO CHILENO
    const seoMapping = {
        "desarrollo-web": {
            title: "Diseño y Desarrollo Web Profesional en Chile | Expansis Pro",
            description: "Creamos tu sitio web corporativo a medida en React. Páginas rápidas, seguras y con optimización SEO base para Google en Chile."
        },
        "ecommerce": {
            title: "Creación de Tiendas Online y E-commerce en Chile | Expansis Pro",
            description: "Diseño de canales de e-commerce robustos y escalables en Chile. Integración de Webpay, Mercado Pago, control de inventario y alta conversión."
        },
        "marketing-digital": {
            title: "Gestión de Google Ads y Meta Ads en Chile | Expansis Pro",
            description: "Agencia de marketing digital especializada en anuncios de pago. Optimizamos tus campañas en Instagram, Facebook y Google para captar clientes reales."
        }
    };
    // 2. CONFIGURACIÓN DINÁMICA DE LA SECCIÓN DE VIDEO POR TIPO DE SERVICIO
    const videoSectionMapping = {
        "desarrollo-web": {
            subtitle: "Ingeniería en React",
            title: "El Usuario al Centro del Negocio",
            text: [
                "En Expansis Pro tratamos tu presencia digital como un ecosistema integrado, donde la velocidad de carga, la psicología de conversión y el posicionamiento trabajan bajo un mismo objetivo técnico.",
                "Estructuramos Landing Pages y sitios corporativos limpios y optimizados a nivel de código para asegurar una carga instantánea, reduciendo la tasa de rebote y garantizando una base sólida para el SEO en Google."
            ],
            imageDesktop: "/images/desarrollo-web-ImgText.webp",
            alt: "Desarrollo Web Profesional Expansis Pro",
            imageSide: "left",
            vimeoId: "1196058571" // ID actual
        },
        "ecommerce": {
            subtitle: "Ecosistemas Transaccionales",
            title: "El Foco en la Conversión",
            text: [
                "En Expansis Pro creamos tu e-commerce en Shopify con integraciones de pasarelas de pago, gestión de inventario y automatizaciones clave para optimizar tu flujo de caja digital.",
                "Contemplamos todo el viaje de compra: desde la captación y navegación del catálogo, hasta la integración de pasarelas de pago y la integración con couriers. De esta manera aseguramos un ecosistema comercial completamente integrado, sin dejar cabos sueltos en tu operación."
            ],
            imageDesktop: "/images/ecommerce_ImgText.webp",
            alt: "E-commerce de Alta Conversión Expansis Pro",
            imageSide: "right", // Rompe la simetría visual
            vimeoId: "1196058571" // ID actual (personalizable a futuro)
        },
        "marketing-digital": {
            subtitle: "Rendimiento Basado en Datos",
            title: "Una Campaña en Constante Crecimiento",
            text: [
                "En Expansis Pro diseñamos e implementamos estrategias de pauta publicitaria integrando Google Ads (Búsqueda y Shopping) para capturar la demanda existente, y Meta Ads (Instagram y Facebook) para escalar el alcance de tu marca en Chile.",
                "El verdadero éxito de tu inversión radica en nuestra metodología de constante descubrimiento: un proceso continuo de auditoría, testeo de audiencias, optimización de copies y análisis de conversiones. Así aseguramos que tus campañas maduren, se estabilicen y mantengan un crecimiento en el tiempo enfocado en maximizar tu retorno real (ROAS)."
            ],
            imageDesktop: "/images/marketing-digital_ImgText.webp",
            alt: "Estrategias de Marketing Digital Expansis Pro",
            imageSide: "left",
            vimeoId: "1196058571" // ID actual (personalizable a futuro)
        }
    };

    if (!service) {
        return <NotFound />;
    }

    const currentSeo = seoMapping[slug] || {
        title: `${service.title} | Expansis Pro`,
        description: service.longDescription
    };

    // Extraer datos de la sección de video según el servicio activo
    const currentVideoSection = videoSectionMapping[slug];


    // Filtrar FAQs por slug del servicio o generales
    const serviceFaqs = faqData.filter(faq =>
        faq.tags && (faq.tags.includes(slug) || faq.tags.includes('general'))
    );

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    // --- SCHEMA: BREADCRUMBS ---
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://expansispro.com/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://expansispro.com/servicios" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": canonicalUrl }
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
                {/* Agregamos de manera explícita el título e indicamos que limpie duplicados */}
                <title data-rh="true">{currentSeo.title}</title>

                {/* Forzamos que la descripción sea única usando la misma llave */}
                <meta data-rh="true" name="description" content={currentSeo.description} />

                {/* El Canonical definitivo (sin IDs duplicados que confundan al validador) */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph unificado */}
                <meta data-rh="true" property="og:title" content={currentSeo.title} />
                <meta data-rh="true" property="og:description" content={currentSeo.description} />
                <meta data-rh="true" property="og:url" content={canonicalUrl} />
            </Helmet>

            {/* Inyectamos ambos Schemas actualizados con el canonical dinámico */}
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
                        onClick={() => trackWhatsAppClick('service_hero_floating', service.title)}
                        className="btn-primary"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        Cotizar {service.title}
                    </button>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div >
                {/* ========================================================================= */}
                {/* 🚀 NUEVA SECCIÓN DE VIDEO / IMAGE-TEXT REUTILIZABLE Y DINÁMICA */}
                {/* ========================================================================= */}
                {currentVideoSection && (
                    <ImageTextCTA
                        subtitle={currentVideoSection.subtitle}
                        title={currentVideoSection.title}
                        text={currentVideoSection.text}
                        imageDesktop={currentVideoSection.imageDesktop}
                        alt={currentVideoSection.alt}
                        imageSide={currentVideoSection.imageSide}
                        vimeoId={currentVideoSection.vimeoId}
                        // 1. BOTÓN PRINCIPAL: Variante "primary" (Hereda la clase btn-primary en CtaButton)
                        buttonContent="Cotizar por WhatsApp"
                        buttonLink={`https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                        buttonVariant="primary"

                        // 2. BOTÓN SECUNDARIO: Variante "secondary" (Hereda tus estilos de link/formulario)
                        secondaryButtonContent="Formulario de Contacto"
                        secondaryButtonLink="/contacto"
                        secondaryButtonVariant="outline"
                    />
                )}

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
                        <div className=" ">
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
                                                    <p className="text-4xl md:text-5xl lg:text-6xl  text-white tracking-tighter leading-none">
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
                                            onClick={() => trackWhatsAppClick('service_pricing_card', service.title)}
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