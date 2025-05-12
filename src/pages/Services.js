import React from 'react';

import ServiceItem from '../components/ServiceItem';
import { scrollToSection } from '../utils/scrollUtils';

const Services = () => {
	return (
		<section id="services" className="services section">
			<h2 className="fade-in">Nuestros Servicios</h2>
			<div className="services-list">
				<ServiceItem
					icon="fa-code"
					title="Desarrollo web"
					description="Creamos plataformas web atractivas y funcionales para impulsar tu negocio online. Buscamos la mejor experiencia de usuario, seguridad y escalabilidad para alcanzar tus objetivos."
				/>
				<ServiceItem
					icon="fa-chart-line"
					title="Consultoría digital"
					description="Asesoramos a las empresas en su estrategia digital, ayudándolas a definir sus objetivos, identificar oportunidades, analizar el entorno y optimizar sus procesos."
				/>
				<ServiceItem
					icon="fa-bullhorn"
					title="Marketing online"
					description="Implementamos estrategias de marketing digital para aumentar la visibilidad, mejorar el engagement, generar leads y convertir clientes potenciales en clientes fieles."
				/>
				<ServiceItem
					icon="fa-search"
					title="Posicionamiento web"
					description="Mejoramos el posicionamiento de las webs en los motores de búsqueda, atrayendo tráfico orgánico y aumentando la visibilidad online."
				/>
			</div>
			{/* <a href="#contact" className="cta-button contact-button fade-in-delay">
				Contáctanos
			</a> */}

			<a onClick={() => scrollToSection('contact')} className="cta-button cta-button-a">Contáctanos</a>

		</section>


	);
};

export default Services;