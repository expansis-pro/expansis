import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

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
			{/* Se mantiene el grid, pero ahora los hijos tienen un orden específico para móvil */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">

				{/* --- CAMBIO: Se añadió order-4 para moverla al final en móvil --- */}
				<div className="space-y-4 order-4 md:order-none">
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

				{/* --- CAMBIO: Se añadió order-1 para que aparezca primero en móvil --- */}
				<div className="order-1 md:order-none">
					<h4 className="text-white font-semibold mb-4">Navegación</h4>
					<ul className="space-y-2">
						<li><Link to="/" onClick={() => handleFooterLinkClick('Link Navegacion Inicio', '/')} className="hover:text-white transition-colors">Inicio</Link></li>
						<li><Link to="/quienes-somos" onClick={() => handleFooterLinkClick('Link Navegacion Sobre Expansis', '/quienes-somos')} className="hover:text-white transition-colors">Sobre Expansis</Link></li>
						<li><Link to="/contacto" onClick={() => handleFooterLinkClick('Link Navegacion Contacto', '/contacto')} className="hover:text-white transition-colors">Contacto</Link></li>
						<li><Link to="/faq" onClick={() => handleFooterLinkClick('Link Navegacion FAQ', '/faq')} className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
					</ul>
				</div>

				{/* --- CAMBIO: Se añadió order-2 para que aparezca segundo en móvil --- */}
				<div className="order-2 md:order-none">
					<h4 className="text-white font-semibold mb-4">Nuestros Servicios</h4>
					<ul className="space-y-2">
						{servicesData.map(service => (
							<li key={service.slug}>
								<Link
									to={`/servicios/${service.slug}`}
									onClick={() => handleFooterLinkClick(`Link Servicio ${service.title}`, `/servicios/${service.slug}`)}
									className="hover:text-white transition-colors"
								>
									{service.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* --- CAMBIO: Se añadió order-3 para que aparezca tercero en móvil --- */}
				<div className="order-3 md:order-none">
					<h4 className="text-white font-semibold mb-4">Contacto</h4>
					<ul className="space-y-2">
						<li className="flex items-center justify-start">
							<i className="fa-solid fa-envelope mr-2"></i>
							<a href="mailto:info@expansispro.com" className="hover:text-white transition-colors">info@expansispro.com</a>
						</li>
						<li className="flex items-center justify-start">
							<i className="fa-brands fa-whatsapp mr-2"></i>
							<a href="https://wa.me/56965961086" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+56 9 6596 1086</a>
						</li>
						<li className="flex items-center justify-start">
							<i className="fa-brands fa-instagram mr-2"></i>
							<a
								href="https://www.instagram.com/expansispro/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => handleFooterLinkClick('Link Instagram', 'https://www.instagram.com/expansispro/')}
								className="hover:text-white transition-colors"
							>
								Síguenos en Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;