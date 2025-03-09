// src/pages/About.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageMobile from '../img/about-page_400x200.jpg';
import aboutImageDesktop from '../img/about-page_630x630.jpg';

const About = () => {
	return (
		<section id="about" className='section about'>
			<h1 className='fade-in'>Quiénes Somos</h1>
			<ImageTextCTA
				imageMobile={aboutImageMobile}
				imageDesktop={aboutImageDesktop}
				title="Sobre Nosotros"
				text={[
					'En Expansis Pro, impulsamos el crecimiento de las empresas en el mundo digital. Somos un equipo de expertos apasionados por la tecnología y la innovación, que trabajan para conectar a las empresas con nuevas oportunidades y ayudarlas a alcanzar su máximo potencial.',
					'Nos especializamos en desarrollo web, consultoría digital y marketing online, ofreciendo soluciones personalizadas que se adaptan a las necesidades de cada cliente.'
				]}
				buttonText="Conoce nuestros servicios"
				buttonLink="/services"
			/>
		</section>
	);
};

export default About;