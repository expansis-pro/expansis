// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef(null);
	const servicesNavRef = useRef(null);

	// Variantes de animación para el dropdown
	const desktopDropdownVariants = {
		open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
		closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
	};

	// Lógica para detectar el scroll y cambiar el fondo
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Cerrar menús al hacer clic fuera
	useEffect(() => {
		function handleClickOutside(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
			if (servicesNavRef.current && !servicesNavRef.current.contains(event.target)) {
				setServicesMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// --- FUNCIONES DE CLIC (Restauradas) ---
	const handleLogoClick = () => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_navegacion', {
				event_category: 'Navegacion',
				event_label: 'Logo Expansis Pro'
			});
		}
		setMenuOpen(false);
		setServicesMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleNavLinkClick = (linkName) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_navegacion', {
				event_category: scrolled ? 'Navegacion Escritorio Scrolled' : 'Navegacion Escritorio Top',
				event_label: linkName
			});
		}
		setServicesMenuOpen(false);
		setMenuOpen(false);
	};

	const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-deepBlue shadow-lg py-2" : "bg-transparent py-4"
		}`;

	return (
		<nav className={navClasses} ref={navRef}>
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">

				{/* --- LOGO: Ahora con font-semibold para menos peso visual --- */}
				<NavLink
					to="/"
					className="text-2xl text-ghostWhite hover:text-primario transition-colors"
					onClick={handleLogoClick}
				>
					Expansis Pro
				</NavLink>

				<button className="md:hidden text-ghostWhite text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? '✕' : '☰'}
				</button>

				<ul className="hidden md:flex items-center space-x-8">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Inicio')}
						>
							Inicio
						</NavLink>
					</li>

					<li className="relative" ref={servicesNavRef}>
						<button
							onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
							className="flex items-center gap-1 text-ghostWhite hover:text-primario font-medium transition-colors"
						>
							Servicios
							<motion.i
								className="fa-solid fa-chevron-down text-xs"
								animate={{ rotate: servicesMenuOpen ? 180 : 0 }}
							/>
						</button>
						<AnimatePresence>
							{servicesMenuOpen && (
								<motion.div
									variants={desktopDropdownVariants}
									initial="closed"
									animate="open"
									exit="closed"
									className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-deepBlue border border-gray-700 rounded-lg shadow-xl py-2"
								>
									{servicesData.map(service => (
										<NavLink
											key={service.slug}
											to={`/servicios/${service.slug}`}
											onClick={() => handleNavLinkClick(`Servicio: ${service.title}`)}
											className="block px-4 py-2 text-ghostWhite/80 hover:bg-gray-800 hover:text-primario transition-colors"
										>
											{service.title}
										</NavLink>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</li>

					<li><NavLink to="/quienes-somos" className="text-ghostWhite hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</NavLink></li>
					<li><NavLink to="/contacto" className="text-ghostWhite hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Contacto')}>Contacto</NavLink></li>
					<li><NavLink to="/faq" className="text-ghostWhite hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('FAQ')}>FAQ</NavLink></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;