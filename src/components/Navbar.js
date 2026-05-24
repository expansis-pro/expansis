// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { contactData } from '../data/contactConfig';
import { trackWhatsAppClick } from '../utils/trackingUtils';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesMenuOpen, setServicesMenuOpen] = useState(false); // Dropdown Desktop
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Acordeón Mobile
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
	const subMenuVariants = {
		closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
		open: { opacity: 1, height: "auto", transition: { duration: 0.2 } }
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
			<div className="container-pro flex justify-between items-center">

				{/* LOGO */}
				<NavLink
					to="/"
					className="text-2xl  text-ghostWhite transition-colors"
					onClick={handleLogoClick}
				>
					Expansis <span className="text-primario ">Pro</span>
				</NavLink>

				{/* BOTÓN HAMBURGUESA */}
				<button
					className="md:hidden text-ghostWhite text-4xl focus:outline-none"
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

					<li className="relative group py-2" // Añadimos 'group' y un pequeño padding para que el puente de hover no se rompa
						ref={servicesNavRef}
						onMouseEnter={() => setServicesMenuOpen(true)}
						onMouseLeave={() => setServicesMenuOpen(false)}>
						<button
							className="flex items-center gap-1 text-ghostWhite hover:text-primario font-medium transition-colors cursor-default"
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
									initial="closed" animate="open" exit="closed"
									className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-deepBlue border border-gray-700 rounded-2xl shadow-2xl py-3 overflow-hidden"
								>
									{servicesData.map(service => (
										<NavLink
											key={service.slug}
											to={`/servicios/${service.slug}`}
											className="block px-6 py-2 text-ghostWhite/70 hover:bg-white/5 hover:text-primario transition-colors text-sm"
											onClick={() => handleNavLinkClick(service.title)}
										>
											{service.title}
										</NavLink>
									))}

									{/* BOTÓN DESTACADO DESKTOP */}
									<div className="mt-2 pt-2 border-t border-gray-700 px-3">
										<NavLink
											to="/servicios"
											className="flex items-center justify-center gap-2 w-full py-2 bg-primario/10 text-primario rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primario hover:text-white transition-all"
											onClick={() => handleNavLinkClick('Ver Todos')}
										>
											Ver todos los servicios
											<i className="fa-solid fa-arrow-right text-[10px]"></i>
										</NavLink>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</li>
					<li>
						<NavLink
							to="/proyectos"
							className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Proyectos')}
						>
							Proyectos
						</NavLink>
					</li>
					<li><NavLink to="/quienes-somos" className="text-ghostWhite hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</NavLink></li>
					<li><NavLink to="/contacto" className="text-ghostWhite hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('Contacto')}>Contacto</NavLink></li>
					<li><NavLink to="/faq" className="text-ghostWhite hover:text-primario font-medium transition-colors" onClick={() => handleNavLinkClick('FAQ')}>FAQ</NavLink></li>
					{/* CTA DESKTOP USANDO DATA DINÁMICA */}
					<li>
						<button
							onClick={() => trackWhatsAppClick('nav_desktop', 'Información General')}
							className="btn-primary py-2.5 px-6 text-sm cursor-pointer"
						>
							Cotizar Proyecto
						</button>
					</li>
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
						<ul className="flex flex-col p-8 space-y-8">
							<li>
								<NavLink to="/" className="text-ghostWhite block text-2xl" onClick={() => handleNavLinkClick('Inicio')}>
									Inicio
								</NavLink>
							</li>
							{/* ACORDEÓN DE SERVICIOS */}
							<li className="space-y-4">
								<button
									onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
									className="text-ghostWhite w-full flex justify-between items-center text-2xl font-bold focus:outline-none"
								>
									Servicios
									<motion.i
										className="fa-solid fa-chevron-down text-xl text-primario"
										animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
									/>
								</button>

								<AnimatePresence>
									{mobileServicesOpen && (
										<motion.div
											variants={subMenuVariants} initial="closed" animate="open" exit="closed"
											className="grid grid-cols-1 gap-6 ml-2 border-l border-gray-800 pl-6 overflow-hidden"
										>
											{servicesData.map(service => (
												<NavLink key={service.slug} to={`/servicios/${service.slug}`} className="text-ghostWhite/70 text-xl font-light" onClick={handleNavLinkClick}>
													{service.title}
												</NavLink>
											))}
											<NavLink to="/servicios" className="text-primario font-bold text-lg flex items-center gap-2 pt-4 border-t border-gray-800/50" onClick={handleNavLinkClick}>
												Ver todos los servicios <i className="fa-solid fa-arrow-right"></i>
											</NavLink>
										</motion.div>
									)}
								</AnimatePresence>
							</li>

							<li>
								<NavLink to="/proyectos" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Proyectos')}>
									Proyectos
								</NavLink>
							</li>
							<li><NavLink to="/quienes-somos" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</NavLink></li>
							<li><NavLink to="/contacto" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Contacto')}>Contacto</NavLink></li>
							<li><NavLink to="/faq" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('FAQ')}>FAQ</NavLink></li><li className="pt-4">
								<button
									className="btn-primary w-full py-5 text-xl shadow-primario/20 cursor-pointer"
									onClick={() => {
										setMenuOpen(false); // Cierra el menú desplegable primero
										trackWhatsAppClick('nav_mobile', 'Información General');
									}}
								>
									<i className="fa-brands fa-whatsapp text-2xl"></i>
									Cotizar ahora
								</button>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;