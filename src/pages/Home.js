// src/pages/Home.js

import React, { useRef } from 'react'; // <-- Importar useRef
import heroImage from '../img/Hero_img_Expansis_pro.webp';
import ServiceItem from '../components/ServiceItem';
import { servicesData } from '../data/servicesData';
import CallToAction from '../components/CallToAction';
import SocialProof from '../components/SocialProof';
import CtaButton from '../components/CtaButton';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutMeImage from '../img/quienes-somos_teaser.webp';
import CardCarousel from '../components/CardCarousel';
const Home = () => {

	const servicesScrollRef = useRef(null); // <-- Ref para el contenedor

	// --- Funciones para el desplazamiento ---
	const scroll = (scrollOffset) => {
		if (servicesScrollRef.current) {
			servicesScrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
		}
	};

	return (
		<>
			<section id="home" className=" flex items-center pt-2 pb-6 lg:pb-6">
				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="text-left">
						<h1 className="text-2xl sm:text-3xl md:text-4xl text-primario">
							Tu Socio Estratégico Para La Expansión Digital.
						</h1>
						{/* --- CAMBIO REALIZADO: Texto justificado --- */}
						<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-light text-justify">
							Desarrollamos tu canal digital para que consigas más clientes y aumentes tus ingresos.
						</p>

						<div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
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

			<section id="services-home" className="py-6 sm:py-6">
				<div className="max-w-6xl mx-auto text-center">
					<h2>Nuestros Servicios</h2>
					<p className="text-lg text-gray-600 mb-6 fade-in">
						Soluciones integrales para potenciar tu negocio en el mundo digital.
					</p>

					{/* --- CAMBIO: Contenedor relativo para los botones --- */}
					<CardCarousel>
						{servicesData.map((service, index) => (
							<ServiceItem
								key={index}
								icon={service.icon}
								title={service.title}
								description={service.description}
								slug={service.slug}
							/>
						))}
					</CardCarousel>
				</div>
			</section>

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