// src/components/BlogSortSelector.jsx
'use client';

import React from 'react';

export default function BlogSortSelector({ sortOrder, onSortChange, totalResults }) {
	return (
		<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 mb-8 border-b border-white/10'>
			{/* Contador de resultados */}
			<span className='font-mono text-xs text-zinc-400 uppercase tracking-widest'>
				[ ARTÍCULOS DISPONIBLES: <strong className='text-white font-medium'>{totalResults}</strong> ]
			</span>

			{/* Control de ordenamiento */}
			<div className='flex items-center gap-3'>
				<label htmlFor='sort-order' className='font-mono text-xs uppercase tracking-wider text-primario'>
					ORDENAR:
				</label>

				<div className='relative inline-block'>
					<select
						id='sort-order'
						value={sortOrder}
						onChange={(e) => onSortChange(e.target.value)}
						className='appearance-none bg-[#0d121d] text-zinc-200 border border-white/15 px-4 py-2 pr-9 text-xs font-mono uppercase tracking-wider rounded-none focus:outline-none focus:border-primario cursor-pointer transition-colors'>
						<option value='recent'>Más recientes primero</option>
						<option value='oldest'>Más antiguos primero</option>
					</select>

					{/* Flecha personalizada */}
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400'>
						<i className='fa-solid fa-chevron-down text-[10px]'></i>
					</div>
				</div>
			</div>
		</div>
	);
}
