import React from 'react';
import { Link } from 'react-router-dom';
import Faqs from '../components/Faqs';


const Services = () => {
	return (
		<section className='services section'>
			<h1 className='fade-in'>Nuestros Servicios</h1>
			{/* <p className='fade-in-delay'>En Expansis Pro, ofrecemos una amplia gama de servicios para ayudar a las empresas a alcanzar tus objetivos digitales:</p> */}
			<div className='services-list'>
				<div className='service-item fade-in-delay'>
					<i className="fas fa-code fa-2xl"></i> {/* Icono para Desarrollo web a medida */}
					<h3>Desarrollo web</h3>
					<p>Plataformas web atractivas y funcionales para impulsar tu negocio online. Experiencia de usuario, seguridad y escalabilidad para alcanzar tus objetivos.</p>
				</div>
				<div className='service-item fade-in-delay'>
					<i className="fas fa-chart-line fa-2xl"></i> {/* Icono para Consultoría digital */}
					<h3>Consultoría digital</h3>
					<p>Asesoramos a las empresas en su estrategia digital, ayudándolas a definir sus objetivos, identificar oportunidades y optimizar sus procesos.</p>
				</div>
				<div className='service-item fade-in-delay'>
					<i className="fas fa-bullhorn fa-2xl"></i> {/* Icono para Marketing online */}
					<h3>Marketing online</h3>
					<p>Implementamos estrategias de marketing digital para aumentar la visibilidad, generar leads y convertir clientes potenciales en clientes fieles.</p>
				</div>
				<div className='service-item fade-in-delay'>
					<i className="fas fa-search fa-2xl"></i> {/* Icono para Gestión de posicionamiento web (SEO) */}
					<h3>Posicionamiento web (SEO)</h3>
					<p>Mejoramos el posicionamiento de las webs en los motores de búsqueda, atrayendo tráfico orgánico y aumentando la visibilidad online.</p>
				</div>
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
