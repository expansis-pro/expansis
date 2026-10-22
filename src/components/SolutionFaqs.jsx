// src/components/SolutionFaqs.jsx
'use client';

import React, { useState } from 'react';
import FaqItem from '@/components/FaqItem';

export default function SolutionFaqs({ faqs = [], solutionTitle = '' }) {
	const [openIndex, setOpenIndex] = useState(null);
	const [showAll, setShowAll] = useState(false);

	if (!faqs || faqs.length === 0) return null;

	// Límite de preguntas iniciales a mostrar
	const initialFaqsToShow = 5;

	// Determinar qué preguntas se muestran según el estado
	const displayedFaqs = showAll ? faqs : faqs.slice(0, initialFaqsToShow);

	return (
		<section className='py-20 bg-[#07090e] border-b border-white/10'>
			<div className='container-pro max-w-4xl mx-auto px-4'>
				<span className='font-mono text-[10px] uppercase tracking-[0.25em] text-primario block mb-2'>[ DUDAS FRECUENTES // {solutionTitle.toUpperCase()} ]</span>
				<h2 className='text-2xl sm:text-3xl font-light text-white mb-10'>Preguntas sobre este programa</h2>

				<div className='space-y-3'>
					{displayedFaqs.map((faq, idx) => (
						<FaqItem
							key={faq.id || idx}
							index={idx}
							question={faq.pregunta}
							answer={faq.respuesta_web || faq.respuesta}
							isOpen={openIndex === idx}
							onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
						/>
					))}
				</div>

				{/* Botón "Ver Más" Estilo Terminal (Solo si hay más de 5 preguntas) */}
				{faqs.length > initialFaqsToShow && (
					<div className='text-center mt-10 pt-4'>
						<button
							onClick={() => setShowAll(!showAll)}
							className='py-3.5 px-8 border border-white/20 text-zinc-300 text-xs font-mono uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all cursor-pointer inline-flex items-center gap-3'>
							<span>{showAll ? 'Ver menos preguntas' : `Cargar más consultas (${faqs.length - initialFaqsToShow})`}</span>
							<span className='text-primario font-bold'>{showAll ? '▲' : '▼'}</span>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
