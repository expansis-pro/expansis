// src/pages/AboutMe.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageDesktop from '../img/Profile_Img_Expansis400x400.webp';

const AboutMe = () => {

    // 1. Definimos los enlaces que queremos mostrar
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
        <section id="aboutMe" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <ImageTextCTA
                    imageDesktop={aboutImageDesktop}
                    alt="Foto de perfil de Gonzalo"
                    subtitle="Hola, Soy Gonzalo"
                    title="Sobre Mí"
                    text={[
                        'Soy Ingeniero Comercial de la Universidad Adolfo Ibáñez, Fotógrafo Publicitario de Arcos con amplios conocimientos de desarrollo web.',
                        'Llevo más de 4 años de experiencia en el mundo digital, especializado en comercio electrónico y guiar a empresas en su transformación digital.',
                        'Mi expertise integral abarca el desarrollo web, optimización UX/UI para mejorar la experiencia del usuario, estrategias de marketing digital, posicionamiento SEO para aumentar la visibilidad, y el análisis de datos para la toma de decisiones informadas.',
                        'Esta combinación única me permite ser un soporte vital en tu estrategia digital, aportando una visión completa y soluciones prácticas.'
                    ]}
                    imageSide="right"
                    // 2. Pasamos los enlaces al componente a través de la nueva prop 'links'
                    links={personalLinks}
                />
            </div>
        </section>
    );
};

export default AboutMe;