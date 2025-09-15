import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // <-- 1. IMPORTAR MOTION
import { servicesData } from '../data/servicesData';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
	const navRef = useRef(null);
	const servicesNavRef = useRef(null);

	// --- 2. VARIANTES DE ANIMACIÓN ---
	const desktopDropdownVariants = {
		open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
		closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
	};

	const mobileMenuVariants = {
		open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
		closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
	};

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
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const closeMobileMenu = (linkName) => {
		setMenuOpen(false);
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
		setMenuOpen(false);
		setServicesMenuOpen(false);
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
		fontWeight: '600'
	};

	return (
		<nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 shadow-md" ref={navRef}>
			<div className="max-w-6xl mx-auto flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8">

				<NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-primario transition-colors" onClick={handleLogoClick}>
					Expansis Pro
				</NavLink>

				<button className="md:hidden text-2xl" onClick={handleHamburgerClick}>
					☰
				</button>

				{/* --- MENÚ DE ESCRITORIO --- */}
				<ul className="hidden md:flex items-center space-x-8">
					<li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Inicio')}>Inicio</NavLink></li>

					<li className="relative" ref={servicesNavRef}>
						<button
							onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
							className="flex items-center gap-1 text-gray-700 hover:text-primario font-medium transition-colors"
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
									className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
								>
									<NavLink
										to="/servicios"
										onClick={() => setServicesMenuOpen(false)}
										className="block px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 hover:text-primario border-b"
									>
										Ver Todos los Servicios
									</NavLink>

									{servicesData.map(service => (
										<NavLink
											key={service.slug}
											to={`/servicios/${service.slug}`}
											onClick={() => {
												setServicesMenuOpen(false);
												handleNavLinkClick(`Servicio: ${service.title}`);
											}}
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primario"
										>
											{service.title}
										</NavLink>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</li>

					<li><NavLink to="/quienes-somos" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</NavLink></li>
					<li><NavLink to="/contacto" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Contacto')}>Contacto</NavLink></li>
					<li><NavLink to="/faq" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-700 hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('FAQ')}>FAQ</NavLink></li>
				</ul>
			</div>

			{/* --- MENÚ MÓVIL --- */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="md:hidden bg-white overflow-hidden"
						variants={mobileMenuVariants}
						initial="closed"
						animate="open"
						exit="closed"
					>
						<ul className="flex flex-col items-center py-4">
							<li><NavLink to="/" onClick={() => closeMobileMenu('Inicio')} className="block py-2 text-gray-700 hover:text-primario font-medium">Inicio</NavLink></li>

							<li className="w-full text-center">
								<button
									onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
									className="py-2 text-gray-700 hover:text-primario font-medium w-full flex items-center justify-center gap-1"
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
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											className="overflow-hidden bg-gray-50"
										>
											{servicesData.map(service => (
												<NavLink
													key={service.slug}
													to={`/servicios/${service.slug}`}
													onClick={() => {
														setServicesMenuOpen(false);
														closeMobileMenu(`Servicio: ${service.title}`);
													}}
													className="block py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-primario"
												>
													{service.title}
												</NavLink>
											))}
										</motion.div>
									)}
								</AnimatePresence>
							</li>

							<li><NavLink to="/quienes-somos" onClick={() => closeMobileMenu('Sobre Expansis')} className="block py-2 text-gray-700 hover:text-primario font-medium">Sobre Expansis</NavLink></li>
							<li><NavLink to="/contacto" onClick={() => closeMobileMenu('Contacto')} className="block py-2 text-gray-700 hover:text-primario font-medium">Contacto</NavLink></li>
							<li><NavLink to="/faq" onClick={() => closeMobileMenu('FAQ')} className="block py-2 text-gray-700 hover:text-primario font-medium">FAQ</NavLink></li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;