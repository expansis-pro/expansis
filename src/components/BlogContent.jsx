// src/components/BlogContent.jsx
'use client';

import React, { useMemo } from 'react';

// Genera un slug limpio y amigable para el atributo id
const slugify = (text) =>
	text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Elimina acentos
		.replace(/[^a-z0-9]+/g, '-') // Caracteres especiales a guiones
		.replace(/(^-|-$)+/g, ''); // Remueve guiones en bordes

export default function BlogContent({ content = [], sources = [] }) {
	// Procesa los párrafos: detecta <h3>, inyecta IDs y extrae la lista de títulos
	const { headings, processedContent, firstHeadingIndex } = useMemo(() => {
		const list = [];
		let firstH3Idx = -1;

		const processed = content.map((paragraph, idx) => {
			if (typeof paragraph === 'string' && paragraph.includes('<h3')) {
				if (firstH3Idx === -1) firstH3Idx = idx;

				// Extrae el texto interior del <h3>
				const match = paragraph.match(/<h3(?:\s+id=['"]([^'"]*)['"])?[^>]*>(.*?)<\/h3>/i);
				if (match) {
					const rawText = match[2].replace(/<[^>]*>/g, '').trim();
					const cleanId = match[1] || `sec-${slugify(rawText).slice(0, 35)}`;

					list.push({ id: cleanId, text: rawText });

					// Inyecta el ID en el elemento <h3>
					return paragraph.replace(/<h3(?:\s+id=['"][^'"]*['"])?([^>]*)>/i, `<h3 id="${cleanId}"$1>`);
				}
			}
			return paragraph;
		});

		return { headings: list, processedContent: processed, firstHeadingIndex: firstH3Idx };
	}, [content]);

	// Delegación de eventos para scroll suave en citas y enlaces de índice
	const handleContainerClick = (e) => {
		// 1. Citas bibliográficas [1]
		const citationLink = e.target.closest('a[href^="#fuente-"]');
		if (citationLink) {
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
			return;
		}

		// 2. Enlaces internos del índice
		const tocLink = e.target.closest('a[href^="#sec-"]');
		if (tocLink) {
			e.preventDefault();
			const targetId = tocLink.getAttribute('href').slice(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	};

	// Popovers interactivos para citas
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
			{processedContent.map((paragraph, idx) => (
				<React.Fragment key={idx}>
					{/* Índice sobrio con bordes rectos integrado al diseño */}
					{idx === firstHeadingIndex && headings.length >= 2 && (
						<nav aria-label='Índice del contenido' className='border border-white/15 bg-[#0d121d] p-5 sm:p-6 my-8 rounded-none text-white relative shadow-lg'>
							<div className='flex items-center justify-between pb-3 mb-4 border-b border-white/10'>
								<span className='font-mono text-[10px] sm:text-[11px] text-primario uppercase tracking-[0.25em] font-semibold flex items-center gap-2'>
									<span className='w-1.5 h-1.5 bg-primario inline-block'></span>[ CONTENIDO DEL ARTÍCULO ]
								</span>
								<span className='font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline-block'>{headings.length} SECCIONES</span>
							</div>
							<ul className='space-y-2.5'>
								{headings.map((item, i) => (
									<li key={item.id} className='flex items-start gap-3 group'>
										<span className='font-mono text-[11px] text-primario/70 group-hover:text-primario transition-colors mt-0.5 shrink-0'>
											{(i + 1).toString().padStart(2, '0')}.
										</span>
										<a
											href={`#${item.id}`}
											className='text-zinc-300 hover:text-white text-xs sm:text-sm font-light tracking-wide transition-all duration-150 leading-relaxed group-hover:translate-x-1 inline-block'>
											{item.text}
										</a>
									</li>
								))}
							</ul>
						</nav>
					)}

					<div className='leading-relaxed' dangerouslySetInnerHTML={{ __html: renderProcessedHtml(paragraph) }} />
				</React.Fragment>
			))}
		</div>
	);
}
