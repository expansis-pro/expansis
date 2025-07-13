import React from 'react';

const Footer = () => {
	// Obtenemos el año actual dinámicamente para que no se desactualice.
	const currentYear = new Date().getFullYear();

	// Función genérica para manejar clics en enlaces del footer
	const handleFooterLinkClick = (label, url) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_footer_link', { // Nombre del evento en snake_case para GA4
				event_category: 'Footer', // Categoría del evento
				event_label: label, // Etiqueta del evento (ej. "Inicio", "Instagram")
				link_url: url // URL del enlace clickeado
			});
		}
	};

	return (
		<footer className="bg-gray-800 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">

					{/* Texto de Copyright */}
					<div className="text-sm text-center md:text-left">
						<p>© {currentYear} Expansis Pro. Todos los derechos reservados.</p>
						<p>
							Diseñado y desarrollado por {" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://gonzalobos.com/"
								onClick={() => handleFooterLinkClick('Link Copyright Gonzalo Lobos', 'https://gonzalobos.com/')}
								className="hover:text-white transition-colors"
							>
								Gonzalo Lobos
							</a>.
						</p>
					</div>

					{/* SECCIÓN ACTUALIZADA: Navegación de Atajos */}
					<div className="text-sm text-center md:text-left">
						<h4 className="text-white font-semibold mb-2">Navegación</h4>
						<ul className="space-y-1">
							<li>
								<a
									href="/"
									onClick={() => handleFooterLinkClick('Link Navegacion Inicio', '/')}
									className="hover:text-white transition-colors"
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									href="/servicios"
									onClick={() => handleFooterLinkClick('Link Navegacion Servicios', '/servicios')}
									className="hover:text-white transition-colors"
								>
									Servicios
								</a>
							</li>
							<li>
								<a
									href="/quienes-somos"
									onClick={() => handleFooterLinkClick('Link Navegacion Sobre Expansis', '/quienes-somos')}
									className="hover:text-white transition-colors"
								>
									Sobre Expansis
								</a>
							</li>
							<li>
								<a
									href="/contacto"
									onClick={() => handleFooterLinkClick('Link Navegacion Contacto', '/contacto')}
									className="hover:text-white transition-colors"
								>
									Contacto
								</a>
							</li>
							<li>
								<a
									href="/faq"
									onClick={() => handleFooterLinkClick('Link Navegacion FAQ', '/faq')}
									className="hover:text-white transition-colors"
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* Contenedor de Redes Sociales */}
					<div className="flex items-center space-x-6">
						{/* ENLACE DE INSTAGRAM ACTUALIZADO */}
						<a
							href="https://www.instagram.com/expansispro/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							onClick={() => handleFooterLinkClick('Link Instagram', 'https://www.instagram.com/expansispro/')}
							className="hover:text-white transition-colors"
						>
							<i className="fa-brands fa-instagram text-xl"></i>
						</a>
					</div>

				</div>
			</div>
		</footer>
	);
};

export default Footer;
