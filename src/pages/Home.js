import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Home = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Ajusta 768 según tus necesidades

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="background-container">
			<section id="home" className="home-section content">
				<div className="home-content-container">
					<h2 className="home-title fade-in">Expansis Pro</h2>
					<h3 className="home-subtitle fade-in">Creamos tu estategia digital</h3>
					<p className="home-description fade-in-delay">
						Orientado a profesionales y marcas que buscan expandir su negocio.
					</p>
					<a onClick={() => scrollToSection('services')} className="cta-button cta-button-a fade-in-delay">
						{isMobile ? 'Nuestros servicios' : 'Conoce nuestros servicios'}
					</a>
				</div>


			</section>
		</div>
	);
};

export default Home;