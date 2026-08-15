import React from 'react';

const SocialProof = () => {
    const instagramUrl = "https://www.instagram.com/expansispro/";

    return (
        <section id="social-proof" className="py-6 sm:py-6">
            <div className="max-w-4xl mx-auto text-center p-6 sm:p-12">
                <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4">
                    Conéctate con Nosotros en Instagram
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-light max-w-2xl mx-auto">
                    Descubre nuestros últimos proyectos, consejos de marketing y el día a día de Expansis Pro.
                </p>

                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                    <i className="fa-brands fa-instagram mr-2"></i>
                    Seguir en @expansispro
                </a>
            </div>
        </section>
    );
};

export default SocialProof;