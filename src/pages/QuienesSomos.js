// src/pages/QuienesSomos.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SecondaryHero from '../components/SecondaryHero';
import ImageTextCTA from '../components/ImageTextCTA';
import ServiceItem from '../components/ServiceItem'; // Mantiene la dependencia de tus cards de filosofía
import CallToAction from '../components/CallToAction';

const QuienesSomos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    // Datos estructurados para la sección Misión y Visión
    const misionData = {
        slug: "mision",
        icon: "fa-solid fa-rocket",
        title: "Misión",
        description: "Construir canales digitales a medida que impulsen la expansión de negocios con propósito.",
    };
    const visionData = {
        slug: "vision",
        icon: "fa-solid fa-eye",
        title: "Visión",
        description: "Ser el socio estratégico para empresas que buscan un crecimiento digital auténtico y próspero.",
    };

    return (
        <main className="min-h-screen">

            <title>Sobre Expansis Pro | Nuestra Filosofía de Ingeniería</title>
            <meta
                name="description"
                content="Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica."
            />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:title" content="Sobre Expansis Pro | Nuestra Filosofía de Ingeniería" />
            <meta property="og:description" content="Conoce al equipo detrás de la estrategia. Un aliado dedicado a entender y potenciar tu negocio con integridad técnica." />
            <meta property="og:url" content={canonicalUrl} />

            {/* Schema de AboutPage + Datos de Autoridad del Fundador */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "ProfessionalService",
                        "@id": "https://expansispro.com/#agency"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Gonzalo Lobos",
                        "jobTitle": "Founder & Lead Software Engineer",
                        "sameAs": [
                            "https://gonzalobos.com/"
                        ]
                    }
                })}
            </script>

            {/* Breadcrumbs técnicos */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
                        { "@type": "ListItem", "position": 2, "name": "Sobre Expansis", "item": canonicalUrl }
                    ]
                })}
            </script>


            {/* 1. HERO SUPERIOR DE LA PÁGINA (Estandarizado en assets/images) */}
            <SecondaryHero
                title="Sobre Expansis"
                subtitle="Conoce Nuestra Historia, Valores y al Equipo Que Lo Hace Posible."
                icon="fa-solid fa-users"
                img="/assets/images/hero-about.webp"
            />

            {/* 2. SECCIÓN: DETRÁS DE EXPANSIS PRO (Ex AboutMe) */}
            <section id="about-founder" className="w-full pt-16 overflow-hidden">
                <div className="container-pro">
                    <ImageTextCTA
                        imageDesktop="/assets/images/Profile_Img_Expansis.webp" // 🌟 Nombre unificado y amigable
                        alt="Foto de perfil de Gonzalo Lobos, fundador de Expansis Pro"
                        subtitle="Soy Gonzalo | Fundador de Expansis Pro"
                        title="Detrás de Expansis Pro"
                        text={[
                            '<strong>Ingeniero Comercial con Máster en Psicología Organizacional de la Universidad Adolfo Ibáñez, Fotógrafo Publicitario del Instituto ARCOS y, por profunda vocación, un desarrollador autodidacta.</strong>',
                            'Esta combinación me otorga un perfil híbrido atípico en el mercado: entiendo las métricas de rentabilidad, la viabilidad financiera y el comportamiento del consumidor, pero también la importancia del propósito organizacional y el valor de un buen relato visual. Todo esto lo respaldo con el criterio técnico y la disciplina necesarios para estructurar software robusto.',
                            'En Expansis Pro, aplico esta mentalidad técnica, creativa y analítica para convertirme en el socio que te ayuda a construir una presencia digital sólida, coherente y estructurada para crecer.'
                        ]}
                        imageSide="right"
                        imageShape="square"
                        buttonContent="Conversemos por WhatsApp"
                        buttonLink="https://wa.me/56965961086?text=Hola%20Gonzalo%2C%20vi%20tu%20perfil%20en%20la%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n"
                        buttonVariant="primary"
                        showLinkedIn={true}
                        showPersonalWeb={true}
                    />
                </div>
            </section>

            {/* 3. SECCIÓN: NUESTRA FILOSOFÍA (Ex MisionVision) */}
            <section id="philosophy" className="py-16 bg-ghostWhite/30">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-4xl mb-16 text-deepBlue">Nuestra Filosofía</h2>
                    <div className="flex flex-col md:flex-row items-stretch gap-6 max-w-4xl mx-auto">
                        <ServiceItem {...misionData} />
                        <ServiceItem {...visionData} />
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN: EL PROPÓSITO AL CENTRO (Ex WhatIsExpansisPro + Fusión de OurStory) */}
            <section id="agency-purpose" className="py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <ImageTextCTA
                        imageDesktop="/assets/images/expansisPro_aboutus.webp" // 🌟 Nombre unificado y amigable
                        alt="Consultoría estratégica y diseño de ecosistemas digitales en Expansis Pro"
                        subtitle="La razón de ser de Expansis Pro"
                        title="Un Propósito Más Allá del Código"
                        text={[
                            '<strong>Expansis Pro es un espacio que aspira a devolver el propósito a las organizaciones para usarlo como hoja de ruta definitiva para los procesos de transformación digital.</strong> Fue fundada bajo una visión clara: transformar radicalmente la forma en que los negocios abordan internet, huyendo de proyectos repetitivos y carentes de alma.',
                            'Estamos inmersos en un contexto donde la vertiginosidad tecnológica nos fuerza a centrarnos en el día a día antes que en el plan de largo plazo. Por eso, antes de escribir una sola línea de código, alineamos tu ecosistema con la verdadera visión y solidez de tu operación real.',
                            'Nuestra misión es entregar un servicio que genere un beneficio económico tangible para tu negocio al mismo tiempo que aporta un valor sostenible al mercado. Somos el socio tecnológico que acompaña la expansión de tu empresa con coherencia, impacto real y criterio profesional.'
                        ]}
                        imageSide="left" // Intercala el orden visual con la sección del fundador superior
                        buttonContent="Agendar Asesoría Integral"
                        buttonLink="https://wa.me/56965961086?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20cotizar%20un%20ecosistema%20digital%20integral"
                        buttonVariant="primary"
                        secondaryButtonContent="Formulario de Contacto"
                        secondaryButtonLink="/contacto"
                        secondaryButtonVariant="outline"
                    />
                </div>
            </section>

            {/* 5. CTA DE CIERRE DE PÁGINA */}
            <CallToAction
                title="¿Compartimos una visión?"
                description="Si buscas un socio estratégico comprometido con tu crecimiento y no solo un proveedor, hablemos."
            />
        </main>
    );
};

export default QuienesSomos;