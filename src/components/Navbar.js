import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);

	// Tu lógica para cerrar el menú al hacer clic fuera es perfecta.
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

	// Modificamos la función para que acepte el evento y haga preventDefault
	const handleScrollClick = (event, sectionId) => {
		event.preventDefault(); // Evita el salto brusco del navegador
		scrollToSection(sectionId, () => setMenuOpen(false)); // Usa tu función de scroll suave
	};

	return (
		<nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 shadow-md" ref={navRef}>
			<div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8">

				{/* Logo o Título - CORREGIDO */}
				<a
					href="#home"
					className="text-2xl font-bold text-gray-800 hover:text-primario transition-colors cursor-pointer"
					onClick={(e) => handleScrollClick(e, 'home')}
				>
					Expansis Pro
				</a>

				{/* Botón de Menú Hamburguesa (este ya estaba correcto) */}
				<button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>

				{/* Lista de Enlaces de Navegación (versión de escritorio) - CORREGIDO */}
				<ul className="hidden md:flex items-center space-x-8">
					<li><a href="#home" onClick={(e) => handleScrollClick(e, 'home')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Inicio</a></li>
					<li><a href="#about" onClick={(e) => handleScrollClick(e, 'about')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">¿Qué es?</a></li>
					<li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Servicios</a></li>
					<li><a href="#aboutMe" onClick={(e) => handleScrollClick(e, 'aboutMe')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Sobre mi</a></li>
					<li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Contacto</a></li>
					<li><a href="#faqs" onClick={(e) => handleScrollClick(e, 'faqs')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Faq</a></li>
				</ul>
			</div>

			{/* Menú Desplegable para Móviles */}
			{menuOpen && (
				<div className="md:hidden bg-white">
					<ul className="flex flex-col items-center py-4">
						{/* Enlaces del menú móvil - CORREGIDO */}
						<li><a href="#home" onClick={(e) => handleScrollClick(e, 'home')} className="block py-2 text-gray-700 hover:text-primario font-medium">Inicio</a></li>
						<li><a href="#about" onClick={(e) => handleScrollClick(e, 'about')} className="block py-2 text-gray-700 hover:text-primario font-medium">¿Qué es?</a></li>
						<li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')} className="block py-2 text-gray-700 hover:text-primario font-medium">Servicios</a></li>
						<li><a href="#aboutMe" onClick={(e) => handleScrollClick(e, 'aboutMe')} className="block py-2 text-gray-700 hover:text-primario font-medium">Sobre mi</a></li>
						<li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="block py-2 text-gray-700 hover:text-primario font-medium">Contacto</a></li>
						<li><a href="#faqs" onClick={(e) => handleScrollClick(e, 'faqs')} className="block py-2 text-gray-700 hover:text-primario font-medium">Faq</a></li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;