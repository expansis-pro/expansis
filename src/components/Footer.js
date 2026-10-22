// src/components/Footer.js
'use client';
import React from 'react';
import Link from 'next/link';
import { solutionsData } from '@/data/solutionsData';
import { contactData } from '@/data/contactConfig';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const handleFooterLinkClick = (label, url) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'click_footer_link', {
				link_label: label,
				link_url: url,
			});
		}
	};

	return (
		<footer className="bg-[#07090e] text-white border-t border-white/10 pt-20 pb-12">
			<div className="container-pro max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

					{/* Columna 1: Marca & Misión */}
					<div className="lg:col-span-5 space-y-4">
						<Link href="/" className="text-xl font-light tracking-tight text-white flex items-center gap-2">
							<span className="w-2 h-2 bg-primario" />
							<span>Expansis Pro</span>
						</Link>
						<p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
							Agencia de ingeniería web, captación activa en Google/Meta Ads y telemetría de rentabilidad comercial. Diseñamos activos digitales de alto rendimiento en Chile.
						</p>
						<div className="pt-2 font-mono text-[11px] text-zinc-500">
							[ STGO // V REGION // OPERACIÓN REMOTA ]
						</div>
					</div>

					{/* Columna 2: Programas & Hub de Soluciones */}
					<div className="lg:col-span-4 space-y-3 font-mono text-xs">
						<span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-4">
							[ PROGRAMAS DIGITALES ]
						</span>
						<ul className="space-y-2.5">
							{/* ENLACE DIRECTO AL HUB DE SOLUCIONES */}
							<li>
								<Link
									href="/soluciones"
									onClick={() => handleFooterLinkClick('Hub de Soluciones', '/soluciones')}
									className="text-primario hover:underline font-medium flex items-center gap-1.5"
								>
									<span>→ Ver Hub de Soluciones</span>
								</Link>
							</li>
							{solutionsData.map((solution) => (
								<li key={solution.slug}>
									<Link
										href={`/soluciones/${solution.slug}`}
										onClick={() => handleFooterLinkClick(solution.title, `/soluciones/${solution.slug}`)}
										className="text-zinc-400 hover:text-white transition-colors block"
									>
										{solution.title}
									</Link>
								</li>
							))}
							<li>
								<Link
									href="/#planes-ecosistema"
									onClick={() => handleFooterLinkClick('Comparativa de Planes', '/#planes-ecosistema')}
									className="text-zinc-500 hover:text-white transition-colors block text-[11px] pt-1"
								>
									Comparar Estructura de Planes →
								</Link>
							</li>
						</ul>
					</div>

					{/* Columna 3: Navegación & Empresa */}
					<div className="lg:col-span-3 space-y-3 font-mono text-xs">
						<span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-4">
							[ NAVEGACIÓN ]
						</span>
						<ul className="space-y-2.5">
							<li>
								<Link
									href="/proyectos"
									onClick={() => handleFooterLinkClick('Casos de Estudio', '/proyectos')}
									className="text-zinc-400 hover:text-white transition-colors block"
								>
									Casos de Éxito
								</Link>
							</li>
							<li>
								<Link
									href="/quienes-somos"
									onClick={() => handleFooterLinkClick('Filosofía', '/quienes-somos')}
									className="text-zinc-400 hover:text-white transition-colors block"
								>
									Sobre Expansis
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									onClick={() => handleFooterLinkClick('Blog & Recursos', '/blog')}
									className="text-zinc-400 hover:text-white transition-colors block"
								>
									Blog &amp; Recursos
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									onClick={() => handleFooterLinkClick('Preguntas Frecuentes', '/faq')}
									className="text-zinc-400 hover:text-white transition-colors block"
								>
									FAQ
								</Link>
							</li>
							<li>
								<button
									onClick={() => window.dispatchEvent(new Event('open-contact-drawer'))}
									className="text-primario hover:underline cursor-pointer block text-left pt-1"
								>
									Abrir Formulario de Contacto →
								</button>
							</li>
						</ul>
					</div>
				</div>

				{/* Barra Inferior */}
				<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
					<div>
						&copy; {currentYear} Expansis Pro SpA. Todos los derechos reservados.
					</div>
					<div className="flex items-center gap-6">
						<a
							href={contactData.socials.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors"
						>
							Instagram
						</a>
						<a
							href={contactData.email.getLink()}
							className="hover:text-white transition-colors"
						>
							info@expansispro.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}