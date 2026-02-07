// src/pages/Services.js
import React, { useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceItem from '../components/ServiceItem';
import CallToAction from '../components/CallToAction';
import CardCarousel from '../components/CardCarousel';
import SecondaryHero from '../components/SecondaryHero'; // <-- Importar el nuevo Hero

const Services = () => {

	// Asegurar que la página cargue en el top para el efecto del Nav transparente
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="bg-white min-h-screen">
			{/* --- HERO SECUNDARIO --- */}
			<SecondaryHero
				title="Nuestros Servicios"
				subtitle="Ofrecemos soluciones digitales integrales, diseñadas a medida para potenciar tu negocio y asegurar que tu expansión en el mundo online sea un éxito."
				icon="fa-solid fa-layer-group" // Un icono que represente servicios/capas
			/>

			<section id="services-page" className="py-16 text-center">
				<div className="max-w-6xl mx-auto">

					{/* El carrusel con las ServiceItems */}
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

			<CallToAction
				title="¿Necesitas una solución personalizada?"
				description="Si no encuentras lo que buscas, hablemos. Diseñamos planes a la medida de tus necesidades."
			/>
		</main>
	);
};

export default Services;