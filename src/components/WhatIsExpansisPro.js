// src/components/WhatIsExpansisPro.js
import React from 'react';
import ImageTextCTA from './ImageTextCTA';
import aboutImageDesktop from '../img/img-expansis-quienes-somos-630x630.webp';
import aboutImageMobile from '../img/img-expansis-quienes-somos-400x200.webp';

const WhatIsExpansisPro = () => {
    return (
        <section id="what-is-expansis-pro" className=" py-6 sm:py-6">
            <div className="max-w-6xl mx-auto text-center">

                <ImageTextCTA
                    imageMobile={aboutImageMobile}
                    imageDesktop={aboutImageDesktop}
                    alt="Personas colaborando en una estrategia digital"
                    title="Tu Aliado Estratégico en el Mundo Digital"
                    text={[
                        '<p class="text-lg text-primario font-semibold">Somos tu socio estratégico. Construimos el canal digital a medida que tu negocio necesita para crecer y vender más.</p>',
                        'Todo comenzó con una pregunta: ¿cómo podemos hacer que lo digital se sienta más humano? Veíamos proyectos que funcionaban, pero no conectaban. Faltaba una visión integral, una estrategia que uniera la tecnología con el propósito real de un negocio.',
                        'Expansis Pro nació de esa idea. No somos una agencia que entrega soluciones en serie; <strong>somos un socio que se involucra en tu proyecto</strong>. Nos apasiona construir desde la base, entendiendo tu visión para crear un canal digital que no solo sea atractivo y funcional, sino que también genere un impacto positivo, tanto para tu crecimiento económico como para el valor que entregas a la comunidad.',
                        'Más que un servicio, es una colaboración para llevar tu proyecto a donde merece estar.'
                    ]}
                // buttonContent="Nuestros servicios"
                // buttonLink="/servicios"
                />
            </div>
        </section>
    );
};

export default WhatIsExpansisPro;