// src/pages/About.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageDesktop from '../img/about-page_630x630.webp';
import aboutImageMobile from '../img/about-page_630x630.webp';

const About = () => {
	return (
		<section id="about" className="py-6 sm:py-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center">
				<ImageTextCTA
					imageMobile={aboutImageMobile}
					imageDesktop={aboutImageDesktop}
					alt="Carrito de Compras"
					title="¿Por qué Expansis Pro?"
					// --- CAMBIO REALIZADO: Texto restaurado a múltiples párrafos ---
					text={[
						'Expansis Pro impulsa el éxito digital de las empresas. Nuestros servicios ofrecen <strong>desarrollo web, consultoría digital y marketing online</strong>. Entregamos soluciones personalizadas que permiten a tu marca conectar con nuevas oportunidades y alcanzar su máximo potencial.',
						'Expansis Pro se enfoca en la <strong>tecnología y la innovación</strong> para brindar un servicio de alto valor, con la visión de ser un aliado estratégico en el crecimiento de las empresas.'
					]}
				// buttonContent='Contáctanos' // ELIMINADO: Se quita el contenido del botón
				// buttonLink='contact'     // ELIMINADO: Se quita el enlace del botón
				/>
			</div>
		</section>
	);
};

export default About;