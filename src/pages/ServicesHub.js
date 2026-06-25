// src/pages/Services.js
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

import CarouselItem from '../components/CarouselItem';
import CallToAction from '../components/CallToAction';
import CardCarousel from '../components/CardCarousel';
import SecondaryHero from '../components/SecondaryHero'; // <-- Importar el nuevo Hero
import ImageTextCTA from '../components/ImageTextCTA';




const Services = () => {

	// Asegurar que la página cargue en el top para el efecto del Nav transparente
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	// 2. CONFIGURAMOS EL CANONICAL DINÁMICO
	const location = useLocation();
	const baseUrl = 'https://expansispro.com';
	const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");




	return (
		<main className=" min-h-screen">


			<title>Nuestros Servicios de Ingeniería Digital | Expansis Pro</title>
			<meta name="description" content="En Expansis Pro tratamos tu presencia digital como un ecosistema vivo e integrado..." />
			<link rel="canonical" href={canonicalUrl} />

			{/* 🌟 1. ItemList del catálogo mapeado 100% en automático desde tu data */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ItemList",
					"name": "Catálogo de Servicios de Expansis Pro",
					"description": "Infraestructura digital y soluciones estratégicas de software y pauta digital.",
					"itemListElement": servicesData.map((service, index) => ({
						"@type": "ListItem",
						"position": index + 1,
						"name": service.title,
						"url": `${baseUrl}/servicios/${service.slug}`
					}))
				})}
			</script>

			{/* 🌟 2. Breadcrumbs de navegación para los fragmentos de Google */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					"itemListElement": [
						{ "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
						{ "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${baseUrl}/servicios` }
					]
				})}
			</script>



			{/* --- HERO SECUNDARIO --- */}
			<SecondaryHero
				title="Nuestros Servicios"
				subtitle="Ofrecemos soluciones digitales integrales, diseñadas a medida para potenciar tu negocio y asegurar que tu expansión en el mundo online sea un éxito."
				icon="fa-solid fa-layer-group" // Un icono que represente servicios/capas
				img="/assets/images/hero-services.webp"
			/>

			<section id="services-page" className="py-16 text-center">
				<div className="">

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

			{/* --- 🌟 NUEVA SECCIÓN: TEXTO DE AUDIENCIA DEL HOME (~610 caracteres) --- */}
			<section id="home-target">
				<ImageTextCTA
					imageDesktop="/assets/images/expansisPro_aboutus.webp"
					alt="Público objetivo y clientes de la agencia Expansis Pro en Chile"
					subtitle="PERFIL COMERCIAL"
					title="Estructuras Digitales con Foco en la Conversión y el Negocio"
					text={[
						"Expansis Pro impulsa a personas, marcas e instituciones que buscan iniciar o avanzar en su transformación digital mediante activos web de alta conversión. Desarrollamos canales a medida, optimizados para la difusión institucional o la automatización de ventas.",
						"Unificamos consultoría estratégica e ingeniería técnica para proyectar la solidez de tu operación, garantizando que tu ecosistema digital traduzca cada visita en oportunidades de negocio reales."
					]}
					imageSide="right" // Rompe simetría con la sección "About Us" de abajo
					buttonContent="Cotizar Proyecto"
					buttonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20gustaría%20saber%20si%20sus%20servicios%20se%20adaptan%20a%20mi%20modelo%20de%20negocio."
					buttonVariant="primary"

				/>
			</section>

			<ImageTextCTA
				imageDesktop="/assets/images/expansisPro_target.webp"
				alt="Ecosistema de Ingeniería Digital Expansis Pro"
				subtitle="Nuestros Servicios"
				title="Infraestructura Digital con Crecimiento Sostenible"
				vimeoId="1196058571" // 👈 Pasas el ID aquí
				text={[
					"En Expansis Pro tratamos tu presencia digital como un ecosistema vivo e integrado, donde la velocidad de carga, la psicología de conversión y la ingeniería de pauta publicitaria trabajan bajo un mismo objetivo técnico.",
					"Conectamos tus canales de venta (sitios corporativos o E-commerce a medida) con integraciones robustas de tracking para alimentar los algoritmos de Google y Meta Ads con datos limpios, asegurando que cada línea de código y cada campaña estén subordinadas a la estabilidad de tu operación y al retorno real (ROAS) de tu marca."
				]}
				imageSide="left"
				// 1. BOTÓN PRINCIPAL CORREGIDO: Eliminamos la variable service.title inexistente
				buttonContent="Cotizar por WhatsApp"
				buttonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20cotizar%20un%20ecosistema%20digital%20integral"
				buttonVariant="primary"

				// 2. BOTÓN SECUNDARIO CORREGIDO: Variante "secondary" para que sea visible en la interfaz
				secondaryButtonContent="Formulario de Contacto"
				secondaryButtonLink="/contacto"
				secondaryButtonVariant="outline"
			/>
			<CallToAction
				title="¿Necesitas una solución personalizada?"
				description="Si no encuentras lo que buscas, hablemos. Diseñamos planes a la medida de tus necesidades."
			/>
		</main>
	);
};

export default Services;