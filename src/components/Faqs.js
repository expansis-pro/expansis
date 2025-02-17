import React, { useState } from 'react';


const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-section">
            <h4>Preguntas Frecuentes</h4>
            <div className="faq-item" >
                <h5>¿Cuánto tiempo tarda en desarrollarse un sitio web a medida?</h5>
                <div className='fade-in' id="1">
                    <p>El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar de 4 a 6 semanas, mientras que un proyecto más complejo puede tomar varios meses.
                    </p>
                </div>

            </div>
            <div className="faq-item" >
                <h5 >¿Qué tecnologías utilizan para el desarrollo web?</h5>
                <div className='fade-in' id="2">
                    <p className='fade-in'>
                        React nos permite crear interfaces de usuario rápidas, dinámicas e interactivas, lo que se traduce en una mejor experiencia para tus usuarios. Firebase nos proporciona una plataforma completa y segura para desarrollar aplicaciones web escalables y eficientes.
                    </p>
                </div>

            </div>
            <div className="faq-item" >
                <h5 >¿Qué tipo de integraciones ofrecen para los sitios web?</h5>

                <div className='fade-in' id="3">
                    <p className='fade-in'>
                        Integramos tu sitio web con una variedad de plataformas y herramientas para optimizar tus procesos y ayudarte a alcanzar tus objetivos de negocio. Algunos ejemplos de integraciones comunes incluyen:
                    </p>
                    <ul className='fade-in'>
                        <li>Pasarelas de pago seguras para facilitar las transacciones online.</li>
                        <li>Redes sociales para ampliar tu alcance y conectar con tu audiencia.</li>
                        <li>Herramientas de email marketing para automatizar tus comunicaciones.</li>
                        <li>Plataformas de análisis web para obtener información valiosa sobre el comportamiento de tus usuarios.</li>
                        <li>Sistemas de gestión de relaciones con los clientes (CRM) para mejorar la atención al cliente.</li>
                    </ul>
                    <p className='fade-in'>
                        Nos aseguramos de que tu sitio web se integre con las herramientas que necesitas para que puedas gestionar tu negocio de forma eficiente.
                    </p>
                    <div />

                </div>
                {/* Puedes añadir más preguntas frecuentes aquí */}
            </div>
        </div>


    );
};

export default Faqs;