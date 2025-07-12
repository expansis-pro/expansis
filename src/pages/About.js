// src/pages/About.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageDesktop from '../img/about-page_630x630.webp';
import aboutImageMobile from '../img/about-page_630x630.webp';

const About = () => {
	return (
		// Contenedor de la sección con padding vertical y horizontal.
		<section id="about" className="py-66 sm:py-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto text-center">
				{/* Título de la sección, con estilos de tipografía y margen inferior. */}
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 fade-in">
					¿Por qué Expansis Pro?
				</h2>

				{/* El componente hijo que contiene el layout principal. */}
				<ImageTextCTA
					imageMobile={aboutImageMobile}
					imageDesktop={aboutImageDesktop}
					alt="Carrito de Compras"
					text={[
						'Expansis Pro impulsa el éxito digital de las empresas. Nuestros servicios ofrecen <strong>desarrollo web, consultoría digital y marketing online</strong>. Entregamos soluciones personalizadas que permiten a tu marca conectar con nuevas oportunidades y alcanzar su máximo potencial.',
						'Expansis Pro se enfoca en la <strong>tecnología y la innovación</strong> para brindar un servicio de alto valor, con la visión de ser un aliado estratégico en el crecimiento de las empresas.'
					]}
					buttonContent='Contáctanos'
					buttonLink='contact'
				/>
			</div>
		</section>
	);
};

export default About;