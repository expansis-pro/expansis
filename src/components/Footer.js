// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { sendWhatsAppMessage } from '../utils/trackingUtils';


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
		<footer className="bg-deepBlue text-ghostWhite/60 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">

				{/* Columna Marca: Se mantiene al final en móvil con order-4 */}
				<div className="space-y-4 order-4 md:order-none">
					<h3 className="text-ghostWhite">Expansis Pro</h3>
					<p className="text-sm font-light">Tu socio estratégico para la expansión digital.</p>
					<div className="text-xs text-gray-500 pt-4">
						<p>© {currentYear} Expansis Pro.</p>
						<p>
							Diseñado por{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://gonzalobos.com/"
								onClick={() => handleFooterLinkClick('Link Copyright Gonzalo Lobos', 'https://gonzalobos.com/')}
								className="hover:text-primario transition-colors"
							>
								Gonzalo Lobos
							</a>
						</p>
					</div>
				</div>

				{/* Navegación: Primero en móvil */}
				<div className="order-1 md:order-none">
					<h4 className="text-ghostWhite font-semibold mb-6 uppercase tracking-wider text-sm">Navegación</h4>
					<ul className="space-y-3">
						<li><Link to="/" onClick={() => handleFooterLinkClick('Link Inicio', '/')} className="hover:text-primario transition-colors">Inicio</Link></li>
						<li><Link to="/quienes-somos" onClick={() => handleFooterLinkClick('Link Sobre', '/quienes-somos')} className="hover:text-primario transition-colors">Sobre Expansis</Link></li>
						<li><Link to="/contacto" onClick={() => handleFooterLinkClick('Link Contacto', '/contacto')} className="hover:text-primario transition-colors">Contacto</Link></li>
						<li><Link to="/faq" onClick={() => handleFooterLinkClick('Link FAQ', '/faq')} className="hover:text-primario transition-colors">Preguntas Frecuentes</Link></li>
					</ul>
				</div>

				{/* Servicios: Segundo en móvil */}
				<div className="order-2 md:order-none">
					<h4 className="text-ghostWhite font-semibold mb-6 uppercase tracking-wider text-sm">Servicios</h4>
					<ul className="space-y-3">
						{servicesData.map(service => (
							<li key={service.slug}>
								<Link
									to={`/servicios/${service.slug}`}
									onClick={() => handleFooterLinkClick(`Link ${service.title}`, `/servicios/${service.slug}`)}
									className="hover:text-primario transition-colors"
								>
									{service.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contacto: Tercero en móvil */}
				<div className="order-3 md:order-none">
					<h4 className="text-ghostWhite font-semibold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
					<ul className="space-y-4">
						<li className="flex items-center group">
							<i className="fa-solid fa-envelope mr-3 text-primario"></i>
							<a href="mailto:info@expansispro.com" className="hover:text-ghostWhite transition-colors">info@expansispro.com</a>
						</li>
						<li className="flex items-center group">
							<i className="fa-brands fa-whatsapp mr-3 text-primario"></i>
							<button
								onClick={() => sendWhatsAppMessage("Información General")}
								className="hover:text-ghostWhite transition-colors"
							>
								+56 988318443
							</button>
						</li>
						<li className="flex items-center group">
							<i className="fa-brands fa-instagram mr-3 text-primario"></i>
							<a
								href="https://www.instagram.com/expansispro/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => handleFooterLinkClick('Link Instagram', 'https://www.instagram.com/expansispro/')}
								className="hover:text-ghostWhite transition-colors"
							>
								@expansispro
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;