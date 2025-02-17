import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';


const Home = () => {
	return (
		<section id='home' className='home-section section'>
			{/* <img src={logo} alt='Logo Expansis Pro' className='home-logo slide-in' /> */}
			<h1 className='fade-in'>Expansis Pro</h1>
			<h3 className='fade-in'>Aumenta tu presencia online.</h3>
			<p className='fade-in-delay'>Soluciones digitales para empresas y profesionales que buscan crecer.</p>

			<Link to='/services' className='cta-button fade-in-delay'>
				Conoce nuestros servicios
			</Link>
		</section>
	);
};

export default Home;
