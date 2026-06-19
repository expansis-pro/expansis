// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import CarouselItem from '../components/CarouselItem';
import ProjectSection from '../components/ProjectSection';
import { useLocation } from 'react-router-dom';
import CardCarousel from '../components/CardCarousel';
import ImageTextCTA from '../components/ImageTextCTA';
import CtaButton from '../components/CtaButton';
import CallToAction from '../components/CallToAction';

const Home = () => {

	// 2. CONFIGURAMOS EL CANONICAL DINÁMICO
	const location = useLocation();
	const baseUrl = 'https://expansispro.com';
	// Esto evita que queden barras diagonales duplicadas al final (ej: /contacto/)
	const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

	return (
		<>

			{/* 1. SOPORTE NATIVO DE REACT 19: Sin etiquetas  */}
			<title>Agencia de Desarrollo Web y Marketing Digital en Chile | Expansis Pro</title>
			<meta name="description" content="En Expansis Pro creamos páginas web profesionales, e-commerce a medida y estrategias de marketing digital en Chile. ¡Potencia tus canales digitales!" />
			<link rel="canonical" href={canonicalUrl || baseUrl} />

			{/* ETIQUETAS OPEN GRAPH NATIVAS */}
			<meta property="og:title" content="Agencia de Desarrollo Web y Marketing Digital en Chile | Expansis Pro" />
			<meta property="og:description" content="Diseño de tiendas online, landing pages y marketing digital de alto impacto para empresas chilenas." />
			<meta property="og:url" content={canonicalUrl || baseUrl} />

			{/* --- HERO SECTION CON VIDEO --- */}
			<section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-start md:justify-center overflow-hidden bg-deepBlue px-6">
				<video
					autoPlay
					loop
					muted
					playsInline
					poster="/assets/images/hero-poster.webp"
					fetchPriority="high"
					className="absolute inset-0 z-0 w-full h-full object-cover opacity-40 brightness-[0.7]"
				>
					<source src="/assets/videos/hero-expansis.mp4" type="video/mp4" />
				</video>

				<div className="absolute inset-0 z-10 bg-gradient-to-b from-deepBlue/20 via-deepBlue/40 to-deepBlue"></div>

				<div className="relative z-20 max-w-4xl md:mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="hero-wrapper"
					>
						<h1 className="text-ghostWhite drop-shadow-lg  text-3xl md:text-5xl leading-tight">
							Agencia de Desarrollo Web y Marketing Digital<br />
							<span className="text-primario italic font-semibold text-2xl md:text-4xl">Estructuras digitales sólidas para tu negocio</span>
						</h1>

						<p className="hero-paragraph">
							En Expansis Pro desarrollamos sitios ecosistemas digitales a medida para empresas y marcas que necesitan transmitir confianza real.
						</p>

						<div className="hero-actions">
							<CtaButton
								scrollTo="services-home"
								variant="primary"
								category="Home"
								label="Boton Ver Servicios"
							>
								Nuestros Servicios
							</CtaButton>
						</div>
					</motion.div>
				</div>
			</section>

			{/* --- SECCIÓN DE SERVICIOS (Ajustada) --- */}
			{/* CAMBIO: py-12 para mobile (48px) y md:py-16 para desktop (64px) */}
			<section id="services-home" className="section-padding ">
				<div className="container-pro">
					<h2 className="mb-4 ">Servicios de Creación de Canales Digitales</h2>
					{/* CAMBIO: Reducimos mb-12 a mb-6 en mobile para que el carrusel esté más cerca */}
					<p className="section-subtitle ">
						Soluciones integrales para potenciar tu negocio en el mundo digital.
					</p>
				</div>

				<CardCarousel>
					{servicesData.map((service, index) => (
						<CarouselItem
							key={index}
							title={service.title}
							description={service.description}
							image={service.image} // Asegúrate de tener la URL en tus datos
							category={service.category}
							slug={service.slug}
						/>
					))}
				</CardCarousel>
				{/* 🌟 NUEVO: Botón centrado para ver todos los servicios */}
				<div className="mt-12 text-center">
					<CtaButton
						to="/servicios"
						variant="outline"
						category="Home"
						label="Boton Ver Todos Los Servicios"
						className="group inline-flex items-center gap-3"
					>
						Ver todos los servicios
						<i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
					</CtaButton>
				</div>
			</section>
			{/* --- 🌟 NUEVA SECCIÓN: TEXTO DE AUDIENCIA DEL HOME (~610 caracteres) --- */}
			<section id="home-target">
				<ImageTextCTA
					imageDesktop="/assets/images/expansisPro_target.webp"
					alt="Público objetivo y clientes de la agencia Expansis Pro en Chile"
					subtitle="PERFIL COMERCIAL"
					title="Estructuras Digitales con Foco en la Conversión y el Negocio"
					text={[
						"Expansis Pro impulsa a personas, marcas e instituciones que buscan iniciar o avanzar en su transformación digital mediante activos web de alta conversión. Desarrollamos canales a medida, optimizados para la difusión institucional o la automatización de ventas.",
						"Unificamos consultoría estratégica e ingeniería técnica para proyectar la solidez de tu operación, garantizando que tu ecosistema digital traduzca cada visita en oportunidades de negocio reales."
					]}
					vimeoId="1196058571" // 👈 Pasas el ID aquí
					imageSide="right" // Rompe simetría con la sección "About Us" de abajo
					buttonContent="Cotizar Proyecto"
					buttonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20gustaría%20saber%20si%20sus%20servicios%20se%20adaptan%20a%20mi%20modelo%20de%20negocio."
					buttonVariant="primary"
					secondaryButtonContent="Ver Especialidades"
					secondaryButtonLink="/servicios"
					secondaryButtonVariant="outline"
				/>
			</section>
			{/* // Dentro del return de ServicePage: */}
			<ProjectSection
				title="Casos de Éxito"
				subtitle="Mira cómo hemos aplicado nuestra ingeniería en diversos ecosistemas digitales."
				selectedIds={["estudio-brkovic", "2v-express", "lobos-miniexcavadoras"]} // Orden estricto basado en tus IDs de data
				showCta={true} // Forzamos a que muestre el botón
			/>

			{/* SECCIÓN IMAGE TEXT CTA */}
			<section id="about-teaser">
				<ImageTextCTA
					imageDesktop="/assets/images/expansisPro_aboutus.webp"
					alt="Consultoría y estrategia digital en las oficinas de Expansis Pro"
					subtitle="DETRÁS DE LA ESTRATEGIA"
					title="Somos Socios en la Transformación Digital"
					text={[
						"Expansis Pro es un espacio que aspira a devolver el propósito a las organizaciones para usarlo como hoja de ruta definitiva para los procesos de transformación digital.",
						"Conoce nuestra historia, nuestra filosofía de trabajo y al equipo que lo hace posible."
					]}

					imageSide="left"
					buttonContent="Conoce nuestra historia"
					buttonLink="/quienes-somos"
					buttonVariant="primary"
					secondaryButtonContent="Ver Proyectos" // <-- Botón extra
					secondaryButtonLink="/proyectos"
					secondaryButtonVariant="outline"
				/>
			</section>

			{/* --- SECCIÓN DE CIERRE (CTA) --- */}
			<section className=" pb-8 px-4">
				<div className="max-w-4xl mx-auto">
					<CallToAction
						source="Home - Final de Página"
						title="¿Listo para dar el salto?"
						description="Hablemos de tu proyecto. Elige la opción que más te acomode."
					/>
				</div>
			</section>
		</>
	);
};

export default Home;