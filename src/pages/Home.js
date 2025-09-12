// src/pages/Home.js

import React from 'react';
import heroImage from '../img/Hero_img_Expansis_pro.webp';
import ServiceItem from '../components/ServiceItem';
import { servicesData } from '../data/servicesData';
import CallToAction from '../components/CallToAction';
import SocialProof from '../components/SocialProof';
import CtaButton from '../components/CtaButton'; // <-- 1. IMPORTAMOS EL NUEVO BOTÓN
import ImageTextCTA from '../components/ImageTextCTA'; // <-- Importamos el componente
import aboutMeImage from '../img/quienes-somos_teaser.webp';

const Home = () => {
	return (
		<>
			<section id="home" className=" flex items-center pt-2 pb-6 lg:pb-6">
				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="text-center lg:text-left">
						<h1>
							<span className="block">Expansis Pro</span>
							<span className="block text-primario mt-1">Tu Canal Digital Para Vender Más</span>
						</h1>
						<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-light">
							Impulsamos la expansión de tu negocio en el mundo online, construyendo un canal digital de ventas a tu medida para que consigas más clientes y aumentes tus ingresos.
						</p>

						{/* --- 2. USAMOS EL NUEVO COMPONENTE CON VARIANTES Y SCROLL --- */}
						<div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
							<CtaButton
								scrollTo="services-home"
								variant="primary"
								category="Home"
								label="Boton Conoce Nuestros Servicios"
							>
								Nuestros Servicios
							</CtaButton>
							<CtaButton
								to="/quienes-somos"
								variant="secondary"
								category="Home"
								label="Boton Sobre Expansis"
							>
								Sobre Expansis
							</CtaButton>
						</div>
					</div>
					<div className="w-full">
						<img
							src={heroImage}
							alt="Laptop mostrando un diseño web de Expansis Pro"
							className="w-full h-[450px] object-cover rounded-xl shadow-2xl"
						/>
					</div>
				</div>
			</section>

			<section id="services-home" className=" py-6 sm:py-6 ">
				<div className="max-w-6xl mx-auto text-center">
					<h2>Nuestros Servicios</h2>
					<p className="text-lg text-gray-600 mb-12 fade-in">
						Soluciones integrales para potenciar tu negocio en el mundo digital.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{servicesData.map((service, index) => (
							<ServiceItem
								key={index}
								icon={service.icon}
								title={service.title}
								description={service.description}
								details={service.details}
							/>
						))}
					</div>
				</div>
			</section>


			{/* --- NUEVA SECCIÓN "QUIÉNES SOMOS" --- */}
			<section id="about-teaser" className=" py-6 sm:py-6">
				<div className="max-w-6xl mx-auto">
					<ImageTextCTA
						imageDesktop={aboutMeImage}
						alt="Foto de Gonzalo Lobos, fundador de Expansis Pro"
						subtitle="Detrás de la Estrategia"
						title="Un Aliado, no un Proveedor"
						text={[
							'Creemos en las relaciones a largo plazo. Detrás de cada línea de código y cada campaña de marketing, hay un profesional dedicado a entender y potenciar tu negocio.',
							'Conoce nuestra historia, nuestra filosofía de trabajo y al equipo que lo hace posible.'
						]}
						imageSide="left"
						buttonContent="Más Sobre Nosotros"
						buttonLink="/quienes-somos"
					/>
				</div>
			</section>

			<CallToAction />

			<SocialProof />
		</>
	);
};

export default Home;