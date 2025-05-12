// src/pages/About.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageMobile from '../img/Profile_Img_Expansis400x400.webp';
import aboutImageDesktop from '../img/Profile_Img_Expansis400x400.webp';



const About = () => {
    return (
        <section id="aboutMe" className='section about'>

            <ImageTextCTA
                imageMobile={aboutImageMobile}
                imageDesktop={aboutImageDesktop}
                subtitle="Hola, Soy Gonzalo"
                title="SobreMi"
                text={['Soy Ingeniero Comercial de la Universidad Adolfo Ibáñez, Fotógrafo Publicitario de Arcos con amplios conocimientos de desarrollo web.', 'Llevo más de 4 años de experiencia en el mundo digital, especializado en comercio electrónico y guiar a empresas en su transformación digital.', 'Mi expertise integral abarca el desarrollo web, optimización UX/UI para mejorar la experiencia del usuario, estrategias de marketing digital, posicionamiento SEO para aumentar la visibilidad, y el análisis de datos para la toma de decisiones informadas.', 'Esta combinación única me permite ser un soporte vital en tu estrategia digital, aportando una visión completa y soluciones prácticas.']} />
        </section>
    );
};

export default About;