// src/components/ContactForm.js
'use client';

import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { trackFormSubmit } from '@/utils/trackingUtils';
import { solutionsData } from '@/data/solutionsData';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        websiteUrl: "",
        email: "",
        phone: "",
        currentStatus: "",
        budgetRange: "",
        serviceType: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [savedSummary, setSavedSummary] = useState(null);

    // Recuperar resumen de sesión activa para evitar envíos duplicados
    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== 'undefined') {
            const cachedData = sessionStorage.getItem('expansis_lead_summary');
            if (cachedData) {
                try {
                    setSavedSummary(JSON.parse(cachedData));
                    setIsSuccess(true);
                } catch (e) {
                    sessionStorage.removeItem('expansis_lead_summary');
                }
            }
        }
    }, []);

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const WHATSAPP_NUMBER = "56988318443";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // const handleCheckboxChange = (e) => {
    //     const { value, checked } = e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         serviceType: checked
    //             ? [...prev.serviceType, value]
    //             : prev.serviceType.filter(item => item !== value)
    //     }));
    // };

    const handleCaptcha = (value) => {
        setCaptchaVerified(!!value);
    };

    // Tracking de analítica sin abrir una ventana duplicada con texto genérico
    const handleWhatsAppLeadClick = (serviceType) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'disparo_whatsapp_manual',
            servicio_seleccionado: serviceType,
            click_location: 'form_success_post_submit',
            page_url: window.location.href,
        });

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16965295721/wff8CPWU1sIbEOm815k_',
                click_location: 'form_success_post_submit',
                page_url: window.location.href,
            });
        }

        if (typeof window.fbq === 'function') {
            window.fbq('track', 'Contact', {
                content_category: 'WhatsApp',
                content_name: serviceType,
                predicted_availability: 'form_success_post_submit',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (typeof window !== 'undefined' && sessionStorage.getItem('expansis_lead_summary')) {
            setStatusMessage("Ya recibimos una solicitud en esta sesión. Contáctanos vía WhatsApp para consultas adicionales.");
            return;
        }

        if (siteKey && !captchaVerified) {
            setStatusMessage("Por favor confirma la verificación de seguridad.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Ocurrió un error al enviar el formulario.');
            }

            const summaryData = {
                name: formData.name,
                company: formData.company || "No especificada",
                websiteUrl: formData.websiteUrl || "No indicada",
                email: formData.email,
                phone: formData.phone,
                currentStatus: formData.currentStatus || "No indicado",
                budgetRange: formData.budgetRange || "A evaluar",
                serviceType: formData.serviceType || "Diagnóstico General",
                message: formData.message
            };

            if (typeof window !== 'undefined') {
                sessionStorage.setItem('expansis_lead_summary', JSON.stringify(summaryData));
            }

            setSavedSummary(summaryData);

            trackFormSubmit('contacto_main_form', {
                'servicio_seleccionado': summaryData.serviceType
            });

            setIsSuccess(true);
        } catch (error) {
            console.error("Error al transmitir formulario:", error);
            setStatusMessage(error.message || "Ocurrió un inconveniente técnico al transmitir los datos.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        const summary = savedSummary || {
            name: formData.name || "Cliente Web",
            company: formData.company || "No especificada",
            websiteUrl: formData.websiteUrl || "No indicada",
            email: formData.email || "No especificado",
            phone: formData.phone || "No especificado",
            currentStatus: formData.currentStatus || "No indicado",
            budgetRange: formData.budgetRange || "A evaluar",
            serviceType: formData.serviceType.length > 0 ? formData.serviceType.join(", ") : "Diagnóstico General",
            message: formData.message || "Solicitud de contacto enviada desde la web"
        };

        const waMessage =
            `¡Hola Expansis Pro! Acabo de enviar una solicitud de diagnóstico desde la web.

*MIS DATOS DE CONTACTO:*
• *Nombre:* ${summary.name}
• *Empresa:* ${summary.company}
• *Contacto:* ${summary.email} | ${summary.phone}
• *Web / Redes:* ${summary.websiteUrl}

*DIAGNÓSTICO TÉCNICO:*
• *Programa:* ${summary.serviceType}
• *Situación Actual:* ${summary.currentStatus}
• *Inversión Estimada:* ${summary.budgetRange}

*DETALLE DEL REQUERIMIENTO:*
"${summary.message}"

Quedo atento a la evaluación técnica.`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

        return (
            <div className="p-8 border border-white/20 bg-black/60 text-left font-mono">
                <span className="text-xs text-primario block mb-2">[ SOLICITUD REGISTRADA ]</span>
                <h3 className="text-2xl font-light text-white mb-2">Transmisión Exitosa</h3>
                <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">
                    Tus antecedentes fueron recibidos correctamente. Para evitar duplicidades operativas, este canal queda reservado en tu sesión actual.
                </p>

                <div className="border border-white/10 p-5 bg-white/[0.02] mb-6">
                    <span className="text-[10px] uppercase text-zinc-500 block mb-3">Atención Inmediata con Ficha Completa:</span>
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleWhatsAppLeadClick(summary.serviceType)}
                        className="inline-flex items-center gap-2 py-3.5 px-6 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all w-full justify-center sm:w-auto"
                    >
                        <span>Confirmar por WhatsApp con Ficha</span>
                        <span>→</span>
                    </a>
                </div>

                <div className="text-[11px] text-zinc-500 border-t border-white/10 pt-4">
                    RESPUESTA ESTIMADA: &lt; 24 HORAS HÁBILES // EXPANSIS PRO
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                    01. Nombre Completo *
                </label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Rodrigo Silva"
                    className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primario rounded-none"
                />
            </div>

            <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                    02. Empresa o Razón Social
                </label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Constructora Andina SpA"
                    className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primario rounded-none"
                />
            </div>

            <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                    03. Sitio Web Actual o Redes (Opcional)
                </label>
                <input
                    type="text"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    placeholder="ej: www.miempresa.cl o @usuario"
                    className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primario rounded-none"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                        04. Situación Actual *
                    </label>
                    <select
                        name="currentStatus"
                        required
                        value={formData.currentStatus}
                        onChange={handleChange}
                        className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-primario rounded-none"
                    >
                        <option value="">Selecciona una opción...</option>
                        <option value="Sin web (desde cero)">No tenemos web (desde cero)</option>
                        <option value="Web activa que no convierte">Tenemos web activa pero no convierte</option>
                        <option value="Rediseño / Migración">Buscamos rediseño / migración</option>
                        <option value="Solo redes sociales">Solo operamos por redes sociales</option>
                    </select>
                </div>

                <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                        05. Inversión Estimada
                    </label>
                    <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-primario rounded-none"
                    >
                        <option value="">A evaluar según propuesta</option>
                        <option value="$350.000 - $600.000 CLP">$350.000 a $600.000 CLP</option>
                        <option value="$600.000 - $1.200.000 CLP">$600.000 a $1.200.000 CLP</option>
                        <option value="Más de $1.200.000 CLP">Más de $1.200.000 CLP</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                        06. Correo Electrónico *
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contacto@empresa.cl"
                        className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primario rounded-none"
                    />
                </div>
                <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                        07. Teléfono / WhatsApp *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+56 9 8765 4321"
                        className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primario rounded-none"
                    />
                </div>
            </div>

            <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-3">
                    08. Programa de Interés
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {solutionsData.map((solution) => {
                        // Ahora comparamos Strings directamente
                        const isChecked = formData.serviceType === solution.title;

                        return (
                            <label
                                key={solution.slug}
                                className={`p-3 border transition-colors cursor-pointer flex items-start gap-3 rounded-none ${isChecked
                                    ? 'border-primario bg-primario/10 text-white'
                                    : 'border-white/15 bg-black/30 text-zinc-400 hover:border-white/30'
                                    }`}
                            >
                                <input
                                    type="radio" // 👈 Cambiado a radio
                                    name="serviceType" // 👈 Obligatorio para agrupar radios
                                    value={solution.title}
                                    checked={isChecked}
                                    onChange={handleChange} // 👈 Usa el manejador genérico
                                    className="mt-0.5 rounded-none accent-[#ff5c00]"
                                />
                                <span className="text-xs font-sans font-light leading-snug">
                                    {solution.title}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>

            <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
                    09. Detalles de la Consulta o Proyecto *
                </label>
                <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe los requerimientos principales, etapa de tu negocio o plazos estimados..."
                    className="w-full bg-[#07090e] border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primario rounded-none resize-none"
                />
            </div>

            {isMounted && siteKey && (
                <div className="overflow-hidden flex justify-start pt-1">
                    <ReCAPTCHA sitekey={siteKey} onChange={handleCaptcha} theme="dark" />
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primario text-white text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-primario/90 transition-colors cursor-pointer border border-primario rounded-none disabled:bg-zinc-700 disabled:border-zinc-700"
            >
                {isSubmitting ? 'Transmitiendo Datos...' : 'Enviar Solicitud de Diagnóstico →'}
            </button>

            {statusMessage && (
                <p className="font-mono text-xs text-red-400 mt-2">{statusMessage}</p>
            )}
        </form>
    );
}