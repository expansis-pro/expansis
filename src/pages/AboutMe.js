// src/pages/AboutMe.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
import aboutMeImage from '../img/Profile_Img_Expansis400x400.webp';

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
        <section id="aboutMe" className="py-6 sm:py-6 ">
            <div className="max-w-6xl mx-auto">
                <ImageTextCTA
                    imageDesktop={aboutMeImage}
                    alt="Foto de perfil de Gonzalo"
                    subtitle="Soy Gonzalo | Fundador de Expansis Pro."
                    title="Detrás de Expansis Pro"
                    // --- FRASES CLAVE EN NEGRITA ---
                    text={[
                        'Soy Ingeniero Comercial, Fotógrafo y, por vocación, un <strong>desarrollador autodidacta</strong>. Mi motor es una <strong>curiosidad insaciable</strong>; siempre estoy explorando algo nuevo, porque creo que el aprendizaje nunca termina. Esa misma pasión es la que me llevó a enamorarme de la <strong>programación</strong>: el desafío de construir algo funcional y elegante desde cero.',
                        'Mis gustos siempre están cambiando y expandiéndose. Un día puedo estar escuchando a Kidd Voodoo y al siguiente, volver a los clásicos como Led Zeppelin. Esta <strong>dualidad define mi enfoque profesional</strong>: entiendo la velocidad de las <strong>tendencias actuales</strong>, pero construyo sobre <strong>bases sólidas y estrategias que perduran</strong>.',
                        'Esta mezcla de <strong>disciplina, creatividad y aprendizaje constante</strong> es el corazón de Expansis Pro. La aplico en cada estrategia de <strong>marketing</strong>, cada línea de <strong>código</strong> y cada análisis de <strong>datos</strong>, con un solo objetivo: ser el socio que te ayuda a construir una <strong>presencia digital sólida, coherente y, sobre todo, auténtica</strong>.'
                    ]}
                    imageSide="right"
                    links={personalLinks}
                />
            </div>
        </section>
    );
};

export default AboutMe;