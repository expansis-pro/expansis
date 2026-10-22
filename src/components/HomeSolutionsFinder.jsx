// src/components/HomeSolutionsFinder.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const userGoals = [
	{
		id: 'b2b',
		buttonLabel: 'Captar Clientes B2B',
		icon: 'fa-solid fa-briefcase',
		badge: 'Solución Recomendada: Plan B2B Lead Gen',
		title: 'Canal Digital Corporativo + Google Search Ads',
		description:
			'Diseñado para empresas industriales, constructoras, servicios legales y consultoras. Creamos una plataforma corporativa rápida en React conectada a campañas de Google Ads que capturan a quienes buscan tu servicio activamente.',
		includes: ['Plataforma Corporativa en React', 'Pauta publicitaria en Google Search', 'Telemetría de conversiones en GA4', 'Dashboard de leads en Looker Studio'],
		primaryCtaText: 'Cotizar Ecosistema B2B',
		detailLink: '/soluciones#planes-ecosistema',
	},
	{
		id: 'ecommerce',
		buttonLabel: 'Vender Productos Online',
		icon: 'fa-solid fa-cart-shopping',
		badge: 'Solución Recomendada: Plan E-commerce',
		title: 'Tienda Transaccional Shopify + Catálogos de Ads',
		description:
			'Ideal para marcas y comercios de retail. Desarrollamos tu tienda en Shopify con Webpay y Mercado Pago, automatizamos carritos abandonados e inyectamos tráfico desde Meta Shopping y Google Merchant.',
		includes: ['Tienda Shopify optimizada para checkout', 'Integración de Webpay y Mercado Pago', 'Campañas en Meta y Google Shopping', 'Dashboard cruzando ROAS vs. Ventas'],
		primaryCtaText: 'Cotizar Tienda E-commerce',
		detailLink: '/soluciones/ecommerce',
	},
	{
		id: 'autoridad',
		buttonLabel: 'Marca Personal o Consultoría',
		icon: 'fa-solid fa-user-tie',
		badge: 'Solución Recomendada: Plan Autoridad',
		title: 'Oficina Digital One-Page en React (Strapi CMS)',
		description:
			'Especial para médicos, psicólogos, abogados y consultores independientes. Una tarjeta de presentación digital de alta gama para proyectar credibilidad, autoadministrable y orientada a canalizar consultas directas.',
		includes: ['Sitio One-Page en React ultrarrápido', 'Panel autogestionable con Strapi CMS', 'Campañas de visibilidad en Meta Ads', 'Formulario directo y agendamiento'],
		primaryCtaText: 'Cotizar Canal de Autoridad',
		detailLink: '/soluciones/web-para-profesionales',
	},
	{
		id: 'optimizacion',
		buttonLabel: 'Ya tengo web, busco Tráfico o Datos',
		icon: 'fa-solid fa-chart-line',
		badge: 'Solución Modular Específica',
		title: 'Inversión en Ads y Dashboards en Looker Studio',
		description:
			'Si tu sitio web ya funciona pero le falta tracción comercial o no tienes visibilidad de tus números, intervenimos con campañas profesionales en Google/Meta y centralizamos tus métricas en un tablero interactivo en vivo.',
		includes: [
			'Gestión avanzada de Google y Meta Ads',
			'Auditoría y limpieza de eventos en GA4',
			'Tableros en Looker Studio en tiempo real',
			'Optimización continua de CPL y ROAS',
		],
		primaryCtaText: 'Cotizar Módulos Específicos',
		detailLink: '/soluciones#contratacion-modular',
	},
];

export default function HomeSolutionsFinder() {
	const [selectedGoal, setSelectedGoal] = useState(userGoals[0]);

	return (
		<section id='buscador-soluciones' className='section-padding bg-ghostWhite border-t border-gray-100'>
			<div className='container-pro'>
				<div className='text-center mb-10 md:mb-12'>
					<span className='text-primario uppercase tracking-widest text-xs font-bold block mb-2'>Orientación por Objetivo</span>
					<h2 className='text-3xl md:text-4xl font-bold text-deepBlue mb-4'>¿Qué desafío buscas resolver en tu negocio?</h2>
					<p className='text-gray-600 font-light text-base md:text-lg max-w-xl mx-auto'>
						Selecciona tu meta comercial y te mostraremos la arquitectura digital recomendada para alcanzarla.
					</p>
				</div>

				{/* BOTONES INTERACTIVOS DE INTENCIÓN */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8'>
					{userGoals.map((goal) => {
						const isSelected = selectedGoal.id === goal.id;
						return (
							<button
								key={goal.id}
								onClick={() => setSelectedGoal(goal)}
								className={`p-4 md:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between min-h-[110px] cursor-pointer border ${
									isSelected
										? 'bg-deepBlue text-white shadow-xl border-primario scale-[1.02]'
										: 'bg-white text-gray-700 border-gray-200/80 hover:border-primario/50 hover:bg-gray-50/50'
								}`}>
								<i className={`${goal.icon} text-xl ${isSelected ? 'text-primario' : 'text-gray-400'}`}></i>
								<span className='font-semibold text-xs md:text-sm leading-snug mt-3'>{goal.buttonLabel}</span>
							</button>
						);
					})}
				</div>

				{/* TARJETA DE RESPUESTA DINÁMICA */}
				<div className='bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={selectedGoal.id}
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -15 }}
							transition={{ duration: 0.3 }}
							className='max-w-4xl mx-auto'>
							<span className='bg-primario/10 text-primario border border-primario/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4'>
								{selectedGoal.badge}
							</span>

							<h3 className='text-2xl md:text-3xl font-bold text-deepBlue mb-4'>{selectedGoal.title}</h3>

							<p className='text-gray-600 font-light text-base md:text-lg leading-relaxed mb-8'>{selectedGoal.description}</p>

							<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 pb-8 border-b border-gray-100'>
								{selectedGoal.includes.map((item, idx) => (
									<div key={idx} className='flex items-center gap-3 text-sm text-gray-700 font-light'>
										<div className='w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xs'>
											<i className='fa-solid fa-check'></i>
										</div>
										<span>{item}</span>
									</div>
								))}
							</div>

							<div className='flex flex-col sm:flex-row items-center gap-4'>
								<button
									onClick={() => window.dispatchEvent(new Event('open-contact-drawer'))}
									className='btn-primary w-full sm:w-auto py-3.5 px-8 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primario/25'>
									<span>{selectedGoal.primaryCtaText}</span>
									<i className='fa-regular fa-paper-plane text-xs'></i>
								</button>

								<Link
									href={selectedGoal.detailLink}
									className='btn-secondary w-full sm:w-auto py-3.5 px-6 text-sm font-semibold text-deepBlue border-deepBlue hover:bg-deepBlue hover:text-white text-center transition-all'>
									Ver Detalles y Precios
								</Link>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
