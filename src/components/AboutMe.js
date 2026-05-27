// src/pages/AboutMe.jsx
import React from 'react';
import ImageTextCTA from '../components/ImageTextCTA';
// Asumimos que volviste a nombrarla con las medidas originales o usas la base en public/images/
const aboutMeImage = "/images/Profile_Img_Expansis.webp";

const AboutMe = () => {

    return (
        <section id="aboutMe" className="w-full section-padding overflow-hidden">
            <div className="container-pro">

                {/* ========================================================================= */}
                {/* 🛠️ CIRUGÍA DE CSS MEDIANTE INYECCIÓN DE CLASES (Override)                */}
                {/* ========================================================================= */}
                {/* Usamos un div contenedor para aplicar clases con !important o mayor especificidad */}


                <ImageTextCTA
                    imageDesktop={aboutMeImage}
                    alt="Foto de perfil de Gonzalo Lobos, fundador de Expansis Pro"
                    subtitle="Soy Gonzalo | Fundador de Expansis Pro"
                    title="Detrás de Expansis Pro"
                    text={[
                        '<strong>Ingeniero Comercial con Máster en Psicología Organizacional de la Universidad Adolfo Ibáñez, Fotógrafo Publicitario del Instituto ARCOS y, por profunda vocación, un desarrollador autodidacta.</strong>',
                        'Esta combinación me otorga un perfil híbrido atípico en el mercado: entiendo las métricas de rentabilidad, la viabilidad financiera y el comportamiento del consumidor, pero también la importancia del propósito organizacional y el valor de un buen relato visual. Todo esto lo respaldo con el criterio técnico y la disciplina necesarios para estructurar software robusto.',
                        'En Expansis Pro, aplico esta mentalidad técnica, creativa y analítica para convertirme en el socio que te ayuda a construir una presencia digital sólida, coherente y estructurada para crecer.'
                    ]}
                    imageSide="right"
                    imageShape="square"
                    buttonContent="Conversemos por WhatsApp"
                    buttonLink="https://wa.me/56988318443?text=Hola%20Gonzalo%2C%20vi%20tu%20perfil%20en%20la%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n"
                    buttonVariant="primary"

                    // 🛠️ INTEGRACIÓN DE ENLACES EXTERNOS SEGUROS EN NUEVA PESTAÑA
                    showLinkedIn={true}
                    showPersonalWeb={true}
                />


                {/* --- BLOQUE DE ENLACES COMPLEMENTARIOS --- */}
                {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 border-t border-gray-100 pt-8 max-w-6xl mx-auto">
                    <span className="text-gray-400 font-light text-sm uppercase tracking-widest">
                        Conectemos en canales oficiales:
                    </span>
                    <div className="flex items-center gap-6">
                        <a href="https://gonzalobos.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-deepBlue hover:text-primario transition-colors font-medium text-sm">
                            <i className="fa-solid fa-globe text-primario"></i>
                            gonzalobos.com
                        </a>
                        <a href="https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-deepBlue hover:text-primario transition-colors font-medium text-sm">
                            <i className="fa-brands fa-linkedin text-primario text-base"></i>
                            Perfil de LinkedIn
                        </a>
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default AboutMe;