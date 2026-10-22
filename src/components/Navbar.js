// src/components/Navbar.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { solutionsData } from '@/data/solutionsData';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
	const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef(null);
	const solutionsNavRef = useRef(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		function handleClickOutside(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
			if (solutionsNavRef.current && !solutionsNavRef.current.contains(event.target)) {
				setSolutionsMenuOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleNavLinkClick = (linkName) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_navegacion', {
				event_category: scrolled ? 'Navegacion Escritorio Scrolled' : 'Navegacion Escritorio Top',
				event_label: linkName,
			});
		}
		setSolutionsMenuOpen(false);
		setMenuOpen(false);
	};

	const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b ${scrolled || menuOpen
			? 'bg-[#07090e]/95 backdrop-blur-md border-white/15 py-3'
			: 'bg-transparent border-transparent py-5'
		}`;

	return (
		<nav className={navClasses} ref={navRef}>
			<div className="container-pro max-w-6xl mx-auto px-4 flex justify-between items-center">
				{/* LOGO */}
				<Link
					href="/"
					className="text-xl font-light text-white tracking-tight flex items-center gap-2"
					onClick={() => {
						setMenuOpen(false);
						setSolutionsMenuOpen(false);
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				>
					<span className="w-2 h-2 bg-primario" />
					<span>Expansis Pro</span>
				</Link>

				{/* BOTÓN HAMBURGUESA MÓVIL */}
				<button
					className="md:hidden text-white font-mono text-sm px-3 py-1.5 border border-white/20 focus:outline-none cursor-pointer"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Alternar menú"
				>
					{menuOpen ? '[✕]' : '[MENU]'}
				</button>

				{/* MENÚ ESCRITORIO */}
				<ul className="hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-[0.15em]">
					<li>
						<Link
							href="/"
							className={`transition-colors ${pathname === '/' ? 'text-primario font-semibold' : 'text-zinc-400 hover:text-white'
								}`}
							onClick={() => handleNavLinkClick('Inicio')}
						>
							Inicio
						</Link>
					</li>

					{/* DROPDOWN SOLUCIONES */}
					<li
						className="relative py-2"
						ref={solutionsNavRef}
						onMouseEnter={() => setSolutionsMenuOpen(true)}
						onMouseLeave={() => setSolutionsMenuOpen(false)}
					>
						<div className="flex items-center gap-1.5">
							<Link
								href="/soluciones"
								className={`transition-colors uppercase ${pathname.startsWith('/soluciones') ? 'text-primario font-semibold' : 'text-zinc-400 hover:text-white'
									}`}
								onClick={() => handleNavLinkClick('Soluciones Hub')}
							>
								Soluciones
							</Link>
							<button
								onClick={() => setSolutionsMenuOpen(!solutionsMenuOpen)}
								className="text-[10px] text-zinc-500 hover:text-white cursor-pointer"
								aria-label="Abrir opciones de soluciones"
							>
								{solutionsMenuOpen ? '▲' : '▼'}
							</button>
						</div>

						<AnimatePresence>
							{solutionsMenuOpen && (
								<motion.div
									initial={{ opacity: 0, y: 4 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 4 }}
									transition={{ duration: 0.15 }}
									className="absolute top-full left-0 w-80 bg-[#0d121d] border border-white/15 divide-y divide-white/10 shadow-2xl p-0"
								>
									{/* ENLACE DIRECTO AL HUB */}
									<Link
										href="/soluciones"
										className="block p-4 bg-white/[0.02] hover:bg-white/[0.06] transition-colors group text-left border-b border-white/10"
										onClick={() => handleNavLinkClick('Ver Todas las Soluciones')}
									>
										<span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primario block mb-1">
											[ CATÁLOGO GENERAL ]
										</span>
										<span className="font-sans text-xs font-medium text-white block">
											Hub de Soluciones →
										</span>
									</Link>

									{solutionsData.map((sol) => (
										<Link
											key={sol.slug}
											href={`/soluciones/${sol.slug}`}
											className="block p-4 hover:bg-white/[0.03] transition-colors group text-left"
											onClick={() => handleNavLinkClick(sol.title)}
										>
											<span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-primario block mb-1">
												[ {sol.badge} ]
											</span>
											<span className="font-sans text-xs font-normal text-zinc-200 group-hover:text-white block">
												{sol.title}
											</span>
										</Link>
									))}

									<Link
										href="/#planes-ecosistema"
										className="block p-3.5 bg-black/40 hover:bg-primario hover:text-white transition-colors text-center font-mono text-[10px] text-zinc-400 tracking-widest uppercase"
										onClick={() => handleNavLinkClick('Comparar Planes')}
									>
										Comparar Precios &amp; Estructura →
									</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</li>

					<li>
						<Link
							href="/proyectos"
							className={`transition-colors ${pathname === '/proyectos' ? 'text-primario font-semibold' : 'text-zinc-400 hover:text-white'
								}`}
							onClick={() => handleNavLinkClick('Proyectos')}
						>
							Casos
						</Link>
					</li>

					<li>
						<Link
							href="/quienes-somos"
							className={`transition-colors ${pathname === '/quienes-somos' ? 'text-primario font-semibold' : 'text-zinc-400 hover:text-white'
								}`}
							onClick={() => handleNavLinkClick('Sobre Expansis')}
						>
							Filosofía
						</Link>
					</li>

					<li>
						<Link
							href="/blog"
							className={`transition-colors ${pathname.startsWith('/blog') ? 'text-primario font-semibold' : 'text-zinc-400 hover:text-white'
								}`}
							onClick={() => handleNavLinkClick('Blog')}
						>
							Blog
						</Link>
					</li>

					<li>
						<Link
							href="/faq"
							className={`transition-colors ${pathname === '/faq' ? 'text-primario font-semibold' : 'text-zinc-400 hover:text-white'
								}`}
							onClick={() => handleNavLinkClick('FAQ')}
						>
							FAQ
						</Link>
					</li>

					<li>
						<button
							onClick={() => window.dispatchEvent(new Event('open-contact-drawer'))}
							className="py-2.5 px-5 bg-primario text-white text-[11px] font-mono uppercase tracking-[0.2em] font-medium hover:bg-primario/90 transition-colors cursor-pointer border border-primario"
						>
							Cotizar Proyecto
						</button>
					</li>
				</ul>
			</div>

			{/* MENÚ MÓVIL */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-[#07090e] border-t border-white/10"
					>
						<ul className="flex flex-col p-6 space-y-4 font-mono text-xs uppercase tracking-widest text-left divide-y divide-white/10">
							<li className="pt-2">
								<Link href="/" className="text-zinc-300 block py-1" onClick={() => handleNavLinkClick('Inicio')}>
									Inicio
								</Link>
							</li>

							<li className="pt-3">
								<div className="flex justify-between items-center py-1">
									<Link
										href="/soluciones"
										className="text-white font-mono uppercase"
										onClick={() => handleNavLinkClick('Hub Soluciones Móvil')}
									>
										Soluciones (Hub)
									</Link>
									<button
										onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
										className="text-primario px-2 py-1"
									>
										{mobileSolutionsOpen ? '▲' : '▼'}
									</button>
								</div>

								{mobileSolutionsOpen && (
									<div className="pl-4 mt-2 space-y-2 border-l border-white/15 py-2">
										<Link
											href="/soluciones"
											className="block text-primario py-1 font-mono text-[11px]"
											onClick={() => handleNavLinkClick('Ver Catálogo')}
										>
											→ Ver Todas las Soluciones
										</Link>
										{solutionsData.map((sol) => (
											<Link
												key={sol.slug}
												href={`/soluciones/${sol.slug}`}
												className="block text-zinc-400 hover:text-white py-1 font-sans text-xs capitalize"
												onClick={() => handleNavLinkClick(sol.title)}
											>
												{sol.title}
											</Link>
										))}
									</div>
								)}
							</li>

							<li className="pt-3">
								<Link href="/proyectos" className="text-zinc-300 block py-1" onClick={() => handleNavLinkClick('Proyectos')}>
									Casos de Éxito
								</Link>
							</li>

							<li className="pt-3">
								<Link href="/quienes-somos" className="text-zinc-300 block py-1" onClick={() => handleNavLinkClick('Sobre Expansis')}>
									Filosofía
								</Link>
							</li>

							<li className="pt-3">
								<Link href="/blog" className="text-zinc-300 block py-1" onClick={() => handleNavLinkClick('Blog')}>
									Blog &amp; Recursos
								</Link>
							</li>

							<li className="pt-3">
								<Link href="/faq" className="text-zinc-300 block py-1" onClick={() => handleNavLinkClick('FAQ')}>
									Preguntas Frecuentes
								</Link>
							</li>

							<li className="pt-4">
								<button
									className="w-full py-4 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-medium"
									onClick={() => {
										setMenuOpen(false);
										window.dispatchEvent(new Event('open-contact-drawer'));
									}}
								>
									Iniciar Diagnóstico →
								</button>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}