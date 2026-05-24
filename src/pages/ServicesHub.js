// src/pages/Services.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import CarouselItem from '../components/CarouselItem';
import CallToAction from '../components/CallToAction';
import CardCarousel from '../components/CardCarousel';
import SecondaryHero from '../components/SecondaryHero'; // <-- Importar el nuevo Hero

const Services = () => {

	// Asegurar que la página cargue en el top para el efecto del Nav transparente
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	// 2. CONFIGURAMOS EL CANONICAL DINÁMICO
	const location = useLocation();
	const baseUrl = 'https://expansispro.com';
	const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");


	// --- SCHEMA: ITEMLIST (Catálogo de servicios) ---
	const itemListSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"itemListElement": servicesData.map((service, index) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": service.title,
			"url": `${baseUrl}/servicios/${service.slug}`
		}))
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://expansispro.com/" },
			{ "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://expansispro.com/servicios" }
		]
	};


	return (
		<main className=" min-h-screen">

			<Helmet>
				{/* 3. TÍTULO Y DESCRIPCIÓN ENFOCADOS EN EL MERCADO DE CHILE */}
				<title>Agencia de Desarrollo Web y Marketing Digital en Chile | Expansis Pro</title>
				<meta name="description" content="Explora nuestros servicios digitales en Chile: diseño de landing pages, creación de tiendas online e-commerce a medida y gestión profesional de Google y Meta Ads." />

				{/* El Canonical automatizado */}
				<link rel="canonical" href={canonicalUrl} />

				{/* Etiquetas Open Graph actualizadas */}
				<meta property="og:title" content="Agencia de Desarrollo Web y Marketing Digital en Chile | Expansis Pro" />
				<meta property="og:description" content="Explora nuestros servicios digitales en Chile: diseño de landing pages, creación de tiendas online e-commerce a medida y gestión profesional de Google y Meta Ads." />
				<meta property="og:url" content={canonicalUrl} />
			</Helmet>

			<script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
			{/* --- HERO SECUNDARIO --- */}
			<SecondaryHero
				title="Nuestros Servicios"
				subtitle="Ofrecemos soluciones digitales integrales, diseñadas a medida para potenciar tu negocio y asegurar que tu expansión en el mundo online sea un éxito."
				icon="fa-solid fa-layer-group" // Un icono que represente servicios/capas
				img="/assets/hero-services.webp"
			/>

			<section id="services-page" className="py-16 text-center">
				<div className="max-w-6xl mx-auto">

					{/* El carrusel con las ServiceItems */}
					<CardCarousel>
						{servicesData.map((service, index) => (
							<CarouselItem
								key={index}
								title={service.title}
								description={service.description}
								image={service.image} // Importante: CarouselItem suele llevar imagen
								category={service.category}
								slug={service.slug}
								titleTag="h2"
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