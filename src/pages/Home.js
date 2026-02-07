// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import ServiceItem from '../components/ServiceItem';
import CallToAction from '../components/CallToAction';
import SocialProof from '../components/SocialProof';
import CtaButton from '../components/CtaButton';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutMeImage from '../img/quienes-somos_teaser.webp';
import CardCarousel from '../components/CardCarousel';

const Home = () => {
	return (
		<>
			{/* HERO SECTION: Estilos de tamaño gestionados por index.css [cite: 83, 84] */}
			<section id="home" className="bg-deepBlue min-h-[500px] flex items-center justify-center text-center">
				<div className="max-w-4xl mx-auto px-4 py-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* El h1 ya tiene el tamaño lg:text-6xl y font-light por CSS base */}
						<h1 className="text-ghostWhite">
							Tu socio estratégico para la Expansión Digital
						</h1>

						{/* El p hereda font-light del body; solo dejamos márgenes y color específico */}
						<p className="mb-10 text-gray-300">
							Mas clientes. Más ingresos. Tu canal digital a medida.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
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

			{/* SECCIÓN DE SERVICIOS [cite: 86] */}
			<section id="services-home" className="py-16">
				<div className="max-w-6xl mx-auto text-center px-4">
					{/* El h2 ya tiene tamaño y color por CSS base */}
					<h2>Nuestros Servicios</h2>

					<p className="text-gray-600 mb-12">
						Soluciones integrales para potenciar tu negocio en el mundo digital.
					</p>

					<CardCarousel>
						{servicesData.map((service, index) => (
							<ServiceItem key={index} {...service} />
						))}
					</CardCarousel>
				</div>
			</section>

			{/* SECCIÓN IMAGE TEXT CTA (Detrás de la Estrategia) [cite: 96, 99] */}
			<section id="about-teaser" className="bg-white">
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

			<CallToAction />

		</>
	);
};

export default Home;