// src/components/EcosystemPricing.jsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
	{
		id: 'profesionales',
		code: 'MOD-01',
		tabLabel: 'Profesionales',
		name: 'Marca Personal & Profesionales',
		target: 'Especialistas, médicos, abogados, psicólogos y consultores.',
		badge: 'Canal de Autoridad',
		image: '/assets/images/marca-personal.webp',
		setup: '$450.000 CLP',
		maintenance: '$250.000 CLP / mes',
		commitment: 'Mínimo 2 meses',
		adSpend: '$300.000 - $450.000 CLP',
		adSpendPlatform: 'Meta Ads directo',
		description: 'Infraestructura de autoridad para validar prestigio y canalizar consultas directas sin intermediarios.',
		features: [
			'Web One-Page en React (hasta 5 secciones estructuradas)',
			'Panel de gestión de contenidos con Strapi CMS',
			'Formulario con ruteo directo a WhatsApp y correo corporativo',
			'Gestión técnica de adquisición y audiencias en Meta Ads',
			'Diseño de piezas gráficas y creativos mensuales incluido',
			'Medición de conversiones y eventos clave con GA4 y GTM',
			'Servidor de alta velocidad, certificados SSL y mantención continua',
			'Reporte mensual de consultas, visitas y costo por prospecto',
		],
	},
	{
		id: 'b2b',
		code: 'MOD-02',
		tabLabel: 'Empresas B2B',
		name: 'Empresas & Servicios B2B',
		target: 'Constructoras, servicios industriales, logística y consultoría.',
		badge: 'Canal Corporativo',
		image: '/assets/images/empresa-b2b.webp',
		setup: '$750.000 CLP',
		maintenance: '$250.000 CLP / mes',
		commitment: 'Mínimo 2 meses',
		adSpend: '$300.000 - $450.000 CLP',
		adSpendPlatform: 'Google Search + Meta Ads',
		description: 'Ecosistema corporativo diseñado para generar un flujo continuo y verificable de cotizaciones calificadas.',
		features: [
			'Web Multisección en React (hasta 5 páginas corporativas)',
			'Formularios avanzados de cotización y filtro de empresas',
			'Gestión de demanda activa en Google Search + Retargeting Meta',
			'Redacción técnica persuasiva y diseño de anuncios incluido',
			'Medición avanzada de conversiones y analítica web continua',
			'Dashboard interactivo en tiempo real con Looker Studio',
			'Reporte mensual de rentabilidad, análisis de leads y CAC',
			'Mantención web prioritaria, copias de seguridad y hosting',
		],
	},
	{
		id: 'ecommerce',
		code: 'MOD-03',
		tabLabel: 'E-commerce',
		name: 'E-commerce & Tienda Online',
		target: 'Marcas de retail y distribuidores de productos a escala.',
		badge: 'Canal Transaccional',
		image: '/assets/images/ecommerce.webp',
		setup: '$1.450.000 CLP',
		maintenance: '$250.000 CLP / mes',
		commitment: 'Mínimo 2 meses',
		adSpend: '$300.000 - $450.000 CLP',
		adSpendPlatform: 'Google Shopping + Meta Commerce',
		description: 'Canal transaccional automatizado con inventario sincronizado, pasarelas locales y couriers integrados.',
		features: [
			'Tienda online completa de alta conversión en Shopify',
			'Carga y estructuración inicial de hasta 25 productos',
			'Integración de pasarelas Webpay Plus y Mercado Pago',
			'Tarificación automática de couriers según zonas de despacho',
			'Sincronización de catálogo con Google y Meta Shopping',
			'Flujo automatizado de recuperación de carritos abandonados',
			'Dashboard en vivo cruzando ventas reales frente a ROAS',
			'Soporte técnico continuo y optimización mensual del catálogo',
		],
	},
];

