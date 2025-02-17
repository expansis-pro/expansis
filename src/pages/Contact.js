// src/pages/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState('');
	const [captchaVerified, setCaptchaVerified] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleCaptcha = (value) => {
		setCaptchaVerified(!!value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!captchaVerified) {
			setStatus('Por favor verifica que no eres un robot.');
			return;
		}

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID, // Reemplázalo con tu Service ID
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Reemplázalo con tu Template ID
				{
					to_email: 'gonzalo@expansispro.com', // Asegura que el correo de destino está en tu plantilla de EmailJS
					name: formData.name,
					email: formData.email,
					message: formData.message,
				},
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Reemplázalo con tu Public Key de EmailJS
			)
			.then(
				(response) => {
					console.log('Mensaje enviado con éxito:', response);
					setStatus('Mensaje enviado con éxito');
					setFormData({ name: '', email: '', message: '' });
				},
				(error) => {
					console.error('Error al enviar mensaje:', error);
					setStatus('Hubo un error al enviar el mensaje');
				}
			);
	};

	return (
		<section className='contact-section section'>
			<h1 className='fade-in'>Contáctanos</h1>
			<p className='fade-in-delay'>Déjanos un mensaje y te responderemos a la brevedad.</p>
			<form className='contact-form fade-in-delay' onSubmit={handleSubmit}>
				<input type='text' name='name' placeholder='Nombre completo' className='contact-input' value={formData.name} onChange={handleChange} required />
				<input type='email' name='email' placeholder='Correo electrónico' className='contact-input' value={formData.email} onChange={handleChange} required />
				<textarea name='message' placeholder='Escribe tu mensaje aquí...' className='contact-input' value={formData.message} onChange={handleChange} required></textarea>
				<ReCAPTCHA
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Reemplázalo con tu clave de reCAPTCHA
					onChange={handleCaptcha}
				/>

				<button type='submit' className='cta-button'>
					Enviar
				</button>
			</form>
			{status && <p className='status-message'>{status}</p>}
		</section>
	);
};

export default Contact;

// 📌 Para que esto funcione, instala EmailJS con:
// npm install emailjs-com
// Luego, ve a https://www.emailjs.com/ y crea una cuenta.
// Configura tu Service ID, Template ID y Public Key en service_xxxxxx, template_xxxxxx y public_xxxxxx.
