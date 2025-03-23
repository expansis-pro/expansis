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
				<h1 className="fade-in">Expansis Pro</h1>
				<h2 className="fade-in">Aumenta tu presencia online.</h2>
				<p className={`fade-in-delay ${isMobile ? 'hide-mobile' : ''}`}>
					Soluciones digitales para empresas y profesionales que buscan crecer.
				</p>
				<a onClick={() => scrollToSection('services')} className="cta-button fade-in-delay">
					{isMobile ? 'Nuestros servicios' : 'Conoce nuestros servicios'}
				</a>
			</section>
		</div >
	);
};

export default Home;