export default function EcosystemPricing() {
	const [activeTab, setActiveTab] = useState(plans[1].id);
	const currentPlan = plans.find((p) => p.id === activeTab) || plans[1];

	return (
		<section id='planes-ecosistema' className='py-24 bg-[#0a0d14] text-white border-t border-b border-white/10'>
			<div className='container-pro max-w-6xl mx-auto px-4'>
				{/* Cabecera Técnica */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6'>
					<div>
						<span className='font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2'>[ Soluciones ]</span>
						<h2 className='text-3xl md:text-5xl font-light tracking-tight text-white'>Planes de Canal Digital</h2>
					</div>
					<p className='text-sm font-light text-zinc-400 max-w-md leading-relaxed'>
						En base a la experiencia recoletada de nuestros clientes hemos desarrollados las siguientes soluciones.<br></br>A partir de tu perfil armamos un plan de trabajo que
						permita desarrollar un canal digital que integre la infraestructura técnica, captación de tráfico e inteligencia de datos, integrados bajo un modelo comercial
						integrado.
					</p>
				</div>

				{/* Selector de Pestañas Geométrico */}
				<div className='grid grid-cols-1 sm:grid-cols-3 border border-white/15 mb-12'>
					{plans.map((plan) => {
						const isActive = activeTab === plan.id;
						return (
							<button
								key={plan.id}
								onClick={() => setActiveTab(plan.id)}
								className={`py-4 px-6 text-left transition-all relative border-b sm:border-b-0 sm:border-r last:border-r-0 border-white/15 cursor-pointer ${
									isActive ? 'bg-white text-black' : 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.02]'
								}`}>
								<div className='flex items-center justify-between mb-1'>
									<span className='font-mono text-[10px] tracking-widest uppercase opacity-60'>{plan.code}</span>
									{isActive && <span className='w-1.5 h-1.5 bg-primario' />}
								</div>
								<span className='text-sm font-medium tracking-wide block'>{plan.tabLabel}</span>
							</button>
						);
					})}
				</div>

				{/* Ventana Activa de Solución con Imagen de Fondo */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={currentPlan.id}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.18 }}
						className='relative border border-white/15 bg-[#0f1420] overflow-hidden'>
						{/* Capa de Imagen de Fondo para la Ventana */}
						<img src={currentPlan.image} alt={currentPlan.name} className='absolute inset-0 z-0 w-full h-full object-cover opacity-15 grayscale contrast-125 pointer-events-none' />
						{/* Velo protector de alta densidad */}
						<div className='absolute inset-0 z-0 bg-gradient-to-r from-[#0f1420] via-[#0f1420]/90 to-[#0f1420]/75 pointer-events-none' />

						{/* Contenido en Primer Plano */}
						<div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/15'>
							{/* Columna Izquierda: Información Financiera */}
							<div className='lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between'>
								<div>
									<div className='flex items-center gap-2 mb-3'>
										<span className='font-mono text-[10px] uppercase tracking-widest text-primario bg-primario/10 px-2 py-0.5 border border-primario/30'>{currentPlan.badge}</span>
									</div>

									<h3 className='text-2xl sm:text-3xl font-normal text-white mb-2'>{currentPlan.name}</h3>
									<p className='text-xs text-zinc-400 font-light mb-4'>{currentPlan.target}</p>
									<p className='text-sm text-zinc-200 font-light leading-relaxed mb-8'>{currentPlan.description}</p>

									{/* Módulo de Precios Tipo Terminal */}
									<div className='border border-white/10 bg-black/60 divide-y divide-white/10 mb-8 font-mono backdrop-blur-sm'>
										<div className='p-4'>
											<span className='text-[10px] uppercase tracking-wider text-zinc-400 block'>Setup Inicial (Pago único)</span>
											<span className='text-2xl text-white font-medium block mt-1'>{currentPlan.setup}</span>
										</div>

										<div className='p-4 flex items-center justify-between text-xs'>
											<span className='text-zinc-400'>Honorarios mensuales:</span>
											<span className='text-white font-medium'>{currentPlan.maintenance}</span>
										</div>

										<div className='p-4 flex items-center justify-between text-xs'>
											<span className='text-zinc-400'>Pauta sugerida ({currentPlan.adSpendPlatform}):</span>
											<span className='text-primario font-medium'>{currentPlan.adSpend}</span>
										</div>

										<div className='px-4 py-2 bg-white/[0.02] text-[10px] text-zinc-500 flex justify-between'>
											<span>Condición de inicio:</span>
											<span className='text-zinc-400'>{currentPlan.commitment}</span>
										</div>
									</div>
								</div>

								<div className='space-y-3'>
									<button
										onClick={() => window.dispatchEvent(new Event('open-contact-drawer'))}
										className='w-full py-4 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold hover:bg-primario/90 transition-colors flex items-center justify-center gap-2 cursor-pointer'>
										<span>Cotizar {currentPlan.tabLabel}</span>
										<span className='text-xs'>→</span>
									</button>

									<Link
										href={`/soluciones/${currentPlan.id === 'profesionales' ? 'marca-personal-profesionales' : currentPlan.id === 'b2b' ? 'empresas-b2b' : 'ecommerce'}`}
										className='w-full py-3.5 border border-white/20 text-zinc-300 text-xs font-mono uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2'>
										<span>Ver Detalle del Programa</span>
										<span className='text-xs'>↗</span>
									</Link>
								</div>
							</div>

							{/* Columna Derecha: Especificación de Entregables */}
							<div className='lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between'>
								<div>
									<span className='font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-6'>[ ALCANCE Y ENTREGABLES TÉCNICOS ]</span>

									<ul className='divide-y divide-white/10 border-t border-b border-white/10 mb-8'>
										{currentPlan.features.map((feat, fIdx) => (
											<li key={fIdx} className='py-3 flex items-start gap-4 text-xs sm:text-sm font-light text-zinc-200'>
												<span className='font-mono text-primario text-xs shrink-0 select-none'>{(fIdx + 1).toString().padStart(2, '0')}.</span>
												<span className='leading-relaxed'>{feat}</span>
											</li>
										))}
									</ul>
								</div>

								<div className='p-4 border border-white/10 bg-black/40 text-xs font-light text-zinc-300 flex items-start gap-3 backdrop-blur-sm'>
									<span className='text-primario font-mono text-sm leading-none shrink-0'>■</span>
									<span>Propiedad total: el cliente mantiene la titularidad absoluta sobre su repositorio de código, dominios, accesos a paneles y cuentas publicitarias.</span>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Términos y Transparencia */}
				<div className='mt-12 p-6 border border-white/10 bg-black/40 text-xs text-zinc-400 font-light space-y-2'>
					<p>
						<strong className='text-white font-mono font-medium'>[01. ALCANCE]</strong> Los valores de Setup corresponden a una base técnica de referencia y se confirman
						formalmente tras la sesión de diagnóstico inicial.
					</p>
					<p>
						<strong className='text-white font-mono font-medium'>[02. FACTURACIÓN]</strong> La mantención mensual cubre honorarios de soporte, servidor, diseño publicitario y
						optimización. El saldo de pauta se cancela directamente por el cliente a las plataformas sin comisiones de intermediación.
					</p>
					<p>
						<strong className='text-white font-mono font-medium'>[03. APRENDIZAJE]</strong> El compromiso de 60 días permite a los algoritmos recopilar datos estadísticamente
						significativos para optimizar el costo de adquisición.
					</p>
				</div>
			</div>
		</section>
	);
}
