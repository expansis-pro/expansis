// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
	return (
		<section className='section about'>
			<h1 className='fade-in'>Quiénes Somos</h1>
			<p className='fade-in-delay'>En Expansis Pro, impulsamos el crecimiento de las empresas en el mundo digital. Somos un equipo de expertos apasionados por la tecnología y la innovación, que trabajan para conectar a las empresas con nuevas oportunidades y ayudarlas a alcanzar su máximo potencial.</p>
			<p className='fade-in-delay'>Nos especializamos en desarrollo web, consultoría digital y marketing online, ofreciendo soluciones personalizadas que se adaptan a las necesidades de cada cliente.</p>
			{/* <h1 className='fade-in-delay'>Nuestro Equipo</h1>
			<p className='fade-in-delay'>Conoce a las personas detrás de Expansis Pro.</p> */}
			<Link to='/services' className='cta-button fade-in-delay'>
				Conoce nuestros servicios
			</Link>
		</section>
	);
};

export default About;
