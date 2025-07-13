import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import analytics from '../analytics'; // ELIMINAR: Ya no usaremos la librería analytics directamente aquí

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const closeMobileMenu = (linkName) => {
		setMenuOpen(false);
		// Track the click event using gtag()
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_navegacion', {
				event_category: 'Navegacion Movil',
				event_label: linkName
			});
		}
	}

	const handleNavLinkClick = (linkName) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_navegacion', {
				event_category: 'Navegacion Escritorio',
				event_label: linkName
			});
		}
	};

	const handleLogoClick = () => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_navegacion', {
				event_category: 'Navegacion',
				event_label: 'Logo Expansis Pro'
			});
		}
		closeMobileMenu(); // También cierra el menú móvil si está abierto y se hace clic en el logo
	};

	const handleHamburgerClick = () => {
		setMenuOpen(!menuOpen);
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_interfaz', {
				event_category: 'Navegacion',
				event_label: 'Boton Hamburguesa'
			});
		}
	};

	const activeLinkStyle = {
		color: '#f27405',
		fontWeight: '600' // semibold
	};

	return (
		<nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 shadow-md" ref={navRef}>
			<div className="max-w-6xl mx-auto flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8">

				{/* Logo */}
				<NavLink
					to="/"
					className="text-2xl font-bold text-gray-800 hover:text-primario transition-colors"
					onClick={handleLogoClick} // Añade el manejador de clic para el logo
				>
					Expansis Pro
				</NavLink>

				{/* Botón de Menú Hamburguesa */}
				<button className="md:hidden text-2xl" onClick={handleHamburgerClick}>
					☰
				</button>

				{/* --- CAMBIO: Lista de Enlaces de Escritorio (Estructura Limpia) --- */}
				<ul className="hidden md:flex items-center space-x-8">
					<li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Inicio')}>Inicio</NavLink></li>
					<li><NavLink to="/servicios" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Servicios')}>Servicios</NavLink></li>
					<li><NavLink to="/quienes-somos" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</NavLink></li>
					<li><NavLink to="/contacto" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Contacto')}>Contacto</NavLink></li>
					<li><NavLink to="/faq" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('FAQ')}>FAQ</NavLink></li>
				</ul>
			</div>

			{/* --- CAMBIO: Menú Desplegable para Móviles (Estructura Limpia) --- */}
			{menuOpen && (
				<div className="md:hidden bg-white">
					<ul className="flex flex-col items-center py-4">
						<li><NavLink to="/" onClick={() => closeMobileMenu('Inicio')} className="block py-2 text-gray-700 hover:text-primario font-medium">Inicio</NavLink></li>
						<li><NavLink to="/servicios" onClick={() => closeMobileMenu('Servicios')} className="block py-2 text-gray-700 hover:text-primario font-medium">Servicios</NavLink></li>
						<li><NavLink to="/quienes-somos" onClick={() => closeMobileMenu('Sobre Expansis')} className="block py-2 text-gray-700 hover:text-primario font-medium">Sobre Expansis</NavLink></li>
						<li><NavLink to="/contacto" onClick={() => closeMobileMenu('Contacto')} className="block py-2 text-gray-700 hover:text-primario font-medium">Contacto</NavLink></li>
						<li><NavLink to="/faq" onClick={() => closeMobileMenu('FAQ')} className="block py-2 text-gray-700 hover:text-primario font-medium">FAQ</NavLink></li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
