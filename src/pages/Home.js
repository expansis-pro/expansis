import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import ServiceItem from '../components/ServiceItem';
import CallToAction from '../components/CallToAction';
import CtaButton from '../components/CtaButton';
import ImageTextCTA from '../components/ImageTextCTA';

import CardCarousel from '../components/CardCarousel';

const Home = () => {
	return (
		<>
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
			<section id="services-home" className="pt-12 bg-white">
				<div className="max-w-6xl mx-auto text-center px-4">
					<h2 className="mb-4 md:mb-6">Nuestros Servicios</h2>

					{/* CAMBIO: Reducimos mb-12 a mb-6 en mobile para que el carrusel esté más cerca */}
					<p className="text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
						Soluciones integrales para potenciar tu negocio en el mundo digital.
					</p>

					<CardCarousel>
						{servicesData.map((service, index) => (
							<ServiceItem key={index} {...service} />
						))}
					</CardCarousel>
				</div>
			</section>

			{/* SECCIÓN IMAGE TEXT CTA */}
			<section id="about-teaser">
				<ImageTextCTA
					imageDesktop="/images/1920x1080_expansisPro_aboutus.webp"
					alt="Trabajando en estrategia digital"
					subtitle="DETRÁS DE LA ESTRATEGIA"
					title="Un Aliado, no un Proveedor"
					text={[
						'Creemos en las relaciones a largo plazo. Detrás de cada línea de código y cada campaña de marketing, hay un profesional dedicado a entender y potenciar tu negocio.',
						'Conoce nuestra historia, nuestra filosofía de trabajo y al equipo que lo hace posible.'
					]}
					imageSide="left"
					buttonContent="Conoce nuestra historia"
					buttonLink="/quienes-somos"
					buttonVariant="secondary"
				/>
			</section>

			{/* --- SECCIÓN DE CIERRE (CTA) --- */}
			<section className="bg-white pb-8 px-4">
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