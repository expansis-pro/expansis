// import React from 'react';

// import ServiceItem from '../components/ServiceItem';
// import { scrollToSection } from '../utils/scrollUtils';

// const Services = () => {
// 	return (
// 		<section id="services" className="services section">
// 			<h2 className="fade-in">Nuestros Servicios</h2>
// 			<div className="services-list">
// 				<ServiceItem
// 					icon="fa-code"
// 					title="Desarrollo web"
// 					description="Creamos plataformas web atractivas y funcionales para impulsar tu negocio online. Buscamos la mejor experiencia de usuario, seguridad y escalabilidad para alcanzar tus objetivos."
// 				/>
// 				<ServiceItem
// 					icon="fa-chart-line"
// 					title="Consultoría digital"
// 					description="Asesoramos a las empresas en su estrategia digital, ayudándolas a definir sus objetivos, identificar oportunidades, analizar el entorno y optimizar sus procesos."
// 				/>
// 				<ServiceItem
// 					icon="fa-bullhorn"
// 					title="Marketing online"
// 					description="Implementamos estrategias de marketing digital para aumentar la visibilidad, mejorar el engagement, generar leads y convertir clientes potenciales en clientes fieles."
// 				/>
// 				<ServiceItem
// 					icon="fa-search"
// 					title="Posicionamiento web"
// 					description="Mejoramos el posicionamiento de las webs en los motores de búsqueda, atrayendo tráfico orgánico y aumentando la visibilidad online."
// 				/>
// 			</div>
// 			{/* <a href="#contact" className="cta-button contact-button fade-in-delay">
// 				Contáctanos
// 			</a> */}

// 			<a onClick={() => scrollToSection('contact')} className="cta-button cta-button-a">Contáctanos</a>

// 		</section>


// 	);
// };

// export default Services;


// src/pages/Services.js

import React from 'react';
import ServiceItem from '../components/ServiceItem';
import { scrollToSection } from '../utils/scrollUtils';

const Services = () => {
	return (
		// Contenedor principal de la sección:
		// - Fondo gris claro para diferenciarla, padding vertical y horizontal.
		<section id="services" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto text-center">
				{/* Título de la sección:
          - Tamaño de fuente responsive, negrita, color de texto y margen inferior.
        */}
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 fade-in">Nuestros Servicios</h2>

				{/* La rejilla (grid) de servicios:
          - Se muestra como una columna en móviles (grid-cols-1).
          - Dos columnas en tablets (md:grid-cols-2).
          - Cuatro columnas en pantallas grandes (lg:grid-cols-4).
          - 'gap-8' añade espacio entre las tarjetas.
        */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<ServiceItem
						icon="fa-solid fa-code"
						title="Desarrollo web"
						description="Creamos plataformas web atractivas y funcionales para impulsar tu negocio online. Buscamos la mejor experiencia de usuario, seguridad y escalabilidad para alcanzar tus objetivos."
					/>
					<ServiceItem
						icon="fa-solid fa-chart-line"
						title="Consultoría digital"
						description="Asesoramos a las empresas en su estrategia digital, ayudándolas a definir sus objetivos, identificar oportunidades, analizar el entorno y optimizar sus procesos."
					/>
					<ServiceItem
						icon="fa-solid fa-bullhorn"
						title="Marketing online"
						description="Implementamos estrategias de marketing digital para aumentar la visibilidad, mejorar el engagement, generar leads y convertir clientes potenciales en clientes fieles."
					/>
					<ServiceItem
						icon="fa-solid fa-search"
						title="Posicionamiento web"
						description="Mejoramos el posicionamiento de las webs en los motores de búsqueda, atrayendo tráfico orgánico y aumentando la visibilidad online."
					/>
				</div>

				{/* Botón CTA: Usamos el mismo estilo consistente que en Home.js */}
				<button onClick={() => scrollToSection('contact')} className="inline-block mt-12 bg-primario text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-secundario transition-transform transform hover:scale-105">
					Contáctanos
				</button>
			</div>
		</section>
	);
};

export default Services;