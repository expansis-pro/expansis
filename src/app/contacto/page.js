'use client';

import React from 'react';
import SecondaryHero from '@/components/SecondaryHero';
import ContactForm from '@/components/ContactForm';
import { trackWhatsAppClick } from '@/utils/trackingUtils';

export default function ContactPage() {
    const email = "info@expansispro.com";
    const subject = encodeURIComponent("Consulta sobre Proyecto Digital - Expansis Pro");
    const body = encodeURIComponent("Hola equipo de Expansis Pro,\n\nMe pongo en contacto con ustedes porque estoy interesado en potenciar mi negocio digital.\n\nMis datos son:\n- Nombre:\n- Empresa:\n- Teléfono:\n\nQuedo atento a su respuesta.");

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    return (
        <main className="min-h-screen">
            <SecondaryHero
                title="Hablemos de tu Proyecto"
                subtitle="Estamos aquí para escucharte. Cuéntanos tus desafíos y diseñemos juntos el camino hacia tu expansión digital."
                icon="fa-solid fa-paper-plane"
                img="/assets/images/hero-contact.webp"
            />

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-left mb-6">Canales Directos</h2>
                            <p className="text-gray-600 font-light mb-8">
                                Si prefieres una comunicación más rápida, puedes escribirnos directamente por WhatsApp o enviarnos un correo electrónico.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primario/10 rounded-full flex items-center justify-center text-primario">
                                        <i className="fa-brands fa-whatsapp text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">WhatsApp</p>
                                        <button
                                            onClick={() => trackWhatsAppClick('contact_page_channels', 'Información General')}
                                            className="text-deepBlue text-lg hover:text-primario transition-colors font-medium text-left block cursor-pointer"
                                        >
                                            +56 9 88318443
                                        </button>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primario/10 rounded-full flex items-center justify-center text-primario">
                                        <i className="fa-solid fa-envelope text-xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Email</p>
                                        <a href={mailtoLink} className="text-deepBlue text-lg hover:text-primario transition-colors font-medium">
                                            info@expansispro.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl border border-gray-100 inline-block">
                            <p className="text-deepBlue font-semibold mb-1">Horario de Atención</p>
                            <p className="text-gray-600 font-light text-sm">Lunes a Viernes: 9:00 - 22:00 hrs.</p>
                            <p className="text-gray-600 font-light text-sm">Sábado y Domingo: 10:00 - 22:00 hrs.</p>
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-gray-50 bg-white">
                        <h3 className="text-deepBlue mb-8">Envíanos un mensaje</h3>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}