import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "", // Nuevo campo
        subject: "",
        message: "",
        serviceType: [] // Array para checkboxes
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const servicesList = ["Google Ads", "Diseño Web", "RRSS", "SEO", "E-commerce"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            serviceType: checked
                ? [...prev.serviceType, value]
                : prev.serviceType.filter(item => item !== value)
        }));
    };

    const handleCaptcha = (value) => {
        setCaptchaVerified(!!value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            setStatusMessage("Por favor, confirma que no eres un robot.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("");

        // Preparamos los parámetros exactos para tu plantilla de EmailJS
        const templateParams = {
            ...formData,
            serviceType: formData.serviceType.join(", ") // Convierte ["Ads", "SEO"] a "Ads, SEO"
        };

        try {
            // 1. Envío a SheetDB
            await axios.post(process.env.REACT_APP_SHETDB_API_URL, {
                ...templateParams,
                timestamp: new Date().toLocaleString('es-CL')
            });

            // 2. Envío a EmailJS (Llegará a gonzalo@expansispro.com)
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            );

            // 3. Conversión de Google Ads
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-16965295721/mRlTCNr00sIbEOm815k_'
                });
            }

            setIsSuccess(true);
        } catch (error) {
            console.error("Error al enviar:", error);
            setStatusMessage("Ocurrió un error. Intenta de nuevo o usa WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-10 animate-fade-in">
                <i className="fa-solid fa-circle-check text-5xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold text-deepBlue">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 mt-2 font-light">Gonzalo te contactará a la brevedad.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-6 text-primario font-semibold underline">Enviar otro mensaje</button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Nombre</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="tu@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Teléfono</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+56 9..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Asunto</label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Ej: Cotización" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light" />
                </div>
            </div>

            {/* Sección de Checkboxes */}
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-3">Servicios de Interés</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {servicesList.map(service => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                value={service}
                                onChange={handleCheckboxChange}
                                className="w-5 h-5 rounded border-gray-300 text-primario focus:ring-primario cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 font-light group-hover:text-primario transition-colors">{service}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Detalles de la Consulta</label>
                <textarea name="message" rows="4" required value={formData.message} onChange={handleChange} placeholder="Cuéntanos más sobre tu proyecto..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light resize-none"></textarea>
            </div>

            <div className="flex flex-col items-center gap-4">
                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptcha} />
                <button type="submit" disabled={isSubmitting} className="w-full bg-primario text-white font-medium py-4 rounded-xl shadow-lg hover:brightness-110 transition-all transform hover:scale-[1.02] disabled:bg-gray-400">
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
                {statusMessage && <p className="text-red-500 text-sm font-medium">{statusMessage}</p>}
            </div>
        </form>
    );
};

export default ContactForm;