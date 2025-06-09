import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);

	// Tu lógica para cerrar el menú al hacer clic fuera es perfecta, no necesita cambios.
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
	}, []); // Se quitó la dependencia de menuOpen para evitar re-registrar el evento innecesariamente.

	const closeMenuAndScroll = (sectionId) => {
		// La lógica de scroll y cierre del menú también es correcta.
		scrollToSection(sectionId, () => setMenuOpen(false));
	};

	return (
		// <nav>: Barra principal
		// - `bg-white/80`: Fondo blanco con 80% de opacidad.
		// - `backdrop-blur-sm`: Efecto de desenfoque del fondo (moderno y elegante).
		// - `fixed top-0 left-0 w-full`: La fija en la parte superior de la pantalla.
		// - `z-50`: Un z-index alto para que esté por encima de todo.
		// - `shadow-md`: Una sombra sutil.
		<nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 shadow-md" ref={navRef}>
			{/* Contenedor principal del contenido del navbar */}
			{/* - `max-w-7xl mx-auto`: Limita el ancho y centra el contenido.
                - `flex justify-between items-center`: Crea el layout de flexbox.
                - `p-4`: Padding general.
                - `px-4 sm:px-6 lg:px-8`: Padding horizontal responsive. */}
			<div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8">

				{/* Logo o Título */}
				<a className="text-2xl font-bold text-gray-800 hover:text-primario transition-colors cursor-pointer" onClick={() => scrollToSection('home')}>
					Expansis Pro
				</a>

				{/* Botón de Menú Hamburguesa (visible solo en móviles) */}
				{/* - `md:hidden`: Oculta el botón en pantallas medianas y más grandes. */}
				<button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>

				{/* Lista de Enlaces de Navegación (versión de escritorio) */}
				{/* - `hidden md:flex`: Oculta la lista en móviles, pero la muestra como flexbox en desktop.
                    - `space-x-8`: Añade espacio horizontal entre los elementos. */}
				<ul className="hidden md:flex items-center space-x-8">
					{/* Los `<a>` ahora tienen estilos de Tailwind directamente. */}
					<li><a onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Inicio</a></li>
					<li><a onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">¿Qué es?</a></li>
					<li><a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Servicios</a></li>
					<li><a onClick={() => scrollToSection('aboutMe')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Sobre mi</a></li>
					<li><a onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Contacto</a></li>
					<li><a onClick={() => scrollToSection('faqs')} className="text-gray-700 hover:text-primario font-medium transition-colors cursor-pointer">Faq</a></li>
				</ul>
			</div>

			{/* Menú Desplegable para Móviles */}
			{/* - Se muestra o se oculta basado en el estado `menuOpen`.
                - `md:hidden`: Asegura que este menú completo solo exista en resoluciones móviles. */}
			{menuOpen && (
				<div className="md:hidden bg-white">
					<ul className="flex flex-col items-center py-4">
						<li><a onClick={() => closeMenuAndScroll('home')} className="block py-2 text-gray-700 hover:text-primario font-medium">Inicio</a></li>
						<li><a onClick={() => closeMenuAndScroll('about')} className="block py-2 text-gray-700 hover:text-primario font-medium">¿Qué es?</a></li>
						<li><a onClick={() => closeMenuAndScroll('services')} className="block py-2 text-gray-700 hover:text-primario font-medium">Servicios</a></li>
						<li><a onClick={() => closeMenuAndScroll('aboutMe')} className="block py-2 text-gray-700 hover:text-primario font-medium">Sobre mi</a></li>
						<li><a onClick={() => closeMenuAndScroll('contact')} className="block py-2 text-gray-700 hover:text-primario font-medium">Contacto</a></li>
						<li><a onClick={() => closeMenuAndScroll('faqs')} className="block py-2 text-gray-700 hover:text-primario font-medium">Faq</a></li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;