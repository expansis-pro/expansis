// src/pages/Home.js

import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import heroImage from '../img/Hero_img_Expansis_pro.webp';

const Home = () => {
	return (
		<section id="home" className="bg-gray-50 flex items-center py-12 sm:py-16 lg:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

				{/* Columna de Texto */}
				<div className="text-center lg:text-left">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
						<span className="block">Expansis Pro:</span>
						<span className="block text-primario mt-1">Tu Estrategia Digital al Siguiente Nivel</span>
					</h1>

					<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
						Desde desarrollo web hasta marketing online, creamos soluciones personalizadas para que tu marca alcance su máximo potencial.
					</p>

					<div className="mt-8">
						<button onClick={() => scrollToSection('services')}
							className="w-full sm:w-auto inline-block bg-primario text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105">
							Conoce Nuestros Servicios
						</button>
					</div>
				</div>

				{/* --- COLUMNA DE LA IMAGEN MODIFICADA --- */}
				{/* El div ya no tiene restricciones de altura */}
				<div className="w-full">
					<img
						src={heroImage}
						alt="Laptop mostrando un diseño web de Expansis Pro"
						// --- CLASES MODIFICADAS ---
						// Aplicamos la altura directamente a la imagen y usamos object-cover
						className="w-full h-[450px] object-cover rounded-xl shadow-2xl"
					/>
				</div>

			</div>
		</section>
	);
};

export default Home;