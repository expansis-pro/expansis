import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils'; // Importar scrollToSection


const Navbar = ({ homeHeight }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const homeRef = useRef(null);
	// const [isHome, setIsHome] = useState(true);
	const [isFixed, setIsFixed] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);


	useEffect(() => {
		const handleScroll = () => {

			if (window.scrollY > (homeHeight)) {

				setIsFixed(true); // Navbar fijo

			} else {
				setIsFixed(false); // Navbar no fijo en Home

			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [homeHeight]);



	useEffect(() => {
		if (isFixed) {
			setIsTransitioning(true);
		} else {
			setIsTransitioning(false);
		}
	}, [isFixed]);


	return (
		<nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
			<div className={`navbar-padding`}>
				<h2>
					<a className=" navbarH1" onClick={() => scrollToSection('home')} ref={homeRef}>
						Expansis Pro
					</a>
				</h2>
				<button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>
				<ul className={`nav-links ${menuOpen ? 'open' : 'close'}`}>
					<li>
						<a onClick={() => scrollToSection('home')} >
							Inicio
						</a>
					</li>
					<li>
						<a onClick={() => scrollToSection('about')}>
							¿Qué es?
						</a>
					</li>
					<li>
						<a onClick={() => scrollToSection('services')}>
							Servicios
						</a>
					</li>
					<li>
						<a onClick={() => scrollToSection('aboutMe')}>
							Sobre mi
						</a>
					</li>
					<li>
						<a onClick={() => scrollToSection('contact')}>
							Contacto
						</a>
					</li>
					<li>
						<a onClick={() => scrollToSection('faqs')}>
							Faq
						</a>
					</li>
				</ul>
			</div>
		</nav >
	);
};

export default Navbar;