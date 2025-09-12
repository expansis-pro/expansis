import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Whatsapp from '../pages/Whatsapp';
// import analytics from '../analytics'; // ELIMINAR: Ya no usaremos la librería analytics directamente aquí

// Componente de mensaje de éxito, sin cambios.
const TicketMessage = () => (
	<div className='text-center p-6 bg-green-50 text-green-800 rounded-lg shadow-md max-w-md mx-auto'>
		<i className='fa-solid fa-circle-check text-4xl mb-4'></i>
		<p className="text-lg font-semibold">¡Gracias por contactarnos!</p>
		<p>Te responderemos a la brevedad.</p>
	</div>
);

const Contact = () => {
	// El estado y las opciones se mantienen igual.
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

	const subjectOptions = [
		"Solicitar Cotización",
		"Agendar una Reunión",
		"Consulta General",
		"Soporte (clientes existentes)"
	];

	const serviceOptions = [
		{ value: "Desarrollo Web y E-commerce", label: "Desarrollo Web y E-commerce" },
		{ value: "Marketing Digital y SEO", label: "Marketing Digital y SEO" },
		{ value: "Consultoría Estratégica", label: "Consultoría Estratégica" },
		{ value: "Diseño de Marca (Branding)", label: "Diseño de Marca (Branding)" },
		{ value: "Mantenimiento y Soporte Web", label: "Mantenimiento y Soporte Web" },
		{ value: "Otro", label: "Otro" },
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
		// Rastrea la verificación del captcha usando gtag()
		if (typeof window.gtag === 'function') { // Verifica que gtag esté disponible
			if (value) {
				window.gtag('event', 'captcha_verificado', {
					event_category: 'Formulario Contacto',
					event_label: 'ReCAPTCHA Exitoso'
				});
			} else {
				window.gtag('event', 'captcha_no_verificado', {
					event_category: 'Formulario Contacto',
					event_label: 'ReCAPTCHA Fallido'
				});
			}
		}
	};

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
			serviceType: formData.serviceType.join(', ') || 'No especificado',
			timestamp: new Date().toLocaleString('es-CL'),
		};

		axios.post(process.env.REACT_APP_SHETDB_API_URL, dataForSheet)
			.then(response => {
				console.log("Datos enviados a Google Sheets con éxito:", response);
			})
			.catch(error => {
				console.error("Error al enviar datos a Google Sheets:", error);
			});

		const templateParams = {
			name: formData.name,
			email: formData.email,
			phone: formData.phone || 'No especificado',
			subject: formData.subject,
			serviceType: formData.serviceType.join(', ') || 'No especificado',
			message: formData.message,
		};

		emailjs.send(
			process.env.REACT_APP_EMAILJS_SERVICE_ID,
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
			templateParams,
			process.env.REACT_APP_EMAILJS_USER_ID
		)
			.then((result) => {
				console.log(result.text);
				// --- CAMBIO REALIZADO: AÑADIR SEGUIMIENTO DE ENVÍO EXITOSO CON gtag() ---
				if (typeof window.gtag === 'function') { // Verifica que gtag esté disponible
					window.gtag('event', 'form_enviado', { // Nombre del evento en snake_case para GA4
						event_category: 'Contacto',
						event_label: 'Formulario Principal Exitoso',
						subject: formData.subject,
						services: formData.serviceType.join(', ')
					});
				}
				setShowForm(false);
			}, (error) => {
				console.log(error.text);
				setStatus("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
				// Rastrea el error de envío del formulario con gtag()
				if (typeof window.gtag === 'function') { // Verifica que gtag esté disponible
					window.gtag('event', 'form_fallido', {
						event_category: 'Contacto',
						event_label: 'Error al Enviar Correo',
						error_message: error.text // Usar snake_case para los parámetros
					});
				}
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	const inputClasses = "w-full px-4 py-3  border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primario transition-colors";
	const fieldsetClasses = "border border-gray-200 rounded-lg p-4 space-y-3";
	const legendClasses = "text-sm font-medium text-gray-800 px-2";
	const labelClasses = "block text-sm font-medium text-gray-800 mb-2";

	return (
		<section id="contact" className=' py-6 sm:py-6'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in'>Contáctanos</h2>
				<p className="text-lg text-gray-700 mb-10 fade-in">Déjanos un mensaje y te responderemos a la brevedad.</p>

				{showForm ? (
					<div className=" text-gray-800 rounded-xl shadow-2xl border-t-4 border-primario px-6 py-8">
						<form onSubmit={handleSubmit} className="space-y-6 text-left">
							<div>
								<label htmlFor="name" className={labelClasses}>Nombre completo</label>
								<input id="name" type='text' name='name' placeholder='Ej: Juan Pérez' className={inputClasses} value={formData.name} onChange={handleChange} required />
							</div>
							<div>
								<label htmlFor="email" className={labelClasses}>Correo electrónico</label>
								<input id="email" type='email' name='email' placeholder='Ej: juan.perez@email.com' className={inputClasses} value={formData.email} onChange={handleChange} required />
							</div>
							<div>
								<label htmlFor="phone" className={labelClasses}>Teléfono (Opcional)</label>
								<input id="phone" type="tel" name="phone" placeholder="Ej: +56 9 1234 5678" className={inputClasses} value={formData.phone} onChange={handleChange} />
							</div>

							<fieldset className={fieldsetClasses}>
								<legend className={legendClasses}>Asunto</legend>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
									{subjectOptions.map(option => (
										<label key={option} className="flex items-center space-x-2 cursor-pointer">
											<input type="radio" name="subject" value={option} checked={formData.subject === option} onChange={handleChange} className="form-radio text-primario focus:ring-primario" required />
											<span>{option}</span>
										</label>
									))}
								</div>
							</fieldset>

							<fieldset className={fieldsetClasses}>
								<legend className={legendClasses}>Servicios de Interés (Opcional)</legend>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
									{serviceOptions.map(option => (
										<label key={option.value} className="flex items-center space-x-2 cursor-pointer">
											<input type="checkbox" name="serviceType" value={option.value} checked={formData.serviceType.includes(option.value)} onChange={handleChange} className="form-checkbox text-primario rounded focus:ring-primario" />
											<span>{option.label}</span>
										</label>
									))}
								</div>
							</fieldset>

							<div>
								<label htmlFor="message" className={labelClasses}>Mensaje</label>
								<textarea id="message" name='message' placeholder='Escribe tu mensaje aquí...' className={`${inputClasses} h-32`} value={formData.message} onChange={handleChange} required></textarea>
							</div>

							<div className="flex flex-col items-center gap-6 pt-4">
								<ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptcha} hl="es" />
								<button type='submit' disabled={isSubmitting} className='w-full bg-primario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:brightness-95 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed'>
									{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
								</button>
							</div>
						</form>
					</div>
				) : (
					<TicketMessage />
				)}

				{status && showForm && (
					<p className='mt-6 text-center font-semibold text-red-600'>{status}</p>
				)}
			</div>
			<Whatsapp />
		</section>
	);
};

export default Contact;
