'use client'; // 👈 1. Directiva obligatoria para usar useRef, useState y framer-motion

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // 👈 2. Importación nativa de Next.js
import { usePathname } from 'next/navigation'; // 👈 3. Hook nativo para saber la ruta activa
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { trackWhatsAppClick } from '@/utils/trackingUtils';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef(null);
	const servicesNavRef = useRef(null);
	const pathname = usePathname(); // Reemplaza a location.pathname

	const desktopDropdownVariants = {
		open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
		closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
	};

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
		setMenuOpen(false);
	};

	const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-deepBlue shadow-lg py-2" : "bg-transparent py-4"
		}`;

	return (
		<nav className={navClasses} ref={navRef}>
			<div className="container-pro flex justify-between items-center">

				{/* LOGO */}
				<Link
					href="/"
					className="text-2xl text-ghostWhite transition-colors"
					onClick={handleLogoClick}
				>
					Expansis <span className="text-primario">Pro</span>
				</Link>

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
						<Link
							href="/"
							className={`font-medium transition-colors ${pathname === '/' ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Inicio')}
						>
							Inicio
						</Link>
					</li>

					<li className="relative group py-2"
						ref={servicesNavRef}
						onMouseEnter={() => setServicesMenuOpen(true)}
						onMouseLeave={() => setServicesMenuOpen(false)}>
						<Link
							href="/servicios"
							className={`flex items-center gap-1 font-medium transition-colors ${pathname.startsWith('/servicios') ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Sección Servicios General')}
						>
							Servicios
							<motion.i
								className="fa-solid fa-chevron-down text-xs"
								animate={{ rotate: servicesMenuOpen ? 180 : 0 }}
							/>
						</Link>

						<AnimatePresence>
							{servicesMenuOpen && (
								<motion.div
									variants={desktopDropdownVariants}
									initial="closed" animate="open" exit="closed"
									className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-deepBlue border border-gray-700 rounded-2xl shadow-2xl py-3 overflow-hidden"
								>
									{servicesData.map(service => (
										<Link
											key={service.slug}
											href={`/servicios/${service.slug}`}
											className="block px-6 py-2 text-ghostWhite/70 hover:bg-white/5 hover:text-primario transition-colors text-sm"
											onClick={() => handleNavLinkClick(service.title)}
										>
											{service.title}
										</Link>
									))}

									<div className="mt-2 pt-2 border-t border-gray-700 px-3">
										<Link
											href="/servicios"
											className="flex items-center justify-center gap-2 w-full py-2 bg-primario/10 text-primario rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primario hover:text-white transition-all"
											onClick={() => handleNavLinkClick('Ver Todos')}
										>
											Ver todos los servicios
											<i className="fa-solid fa-arrow-right text-[10px]"></i>
										</Link>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</li>
					<li>
						<Link
							href="/proyectos"
							className={`font-medium transition-colors ${pathname === '/proyectos' ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Proyectos')}
						>
							Proyectos
						</Link>
					</li>
					<li>
						<Link
							href="/quienes-somos"
							className={`font-medium transition-colors ${pathname === '/quienes-somos' ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Sobre Expansis')}
						>
							Sobre Expansis
						</Link>
					</li>
					<li>
						<Link
							href="/contacto"
							className={`font-medium transition-colors ${pathname === '/contacto' ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('Contacto')}
						>
							Contacto
						</Link>
					</li>
					<li>
						<Link
							href="/faq"
							className={`font-medium transition-colors ${pathname === '/faq' ? 'text-primario' : 'text-ghostWhite hover:text-primario'}`}
							onClick={() => handleNavLinkClick('FAQ')}
						>
							FAQ
						</Link>
					</li>
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

			{/* MENÚ MOBILE */}
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
								<Link href="/" className="text-ghostWhite block text-2xl" onClick={() => handleNavLinkClick('Inicio')}>
									Inicio
								</Link>
							</li>
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
												<Link key={service.slug} href={`/servicios/${service.slug}`} className="text-ghostWhite/70 text-xl font-light" onClick={() => handleNavLinkClick(service.title)}>
													{service.title}
												</Link>
											))}
											<Link href="/servicios" className="text-primario font-bold text-lg flex items-center gap-2 pt-4 border-t border-gray-800/50" onClick={() => handleNavLinkClick('Ver Todos')}>
												Ver todos los servicios <i className="fa-solid fa-arrow-right"></i>
											</Link>
										</motion.div>
									)}
								</AnimatePresence>
							</li>

							<li>
								<Link href="/proyectos" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Proyectos')}>
									Proyectos
								</Link>
							</li>
							<li><Link href="/quienes-somos" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Sobre Expansis')}>Sobre Expansis</Link></li>
							<li><Link href="/contacto" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('Contacto')}>Contacto</Link></li>
							<li><Link href="/faq" className="text-ghostWhite block text-lg" onClick={() => handleNavLinkClick('FAQ')}>FAQ</Link></li>
							<li className="pt-4">
								<button
									className="btn-primary w-full py-5 text-xl shadow-primario/20 cursor-pointer"
									onClick={() => {
										setMenuOpen(false);
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