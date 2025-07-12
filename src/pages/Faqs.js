// src/pages/Faqs.js
import React, { useState } from 'react';
import FaqItem from '../components/FaqItem';

const Faqs = () => {
    // Lista de FAQs reescrita para generar confianza y resolver dudas de conversión.
    const faqsData = [
        {
            question: "¿Cuánto cuesta un sitio web y cómo se estructura el pago?",
            answer: (
                <div className="space-y-4">
                    <p>
                        Entendemos que el precio es un factor clave. Para ser transparentes, nuestros proyectos suelen empezar en los siguientes rangos:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Landing Page de Alta Conversión:</strong> Desde $250.000 CLP.</li>
                        <li><strong>Sitio Web Corporativo Profesional (hasta 5 págs):</strong> Generalmente entre $450.000 y $800.000 CLP.</li>
                        <li><strong>Tienda Online (E-commerce):</strong> Proyectos iniciales desde $700.000 CLP.</li>
                    </ul>
                    <p>
                        El pago se estructura en dos partes: un 50% para iniciar el proyecto y el 50% restante al finalizar, justo antes de la entrega y lanzamiento del sitio.
                    </p>
                </div>
            ),
        },
        {
            question: "¿Construyen los sitios con WordPress o usan otra plataforma?",
            answer: (
                <div className="space-y-4">
                    <p>
                        Es una pregunta muy importante. No utilizamos plantillas de WordPress. Construimos nuestros sitios web a medida utilizando tecnologías modernas como React, la misma tecnología que usan empresas como Facebook, Netflix y Airbnb.
                    </p>
                    <p>
                        Elegimos este camino por cuatro razones clave que benefician directamente a tu negocio:
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-medium text-gray-800">
                        <li>
                            <strong>Rendimiento Superior:</strong> Los sitios a medida son significativamente más rápidos y fluidos. Esto no solo mejora la experiencia de tus visitantes, sino que también es un factor crucial para un buen posicionamiento en Google.
                        </li>
                        <li>
                            <strong>Seguridad Reforzada:</strong> Al no depender de un ecosistema de plugins de terceros (que son el principal punto de vulnerabilidad de WordPress), nuestros sitios son mucho más seguros contra ataques.
                        </li>
                        <li>
                            <strong>Personalización Total:</strong> No estamos limitados por ninguna plantilla. Podemos diseñar y construir cualquier funcionalidad que tu negocio necesite, creando una experiencia única para tus clientes y asegurando que el sitio pueda crecer junto a tu empresa.
                        </li>
                        <li>
                            <strong>Menor Mantenimiento:</strong> Te olvidas de las constantes y a veces problemáticas actualizaciones de plugins y temas. El mantenimiento es más sencillo y controlado.
                        </li>
                    </ul>
                    <p>
                        En resumen, mientras que WordPress puede ser útil para blogs sencillos, nosotros nos especializamos en crear activos digitales de alto rendimiento, diseñados para ser rápidos, seguros y perfectamente adaptados a tus objetivos.
                    </p>
                </div>
            )
        },
        {
            question: "¿Qué pasa si no me gusta la propuesta de diseño?",
            answer: (
                <p>
                    Tu satisfacción es nuestra prioridad. Nuestro proceso incluye una fase de diseño inicial donde te presentamos una maqueta visual (mockup). Sobre esta propuesta trabajamos juntos y realizamos hasta dos rondas de revisiones y ajustes importantes para asegurarnos de que el diseño se alinee perfectamente con tu visión antes de escribir una sola línea de código.
                </p>
            ),
        },
        {
            question: "¿Cuánto tiempo se demoran en entregar el sitio web?",
            answer: (
                <p>
                    Un proyecto de sitio web corporativo estándar toma habitualmente entre 3 y 5 semanas desde que recibimos todo el material necesario (textos, logos, imágenes). Una Landing Page puede estar lista en 1 a 2 semanas. Los tiempos pueden variar según la complejidad del proyecto, pero siempre estableceremos un cronograma claro y detallado desde el inicio.
                </p>
            ),
        },
        {
            question: "¿Seré dueño de mi sitio web una vez terminado el proyecto?",
            answer: (
                <p>
                    Absolutamente. Una vez completado el pago final, te entregamos el 100% de los archivos y el acceso completo a tu sitio web y hosting. No utilizamos plantillas restrictivas ni te atamos a contratos de permanencia. Creemos en empoderar a nuestros clientes, no en retenerlos.
                </p>
            ),
        },
        {
            question: "¿Qué soporte ofrecen después de que el sitio está online?",
            answer: (
                <p>
                    Todos nuestros proyectos incluyen 30 días de soporte gratuito post-lanzamiento para corregir cualquier error o problema técnico que pueda surgir. Adicionalmente, te ofrecemos planes de mantenimiento mensual opcionales para que no te preocupes de actualizaciones, seguridad y respaldos, permitiéndote enfocarte 100% en tu negocio.
                </p>
            ),
        }, {
            question: "¿Qué necesito entregarles para empezar el proyecto?",
            answer: (
                <p>Para iniciar, generalmente necesitamos tu logo en alta calidad, los textos e imágenes que te gustaría incluir, y acceso a tu proveedor de hosting y dominio si ya los tienes. ¡Si no, te asesoramos en cada paso!
                </p>
            ),

        }, {
            question: "¿El servicio incluye el hosting (alojamiento) y el dominio?",
            answer: (
                <p>El hosting y el dominio son servicios que debes contratar por separado, ya que es fundamental que seas el dueño de estos activos. Sin embargo, te guiamos y recomendamos las mejores opciones del mercado, e incluso podemos gestionar la configuración inicial por ti si lo necesitas.
                </p>
            ),
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // --- SEO: Datos Estructurados para FAQPage ---
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                // Nota: Schema.org prefiere texto plano. React renderiza el JSX a HTML.
                // Para una implementación perfecta, la respuesta debería ser texto o HTML simple.
                // Esta implementación es un excelente primer paso.
                "text": typeof faq.answer === 'string'
                    ? faq.answer
                    : "Visita nuestra web para ver la respuesta detallada." // Fallback simple
            }
        }))
    };


    return (
        <section id="faqs" className="bg-white py-66 sm:py-6 px-4 sm:px-6 lg:px-8">

            {/* --- SEO: Script de Datos Estructurados --- */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>


            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-12 fade-in">
                    Dudas Frecuentes
                </h2>

                <div className="space-y-4">
                    {faqsData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;