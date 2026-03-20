import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { trackFormConversion } from '../utils/trackingUtils';
const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: []
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const servicesList = ["Marketing Digital", "Diseño Web", "Consultoría Digital", "E-commerce"];

    // 2. Manejadores de cambios
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

    // 3. Lógica de envío unificada
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se refresque

        if (!captchaVerified) {
            setStatusMessage("Por favor, confirma que no eres un robot.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("");

        // Preparamos el string de servicios para EmailJS y Sheets
        const templateParams = {
            ...formData,
            serviceType: formData.serviceType.join(", ")
        };

        try {
            // A. Envío a SheetDB (Google Sheets)
            await axios.post(process.env.REACT_APP_SHETDB_API_URL, {
                ...templateParams,
                timestamp: new Date().toLocaleString('es-CL')
            });


            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            );

            // 2. DISPARO DE CONVERSIÓN CENTRALIZADO
            // Esto llamará al ID AW-16965295721/mRlTCNr00sIbEOm815k_
            trackFormConversion();

            setIsSuccess(true);
        } catch (error) {
            console.error("Error al enviar:", error);
            setStatusMessage("Ocurrió un error. Intenta de nuevo o usa WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Vista de Éxito
    if (isSuccess) {
        return (
            <div className="text-center py-10 animate-fade-in">
                <i className="fa-solid fa-circle-check text-5xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold text-deepBlue">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 mt-2 font-light">Te contactaremos a la brevedad.</p>
                <button
                    onClick={() => { setIsSuccess(false); setFormData({ ...formData, serviceType: [], message: "" }); }}
                    className="mt-6 text-primario font-semibold underline"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Fila 1: Nombre y Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Nombre</label>
                    <input
                        type="text" name="name" required
                        value={formData.name} onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Email</label>
                    <input
                        type="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="nombre@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                    />
                </div>
            </div>

            {/* Fila 2: Teléfono y Asunto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Teléfono</label>
                    <input
                        type="tel" name="phone" required
                        value={formData.phone} onChange={handleChange}
                        placeholder="+56 9 1234 5678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Asunto</label>
                    <input
                        type="text" name="subject" required
                        value={formData.subject} onChange={handleChange}
                        placeholder="¿En qué podemos ayudarte?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                    />
                </div>
            </div>

            {/* Fila 3: Checkboxes de Servicios */}
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-3">Servicios de Interés</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {servicesList.map(service => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                value={service}
                                checked={formData.serviceType.includes(service)}
                                onChange={handleCheckboxChange}
                                className="w-5 h-5 rounded border-gray-300 text-primario focus:ring-primario cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 font-light group-hover:text-primario transition-colors">{service}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Fila 4: Mensaje */}
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Detalles de la Consulta</label>
                <textarea
                    name="message" rows="4" required
                    value={formData.message} onChange={handleChange}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light resize-none"
                ></textarea>
            </div>

            {/* Fila 5: Botón y Recaptcha */}
            <div className="flex flex-col items-center gap-4">
                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptcha} />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primario text-white font-medium py-4 rounded-xl shadow-lg hover:brightness-110 transition-all transform hover:scale-[1.02] disabled:bg-gray-400"
                >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>

                {statusMessage && <p className="text-red-500 text-sm font-medium">{statusMessage}</p>}
            </div>
        </form>
    );
};

export default ContactForm;