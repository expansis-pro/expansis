// src/pages/AboutMe.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageDesktop from '../img/Profile_Img_Expansis400x400.webp';

const AboutMe = () => {

    const personalLinks = [
        {
            href: 'https://gonzalobos.com/',
            icon: 'fa-solid fa-globe',
            text: 'gonzalobos.com'
        },
        {
            href: 'https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/',
            icon: 'fa-brands fa-linkedin',
            text: 'Perfil de LinkedIn'
        }
    ];

    return (
        <section id="aboutMe" className="bg-gray-50 py-66 sm:py-6 ">
            <div className="max-w-6xl mx-auto">
                <ImageTextCTA
                    imageDesktop={aboutImageDesktop}
                    alt="Foto de perfil de Gonzalo"
                    subtitle="Hola, Soy Gonzalo"
                    title="Sobre Mí"
                    // --- CAMBIO REALIZADO: Se añadieron etiquetas <strong> para resaltar texto ---
                    text={[
                        'Soy <strong>Ingeniero Comercial</strong> de la Universidad Adolfo Ibáñez, <strong>Fotógrafo Publicitario</strong> de Arcos con amplios conocimientos de <strong>desarrollo web</strong>.',
                        'Llevo más de <strong>4 años de experiencia</strong> en el mundo digital, especializado en <strong>comercio electrónico</strong> y guiar a empresas en su <strong>transformación digital</strong>.',
                        'Mi <strong>expertise integral</strong> abarca el <strong>desarrollo web</strong>, <strong>optimización UX/UI</strong> para mejorar la experiencia del usuario, <strong>estrategias de marketing digital</strong>, <strong>posicionamiento SEO</strong> para aumentar la visibilidad, y el <strong>análisis de datos</strong> para la toma de decisiones informadas.',
                        'Esta combinación única me permite ser un <strong>soporte vital en tu estrategia digital</strong>, aportando una <strong>visión completa y soluciones prácticas</strong>.'
                    ]}
                    imageSide="right"
                    links={personalLinks}
                />
            </div>
        </section>
    );
};

export default AboutMe;