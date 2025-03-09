import React from 'react';
import { Link } from 'react-router-dom';
import Faqs from '../components/Faqs';
import ServiceItem from '../components/ServiceItem'; // Importa el componente


const Services = () => {
	return (
		<section className='services section'>
			<h1 className='fade-in'>Nuestros Servicios</h1>
			{/* <p className='fade-in-delay'>En Expansis Pro, ofrecemos una amplia gama de servicios para ayudar a las empresas a alcanzar tus objetivos digitales:</p> */}
			<div className='services-list'>
				<ServiceItem
					icon="fa-code"
					title="Desarrollo web"
					description="Plataformas web atractivas y funcionales para impulsar tu negocio online. Experiencia de usuario, seguridad y escalabilidad para alcanzar tus objetivos."
				/>
				<ServiceItem
					icon="fa-chart-line"
					title="Consultoría digital"
					description="Asesoramos a las empresas en su estrategia digital, ayudándolas a definir sus objetivos, identificar oportunidades y optimizar sus procesos."
				/>
				<ServiceItem
					icon="fa-bullhorn"
					title="Marketing online"
					description="Implementamos estrategias de marketing digital para aumentar la visibilidad, generar leads y convertir clientes potenciales en clientes fieles."
				/>
				<ServiceItem
					icon="fa-search"
					title="Posicionamiento web (SEO)"
					description="Mejoramos el posicionamiento de las webs en los motores de búsqueda, atrayendo tráfico orgánico y aumentando la visibilidad online."
				/>
			</div>
			<Link to='/contact' className='cta-button contact-button fade-in-delay'>
				Contáctanos
			</Link>

			{/* Sección de preguntas frecuentes */}
			<Faqs></Faqs>

		</section>
	);
};

export default Services;
