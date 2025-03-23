import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils'; // Importar scrollToSection


const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);


	useEffect(() => {
		// Función para manejar el clic fuera del navbar
		function handleClickOutside(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		}


		// Agregamos el listener para el evento 'mousedown'
		document.addEventListener("mousedown", handleClickOutside);

		// Limpieza del listener al desmontar el componente
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]); // Dependencia en menuOpen para que se ejecute cuando cambie

	const closeMenuAndScroll = (sectionId) => {
		scrollToSection(sectionId, () => setMenuOpen(false)); // Pasa la función de callback
	};


	return (
		<nav className="navbar" ref={navRef}>
			<div className="navbar-display-inline-items">
				<div className='nav-section1'>
					<h2>
						<a className=" navbarH1" onClick={() => scrollToSection('home')} ref={navRef}>
							Expansis Pro
						</a>
					</h2>

				</div>
				<div className='nav-section2'>


				</div>
				<button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>
				<ul className={`nav-links ${menuOpen ? 'open' : 'close'}`}>
					<li>
						<a onClick={() => closeMenuAndScroll('home')} >
							Inicio
						</a>
					</li>
					<li>
						<a onClick={() => closeMenuAndScroll('about')}>
							¿Qué es?
						</a>
					</li>
					<li>
						<a onClick={() => closeMenuAndScroll('services')}>
							Servicios
						</a>
					</li>
					<li>
						<a onClick={() => closeMenuAndScroll('aboutMe')}>
							Sobre mi
						</a>
					</li>
					<li>
						<a onClick={() => closeMenuAndScroll('contact')}>
							Contacto
						</a>
					</li>
					<li>
						<a onClick={() => closeMenuAndScroll('faqs')}>
							Faq
						</a>
					</li>
				</ul>
			</div>
		</nav >
	);
};

export default Navbar;