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
                text={['Soy un profesional con más de 4 años de experiencia en el mundo digital, especializado en impulsar el éxito de proyectos de comercio electrónico y guiar a empresas en su transformación digital. Mi enfoque se centra en crear soluciones personalizadas y efectivas que generan resultados tangibles', 'Mi expertise integral abarca el desarrollo web (con dominio en HTML, CSS y JavaScript), optimización UX/UI para mejorar la experiencia del usuario, estrategias de marketing digital y posicionamiento SEO para aumentar la visibilidad, y el análisis de datos para la toma de decisiones informadas.', 'Como Ingeniero Comercial de la Universidad Adolfo Ibáñez y Fotógrafo Publicitario de Arcos, poseo una sólida base tanto en gestión empresarial como en la creación de contenido visual atractivo. Esta combinación única me permite ser un soporte vital en tu estrategia digital, aportando una visión completa y soluciones prácticas.']} />
        </section>
    );
};

export default About;