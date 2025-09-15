// src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = ({ title, description }) => { // <-- Acepta props
    const phoneNumber = "56965961086";
    const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section id="call-to-action" className=" py-6 sm:py-6">
            <div className="max-w-4xl mx-auto text-center p-6 sm:p-12 rounded-xl shadow-2xl border-t-4 border-primario">
                {/* --- AHORA USA PROPS O VALORES POR DEFECTO --- */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {title || '¿Listo para expandir tu negocio?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-light">
                    {description || 'Hablemos de tu proyecto. Elige la opción que más te acomode.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contacto"
                        className="inline-block w-full sm:w-auto bg-primario text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105 text-center"
                    >
                        <i className="fa-solid fa-envelope mr-2"></i>
                        Escríbenos un Mensaje
                    </Link>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                        <i className="fa-brands fa-whatsapp mr-2"></i>
                        Chatea por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;