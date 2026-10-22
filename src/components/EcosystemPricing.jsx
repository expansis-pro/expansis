// src/components/EcosystemPricing.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { solutionsData } from '@/data/solutionsData';

const tabMeta = {
	'marca-personal-profesionales': {
		code: 'MOD-01',
		tabLabel: 'Profesionales',
		image: '/assets/images/marca-personal.webp',
	},
	'empresas-b2b': {
		code: 'MOD-02',
		tabLabel: 'Empresas B2B',
		image: '/assets/images/empresa-b2b.webp',
	},
	ecommerce: {
		code: 'MOD-03',
		tabLabel: 'E-commerce',
		image: '/assets/images/ecommerce.webp',
	},
};

export default function EcosystemPricing() {
	const plans = solutionsData.map((solution) => ({
		...solution,
		...(tabMeta[solution.slug] || { code: 'MOD', tabLabel: solution.title, image: '/assets/images/ecommerce.webp' }),
	}));

	const [activeTab, setActiveTab] = useState(plans[1]?.slug || 'empresas-b2b');
	const currentPlan = plans.find((p) => p.slug === activeTab) || plans[0];

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
						Soluciones que consolidan la infraestructura técnica, la captación de tráfico y la inteligencia de datos en un modelo comercial único. Todos los valores son netos (+
						IVA).
					</p>
				</div>

				{/* Selector de Pestañas */}
				<div className='grid grid-cols-1 sm:grid-cols-3 border border-white/15 mb-12'>
					{plans.map((plan) => {
						const isActive = activeTab === plan.slug;
						return (
							<button
								key={plan.slug}
								onClick={() => setActiveTab(plan.slug)}
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

				{/* Ventana Activa de Solución */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={currentPlan.slug}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.18 }}
						className='relative border border-white/15 bg-[#0f1420] overflow-hidden'>
						<img
							src={currentPlan.image}
							alt={currentPlan.title}
							className='absolute inset-0 z-0 w-full h-full object-cover opacity-15 grayscale contrast-125 pointer-events-none'
						/>
						<div className='absolute inset-0 z-0 bg-gradient-to-r from-[#0f1420] via-[#0f1420]/90 to-[#0f1420]/75 pointer-events-none' />

						<div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/15'>
							{/* Columna Izquierda: Información Financiera */}
							<div className='lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between'>
								<div>
									<div className='flex items-center gap-2 mb-3 flex-wrap'>
										<span className='font-mono text-[10px] uppercase tracking-widest text-primario bg-primario/10 px-2 py-0.5 border border-primario/30'>{currentPlan.badge}</span>
										{currentPlan.pricing?.promoTag && (
											<span className='font-mono text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/30 font-semibold'>
												{currentPlan.pricing.promoTag}
											</span>
										)}
									</div>

									<h3 className='text-2xl sm:text-3xl font-normal text-white mb-2'>{currentPlan.title}</h3>
									<p className='text-xs text-zinc-400 font-light mb-4'>{currentPlan.targetAudience}</p>
									<p className='text-sm text-zinc-200 font-light leading-relaxed mb-8'>{currentPlan.tagline}</p>

									{/* Módulo de Precios */}
									<div className='border border-white/10 bg-black/60 divide-y divide-white/10 mb-8 font-mono backdrop-blur-sm'>
										<div className='p-4'>
											<div className='flex items-center justify-between'>
												<span className='text-[10px] uppercase tracking-wider text-zinc-400'>Setup Inicial (Pago único)</span>
												<span className='text-[10px] text-zinc-500 uppercase tracking-wider'>Neto (+ IVA)</span>
											</div>
											<div className='flex items-baseline gap-3 mt-1'>
												<span className='text-2xl text-white font-medium block'>{currentPlan.pricing.setup}</span>
												{currentPlan.pricing.originalSetup && <span className='text-xs text-zinc-500 line-through font-mono'>{currentPlan.pricing.originalSetup}</span>}
											</div>
											<span className='text-[10px] text-zinc-400 block mt-1'>{currentPlan.pricing.setupNote}</span>
										</div>

										<div className='p-4 flex items-center justify-between text-xs'>
											<span className='text-zinc-400'>Honorarios mensuales:</span>
											<span className='text-white font-medium'>{currentPlan.pricing.maintenance}</span>
										</div>

										<div className='p-4 flex items-center justify-between text-xs'>
											<span className='text-zinc-400'>Pauta sugerida ({currentPlan.pricing.adSpendPlatform}):</span>
											<span className='text-primario font-medium'>{currentPlan.pricing.adSpendSuggested}</span>
										</div>

										<div className='px-4 py-2 bg-white/[0.02] text-[10px] text-zinc-500 flex justify-between'>
											<span>Condición de inicio:</span>
											<span className='text-zinc-400'>{currentPlan.pricing.commitment}</span>
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
										href={`/soluciones/${currentPlan.slug}`}
										className='w-full py-3.5 border border-white/20 text-zinc-300 text-xs font-mono uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2'>
										<span>Ver Detalle del Programa</span>
										<span className='text-xs'>↗</span>
									</Link>
								</div>
							</div>

							{/* Columna Derecha: Entregables Técnicos */}
							<div className='lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between'>
								<div>
									<span className='font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-6'>[ ALCANCE Y ENTREGABLES TÉCNICOS ]</span>
									<ul className='divide-y divide-white/10 border-t border-b border-white/10 mb-8'>
										{currentPlan.deliverables?.map((feat, fIdx) => (
											<li key={fIdx} className='py-3 flex items-start gap-4 text-xs sm:text-sm font-light text-zinc-200'>
												<span className='font-mono text-primario text-xs shrink-0 select-none'>{(fIdx + 1).toString().padStart(2, '0')}.</span>
												<span className='leading-relaxed'>{feat}</span>
											</li>
										))}
									</ul>
								</div>

								<div className='p-4 border border-white/10 bg-black/40 text-xs font-light text-zinc-300 flex items-start gap-3 backdrop-blur-sm'>
									<span className='text-primario font-mono text-sm leading-none shrink-0'>■</span>
									<span>Propiedad total: el cliente mantiene la titularidad absoluta sobre repositorios de código, accesos a paneles y cuentas publicitarias.</span>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Términos y Transparencia */}
				<div className='mt-12 p-6 border border-white/10 bg-black/40 text-xs text-zinc-400 font-light space-y-2'>
					<p>
						<strong className='text-white font-mono font-medium'>[01. ALCANCE]</strong> Todos los valores de Setup y Mantención corresponden a montos netos (+ IVA). Representan una
						base técnica de referencia y se confirman formalmente tras la sesión de diagnóstico inicial.
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
