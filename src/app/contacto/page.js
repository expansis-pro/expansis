// app/contacto/page.js
'use client';

import React from 'react';
import SecondaryHero from '@/components/SecondaryHero';
import ContactForm from '@/components/ContactForm';
import { contactData } from '@/data/contactConfig';

export default function ContactPage() {
    const email = contactData.email.address;
    const subject = encodeURIComponent("Consulta sobre Canal Digital - Expansis Pro");
    const body = encodeURIComponent("Hola equipo de Expansis Pro,\n\nMe pongo en contacto con ustedes para coordinar un diagnóstico técnico de mi canal digital.\n\nMis datos son:\n- Nombre:\n- Empresa:\n- Teléfono:\n\nQuedo atento a su respuesta.");
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    const diagnosisSteps = [
        {
            number: "01",
            title: "Revisión Preliminar de Antecedentes",
            description: "Analizamos tu modelo de negocio, presencia digital actual y la viabilidad técnica de captación en menos de 24 horas hábiles."
        },
        {
            number: "02",
            title: "Sesión de Diagnóstico (30 min)",
            description: "Coordinamos una reunión remota o presencial para entender tus metas de facturación, márgenes y requerimientos de infraestructura."
        },
        {
            number: "03",
            title: "Propuesta de Arquitectura y Plan",
            description: "Te entregamos una hoja de ruta con la inversión exacta, los tiempos de entrega y los indicadores clave (KPIs) recomendados para tu empresa."
        }
    ];

    return (
        <main className="min-h-screen">
            {/* HERO INSTITUCIONAL */}
            <SecondaryHero
                title="Hablemos de tu Proyecto"
                subtitle="Cuéntanos tus metas comerciales. Diseñamos y ejecutamos infraestructuras digitales para empresas que buscan captar clientes con predictibilidad."
                icon="fa-solid fa-paper-plane"
                img="/assets/images/hero-contact.webp"
            />

            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-ghostWhite">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* COLUMNA IZQUIERDA: DIAGNÓSTICO Y DATOS INSTITUCIONALES (lg:col-span-5) */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <span className="text-primario uppercase tracking-widest text-xs font-bold block mb-2">
                                Metodología de Inicio
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-deepBlue mb-4">
                                ¿Qué ocurre tras enviar tu solicitud?
                            </h2>
                            <p className="text-gray-600 font-light text-sm leading-relaxed">
                                No agendamos reuniones genéricas de venta. Antes de reunirnos, auditamos tu caso para llegar a la primera sesión con propuestas técnicas concretas.
                            </p>
                        </div>

                        {/* PASOS DE LA SESIÓN DE DIAGNÓSTICO */}
                        <div className="space-y-6">
                            {diagnosisSteps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl bg-deepBlue text-ghostWhite flex items-center justify-center font-bold text-sm shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-deepBlue mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CANALES FORMALES Y COBERTURA */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                            <h3 className="text-xs uppercase tracking-widest font-bold text-deepBlue">
                                Cobertura & Canales Institucionales
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-3 text-gray-600 font-light">
                                    <i className="fa-solid fa-location-dot text-primario text-base shrink-0 w-5 text-center"></i>
                                    <span>Santiago de Chile &bull; Cobertura nacional e internacional</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-light">
                                    <i className="fa-solid fa-envelope text-primario text-base shrink-0 w-5 text-center"></i>
                                    <a href={mailtoLink} className="hover:text-primario transition-colors break-all">
                                        {email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-light">
                                    <i className="fa-solid fa-clock text-primario text-base shrink-0 w-5 text-center"></i>
                                    <span>Lunes a Viernes: 09:00 - 19:00 hrs.</span>
                                </li>
                            </ul>
                            <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-400 italic">
                                <i className="fa-solid fa-shield-halved text-primario/80"></i>
                                <span>Garantía de confidencialidad en el tratamiento de tus datos de negocio.</span>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: FORMULARIO PRINCIPAL (lg:col-span-7) */}
                    <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative">
                        <div className="mb-8">
                            <span className="text-primario uppercase tracking-widest text-xs font-bold block mb-1">
                                Formulario de Evaluación
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-deepBlue">
                                Cuéntanos sobre tu negocio
                            </h3>
                            <p className="text-gray-500 font-light text-sm mt-1">
                                Completa el formulario para evaluar qué arquitectura digital se adapta mejor a tu meta comercial.
                            </p>
                        </div>
                        <ContactForm />
                    </div>

                </div>
            </section>
        </main>
    );
}