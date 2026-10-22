// src/components/InteractiveModulesShowcase.jsx
'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/servicesData';

export default function InteractiveModulesShowcase() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const activeService = servicesData[selectedIndex] || servicesData[0];
	const navRef = useRef(null);

	// Mapeo con nombres reales de archivo existentes en public/assets/images/
	const imageMap = {
		'desarrollo-web': '/assets/images/desarrollo-web-hero.webp',
		ecommerce: '/assets/images/ecommerce-hero.webp',
		'marketing-digital': '/assets/images/marketing-digital-hero.webp',
		'web-para-profesionales': '/assets/images/web-para-profesionales.webp',
		'reportabilidad-looker-studio': '/assets/images/expansisPro_target.webp',
	};

	const currentImage = imageMap[activeService.slug] || `/assets/images/${activeService.slug}-hero.webp`;

	// Fallback automático en caso de que alguna variante no exista
	const handleImageError = (e) => {
		if (!e.target.dataset.triedFallback) {
			e.target.dataset.triedFallback = 'true';
			// Si falló la ruta directa, intenta con el hero estándar o con expansisPro_target
			e.target.src = `/assets/images/${activeService.slug}-lg.webp`;
		} else {
			e.target.src = '/assets/images/expansisPro_target.webp';
		}
	};

	return (
		<section id='contratacion-modular' className='section-padding bg-ghostWhite overflow-hidden border-t border-gray-100'>
			<div className='container-pro'>
				{/* Encabezado */}
				<div className='text-center mb-10 md:mb-12'>
					<span className='text-primario uppercase tracking-widest text-xs font-bold block mb-2'>Contratación Modular</span>
					<h2 className='text-3xl md:text-5xl font-bold text-deepBlue mb-4'>¿Ya tienes web o buscas una arista específica?</h2>
					<p className='text-gray-600 font-light text-base md:text-lg max-w-2xl mx-auto'>
						Conoce el detalle técnico y la inversión individual de cada módulo de nuestro ecosistema.
					</p>
				</div>

				{/* 1. Selector de Píldoras Deslizable / Draggable */}
				<div className='relative mb-8'>
					<div
						ref={navRef}
						className='flex items-center gap-3 overflow-x-auto no-scrollbar py-2 px-1 cursor-grab active:cursor-grabbing snap-x select-none'
						style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
						{servicesData.map((service, index) => {
							const isSelected = selectedIndex === index;
							return (
								<button
									key={service.slug}
									onClick={() => setSelectedIndex(index)}
									className={`relative shrink-0 px-5 py-3 rounded-2xl font-semibold text-xs md:text-sm tracking-wide transition-all duration-300 flex items-center gap-2.5 snap-start cursor-pointer ${
										isSelected ? 'bg-deepBlue text-white shadow-xl scale-[1.02]' : 'bg-white text-gray-600 hover:text-deepBlue border border-gray-200/80 hover:border-primario/40'
									}`}>
									<i className={`${service.icon} text-sm ${isSelected ? 'text-primario' : 'text-gray-400'}`}></i>
									<span>{service.title.split(' (')[0]}</span>
									{isSelected && (
										<motion.div
											layoutId='activePillGlow'
											className='absolute inset-0 rounded-2xl border-2 border-primario pointer-events-none'
											transition={{ type: 'spring', stiffness: 350, damping: 30 }}
										/>
									)}
								</button>
							);
						})}
					</div>
				</div>

				{/* 2. Hero Card Cinematográfica */}
				<div className='relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-deepBlue min-h-[520px] md:min-h-[560px] flex flex-col justify-end border border-gray-800'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeService.slug}
							initial={{ opacity: 0, scale: 1.05 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
							className='absolute inset-0 z-0'>
							<img src={currentImage} alt={activeService.title} onError={handleImageError} className='w-full h-full object-cover object-center' />
							{/* Doble gradiente para asegurar legibilidad sobre cualquier fotografía */}
							<div className='absolute inset-0 bg-gradient-to-t from-deepBlue via-deepBlue/80 to-deepBlue/30' />
							<div className='absolute inset-0 bg-gradient-to-r from-deepBlue/95 via-deepBlue/60 to-transparent' />
						</motion.div>
					</AnimatePresence>

					{/* Insignia Superior Flotante */}
					<div className='absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 z-10 flex items-center justify-between pointer-events-none'>
						<div className='bg-white/10 backdrop-blur-md border border-white/20 text-ghostWhite px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2'>
							<i className={`${activeService.icon} text-primario`}></i>
							<span className='uppercase tracking-widest text-[10px]'>Módulo Técnico</span>
						</div>
						{activeService.pricing?.from && (
							<div className='bg-primario/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg'>Desde {activeService.pricing.from}</div>
						)}
					</div>

					{/* Contenido Inmersivo */}
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeService.slug + '-content'}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							className='relative z-10 p-6 sm:p-8 md:p-12 max-w-3xl'>
							<h3 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight'>{activeService.title}</h3>

							<p className='text-white/80 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-6'>{activeService.longDescription || activeService.description}</p>

							{/* Tags Técnicos */}
							{activeService.pricing?.features && (
								<div className='flex flex-wrap gap-2 mb-8'>
									{activeService.pricing.features.slice(0, 3).map((feat, fIdx) => (
										<span
											key={fIdx}
											className='bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 font-light'>
											<i className='fa-solid fa-check text-primario text-[10px]'></i>
											{feat}
										</span>
									))}
								</div>
							)}

							{/* Botones de Acción */}
							<div className='flex flex-col sm:flex-row items-center gap-4'>
								<button
									onClick={() => window.dispatchEvent(new Event('open-contact-drawer'))}
									className='btn-primary w-full sm:w-auto py-3.5 px-8 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-primario/25'>
									<span>Cotizar este Módulo</span>
									<i className='fa-regular fa-paper-plane text-xs'></i>
								</button>

								<Link
									href={`/soluciones/${activeService.slug}`}
									className='btn-secondary w-full sm:w-auto py-3.5 px-6 text-sm font-semibold border-white/30 text-white hover:bg-white hover:text-deepBlue text-center transition-all'>
									Ver Ficha Técnica Completa
								</Link>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
