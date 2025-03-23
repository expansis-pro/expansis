// src/pages/About.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutImageMobile from '../img/Profile_Img_Expansis400x400.jpg';
import aboutImageDesktop from '../img/Profile_Img_Expansis400x400.jpg';



const About = () => {
    return (
        <section id="aboutMe" className='section about'>
            <h1 className='fade-in'>Sobre Mi</h1>
            <ImageTextCTA
                imageMobile={aboutImageMobile}
                imageDesktop={aboutImageDesktop}
                title="SobreMi"
                text={['Hola, soy Gonzalo.', 'Soy un profesional con más de 3 años de experiencia en el mundo digital, combinando mi formación en Ingeniería Comercial con un fuerte enfoque técnico.', 'Mi expertise abarca desde el desarrollo web (HTML, CSS, JavaScript) y la optimización UX/UI, hasta el marketing digital, el posicionamiento SEO y el análisis de datos.', 'Lidero proyectos de ecommerce y acompaño a mis clientes en su transformación digital, creando soluciones personalizadas y efectivas.']} />
        </section >
    );
};

export default About;