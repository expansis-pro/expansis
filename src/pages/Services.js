// src/pages/Services.js
import React from 'react';
// 1. Importa Link y elimina la importación de scrollToSection
import { Link } from 'react-router-dom';
import ServiceItem from '../components/ServiceItem';
import Whatsapp from './Whatsapp';

const Services = () => {

	// El array de datos de servicios no necesita cambios
	const servicesData = [
		{
			icon: "fa-solid fa-code",
			title: "Desarrollo Web",
			description: "Creamos plataformas web atractivas y funcionales para impulsar tu negocio online.",
			details: [
				"Diseño de sitios web responsivos.",
				"Desarrollo de E-commerce y carritos de compra.",
				"Integración con pasarelas de pago.",
				"Sistemas de gestión de contenido (CMS)."
			]
		},
		{
			icon: "fa-solid fa-chart-line",
			title: "Consultoría Digital",
			description: "Te asesoramos para definir objetivos, identificar oportunidades y optimizar tus procesos.",
			details: [
				"Análisis de presencia online actual.",
				"Estrategia de transformación digital.",
				"Investigación de mercado y competencia.",
				"Optimización de la experiencia de usuario (UX)."
			]
		},
		{
			icon: "fa-solid fa-bullhorn",
			title: "Marketing Online",
			description: "Implementamos estrategias para aumentar tu visibilidad y generar clientes potenciales.",
			details: [
				"Gestión de campañas en redes sociales.",
				"Publicidad en Google Ads (SEM).",
				"Email marketing y automatización.",
				"Creación de contenido de valor."
			]
		},
		{
			icon: "fa-solid fa-search",
			title: "Posicionamiento Web",
			description: "Mejoramos tu ranking en buscadores para atraer tráfico orgánico de calidad.",
			details: [
				"Auditoría SEO completa.",
				"Optimización On-Page y Off-Page.",
				"Estrategia de palabras clave (Keywords).",
				"SEO local para negocios físicos."
			]
		}
	];

	return (
		<section id="services" className="bg-gray-50 py-6 sm:py-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in">Nuestros Servicios</h2>
				<p className="text-lg text-gray-600 mb-12 fade-in">Haz clic en una tarjeta para ver más detalles</p>

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

				{/* 2. Reemplazamos el <button> por el componente <Link> */}
				<Link
					to="/contacto" // 3. Le asignamos la ruta de destino
					className="inline-block  bg-primario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105"
				>
					Contáctanos
				</Link>
			</div>
			<Whatsapp />
		</section>
	);
};

export default Services;