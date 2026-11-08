// src/components/BlogExplorer.jsx
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import BlogImage from '@/components/BlogImage';

export default function BlogExplorer({ posts }) {
	const [selectedCategory, setSelectedCategory] = useState('Todas');
	const [searchQuery, setSearchQuery] = useState('');
	const [sortOrder, setSortOrder] = useState('recent');

	const categories = useMemo(() => ['Todas', ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))], [posts]);

	const filteredPosts = useMemo(() => {
		const query = searchQuery.toLowerCase().trim();
		return posts
			.filter((post) => {
				const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
				const matchesSearch = !query || (post.title && post.title.toLowerCase().includes(query)) || (post.excerpt && post.excerpt.toLowerCase().includes(query));
				return matchesCategory && matchesSearch;
			})
			.sort((a, b) => {
				const A = a.isoDate || '';
				const B = b.isoDate || '';
				return sortOrder === 'recent' ? B.localeCompare(A) : A.localeCompare(B);
			});
	}, [posts, selectedCategory, searchQuery, sortOrder]);

	return (
		<>
			<div className='border border-white/15 bg-[#0d121d] mb-12'>
				<div className='grid grid-cols-1 sm:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-white/15 items-center border-b border-white/15'>
					<div className='sm:col-span-7 lg:col-span-8 p-4 flex items-center gap-3'>
						<span className='font-mono text-xs text-zinc-500'>SEARCH:</span>
						<input
							type='text'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder='Escribe un tema...'
							aria-label='Buscar artículos'
							className='w-full bg-transparent font-mono text-xs text-white placeholder-zinc-600 focus:outline-none'
						/>
					</div>
					<div className='sm:col-span-5 lg:col-span-4 p-3 flex items-center justify-between sm:justify-end gap-3 bg-black/20'>
						<span className='font-mono text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-wider shrink-0'>ORDENAR:</span>
						<div className='relative w-full sm:w-auto'>
							<select
								value={sortOrder}
								onChange={(e) => setSortOrder(e.target.value)}
								aria-label='Ordenar artículos'
								className='w-full sm:w-auto appearance-none bg-[#07090e] text-zinc-200 border border-white/15 px-3 py-1.5 pr-8 font-mono text-[11px] uppercase tracking-wider rounded-none focus:outline-none focus:border-primario cursor-pointer transition-colors'>
								<option value='recent'>Más recientes</option>
								<option value='oldest'>Más antiguos</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-500 text-[9px]'>▼</div>
						</div>
					</div>
				</div>
				<div className='p-3 flex flex-wrap gap-2 items-center'>
					<span className='font-mono text-[10px] text-zinc-500 uppercase tracking-widest mr-1 hidden sm:inline-block'>CATEGORÍA:</span>
					{categories.map((cat) => {
						const isActive = selectedCategory === cat;
						return (
							<button
								key={cat}
								onClick={() => setSelectedCategory(cat)}
								className={`py-1.5 px-3 font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer border rounded-none ${
									isActive ? 'bg-white text-black border-white' : 'bg-black/30 text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
								}`}>
								{cat}
							</button>
						);
					})}
				</div>
			</div>

			{filteredPosts.length === 0 ? (
				<div className='p-16 border border-white/15 bg-[#0d121d] text-center'>
					<span className='font-mono text-xs text-zinc-500 block mb-2'>[ 0 RESULTADOS ]</span>
					<p className='text-zinc-400 text-sm font-light'>No encontramos artículos para los criterios especificados.</p>
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/15 divide-y md:divide-y-0 md:border-r-0 bg-[#0f1420]'>
					{filteredPosts.map((post) => (
						<Link
							key={post.id}
							href={`/blog/${post.slug}`}
							className='group flex flex-col justify-between border-b md:border-r border-white/15 hover:bg-white/[0.02] transition-colors'>
							<div className='relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black'>
								<BlogImage src={post.image} alt={post.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out' />
								<span className='absolute top-3 left-3 bg-black/90 px-2 py-0.5 border border-white/20 font-mono text-[9px] uppercase tracking-wider text-zinc-300'>
									{post.category}
								</span>
							</div>
							<div className='p-6 flex-1 flex flex-col justify-between'>
								<div>
									<div className='font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3'>
										<time dateTime={post.isoDate}>{post.date}</time> // {post.readTime}
									</div>
									<h2 className='text-lg font-normal text-white group-hover:text-primario transition-colors mb-3 leading-snug'>{post.title}</h2>
									<p className='text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6'>{post.excerpt}</p>
								</div>
								<div className='pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500 group-hover:text-white transition-colors'>
									<span>LEER COMPLETO</span>
									<span>→</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</>
	);
}
