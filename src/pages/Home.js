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
					<h3 className="home-subtitle fade-in">Aumenta tu presencia online.</h3>
					<p className={`home-description fade-in-delay`}>
						Soluciones digitales para empresas y profesionales que buscan crecer su marca.
					</p>
					<a onClick={() => scrollToSection('services')} className="cta-button fade-in-delay">
						{isMobile ? 'Nuestros servicios' : 'Conoce nuestros servicios'}
					</a>
				</div>


			</section>
		</div>
	);
};

export default Home;