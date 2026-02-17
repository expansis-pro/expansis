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

	// Variantes de animación para el dropdown Desktop
	const desktopDropdownVariants = {
		open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
		closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
	};

	// Variantes para el Menú Mobile (Nuevo)
	const mobileMenuVariants = {
		closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
		open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		setMenuOpen(false); // IMPORTANTE: Esto cierra el menú mobile al hacer clic
	};

	const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-deepBlue shadow-lg py-2" : "bg-transparent py-4"
		}`;

	return (
		<nav className={navClasses} ref={navRef}>
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">

				{/* LOGO */}
				<NavLink
					to="/"
					className="text-2xl font-semibold text-ghostWhite hover:text-primario transition-colors"
					onClick={handleLogoClick}
				>
					Expansis Pro
				</NavLink>

				{/* BOTÓN HAMBURGUESA */}
				<button
					className="md:hidden text-ghostWhite text-3xl focus:outline-none"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					{menuOpen ? '✕' : '☰'}
				</button>

				{/* MENU DESKTOP */}
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

			{/* --- MENÚ MOBILE (BLOQUE AÑADIDO) --- */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						variants={mobileMenuVariants}
						initial="closed"
						animate="open"
						exit="closed"
						className="md:hidden bg-deepBlue border-t border-gray-800 overflow-hidden"
					>
						<ul className="flex flex-col p-4 space-y-4">
							<li>
								<NavLink to="/" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Inicio')}>
									Inicio
								</NavLink>
							</li>
							{/* En mobile, listamos los servicios directamente para mejor UX */}
							<li className="border-b border-gray-800 pb-2">
								<span className="text-gray-400 text-sm uppercase ">Servicios</span>
								<div className="mt-2 ml-4 flex flex-col space-y-2">
									{servicesData.map(service => (
										<NavLink
											key={service.slug}
											to={`/servicios/${service.slug}`}
											onClick={() => handleNavLinkClick(`Servicio Mobile: ${service.title}`)}
											className="text-ghostWhite/80 text-base"
										>
											{service.title}
										</NavLink>
									))}
								</div>
							</li>
							<li><NavLink to="/quienes-somos" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</NavLink></li>
							<li><NavLink to="/contacto" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Contacto')}>Contacto</NavLink></li>
							<li><NavLink to="/faq" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('FAQ')}>FAQ</NavLink></li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;