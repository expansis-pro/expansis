// app/contacto/page.js


import React from 'react';
import SecondaryHero from '@/components/SecondaryHero';
import ContactForm from '@/components/ContactForm';
import { contactData } from '@/data/contactConfig';
import { buildMetadata } from '@/lib/seo';



export const metadata = buildMetadata({
    title: 'Contacto y Diagnóstico de Proyecto Web',
    description:
        'Cuéntanos tu proyecto: revisamos tu caso en menos de 24 horas hábiles y te proponemos arquitectura, plazos e inversión. Santiago, Chile.',
    path: '/contacto',
});

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


            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] border-t border-white/10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* COLUMNA IZQUIERDA: DIAGNÓSTICO Y DATOS INSTITUCIONALES (lg:col-span-5) */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <span className="text-primario uppercase tracking-widest text-xs font-bold block mb-2 font-mono">
                                [ METODOLOGÍA DE INICIO ]
                            </span>
                            <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                                ¿Qué ocurre tras enviar tu solicitud?
                            </h2>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                No agendamos reuniones genéricas de venta. Antes de reunirnos, auditamos tu caso para llegar a la primera sesión con propuestas técnicas concretas.
                            </p>
                        </div>

                        {/* PASOS DE LA SESIÓN DE DIAGNÓSTICO */}
                        <div className="space-y-4">
                            {diagnosisSteps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 items-start bg-[#0f1420] p-5 border border-white/10">
                                    <div className="w-10 h-10 bg-primario/10 border border-primario/30 text-primario flex items-center justify-center font-mono font-bold text-sm shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CANALES FORMALES Y COBERTURA */}
                        <div className="bg-[#0f1420] p-6 border border-white/10 space-y-4">
                            <h3 className="text-xs uppercase tracking-widest font-mono text-zinc-300">
                                Cobertura & Canales Institucionales
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-3 text-zinc-400 font-light">
                                    <i className="fa-solid fa-location-dot text-primario text-base shrink-0 w-5 text-center"></i>
                                    <span>Santiago de Chile &bull; Cobertura nacional e internacional</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-400 font-light">
                                    <i className="fa-solid fa-envelope text-primario text-base shrink-0 w-5 text-center"></i>
                                    <a href={mailtoLink} className="hover:text-primario transition-colors break-all">
                                        {email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-400 font-light">
                                    <i className="fa-solid fa-clock text-primario text-base shrink-0 w-5 text-center"></i>
                                    <span>Lunes a Viernes: 09:00 - 19:00 hrs.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: FORMULARIO PRINCIPAL (lg:col-span-7) */}
                    <div className="lg:col-span-7 bg-[#0f1420] p-8 md:p-12 border border-white/15 relative">
                        <div className="mb-8">
                            <span className="text-primario uppercase tracking-widest text-xs font-mono block mb-1">
                                [ FORMULARIO DE EVALUACIÓN ]
                            </span>
                            <h3 className="text-2xl md:text-3xl font-light text-white">
                                Cuéntanos sobre tu negocio
                            </h3>
                            <p className="text-zinc-400 font-light text-sm mt-1">
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