import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const TicketMessage = () => (
	<div className='ticket-message fade-in'>
		<i className='fa-solid fa-circle-check'></i>
		<p>¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
	</div>
);

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "", // Ahora para radio buttons
		serviceType: [], // Ahora un array para checkboxes
		message: "Hola, me interesan los servicios de Expansis Pro, por lo que solicito información al respecto.",
	});
	const [status, setStatus] = useState("");
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [formVisible, setFormVisible] = useState(true);
	const [showForm, setShowForm] = useState(true);

	const serviceOptions = [
		{ value: "Desarrollo Web", label: "Desarrollo Web" },
		{ value: "Consultoría Digital", label: "Consultoría Digital" },
		{ value: "Marketing Digital", label: "Marketing Digital" },
		{ value: "Posicionamiento Web", label: "Posicionamiento Web" },
	];

	useEffect(() => {
		const form = document.querySelector(".contact-form");
		if (!formVisible && form) {
			form.classList.add("fade-out");
		}
	}, [formVisible]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (name === "phone") {
			const filteredValue = value.replace(/[^0-9+-]/g, "");
			setFormData({ ...formData, [name]: filteredValue });
		} else if (type === "radio" && name === "subject") {
			setFormData({ ...formData, [name]: value });
		} else if (type === "checkbox" && name === "serviceType") {
			const updatedServices = checked
				? [...formData.serviceType, value]
				: formData.serviceType.filter((service) => service !== value);
			setFormData({ ...formData, [name]: updatedServices });
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
		const form = document.querySelector(".contact-form");
		if (form) {
			form.classList.add("fade-out");
		}
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				{
					to_email: "gonzalo@expansispro.com",
					name: formData.name,
					phone: formData.phone,
					email: formData.email,
					subject: formData.subject, // Enviamos el valor del radio seleccionado
					serviceType: formData.serviceType.join(", "), // Unimos los checkboxes seleccionados en un string
					message: formData.message,
				},
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(response) => {
					console.log("Mensaje enviado con éxito:", response);
					setFormData({ name: "", email: "", phone: "", subject: "", serviceType: [], message: "" });
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
				}
			);
	};

	return (
		<section className='contact-section section background-color font-color'>
			<h2 className='fade-in'>Contáctanos</h2>

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

					<div className="contact-input-group">
						<label>Asunto:</label>
						<div>
							<input
								type="radio"
								id="consulta"
								name="subject"
								value="Consulta"
								checked={formData.subject === "Consulta"}
								onChange={handleChange}
								required
							/>
							<label htmlFor="consulta" className="radio-label">Consulta</label>

							<input
								type="radio"
								id="ventas"
								name="subject"
								value="Ventas"
								checked={formData.subject === "Ventas"}
								onChange={handleChange}
								required
							/>
							<label htmlFor="ventas" className="radio-label">Ventas</label>
						</div>
					</div>

					<div className="contact-input-group">
						<label>Servicios de Interés (Opcional):</label>
						<div>
							{serviceOptions.map((option) => (
								<div key={option.value}>
									<input
										type="checkbox"
										id={option.value}
										name="serviceType"
										value={option.value}
										checked={formData.serviceType.includes(option.value)}
										onChange={handleChange}
									/>
									<label htmlFor={option.value} className="checkbox-label">{option.label}</label>
								</div>
							))}
						</div>
					</div>

					<textarea
						name='message'
						placeholder='Escribe tu mensaje aquí...'
						className='contact-input'
						value={formData.message}
						onChange={handleChange}
						rows='5'
						required
					></textarea>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
						onChange={handleCaptcha}
						hl="es"
					/>
					<button type='submit' className='cta-button cta-button-a'>
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