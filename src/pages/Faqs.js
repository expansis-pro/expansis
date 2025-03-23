import React from 'react';
import FaqItem from '../components/FaqItem';

const Faqs = () => {
    const faqsData = [
        {
            question: "¿Cuánto tiempo tarda en desarrollarse un sitio web a medida?",
            answer: <p>El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar de 4 a 6 semanas, mientras que un proyecto más complejo puede tomar varios meses.</p>,
        },
        {
            question: "¿Qué tecnologías utilizan para el desarrollo web?",
            answer: <p>React nos permite crear interfaces de usuario rápidas, dinámicas e interactivas, lo que se traduce en una mejor experiencia para tus usuarios. Firebase nos proporciona una plataforma completa y segura para desarrollar aplicaciones web escalables y eficientes.</p>,
        },
        {
            question: "¿Qué tipo de integraciones ofrecen para los sitios web?",
            answer: (
                <div>
                    <p>Integramos tu sitio web con una variedad de plataformas y herramientas para optimizar tus procesos y ayudarte a alcanzar tus objetivos de negocio. Algunos ejemplos de integraciones comunes incluyen:</p>
                    <ul>
                        <li>Pasarelas de pago seguras para facilitar las transacciones online.</li>
                        <li>Redes sociales para ampliar tu alcance y conectar con tu audiencia.</li>
                        <li>Herramientas de email marketing para automatizar tus comunicaciones.</li>
                        <li>Plataformas de análisis web para obtener información valiosa sobre el comportamiento de tus usuarios.</li>
                        <li>Sistemas de gestión de relaciones con los clientes (CRM) para mejorar la atención al cliente.</li>
                    </ul>
                    <p>Nos aseguramos de que tu sitio web se integre con las herramientas que necesitas para que puedas gestionar tu negocio de forma eficiente.</p>
                </div>
            ),
        },
    ];

    return (
        <section id="faqs" className="faqs section">
            <h1 className="fade-in">Preguntas Frecuentes</h1>
            {faqsData.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </section>
    );
};

export default Faqs;