import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import CarouselItem from '../components/CarouselItem';
import CallToAction from '../components/CallToAction';
import CtaButton from '../components/CtaButton';
import ImageTextCTA from '../components/ImageTextCTA';
import ProjectSection from '../components/ProjectSection';
import { Helmet } from 'react-helmet-async';

import CardCarousel from '../components/CardCarousel';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Expansis Pro | Ingeniería y Estrategia Digital</title>
				<meta name="description" content="Tu socio estratégico para la expansión digital. Expertos en Desarrollo Web, Autoridad de Marca y Sistemas de Crecimiento." />
				<link rel="canonical" href="https://expansispro.com/" />
			</Helmet>
			{/* --- HERO SECTION CON VIDEO --- */}
			<section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-start md:justify-center overflow-hidden bg-deepBlue px-6">
				<video
					autoPlay
					loop
					muted
					playsInline
					poster="/assets/hero-poster.webp"
					fetchPriority="high"
					className="absolute inset-0 z-0 w-full h-full object-cover opacity-40 brightness-[0.7]"
				>
					<source src="/assets/hero-expansis.mp4" type="video/mp4" />
				</video>

				<div className="absolute inset-0 z-10 bg-gradient-to-b from-deepBlue/20 via-deepBlue/40 to-deepBlue"></div>

				<div className="relative z-20 max-w-4xl md:mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="hero-wrapper"
					>
						<h1 className="text-ghostWhite drop-shadow-lg">
							Tu negocio es sólido<br />
							<span className="text-primario italic font-bold">Tu web también debería serlo</span>
						</h1>

						<p className="hero-paragraph">
							En Expansis Pro creamos sitios web profesionales y robustos para empresas y marcas que necesitan transmitir confianza real.
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

			{/* --- SECCIÓN DE SERVICIOS (Ajustada) --- */}
			{/* CAMBIO: py-12 para mobile (48px) y md:py-16 para desktop (64px) */}
			<section id="services-home" className="section-padding ">
				<div className="container-pro">
					<h2 className="mb-4">Nuestros Servicios</h2>

					{/* CAMBIO: Reducimos mb-12 a mb-6 en mobile para que el carrusel esté más cerca */}
					<p className="section-subtitle ">
						Soluciones integrales para potenciar tu negocio en el mundo digital.
					</p>

					<CardCarousel>
						{servicesData.map((service, index) => (
							<CarouselItem
								key={index}
								title={service.title}
								description={service.description}
								image={service.image} // Asegúrate de tener la URL en tus datos
								category={service.category}
								slug={service.slug}
							/>
						))}
					</CardCarousel>
				</div>
			</section>

			{/* SECCIÓN IMAGE TEXT CTA */}
			<section id="about-teaser">
				<ImageTextCTA
					imageDesktop="/images/1920x1080_expansisPro_aboutus.webp"
					alt="Consultoría y estrategia digital en las oficinas de Expansis Pro"
					subtitle="DETRÁS DE LA ESTRATEGIA"
					title="Un Aliado, no un Proveedor"
					text={[
						'Creemos en las relaciones a largo plazo. Detrás de cada línea de código y cada campaña de marketing, hay un profesional dedicado a entender y potenciar tu negocio.',
						'Conoce nuestra historia, nuestra filosofía de trabajo y al equipo que lo hace posible.'
					]}
					imageSide="left"
					buttonContent="Conoce nuestra historia"
					buttonLink="/quienes-somos"
					buttonVariant="primary"
					secondaryButtonContent="Ver Proyectos" // <-- Botón extra
					secondaryButtonLink="/proyectos"
					secondaryButtonVariant="outline"
				/>
			</section>
			{/* // Dentro del return de ServicePage: */}
			<ProjectSection
				title="Casos de Éxito"
				subtitle={`Mira cómo hemos aplicado nuestra ingeniería en diversos ecosistemas digitales.`}
				limit={2} // Aquí puedes limitar a 2 para no alargar tanto la página de servicios
			/>
			{/* --- SECCIÓN DE CIERRE (CTA) --- */}
			<section className=" pb-8 px-4">
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
};

export default Home;