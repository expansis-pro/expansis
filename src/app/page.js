'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import CarouselItem from '@/components/CarouselItem';
import ProjectSection from '@/components/ProjectSection';
import CardCarousel from '@/components/CardCarousel';
import ImageTextCTA from '@/components/ImageTextCTA';
import CtaButton from '@/components/CtaButton';
import CallToAction from '@/components/CallToAction';

export default function Home() {
    return (
        <>
            {/* --- HERO SECTION CON VIDEO --- */}
            <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-start md:justify-center overflow-hidden bg-deepBlue px-6">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/images/hero-poster.webp"
                    fetchPriority="high"
                    className="absolute inset-0 z-0 w-full h-full object-cover opacity-40 brightness-[0.7]"
                >
                    <source src="/assets/videos/hero-expansis.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-deepBlue/20 via-deepBlue/40 to-deepBlue"></div>

                <div className="relative z-20 max-w-4xl md:mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-wrapper"
                    >
                        <h1 className="text-ghostWhite drop-shadow-lg text-3xl md:text-5xl leading-tight">
                            Agencia de Desarrollo Web y Marketing Digital<br />
                            <span className="text-primario italic font-semibold text-2xl md:text-4xl">Estructuras digitales sólidas para tu negocio</span>
                        </h1>

                        <p className="hero-paragraph">
                            En Expansis Pro desarrollamos sitios ecosistemas digitales a medida para empresas y marcas que necesitan transmitir confianza real.
                        </p>

                        <div className="hero-actions">
                            <CtaButton
                                scrollTo="services-home"
                                variant="primary"
                                category="Home"
                                label="Boton Ver Servicios"
                            >
                                Nuestros Servicios
                            </CtaButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- SECCIÓN DE SERVICIOS --- */}
            <section id="services-home" className="section-padding">
                <div className="container-pro">
                    <h2 className="mb-4">Servicios de Creación de Canales Digitales</h2>
                    <p className="section-subtitle">
                        Soluciones integrales para potenciar tu negocio en el mundo digital.
                    </p>
                </div>

                <CardCarousel>
                    {servicesData.map((service, index) => (
                        <CarouselItem
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            category={service.category}
                            slug={service.slug}
                        />
                    ))}
                </CardCarousel>

                <div className="mt-12 text-center">
                    <CtaButton
                        to="/servicios"
                        variant="outline"
                        category="Home"
                        label="Boton Ver Todos Los Servicios"
                        className="group inline-flex items-center gap-3"
                    >
                        Ver todos los servicios
                        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                    </CtaButton>
                </div>
            </section>

            {/* --- SECCIÓN AUDIENCIA Y VIDEO DEMO --- */}
            <section id="home-target">
                <ImageTextCTA
                    imageDesktop="/assets/images/expansisPro_target.webp"
                    alt="Público objetivo y clientes de la agencia Expansis Pro en Chile"
                    subtitle="PERFIL COMERCIAL"
                    title="Estructuras Digitales con Foco en la Conversión y el Negocio"
                    trackLocation="commercial_profile"
                    text={[
                        "Expansis Pro impulsa a personas, marcas e instituciones que buscan iniciar o avanzar en su transformación digital mediante activos web de alta conversión. Desarrollamos canales a medida, optimizados para la difusión institucional o la automatización de ventas.",
                        "Unificamos consultoría estratégica e ingeniería técnica para proyectar la solidez de tu operación, garantizando que tu ecosistema digital traduzca cada visita en oportunidades de negocio reales."
                    ]}
                    vimeoId="1196058571"
                    imageSide="right"
                    showWhatsAppButton={true}
                    whatsAppButtonContent="Cotizar Proyecto"
                    whatsAppButtonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20gustar%C3%ADa%20saber%20si%20sus%20servicios%20se%20adaptan%20a%20mi%20modelo%20de%20negocio."
                    secondaryButtonContent="Ver Especialidades"
                    secondaryButtonLink="/servicios"
                    secondaryButtonVariant="outline"
                />
            </section>

            <ProjectSection
                title="Casos de Éxito"
                subtitle="Mira cómo hemos aplicado nuestra ingeniería en diversos ecosistemas digitales."
                selectedIds={["estudio-brkovic", "2v-express", "lobos-miniexcavadoras"]}
                showCta={true}
            />

            <section id="about-teaser">
                <ImageTextCTA
                    imageDesktop="/assets/images/expansisPro_aboutus.webp"
                    alt="Consultoría y estrategia digital en las oficinas de Expansis Pro"
                    subtitle="DETRÁS DE LA ESTRATEGIA"
                    trackLocation="brand_philosophy"
                    title="Somos Socios en la Transformación Digital"
                    text={[
                        "Expansis Pro es un espacio que aspira a devolver el propósito a las organizaciones para usarlo como hoja de ruta definitiva para los procesos de transformación digital.",
                        "Conoce nuestra historia, nuestra filosofía de trabajo y al equipo que lo hace posible."
                    ]}
                    imageSide="left"
                    buttonContent="Conoce nuestra historia"
                    buttonLink="/quienes-somos"
                    buttonVariant="primary"
                    secondaryButtonContent="Ver Proyectos"
                    secondaryButtonLink="/proyectos"
                    secondaryButtonVariant="outline"
                />
            </section>

            <section className="pb-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <CallToAction
                        source="Home - Final de Página"
                        title="¿Listo para dar el salto?"
                        description="Hablemos de tu proyecto. Elige la opción que más te acomode."
                    />
                </div>
            </section>
        </>
    );
}