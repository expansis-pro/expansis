// src/components/BlogContent.jsx
'use client';

import React from 'react';

export default function BlogContent({ content = [], sources = [] }) {
	// Delegación de eventos para scroll suave y destello al hacer clic en [1]
	const handleContainerClick = (e) => {
		const citationLink = e.target.closest('a[href^="#fuente-"]');
		if (!citationLink) return;

		e.preventDefault();
		const targetId = citationLink.getAttribute('href').slice(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
			targetElement.classList.add('bg-primario/20', 'border-primario', 'scale-[1.02]');
			setTimeout(() => {
				targetElement.classList.remove('bg-primario/20', 'border-primario', 'scale-[1.02]');
			}, 1800);
		}
	};

	// Transforma las etiquetas <sup> en popovers interactivos con CSS puro
	const renderProcessedHtml = (paragraph) => {
		const citationRegex = /<sup><a href=['"]#fuente-(\d+)['"][^>]*>\[\d+\]<\/a><\/sup>/g;

		return paragraph.replace(citationRegex, (match, numStr) => {
			const num = parseInt(numStr, 10);
			const source = sources.find((s) => s.num === num);

			if (!source) {
				return `<sup class="ml-0.5"><a href="#fuente-${num}" class="text-primario font-bold hover:underline cursor-pointer transition-colors">[${num}]</a></sup>`;
			}

			return `
				<span class="relative inline-block group/cite">
					<sup class="ml-0.5">
						<a href="#fuente-${num}" class="text-primario font-bold hover:underline cursor-pointer transition-colors">[${num}]</a>
					</sup>
					<span class="pointer-events-none opacity-0 group-hover/cite:opacity-100 group-hover/cite:pointer-events-auto transition-opacity duration-150 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0d121d] text-white text-xs rounded-none shadow-2xl border border-white/20 px-4 py-3 z-50 whitespace-nowrap max-w-xs sm:max-w-md md:max-w-lg flex items-center gap-3">
						<span class="absolute top-full left-0 w-full h-3 bg-transparent block"></span>
						<span class="font-mono font-bold text-primario bg-primario/10 px-2 py-0.5 border border-primario/30 text-[10px] shrink-0">Fuente [${num}]</span>
						<strong class="text-white font-medium shrink-0">${source.name}</strong>
						<span class="text-zinc-400 font-light truncate">"${source.title}"</span>
						<a href="${source.url}" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-primario ml-1 shrink-0">
							<i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
						</a>
						<span class="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#0d121d] block h-0 w-0 z-20"></span>
						<span class="absolute top-[101%] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/20 block h-0 w-0 z-10"></span>
					</span>
				</span>
			`.trim();
		});
	};

	return (
		<div className='space-y-6' onClick={handleContainerClick}>
			{content.map((paragraph, idx) => (
				<div key={idx} className='leading-relaxed' dangerouslySetInnerHTML={{ __html: renderProcessedHtml(paragraph) }} />
			))}
		</div>
	);
}
