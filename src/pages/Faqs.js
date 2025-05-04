import React, { useState } from 'react';
import FaqItem from '../components/FaqItem';

const Faqs = () => {
    const faqsData = [
        {
            question: "¿Qué es Expansis Pro y qué servicios ofrece?",
            answer: (
                <p>
                    Expansis Pro impulsa el éxito digital de las empresas, ofreciendo desarrollo web, consultoría digital y marketing online. Proporcionamos soluciones personalizadas que permiten a tu negocio conectar con nuevas oportunidades y alcanzar su máximo potencial. Nos enfocamos en la tecnología y la innovación para brindar un servicio de alto valor, siendo un aliado estratégico en el crecimiento de las empresas.
                </p>
            ),
        },
        {
            question: "¿Cuál es la misión y visión de Expansis Pro?",
            answer: (
                <div>
                    <p>
                        Misión: Potenciar el éxito de nuestros clientes a través de soluciones tecnológicas innovadoras y personalizadas.
                    </p>
                    <p>
                        Visión: Ser líderes en el mercado de soluciones digitales, reconocidos por nuestra excelencia, compromiso y capacidad de generar un impacto positivo en nuestros clientes.
                    </p>
                </div>
            ),
        },
        {
            question: "¿Qué tipos de sitios web desarrolla Expansis Pro? (ej., corporativos, ecommerce, blogs)",
            answer: (
                <p>
                    Expansis Pro desarrolla una amplia variedad de sitios web, adaptándonos a las necesidades específicas de cada cliente. Entre los tipos de sitios web que creamos se incluyen: sitios web corporativos, sitios web de ecommerce, blogs y sitios web a medida. Nos enfocamos en crear sitios web que no solo sean visualmente atractivos, sino también funcionales, fáciles de usar y optimizados para alcanzar tus objetivos de negocio.
                </p>
            ),
        },
        {
            question: "¿Cómo puedo contactar a Expansis Pro para obtener más información o solicitar un presupuesto?",
            answer: (
                <p>
                    Puedes contactar a Expansis Pro de varias maneras: a través del formulario de contacto en nuestro sitio web, por WhatsApp, por correo electrónico a [insertar correo electrónico de Expansis Pro] o por teléfono al [insertar número de teléfono de Expansis Pro]. Estaremos encantados de atenderte, resolver tus dudas y proporcionarte un presupuesto personalizado sin compromiso.
                </p>
            ),
        },
        {
            question: "¿Expansis Pro ofrece servicios de rediseño de sitios web existentes?",
            answer: (
                <p>
                    Sí, Expansis Pro ofrece servicios de rediseño de sitios web existentes. Nuestros servicios de rediseño incluyen: actualización del diseño visual, mejora de la experiencia de usuario (UX/UI), adaptación a dispositivos móviles (responsive design), optimización del rendimiento e implementación de nuevas funcionalidades. Un rediseño puede darle un nuevo impulso a tu presencia online y ayudarte a alcanzar tus metas de negocio.
                </p>
            ),
        },
        {
            question: "¿En qué consiste el servicio de consultoría digital de Expansis Pro?",
            answer: (
                <p>
                    El servicio de consultoría digital de Expansis Pro consiste en asesorar a las empresas y profesionales en su estrategia digital para alcanzar sus objetivos de negocio. Ayudamos a las empresas y profesionales a definir sus objetivos digitales, identificar oportunidades, desarrollar una estrategia digital y optimizar sus procesos digitales. Nuestra consultoría se adapta a las necesidades específicas de cada empresa.
                </p>
            ),
        },
        {
            question: "¿Expansis Pro ayuda a definir la estrategia digital de una empresa desde cero?",
            answer: (
                <p>
                    Sí, Expansis Pro ayuda a definir la estrategia digital de una empresa desde cero. Nuestro enfoque incluye: análisis inicial, definición de objetivos, investigación de mercado y competencia, desarrollo de la estrategia y planificación y cronograma. Te proporcionaremos una hoja de ruta clara y efectiva para construir tu presencia online y alcanzar el éxito digital.
                </p>
            ),
        },
        {
            question: "¿Qué estrategias de marketing online implementa Expansis Pro? (ej., SEO, SEM, redes sociales, email marketing)",
            answer: (
                <p>
                    Expansis Pro implementa una variedad de estrategias de marketing online, incluyendo: posicionamiento web (SEO), publicidad en motores de búsqueda (SEM), marketing en redes sociales, email marketing, marketing de contenidos y analítica web. Utilizamos un enfoque integral y personalizado, adaptando las estrategias a las necesidades y objetivos específicos de cada cliente.
                </p>
            ),
        },
        {
            question: "¿Cómo puede el marketing online aumentar la visibilidad de mi empresa?",
            answer: (
                <p>
                    El marketing online puede aumentar la visibilidad de tu empresa a través de la mejora del posicionamiento en buscadores, la presencia en redes sociales, la publicidad online, el marketing de contenidos y el email marketing. En resumen, el marketing online permite que tu empresa llegue a más personas, en el momento adecuado y con el mensaje correcto, aumentando así su visibilidad y alcance.
                </p>
            ),
        },
        {
            question: "¿Cómo mejora Expansis Pro el posicionamiento web de un sitio?",
            answer: (
                <p>
                    Expansis Pro mejora el posicionamiento web de un sitio a través de una combinación de estrategias y técnicas de SEO (Search Engine Optimization), incluyendo SEO On-Page, SEO Off-Page y SEO Técnico. Nuestro objetivo es mejorar la visibilidad orgánica de tu sitio web en los motores de búsqueda, atrayendo tráfico de calidad y aumentando tus conversiones.
                </p>
            ),
        },
        {
            question: "¿Cuánto cuesta desarrollar un sitio web con Expansis Pro?",
            answer: (
                <p>
                    El costo de desarrollar un sitio web con Expansis Pro varía dependiendo de varios factores, incluyendo: tipo de sitio web, funcionalidades requeridas, diseño personalizado, cantidad de contenido y complejidad del proyecto. Para obtener un presupuesto preciso y personalizado, te recomendamos que te pongas en contacto con nosotros y nos proporciones los detalles de tu proyecto.
                </p>
            ),
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section id="faqs" className="faqs section">
            <h2 className="fade-in">Preguntas Frecuentes</h2>
            {faqsData.map((faq, index) => (
                <FaqItem key={index}
                    index={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={handleToggle} />
            ))}
        </section>
    );
};

export default Faqs;