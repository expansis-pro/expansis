// src/components/EcosystemFlow.jsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ecosystemSteps = [
	{
		id: 'planeacion',
		code: 'FASE-01',
		number: '01',
		title: 'Diagnóstico y Planeación',
		shortDesc: 'Entrevistas & Levantamiento de Modelo',
		icon: 'fa-solid fa-clipboard-question',
		image: '/assets/images/expansisPro_aboutus.webp',
		content:
			'Realizamos entrevistas estratégicas y formulamos las preguntas clave para entender el modelo operativo, el perfil de tus clientes y las necesidades reales de tu negocio. Con este levantamiento estructuramos una hoja de ruta técnica y comercial sólida antes de programar una sola línea de código.',
		deliverableTag: 'Plan de Trabajo & Arquitectura de Información',
	},
	{
		id: 'infraestructura',
		code: 'FASE-02',
		number: '02',
		title: 'Infraestructura Digital',
		shortDesc: 'Canal Web en React o Shopify',
		icon: 'fa-solid fa-laptop-code',
		image: '/assets/images/expansisPro-desarrollo-web.webp',
		content:
			'Diseñamos y programamos el activo receptor central en React o Shopify. Una plataforma de alta velocidad optimizada para conversión (CRO), estructurada para indexar en Google y preparada para recibir tráfico calificado sin caídas ni fricciones de carga.',
		deliverableTag: 'Activo Web Propietario & Indexación Base',
	},
	{
		id: 'adquisicion',
		code: 'FASE-03',
		number: '03',
		title: 'Motor de Adquisición',
		shortDesc: 'Google Search & Meta Ads',
		icon: 'fa-solid fa-bullhorn',
		image: '/assets/images/expansisPro-telemetria.webp',
		content:
			'Inyectamos demanda dirigida a tu canal digital. Capturamos a los usuarios que buscan activamente tu servicio en Google Search y multiplicamos la credibilidad de tu marca con campañas de retargeting continuo en Instagram y Facebook.',
		deliverableTag: 'Campañas Activas & Testeo de Creativos',
	},
	{
		id: 'telemetria',
		code: 'FASE-04',
		number: '04',
		title: 'Medición y Analítica',
		shortDesc: 'Google Analytics 4 & Tag Manager',
		icon: 'fa-solid fa-chart-pie',
		image: '/assets/images/expansisPro-medicion.webp',
		content:
			'Configuramos el rastreo de eventos clave, formularios y conversiones reales mediante Google Analytics 4 y GTM. Cada interacción relevante se audita para retroalimentar los algoritmos publicitarios con datos limpios y sin duplicidades.',
		deliverableTag: 'Eventos de Conversión & Pixeles Verificados',
	},
	{
		id: 'reportabilidad',
		code: 'FASE-05',
		number: '05',
		title: 'Reportes de Rentabilidad',
		shortDesc: 'Inteligencia de Datos & Perfil de Leads',
		icon: 'fa-solid fa-chart-line',
		image: '/assets/images/expansisPro_target.webp',
		content:
			'Generamos reportes periódicos y tableros interactivos para que conozcas con exactitud la rentabilidad de tu inversión. Analizamos la información recolectada para identificar qué perfil de cliente compra realmente, permitiéndote tomar decisiones informadas y concentrar el presupuesto en lo que genera más ganancias.',
		deliverableTag: 'Dashboard Ejecutivo & Análisis de CAC/ROAS',
	},
];

