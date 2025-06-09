// src/pages/Home.js

import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import heroImage from '../img/Hero_img_Expansis_pro.webp'; // Descomenta esto cuando uses tu propia imagen

const Home = () => {
	return (
		// Línea modificada
		<section id="home" className="min-h-screen bg-gray-50 flex items-center pt-24 pb-12 sm:py-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

				{/* Columna de Texto - AHORA ESTÁ PRIMERO EN EL CÓDIGO */}
				{/* Al estar primero, se renderizará antes en el flujo normal (móvil) */}
				<div className="text-center lg:text-left">
					{/* TAMAÑOS DE FUENTE AJUSTADOS: Más pequeños en la base, más grandes en pantallas sm y lg */}
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
						<span className="block">Expansis Pro:</span>
						<span className="block text-primario mt-1">Tu Estrategia Digital al Siguiente Nivel</span>
					</h1>

					<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
						Desde desarrollo web hasta marketing online, creamos soluciones personalizadas para que tu marca alcance su máximo potencial.
					</p>

					{/* Contenedor del Botón */}
					<div className="mt-8">
						{/* BOTÓN OPTIMIZADO: w-full en móvil, w-auto en pantallas más grandes */}
						<button onClick={() => scrollToSection('services')}
							className="w-full sm:w-auto inline-block bg-primario text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105">
							Conoce Nuestros Servicios
						</button>
					</div>
				</div>

				{/* Columna de la Imagen */}
				<div className="w-full">
					<img
						// src="https://cdn.pixabay.com/photo/2020/05/25/17/21/letter-5219584_1280.jpg" // <-- REEMPLAZA ESTE ENLACE
						src={heroImage}
						alt="Laptop mostrando un diseño web de Expansis Pro"
						className="w-full h-auto rounded-xl shadow-2xl"
					/>
				</div>

			</div>
		</section>
	);
};

export default Home;