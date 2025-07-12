// src/pages/Contact.js

import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'; // Importamos Axios para hacer la petición

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

		if (type === "checkbox") {
			setFormData(prevData => {
				const currentServices = prevData.serviceType;
				if (checked) {
					return { ...prevData, serviceType: [...currentServices, value] };
				} else {
					return { ...prevData, serviceType: currentServices.filter(service => service !== value) };
				}
			});
		} else {
			setFormData(prevData => ({
				...prevData,
				[name]: value
			}));
		}
	};

	const handleCaptcha = (value) => {
		setCaptchaVerified(!!value);
	};

	// --- FUNCIÓN MODIFICADA ---
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!captchaVerified) {
			setStatus("Por favor, verifica que no eres un robot.");
			return;
		}

		setStatus("");
		setIsSubmitting(true);

		const dataForSheet = {
			...formData,
			serviceType: formData.serviceType.join(', '),
			timestamp: new Date().toLocaleString('es-CL'),
		};

		// --- LÍNEA MODIFICADA ---
		// Usamos el nombre correcto para la variable de entorno
		const sheetApiUrl = process.env.REACT_APP_SHETDB_API_URL;

		// --- LÍNEAS DE DEPURACIÓN AÑADIDAS ---
		// Esto nos mostrará en la consola la URL y los datos que estamos enviando.
		console.log("Enviando a la URL:", sheetApiUrl);
		console.log("Datos para Google Sheet:", dataForSheet);
		// --- FIN DE LÍNEAS DE DEPURACIÓN ---

		axios.post(sheetApiUrl, dataForSheet)
			.then(response => {
				console.log("Datos enviados a Google Sheets con éxito:", response);
			})
			.catch(error => {
				console.error("Error al enviar datos a Google Sheets:", error);
			});

		// El resto del código de EmailJS sigue igual...
		emailjs.sendForm(
			process.env.REACT_APP_EMAILJS_SERVICE_ID,
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
			e.target,
			process.env.REACT_APP_EMAILJS_USER_ID
		)
			.then((result) => {
				console.log(result.text);
				setStatus("Mensaje enviado con éxito.");
				setShowForm(false);
			}, (error) => {
				console.log(error.text);
				setStatus("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	const inputClasses = "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primario transition-colors";

	return (
		<section id="contact" className='bg-primario text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-3xl sm:text-4xl font-bold mb-4 fade-in'>Contáctanos</h2>
				<p className="text-lg mb-10 fade-in">Déjanos un mensaje y te responderemos a la brevedad.</p>

				{showForm ? (
					<div className="bg-white text-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* El resto del formulario no necesita cambios */}
							<input type='text' name='name' placeholder='Nombre completo' className={inputClasses} value={formData.name} onChange={handleChange} required />
							<input type='email' name='email' placeholder='Correo electrónico' className={inputClasses} value={formData.email} onChange={handleChange} required />
							<input type="tel" name="phone" placeholder="Teléfono (Opcional)" className={inputClasses} value={formData.phone} onChange={handleChange} />

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

							<textarea name='message' placeholder='Escribe tu mensaje aquí...' className={`${inputClasses} h-32`} value={formData.message} onChange={handleChange} required></textarea>

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

				{status && <p className='mt-4 text-center font-semibold text-red-200 bg-red-800/50 px-4 py-2 rounded-md'>{status}</p>}
			</div>
		</section>
	);
};

export default Contact;
