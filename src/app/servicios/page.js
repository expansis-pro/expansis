'use client';

import React from 'react';
import { servicesData } from '@/data/servicesData';
import CarouselItem from '@/components/CarouselItem';
import CallToAction from '@/components/CallToAction';
import CardCarousel from '@/components/CardCarousel';
import SecondaryHero from '@/components/SecondaryHero';
import ImageTextCTA from '@/components/ImageTextCTA';
import JsonLd from '@/components/SEO/JsonLd';

export default function ServicesPage() {
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}/servicios`;

    return (
        <main className="min-h-screen">
            {/* Schema de datos estructurados para Google (reemplaza al viejo JsonLd de SPA) */}
            <JsonLd
                id="services-hub-schema"
                data={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Nuestros Servicios de Ingeniería Digital | Expansis Pro",
                    "description": "En Expansis Pro tratamos tu presencia digital como un ecosistema vivo e integrado. Conoce nuestras soluciones en Diseño Web, E-commerce y Marketing Digital.",
                    "url": canonicalUrl
                }}
            />

            {/* --- HERO SECUNDARIO --- */}
            <SecondaryHero
                title="Nuestros Servicios"
                subtitle="Ofrecemos soluciones digitales integrales, diseñadas a medida para potenciar tu negocio y asegurar que tu expansión en el mundo online sea un éxito."
                icon="fa-solid fa-layer-group"
                img="/assets/images/hero-services.webp"
            />

            {/* --- CARRUSEL DE SERVICIOS --- */}
            <section id="services-page" className="py-16 text-center">
                <div>
                    <CardCarousel>
                        {servicesData.map((service, index) => (
                            <CarouselItem
                                key={index}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                category={service.category}
                                slug={service.slug}
                                titleTag="h2"
                            />
                        ))}
                    </CardCarousel>
                </div>
            </section>

            {/* --- SECCIÓN: PERFIL COMERCIAL --- */}
            <section id="home-target">
                <ImageTextCTA
                    imageDesktop="/assets/images/expansisPro_aboutus.webp"
                    alt="Público objetivo y clientes de la agencia Expansis Pro en Chile"
                    subtitle="PERFIL COMERCIAL"
                    trackLocation="commercial_profile"
                    title="Estructuras Digitales con Foco en la Conversión y el Negocio"
                    text={[
                        "Expansis Pro impulsa a personas, marcas e instituciones que buscan iniciar o avanzar en su transformación digital mediante activos web de alta conversión. Desarrollamos canales a medida, optimizados para la difusión institucional o la automatización de ventas.",
                        "Unificamos consultoría estratégica e ingeniería técnica para proyectar la solidez de tu operación, garantizando que tu ecosistema digital traduzca cada visita en oportunidades de negocio reales."
                    ]}
                    imageSide="right"
                    showWhatsAppButton={true}
                    whatsAppButtonContent="Cotizar por WhatsApp"
                    whatsAppButtonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20gustar%C3%ADa%20saber%20si%20sus%20servicios%20se%20adaptan%20a%20mi%20modelo%20de%20negocio."
                    showContactButton={true}
                    contactButtonContent="Formulario de Contacto"
                    contactButtonVariant="outline"
                />
            </section>

            {/* --- SECCIÓN: INFRAESTRUCTURA --- */}
            <ImageTextCTA
                title="Infraestructura Digital con Crecimiento Sostenible"
                subtitle="Nuestros Servicios"
                serviceName="Ecosistema Integral"
                trackLocation="service_detail"
                imageDesktop="/assets/images/expansisPro_target.webp"
                text={[
                    "En Expansis Pro tratamos tu presencia digital como un ecosistema vivo e integrado, donde la velocidad de carga, la psicología de conversión y la ingeniería de pauta publicitaria trabajan bajo un mismo objetivo técnico.",
                    "Conectamos tus canales de venta (sitios corporativos o E-commerce a medida) con integraciones robustas de tracking para alimentar los algoritmos de Google y Meta Ads con datos limpios, asegurando que cada línea de código y cada campaña estén subordinadas a la estabilidad de tu operación y al retorno real (ROAS) de tu marca."
                ]}
                alt="Ecosistema de Ingeniería Digital Expansis Pro"
                vimeoId="1196058571"
                imageSide="left"
                showWhatsAppButton={true}
                whatsAppButtonContent="Cotizar por WhatsApp"
                whatsAppButtonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20gustar%C3%ADa%20saber%20si%20sus%20servicios%20se%20adaptan%20a%20mi%20modelo%20de%20negocio."
                showContactButton={true}
                contactButtonContent="Formulario de Contacto"
                contactButtonVariant="outline"
            />

            {/* --- CALL TO ACTION --- */}
            <CallToAction
                title="¿Necesitas una solución personalizada?"
                description="Si no encuentras lo que buscas, hablemos. Diseñamos planes a la medida de tus necesidades."
            />
        </main>
    );
}