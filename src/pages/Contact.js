// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const TicketMessage = () => (
	<div className='ticket-message fade-in'>
		<i class='fa-solid fa-circle-check'></i>
		<p>¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
	</div>
);

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "", // 📞 Nuevo estado para el teléfono
		message: "",
	});
	const [status, setStatus] = useState("");
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [formVisible, setFormVisible] = useState(true);
	const [showForm, setShowForm] = useState(true);

	useEffect(() => {
		const form = document.querySelector(".contact-form");
		if (!formVisible && form) {
			form.classList.add("fade-out");
		}
	}, [formVisible]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "phone") {
			// Filtra caracteres no numéricos
			const filteredValue = value.replace(/[^0-9-]/g, "");
			// Valida el formato del número de teléfono
			// const isValid = /^{3}-{3}-{4}$/.test(filteredValue);
			// if (!isValid) {
			// 	alert(
			// 		"Por favor, ingresa un número de teléfono con formato 123-456-7890"
			// 	);
			// }
			setFormData({ ...formData, [name]: filteredValue });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};
	const handleCaptcha = (value) => {
		setCaptchaVerified(!!value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();


		if (!captchaVerified) {
			setStatus("Por favor verifica que no eres un robot.");



			return;
		}
		// Agrega la clase 'fade-out' al formulario
		const form = document.querySelector(".contact-form	");
		if (form) {
			form.classList.add("fade-out");
		}
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID, // Reemplázalo con tu Service ID
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Reemplázalo con tu Template ID
				{
					to_email: "gonzalo@expansispro.com", // Asegura que el correo de destino está en tu plantilla de EmailJS
					name: formData.name,
					phone: formData.phone, // 📞 Teléfono agregado al mensaje
					email: formData.email,
					message: formData.message,
				},
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY, // Reemplázalo con tu Public Key de EmailJS
			)
			.then(
				(response) => {
					console.log("Mensaje enviado con éxito:", response);
					// setStatus("¡Gracias por contactarnos! Te responderemos a la brevedad.");
					setFormData({ name: "", email: "", phone: "", message: "" }); // 📞 Limpia el campo de teléfono

					setFormVisible(false);
					setShowForm(false);
					setTimeout(() => {
						setShowForm(true);
						setStatus("");
					}, 3000);
				},
				(error) => {
					console.error("Error al enviar mensaje:", error);
					setStatus("Hubo un error al enviar el mensaje");
				},
			);
	};

	return (
		<section className='contact-section section'>
			<h1 className='fade-in'>Contáctanos</h1>

			{showForm && (
				<form className='contact-form fade-in-delay' onSubmit={handleSubmit}>
					<p className='fade-in-delay'>Déjanos un mensaje y te responderemos a la brevedad.</p>
					<input
						type='text'
						name='name'
						placeholder='Nombre completo'
						className='contact-input'
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Correo electrónico'
						className='contact-input'
						value={formData.email}
						onChange={handleChange}

						required
					/>
					<input
						type="tel"
						inputmode="numeric"
						name="phone"
						placeholder="Teléfono"
						className="contact-input"
						value={formData.phone}
						onChange={handleChange}
					/>
					<textarea
						name='message'
						placeholder='Escribe tu mensaje aquí...'
						className='contact-input'
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Reemplázalo con tu clave de reCAPTCHA
						onChange={handleCaptcha}
						hl="es"
					/>
					<button type='submit' className='cta-button cta-button-w100'>
						Enviar
					</button>
				</form>
			)}

			{!showForm && <TicketMessage />}

			{status && <p className='status-message'>{status}</p>}
		</section>
	);
};

export default Contact;