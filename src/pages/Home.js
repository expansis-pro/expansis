import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';





const Home = () => {


	return (
		<div className="background-container">
			<section id='home' className='home-section content'>
				<h1 className='fade-in'>Expansis Pro</h1>
				<h2 className='fade-in'>Aumenta tu presencia online.</h2>
				<p className='fade-in-delay'>Soluciones digitales para empresas y profesionales que buscan crecer.</p>
				<Link to='/services' className='cta-button fade-in-delay'>
					Conoce nuestros servicios
				</Link>
			</section>
		</div>
	);
};

export default Home;