export default function EcosystemFlow() {
	const [activeStep, setActiveStep] = useState(ecosystemSteps[0].id);
	const currentStep = ecosystemSteps.find((step) => step.id === activeStep) || ecosystemSteps[0];

	return (
		<section id='ecosystem-flow' className='py-24 bg-[#080b11] text-white border-b border-white/10'>
			<div className='container-pro max-w-6xl mx-auto px-4'>
				{/* Cabecera Técnica */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6'>
					<div>
						<span className='font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-2'>[ FLUJO DE TRABAJO ]</span>
						<h2 className='text-3xl md:text-5xl font-light tracking-tight text-white'>Un Proceso de Desarrollo Integral</h2>
					</div>
					<p className='text-sm font-light text-zinc-400 max-w-md leading-relaxed'>
						Desde el diagnóstico inicial hasta la medición de rentabilidad, nuestras fases de trabajo alimentan sistemáticamente a la siguiente para generar estructuras digitales
						robustas y con sentido claro.
					</p>
				</div>

				{/* Grilla Modular: Lista a la izquierda + Panel a la derecha */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
					{/* Lista de Fases (5 columnas) */}
					<div className='lg:col-span-5 border border-white/15 divide-y divide-white/15 bg-[#0d121d]'>
						{ecosystemSteps.map((step) => {
							const isActive = activeStep === step.id;
							return (
								<button
									key={step.id}
									onClick={() => setActiveStep(step.id)}
									className={`w-full p-5 text-left transition-all flex items-start justify-between cursor-pointer ${
										isActive ? 'bg-white text-black' : 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.02]'
									}`}>
									<div className='flex items-start gap-4'>
										<span className={`font-mono text-xs font-semibold mt-0.5 ${isActive ? 'text-primario' : 'text-zinc-500'}`}>{step.number}</span>
										<div>
											<span className={`text-xs font-mono uppercase tracking-widest block mb-0.5 ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>{step.code}</span>
											<h3 className={`text-base font-normal tracking-wide ${isActive ? 'text-black font-medium' : 'text-zinc-200'}`}>{step.title}</h3>
											<p className={`text-xs font-light mt-1 ${isActive ? 'text-zinc-700' : 'text-zinc-400'}`}>{step.shortDesc}</p>
										</div>
									</div>

									<div className='pt-1'>
										<span className={`font-mono text-xs ${isActive ? 'text-black' : 'text-zinc-600'}`}>{isActive ? '●' : '○'}</span>
									</div>
								</button>
							);
						})}
					</div>

					{/* Detalle Dinámico de la Fase (7 columnas) con Imagen de Fondo y Alta Densidad */}
					<div className='lg:col-span-7 lg:sticky lg:top-28'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={currentStep.id}
								initial={{ opacity: 0, x: 10 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -10 }}
								transition={{ duration: 0.2 }}
								className='relative border border-white/15 bg-[#0f1420] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] overflow-hidden'>
								{/* Capa de Imagen de Fondo */}
								<img
									src={currentStep.image}
									alt={currentStep.title}
									className='absolute inset-0 z-0 w-full h-full object-cover opacity-20 grayscale contrast-125 pointer-events-none'
								/>
								{/* Velo oscuro de alta opacidad para contraste */}
								<div className='absolute inset-0 z-0 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/90 to-[#0f1420]/60 pointer-events-none' />

								{/* Contenido en Primer Plano */}
								<div className='relative z-10'>
									<div className='flex items-center justify-between border-b border-white/10 pb-4 mb-6'>
										<span className='font-mono text-xs uppercase tracking-widest text-primario bg-primario/10 px-2.5 py-1 border border-primario/30'>{currentStep.code}</span>
										<span className='font-mono text-xs text-zinc-400'>FASE DE EJECUCIÓN</span>
									</div>

									<div className='flex items-baseline gap-4 mb-4'>
										<span className='font-mono text-4xl sm:text-5xl font-light text-white/30'>{currentStep.number}</span>
										<h3 className='text-2xl sm:text-3xl font-normal text-white'>{currentStep.title}</h3>
									</div>

									<p className='text-sm sm:text-base text-zinc-200 font-light leading-relaxed mb-8'>{currentStep.content}</p>
								</div>

								<div className='relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
									<div>
										<span className='text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1'>Entregable Clave:</span>
										<span className='text-xs font-mono text-primario font-medium'>{currentStep.deliverableTag}</span>
									</div>

									<button
										onClick={() => window.dispatchEvent(new Event('open-contact-drawer'))}
										className='py-3 px-6 bg-white text-black text-xs font-mono uppercase tracking-[0.18em] font-medium hover:bg-primario hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2'>
										<span>Iniciar Diagnóstico</span>
										<span>→</span>
									</button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
