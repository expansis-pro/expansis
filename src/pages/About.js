// src/pages/About.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
// import aboutImageMobile from '../img/about-page_400x200.jpg';
import aboutImageDesktop from '../img/about-page_630x630.jpg';
import aboutImageMobile from '../img/about-page_630x630.jpg';



const About = () => {
	return (
		<section id="about" className='section about'>
			<h1 className='fade-in'>¿Qué es Expansis Pro?</h1>
			<ImageTextCTA
				imageMobile={aboutImageMobile}
				imageDesktop={aboutImageDesktop}
				alt="Carrito de Compras"
				text={[
					'Expansis Pro impulsa el éxito digital de las empresas. El servicio ofrece <strong>desarrollo web, consultoría digital y marketing online</strong>, soluciones personalizadas que permiten a tu negocio conectar con nuevas oportunidades y alcanzar su máximo potencial.', 'Expansis Pro se enfoca en la <strong>tecnología y la innovación</strong> para brindar un servicio de alto valor, con la visión de ser un aliado estratégico en el crecimiento de las empresas.'
				]}
				buttonContent='Contáctanos'
				buttonLink='contact'
			/>
		</section>
	);
};

export default About;