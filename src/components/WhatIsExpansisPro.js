import React from 'react';
import ImageTextCTA from './ImageTextCTA';

const WhatIsExpansisPro = () => {
    return (
        <section id="what-is-expansis-pro" className="py-6 sm:py-6">
            <div className="max-w-6xl mx-auto text-center">
                <ImageTextCTA
                    imageDesktop="/assets/images/expansisPro_aboutus.webp"
                    alt="Consultoría estratégica y diseño de ecosistemas digitales en Expansis Pro"
                    subtitle="La razón de ser de Expansis Pro"
                    title="El Propósito al Centro"
                    text={[
                        '<strong>Expansis Pro es un espacio que aspira a devolver el propósito a las organizaciones para usarlo como hoja de ruta definitiva para los procesos de transformación digital.</strong>',
                        'Estamos inmersos en un contexto donde la vertiginosidad del avance tecnológico nos fuerza a centrarnos en el día a día antes que en el plan de largo plazo. Por eso, antes de tirar una sola línea de código o activar una campaña digital, alineamos tu ecosistema con la verdadera visión de tu marca.',
                        'Con esta base clara, construimos infraestructura digital robusta, donde cada arista tiene una razón de ser. Somos el socio tecnológico que acompaña la expansión de tu empresa con coherencia, impacto económico real y valor sostenible.'
                    ]}
                    imageSide="right"
                    buttonContent="Conversemos por WhatsApp"
                    buttonLink="https://wa.me/56988318443?text=Hola%20Expansis%20Pro%2C%20me%20interesa%20cotizar%20un%20ecosistema%20digital%20integral"
                    buttonVariant="primary"
                    secondaryButtonContent="Formulario de Contacto"
                    secondaryButtonLink="/contacto"
                    secondaryButtonVariant="outline"
                />
            </div>
        </section>
    );
};

export default WhatIsExpansisPro;