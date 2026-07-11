// src/components/ContactForm.js
import React, { useState, useEffect } from 'react'; // 1. Agregamos useEffect
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { trackFormSubmit } from '../utils/trackingUtils';
import { servicesData } from '../data/servicesData';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        serviceType: []
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(""); // 🟢 NUEVO: Estado para guardar el token string real
    const [isMounted, setIsMounted] = useState(false); // 🔵 NUEVO: Control para matar el error #418 de hidratación
    const [isSuccess, setIsSuccess] = useState(false);

    // Ejecutamos tras el primer render en el navegador real
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

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
        setCaptchaToken(value || ""); // 🟢 Guardamos la cadena de texto limpia que exige EmailJS
        setCaptchaVerified(!!value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (siteKey && !captchaVerified) {
            setStatusMessage("Por favor, confirma el reCAPTCHA de seguridad.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("");

        // Preparamos los parámetros
        const templateParams = {
            ...formData,
            company: formData.company ? formData.company : "No especificada",
            serviceType: formData.serviceType.length > 0 ? formData.serviceType.join(", ") : "Ninguno seleccionado",
            'g-recaptcha-response': captchaToken // 🟢 CRÍTICO: Adjuntamos el token con el nombre exacto que EmailJS espera
        };

        try {
            // A. Envío a SheetDB (Google Sheets)
            if (process.env.REACT_APP_SHETDB_API_URL) {
                await axios.post(process.env.REACT_APP_SHETDB_API_URL, {
                    ...templateParams,
                    timestamp: new Date().toLocaleString('es-CL')
                });
            }

            // B. Envío a EmailJS
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            );

            // C. Disparo de Conversión en Google Ads / GA4
            trackFormSubmit('contacto_main_form', {
                'servicio_seleccionado': formData.serviceType.length > 0 ? formData.serviceType.join(", ") : "Información General"
            });

            setIsSuccess(true);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setStatusMessage("Ocurrió un inconveniente técnico. Por favor, intenta usar el canal directo de WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-10 animate-fade-in">
                <i className="fa-solid fa-circle-check text-5xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold text-deepBlue">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 mt-2 font-light">Te contactaremos a la brevedad.</p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: "", company: "", phone: "", message: "", serviceType: [] });
                        setCaptchaVerified(false);
                        setCaptchaToken("");
                    }}
                    className="mt-6 text-primario font-semibold underline hover:text-primario/80 transition-colors"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Nombre</label>
                <input
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">
                    Empresa <span className="text-gray-400 text-xs">(Opcional)</span>
                </label>
                <input
                    type="text" name="company"
                    value={formData.company} onChange={handleChange}
                    placeholder="Nombre de tu negocio o empresa"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Correo Electrónico</label>
                <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Teléfono de Contacto</label>
                <input
                    type="tel" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-deepBlue mb-3">Servicios de Interés</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {servicesData.map(service => (
                        <label key={service.slug} className="flex items-center space-x-3 cursor-pointer group bg-gray-50/50 p-3 rounded-xl border border-gray-100 hover:border-primario/30 transition-all">
                            <input
                                type="checkbox"
                                value={service.title}
                                checked={formData.serviceType.includes(service.title)}
                                onChange={handleCheckboxChange}
                                className="w-5 h-5 rounded border-gray-300 text-primario focus:ring-primario cursor-pointer"
                            />
                            <span className="text-sm text-gray-700 font-light group-hover:text-primario transition-colors">{service.title}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Detalles de la Consulta</label>
                <textarea
                    name="message" rows="4" required
                    value={formData.message} onChange={handleChange}
                    placeholder="Cuéntanos un poco más sobre lo que necesitas o las metas de tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light resize-none"
                ></textarea>
            </div>

            <div className="flex flex-col items-center gap-4 pt-2">
                {/* 🔵 SOLUCIÓN 418: Solo renderiza el reCAPTCHA si está montado en el cliente real */}
                {isMounted && siteKey && (
                    <div className="overflow-hidden max-w-full flex justify-center">
                        <ReCAPTCHA sitekey={siteKey} onChange={handleCaptcha} />
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primario text-white font-medium py-4 rounded-xl shadow-lg hover:brightness-110 transition-all transform hover:scale-[1.01] disabled:bg-gray-400 disabled:transform-none"
                >
                    {isSubmitting ? "Procesando..." : "Enviar Formulario"}
                </button>

                {statusMessage && <p className="text-red-500 text-sm font-medium text-center">{statusMessage}</p>}
            </div>
        </form>
    );
};

export default ContactForm;