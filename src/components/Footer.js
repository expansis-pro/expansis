// src/components/Footer.js
import React from 'react';


const Footer = () => {
	// Obtenemos el año actual dinámicamente para que no se desactualice.
	const currentYear = new Date().getFullYear();

	return (


		<footer className="bg-gray-800 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">

					{/* Texto de Copyright */}
					<div className="text-sm text-center md:text-left">
						<p>© {currentYear} Expansis Pro. Todos los derechos reservados.</p>
						<p>Diseñado y desarrollado por <a target="_blank" rel="noopener noreferrer" href="https://gonzalobos.com/">Gonzalo Lobos</a>.</p>
					</div>

					{/* SECCIÓN ACTUALIZADA: Navegación de Atajos */}
					<div className="text-sm text-center md:text-left">
						<h4 className="text-white font-semibold mb-2">Navegación</h4>
						<ul className="space-y-1">
							<li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
							<li><a href="/servicios" className="hover:text-white transition-colors">Servicios</a></li>
							<li><a href="/quienes-somos" className="hover:text-white transition-colors">Sobre Expansis</a></li>
							<li><a href="/contacto" className="hover:text-white transition-colors">Contacto</a></li>
							<li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li> {/* Se añade el enlace a FAQ */}
						</ul>
					</div>

					{/* Contenedor de Redes Sociales */}
					<div className="flex items-center space-x-6">

						{/* <a href="https://github.com/lobosgonza" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
							<i className="fa-brands fa-github text-xl"></i>
						</a> */}
						{/* ENLACE DE INSTAGRAM ACTUALIZADO */}
						<a href="https://www.instagram.com/expansispro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
							<i className="fa-brands fa-instagram text-xl"></i>
						</a>
					</div>

				</div>
			</div>
		</footer>

	);
};

export default Footer;