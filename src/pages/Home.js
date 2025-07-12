// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../img/Hero_img_Expansis_pro.webp';
import EmbededSocial from '../components/EmbededSocial';

import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageDesktop from '../img/about-page_630x630.webp';
import aboutImageMobile from '../img/about-page_630x630.webp';


const Home = () => {
	return (
		<>
			<section id="home" className="bg-gray-50 flex items-center pt-2 pb-6 lg:pb-6">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

					{/* Columna de Texto */}
					<div className="text-center lg:text-left">
						<h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
							<span className="block">Expansis Pro</span>
							<span className="block text-primario mt-1">Tu Estrategia Digital al Siguiente Nivel</span>
						</h1>

						<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
							Desde desarrollo web hasta marketing online, creamos soluciones personalizadas para que tu marca alcance su máximo potencial.
						</p>


						<div className="mt-8">
							<Link
								to="/servicios"
								className="w-full sm:w-auto inline-block bg-primario text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105">
								Conoce Nuestros Servicios
							</Link>
						</div>
					</div>

					{/* Columna de la Imagen */}
					<div className="w-full">
						<img
							src={heroImage}
							alt="Laptop mostrando un diseño web de Expansis Pro"
							className="w-full h-[450px] object-cover rounded-xl shadow-2xl"
						/>
					</div>

				</div>

			</section>

			{/* SECCIÓN: ¿Qué es Expansis Pro? */}
			<section id="que-es-expansis-pro" className="bg-white py-6 sm:py-6 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">¿Qué es Expansis Pro?</h2>
					<ImageTextCTA
						imageMobile={aboutImageMobile}
						imageDesktop={aboutImageDesktop}
						alt="Personas colaborando en una estrategia digital"
						title="Tu Aliado Estratégico en el Mundo Digital"
						text={[
							`¿Quieres <strong>expandir tu negocio</strong> en el mundo digital? En Expansis Pro, somos tu socio ideal. Nos dedicamos a crear <strong>soluciones digitales a medida</strong> que te impulsarán al siguiente nivel.`,
							`Ofrecemos un abanico completo de servicios: desde el <strong>diseño y desarrollo de tu sitio web</strong> para que luzca profesional y atractivo, hasta <strong>estrategias de marketing online</strong> que realmente funcionan, y <strong>posicionamiento web (SEO)</strong> para que más clientes te encuentren. Queremos que tu marca no solo esté presente, sino que <strong>crezca y destaque online</strong>, alcanzando su máximo potencial. ¡Hablemos y juntos haremos realidad tu expansión!`
						]}
						buttonContent="Nuestros servicios"
						buttonLink="/servicios"
					/>
				</div>
			</section>

			{/* SECCIÓN: Widget de Instagram */}
			<section id="instagram-feed" className="bg-white py-6 sm:py-6 px-4 sm:px-6 lg:px-8">
				{/* CAMBIO REALIZADO: Solo renderizar el componente EmbededSocial aquí */}
				<EmbededSocial />
			</section>
		</>
	);
};

export default Home;