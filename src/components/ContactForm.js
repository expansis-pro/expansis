// src/components/ContactForm.js
import React from 'react';

const ContactForm = () => {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Nombre</label>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-deepBlue mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Asunto</label>
                <input
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-deepBlue mb-2">Mensaje</label>
                <textarea
                    rows="4"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primario focus:ring-1 focus:ring-primario outline-none transition-all font-light resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-primario text-ghostWhite font-medium py-4 rounded-xl shadow-lg hover:brightness-110 transition-all transform hover:scale-[1.02]"
            >
                Enviar Mensaje
            </button>
        </form>
    );
};

export default ContactForm;