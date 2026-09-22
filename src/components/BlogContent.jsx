'use client';

import React, { useState } from 'react';

function CitationPopover({ num, source }) {
	const [isHovered, setIsHovered] = useState(false);

	// Función de Scroll Suave al hacer clic en el número de la cita [1]
	const handleClick = (e) => {
		e.preventDefault();
		const target = document.getElementById(`fuente-${num}`);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'center' });

			// Destello de resaltado en la tarjeta de la fuente al llegar abajo
			target.classList.add('bg-primario/20', 'border-primario', 'scale-[1.02]');
			setTimeout(() => {
				target.classList.remove('bg-primario/20', 'border-primario', 'scale-[1.02]');
			}, 1800);
		}
	};

	if (!source) {
		return (
			<sup className='ml-0.5'>
				<a href={`#fuente-${num}`} onClick={handleClick} className='text-primario font-bold hover:underline'>
					[{num}]
				</a>
			</sup>
		);
	}

	return (
		<span className='relative inline-block' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<sup className='ml-0.5'>
				<a href={`#fuente-${num}`} onClick={handleClick} className='text-primario font-bold hover:underline cursor-pointer transition-colors'>
					[{num}]
				</a>
			</sup>

			{/* Desplegable Minimalista en Fondo Blanco */}
			{isHovered && (
				<a
					href={source.url}
					target='_blank'
					rel='noopener noreferrer'
					className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-gray-800 text-xs rounded-xl shadow-xl border border-gray-200/80 px-3 py-2 z-50 whitespace-nowrap max-w-xs sm:max-w-md md:max-w-lg flex items-center gap-2 hover:border-primario transition-all group animate-fadeIn pointer-events-auto'>
					{/* PUENTE INVISIBLE: Cubre el espacio vacío de 8px para que el cursor no pierda la interacción */}
					<span className='absolute top-full left-0 w-full h-3 bg-transparent block' />

					<span className='font-extrabold text-primario bg-primario/10 px-1.5 py-0.5 rounded text-[10px] shrink-0'>Fuente [{num}]</span>
					<strong className='text-deepBlue font-semibold shrink-0'>{source.name}</strong>
					<span className='text-gray-500 font-light truncate'>"{source.title}"</span>
					<i className='fa-solid fa-arrow-up-right-from-square text-[9px] text-gray-400 group-hover:text-primario transition-colors shrink-0 ml-1'></i>

					{/* Flecha indicadora inferior del Popover */}
					<span className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white block h-0 w-0'></span>
				</a>
			)}
		</span>
	);
}

export default function BlogContent({ content, sources = [] }) {
	// Regex para detectar y separar las marcas de citación en el HTML
	const citationRegex = /(<sup><a href='#fuente-\d+'[^>]*>\[\d+\]<\/a><\/sup>)/g;

	return (
		<div className='space-y-6'>
			{content.map((paragraph, idx) => {
				const parts = paragraph.split(citationRegex);

				return (
					<div key={idx} className='leading-relaxed'>
						{parts.map((part, pIdx) => {
							const match = part.match(/href='#fuente-(\d+)'/);
							if (match) {
								const num = parseInt(match[1], 10);
								const source = sources.find((s) => s.num === num);
								return <CitationPopover key={pIdx} num={num} source={source} />;
							}
							return <span key={pIdx} dangerouslySetInnerHTML={{ __html: part }} />;
						})}
					</div>
				);
			})}
		</div>
	);
}
