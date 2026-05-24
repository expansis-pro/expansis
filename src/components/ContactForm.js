import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { trackFormSubmit } from '../utils/trackingUtils';
import { servicesData } from '../data/servicesData'; // Traemos la fuente de verdad


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        company: "", // Nuevo (Opcional)
        phone: "",
        message: "",
        serviceType: []
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);



    // Si tu .env no tiene la clave, usamos una bandera para no bloquear al usuario legítimo
    const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;


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

        // Si hay una siteKey configurada pero el usuario no lo ha marcado, exigimos la verificación
        if (siteKey && !captchaVerified) {
            setStatusMessage("Por favor, confirma el reCAPTCHA de seguridad.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("");

        // Preparamos el string de servicios para EmailJS y Sheets
        const templateParams = {
            ...formData,
            company: formData.company ? formData.company : "No especificada",
            serviceType: formData.serviceType.length > 0 ? formData.serviceType.join(", ") : "Ninguno seleccionado"
        };

        try {
            // A. Envío a SheetDB (Google Sheets)
            if (process.env.REACT_APP_SHETDB_API_URL) {
                await axios.post(process.env.REACT_APP_SHETDB_API_URL, {
                    ...templateParams,
                    timestamp: new Date().toLocaleString('es-CL')
                });
            }


            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            );

            // 2. DISPARO DE CONVERSIÓN CENTRALIZADO
            // Esto llamará al ID AW-16965295721/mRlTCNr00sIbEOm815k_
            trackFormSubmit('contacto_main_form');

            setIsSuccess(true);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setStatusMessage("Ocurrió un inconveniente técnico. Por favor, intenta usar el canal directo de WhatsApp.");
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
                    onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: "", company: "", phone: "", message: "", serviceType: [] });
                        setCaptchaVerified(false);
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

            {/* Campo: Nombre */}
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Nombre</label>
                <input
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>
            {/* Campo: Empresa (Opcional) */}
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


            {/* Fila 2: Teléfono */}
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Teléfono de Contacto</label>
                <input
                    type="tel" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>

            {/* Fila 3: Checkboxes de Servicios Dinámicos */}
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

            {/* Fila 4: Detalles de la consulta */}
            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Detalles de la Consulta</label>
                <textarea
                    name="message" rows="4" required
                    value={formData.message} onChange={handleChange}
                    placeholder="Cuéntanos un poco más sobre lo que necesitas o las metas de tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light resize-none"
                ></textarea>
            </div>

            {/* Fila 5: Botón y Recaptcha */}
            <div className="flex flex-col items-center gap-4 pt-2">
                {siteKey && (
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