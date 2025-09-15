import React, { useRef } from 'react'; // <-- Importar useRef
import { servicesData } from '../data/servicesData';
import ServiceItem from '../components/ServiceItem';
import CallToAction from '../components/CallToAction';
import CardCarousel from '../components/CardCarousel';

const Services = () => {
	const servicesScrollRef = useRef(null); // <-- Ref para el contenedor del carrusel

	// --- Lógica para el desplazamiento con las flechas ---
	const scroll = (scrollOffset) => {
		if (servicesScrollRef.current) {
			servicesScrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
		}
	};

	return (
		<>
			<section id="services-page" className="py-6 sm:py-6 text-center">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Nuestros Servicios
					</h1>
					<p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
						Ofrecemos soluciones digitales integrales, diseñadas a medida para potenciar tu negocio y asegurar que tu expansión en el mundo online sea un éxito.
					</p>

					{/* --- CÓDIGO SIMPLIFICADO --- */}
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
			<CallToAction />
		</>
	);
};

export default Services;