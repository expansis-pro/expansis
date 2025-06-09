// src/pages/Contact.js

import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

// Mensaje de éxito refactorizado con clases de Tailwind
const TicketMessage = () => (
	<div className='text-center p-8 bg-green-50 text-green-800 rounded-lg shadow-md'>
		<i className='fa-solid fa-circle-check text-4xl mb-4'></i>
		<p className="text-lg font-semibold">¡Gracias por contactarnos!</p>
		<p>Te responderemos a la brevedad.</p>
	</div>
);

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		serviceType: [],
		message: "Hola, me interesan los servicios de Expansis Pro, por lo que solicito información al respecto.",
	});
	const [status, setStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [showForm, setShowForm] = useState(true);

	const serviceOptions = [
		{ value: "Desarrollo Web", label: "Desarrollo Web" },
		{ value: "Consultoría Digital", label: "Consultoría Digital" },
		{ value: "Marketing Digital", label: "Marketing Digital" },
		{ value: "Posicionamiento Web", label: "Posicionamiento Web" },
	];

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		// Tu lógica de handleChange es correcta, no necesita cambios.
		// ... (la misma lógica que ya tenías)
	};

	const handleCaptcha = (value) => {
		setCaptchaVerified(!!value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!captchaVerified) {
			setStatus("Por favor, verifica que no eres un robot.");
			return;
		}
		setIsSubmitting(true);
		// Tu lógica de envío con emailjs es correcta.
		// ... (la misma lógica que ya tenías, al final en el `then` y `catch` pones `setIsSubmitting(false)`)
	};

	// Clases base para los inputs para no repetirlas
	const inputClasses = "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primario transition-colors";

	return (
		// Contenedor de la sección con un fondo de color primario y texto blanco.
		<section id="contact" className='bg-primario text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-3xl sm:text-4xl font-bold mb-4 fade-in'>Contáctanos</h2>
				<p className="text-lg mb-10 fade-in">Déjanos un mensaje y te responderemos a la brevedad.</p>

				{showForm ? (
					// Usamos un div como contenedor del formulario para aplicar estilos de fondo, padding y sombra.
					<div className="bg-white text-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Campos de texto y email */}
							<input type='text' name='name' placeholder='Nombre completo' className={inputClasses} value={formData.name} onChange={handleChange} required />
							<input type='email' name='email' placeholder='Correo electrónico' className={inputClasses} value={formData.email} onChange={handleChange} required />
							<input type="tel" name="phone" placeholder="Teléfono (Opcional)" className={inputClasses} value={formData.phone} onChange={handleChange} />

							{/* Grupo de Radio Buttons para "Asunto" */}
							<div className="text-left">
								<label className="font-semibold text-gray-700">Asunto:</label>
								<div className="mt-2 flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
									<label className="flex items-center space-x-2 cursor-pointer">
										<input type="radio" name="subject" value="Consulta" checked={formData.subject === "Consulta"} onChange={handleChange} className="form-radio text-primario focus:ring-primario" required />
										<span>Consulta</span>
									</label>
									<label className="flex items-center space-x-2 cursor-pointer">
										<input type="radio" name="subject" value="Ventas" checked={formData.subject === "Ventas"} onChange={handleChange} className="form-radio text-primario focus:ring-primario" required />
										<span>Ventas</span>
									</label>
								</div>
							</div>

							{/* Grupo de Checkboxes para "Servicios de Interés" */}
							<div className="text-left">
								<label className="font-semibold text-gray-700">Servicios de Interés (Opcional):</label>
								<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
									{serviceOptions.map(option => (
										<label key={option.value} className="flex items-center space-x-2 cursor-pointer">
											<input type="checkbox" name="serviceType" value={option.value} checked={formData.serviceType.includes(option.value)} onChange={handleChange} className="form-checkbox text-primario rounded focus:ring-primario" />
											<span>{option.label}</span>
										</label>
									))}
								</div>
							</div>

							{/* Área de texto para el mensaje */}
							<textarea name='message' placeholder='Escribe tu mensaje aquí...' className={`${inputClasses} h-32`} value={formData.message} onChange={handleChange} required></textarea>

							{/* ReCAPTCHA y Botón de envío */}
							<div className="flex flex-col items-center gap-6">
								<ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptcha} hl="es" />
								<button type='submit' disabled={isSubmitting} className='w-full bg-secundario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-primario transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed'>
									{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
								</button>
							</div>
						</form>
					</div>
				) : (
					<TicketMessage />
				)}

				{/* Mensaje de estado/error */}
				{status && <p className='mt-4 text-center font-semibold text-red-200 bg-red-800/50 px-4 py-2 rounded-md'>{status}</p>}
			</div>
		</section>
	);
};

export default Contact;