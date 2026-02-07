// src/pages/Contact.js
import React, { useEffect } from 'react';
import SecondaryHero from '../components/SecondaryHero';
import ContactForm from '../components/ContactForm';
import SocialProof from '../components/SocialProof';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// --- LÓGICA DE CORREO ---
	const email = "info@expansispro.com";
	const subject = encodeURIComponent("Consulta sobre Proyecto Digital - Expansis Pro");
	const body = encodeURIComponent("Hola equipo de Expansis Pro,\n\nMe pongo en contacto con ustedes porque estoy interesado en potenciar mi negocio digital.\n\nMis datos son:\n- Nombre:\n- Empresa:\n- Teléfono:\n\nQuedo atento a su respuesta.");

	const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

	return (
		<main className="bg-white min-h-screen">
			<title>Contacto - Expansis Pro</title>

			<SecondaryHero
				title="Hablemos de tu Proyecto"
				subtitle="Estamos aquí para escucharte. Cuéntanos tus desafíos y diseñemos juntos el camino hacia tu expansión digital."
				icon="fa-solid fa-paper-plane"
			/>

			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

					{/* Columna Izquierda: Información Directa */}
					<div className="space-y-12">
						<div>
							<h2 className="text-left mb-6">Canales Directos</h2>
							<p className="text-gray-600 font-light mb-8">
								Si prefieres una comunicación más rápida, puedes escribirnos directamente por WhatsApp o enviarnos un correo electrónico.
							</p>

							<ul className="space-y-6">
								<li className="flex items-center gap-4">
									<div className="w-12 h-12 bg-primario/10 rounded-full flex items-center justify-center text-primario">
										<i className="fa-brands fa-whatsapp text-xl"></i>
									</div>
									<div>
										<p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">WhatsApp</p>
										<a href="https://wa.me/56965961086" target="_blank" rel="noopener noreferrer" className="text-deepBlue text-lg hover:text-primario transition-colors font-medium">
											+56 9 6596 1086
										</a>
									</div>
								</li>
								<li className="flex items-center gap-4">
									<div className="w-12 h-12 bg-primario/10 rounded-full flex items-center justify-center text-primario">
										<i className="fa-solid fa-envelope text-xl"></i>
									</div>
									<div>
										<p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Email</p>
										{/* USAMOS EL LINK DINÁMICO AQUÍ */}
										<a href={mailtoLink} className="text-deepBlue text-lg hover:text-primario transition-colors font-medium">
											info@expansispro.com
										</a>
									</div>
								</li>
							</ul>
						</div>

						<div className="p-6 bg-ghostWhite rounded-2xl border border-gray-100 inline-block">
							<p className="text-deepBlue font-semibold mb-1">Horario de Atención</p>
							<p className="text-gray-600 font-light text-sm">Lunes a Viernes: 09:00 - 18:30 hrs.</p>
						</div>
					</div>

					{/* Columna Derecha: Formulario */}
					<div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-gray-50">
						<h3 className="text-deepBlue mb-8">Envíanos un mensaje</h3>
						<ContactForm />
					</div>
				</div>
			</section>

			{/* <SocialProof /> */}
		</main>
	);
};

export default Contact;