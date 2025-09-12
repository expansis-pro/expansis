// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const handleFooterLinkClick = (label, url) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_footer_link', {
				event_category: 'Footer',
				event_label: label,
				link_url: url
			});
		}
	};

	return (
		<footer className="bg-gray-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

				{/* Columna 1: Marca y Copyright */}
				<div className="space-y-4">
					<h3 className="text-2xl font-bold text-white">Expansis Pro</h3>
					<p className="text-sm">Tu socio estratégico para la expansión digital.</p>
					<div className="text-xs text-gray-500">
						<p>© {currentYear} Expansis Pro. Todos los derechos reservados.</p>
						<p>
							Diseñado y desarrollado por{" "}
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
				</div>

				{/* Columna 2: Navegación */}
				<div>
					<h4 className="text-white font-semibold mb-4">Navegación</h4>
					<ul className="space-y-2">
						<li>
							<Link to="/" onClick={() => handleFooterLinkClick('Link Navegacion Inicio', '/')} className="hover:text-white transition-colors">
								Inicio
							</Link>
						</li>
						<li>
							<Link to="/quienes-somos" onClick={() => handleFooterLinkClick('Link Navegacion Sobre Expansis', '/quienes-somos')} className="hover:text-white transition-colors">
								Sobre Expansis
							</Link>
						</li>
						<li>
							<Link to="/contacto" onClick={() => handleFooterLinkClick('Link Navegacion Contacto', '/contacto')} className="hover:text-white transition-colors">
								Contacto
							</Link>
						</li>
						<li>
							<Link to="/faq" onClick={() => handleFooterLinkClick('Link Navegacion FAQ', '/faq')} className="hover:text-white transition-colors">
								FAQ
							</Link>
						</li>
					</ul>
				</div>

				{/* Columna 3: Contacto y Redes Sociales */}
				<div>
					<h4 className="text-white font-semibold mb-4">Contacto</h4>
					<ul className="space-y-2">
						<li className="flex items-center justify-center md:justify-start">
							<i className="fa-solid fa-envelope mr-2"></i>
							<a href="mailto:gonzalo@expansispro.com" className="hover:text-white transition-colors">gonzalo@expansispro.com</a>
						</li>
						<li className="flex items-center justify-center md:justify-start">
							<i className="fa-brands fa-whatsapp mr-2"></i>
							<a href="https://wa.me/56965961086" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+56 9 6596 1086</a>
						</li>
					</ul>
					<div className="mt-6 flex items-center justify-center md:justify-start">
						{/* --- CAMBIO: Se añadió texto al enlace de Instagram --- */}
						<a
							href="https://www.instagram.com/expansispro/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							onClick={() => handleFooterLinkClick('Link Instagram', 'https://www.instagram.com/expansispro/')}
							className="inline-flex items-center gap-2 hover:text-white transition-colors"
						>
							<i className="fa-brands fa-instagram text-2xl"></i>
							<span>Síguenos en Instagram</span>
						</a>
						{/* --- Se eliminó el enlace de LinkedIn --- */}
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;