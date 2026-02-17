import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import ServiceItem from '../components/ServiceItem';
import CallToAction from '../components/CallToAction';
import CtaButton from '../components/CtaButton';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutMeImage from '../img/quienes-somos_teaser.webp';
import CardCarousel from '../components/CardCarousel';

const Home = () => {
	return (
		<>
			{/* --- HERO SECTION CON VIDEO --- */}
			<section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-start md:justify-center overflow-hidden bg-deepBlue px-6">

				{/* 1. EL VIDEO (Fondo) */}
				<video
					autoPlay
					loop
					muted
					playsInline
					poster="/assets/hero-poster.webp"
					className="absolute inset-0 z-0 w-full h-full object-cover opacity-40 brightness-[0.7]"
				>
					<source src="/assets/hero-expansis.mp4" type="video/mp4" />
				</video>

				{/* 2. OVERLAY (Gradiente para legibilidad) */}
				<div className="absolute inset-0 z-10 bg-gradient-to-b from-deepBlue/20 via-deepBlue/40 to-deepBlue"></div>

				{/* 3. CONTENIDO (Usa las Clases Maestras de index.css) */}
				<div className="relative z-20 max-w-4xl md:mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -30 }} // Entrada lateral para mobile
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="hero-wrapper" // <--- CLASE MAESTRA: Izquierda en mobile / Centro en Desktop
					>
						<h1 className="text-ghostWhite drop-shadow-lg">
							Arquitectura digital para <br />
							<span className="text-primario italic font-bold">negocios con trayectoria</span>
						</h1>

						<p className="hero-paragraph">
							En Expansis Pro transformamos tu experiencia empresarial en plataformas digitales robustas.
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
			<section id="services-home" className="py-20 bg-white">
				<div className="max-w-6xl mx-auto text-center px-4">
					<h2>Nuestros Servicios</h2>

					{/* CAMBIO: Texto agrandado (lg -> xl) y con interlineado relajado */}
					<p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
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
					imageDesktop={aboutMeImage}
					alt="Gonzalo Lobos trabajando en estrategia digital"
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

			{/* Este componente ya debe tener el rounded-none que aplicamos antes */}
			<CallToAction />
		</>
	);
};

export default Home;