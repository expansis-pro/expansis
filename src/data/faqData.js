import React from 'react';

export const faqData = [
    {
        question: "¿Qué cubre exactamente el valor inicial de Desarrollo Web?",
        answerJSX: (
            <p className="text-justify">
                El valor inicial del servicio de Desarrollo Web representa nuestra <strong>Configuración Base Profesional</strong>.
                Cubre la estructura esencial de una Landing Page de alto rendimiento: diseño único (no plantillas),
                optimización de velocidad y conexión con WhatsApp. Proyectos que requieran múltiples secciones,
                sistemas de pagos o bases de datos se cotizan como módulos adicionales para que solo pagues por lo que realmente necesitas.
            </p>
        ),
        answerText: "El valor base del servicio de Desarrollo Web cubre la estructura esencial. Funcionalidades complejas se cotizan por separado.",
        tags: ["desarrollo-web"]
    },
    {
        question: "¿Qué incluye el valor inicial de la Consultoría Digital?",
        answerJSX: (
            <p className="text-justify">
                El valor inicial del servicio de Consultoría Digital cubre la fase de diagnóstico completo.
                Te entregamos un informe de auditoría profesional con los hallazgos sobre tu sitio web, redes y competencia,
                junto con una primera capa de recomendaciones estratégicas priorizadas para que sepas exactamente por dónde empezar a mejorar.
            </p>
        ),
        answerText: "El valor inicial del servicio de Consultoría Digital cubre la fase de diagnóstico completo y recomendaciones estratégicas.",
        tags: ["consultoria-digital"]
    },
    {
        question: "¿Qué incluye la inversión mensual en Marketing Online?",
        answerJSX: (
            <p className="text-justify">
                El valor mensual del servicio de Marketing Online corresponde a nuestros honorarios por la gestión estratégica y operativa de tus campañas en un canal principal (ej. Meta o Google Ads).
                Cubre todo el ciclo: desde la planificación y creación de anuncios hasta el monitoreo diario, la optimización y un reporte mensual de resultados para que veas el impacto de tu inversión.
            </p>
        ),
        answerText: "El valor mensual del servicio de Marketing Online corresponde a la gestión estratégica y operativa de campañas en un canal principal.",
        tags: ["marketing-online"]
    },
    {
        question: "¿Por qué los precios son 'desde'?",
        answerJSX: (
            <p className="text-justify">
                Nuestros precios son "desde" porque cada negocio tiene necesidades distintas y por lo tanto, las propuestas seran adaptadas a tu necesidades. En Expansis Pro ofrecemos un acompañamiento activopara que cada la propuesta de servicio se adapte a tus necesitades. El valor inicial te asegura una <strong>infreasetructura de alta calidad</strong>, y a partir de esta base podemos añadir más funcionalidades y escalar el proyecto según tus objetivos específicos evitando que pagues por herramientas o servicios que no vas a utilizar.
            </p>
        ),
        answerText: "Los precios son desde porque cada solución es personalizada y escalable según las necesidades del cliente.",
        tags: ["general"]
    },
    {
        question: "¿Cómo se gestiona el material gráfico (diseño) para las campañas?",
        answerJSX: (
            <div className="text-justify space-y-3">
                <p>
                    Para que una campaña sea rentable, el diseño debe responder a una estrategia de conversión. Por eso, nosotros <strong>gestionamos el ciclo completo de producción creativa</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Definición Estratégica:</strong> Analizamos qué mensajes y formatos (estáticos, reels, banners) necesita tu embudo de ventas para captar la atención.
                    </li>
                    <li>
                        <strong>Briefing al Equipo de Diseño:</strong> Traducimos la estrategia en requerimientos técnicos específicos para nuestra diseñadora, asegurando que cada pieza respete tu identidad y los estándares de cada plataforma.
                    </li>
                    <li>
                        <strong>Control de Calidad y Optimización:</strong> Supervisamos cada entrega y, lo más importante, <strong>ajustamos las piezas según los resultados</strong>. Si un anuncio no rinde, solicitamos variaciones para mejorar el CTR y el costo por lead.
                    </li>
                </ul>
                <p className="text-sm italic border-l-2 border-primario pl-3">
                    Tú no tienes que preocuparte por medidas técnicas ni por dar feedback estético constante; nosotros nos encargamos de que el material esté listo, sea profesional y, sobre todo, venda.
                </p>
            </div>
        ),
        answerText: "Gestionamos el ciclo completo de diseño para campañas: desde la definición estratégica y el briefing al equipo creativo, hasta la optimización de piezas según los resultados de conversión. Todo centralizado en nuestra gestión.",
        tags: ["marketing-online", "performance", "gestión"]
    }, {
        question: "¿Que pasa si no tengo logo o colores definidos de mi marca?",
        answerJSX: (<div className="text-justify space-y-3">
            <p>
                <strong>No necesitas tener nada listo para empezar.</strong> Es muy común que negocios con gran trayectoria no tengan una identidad digital definida; nosotros nos encargamos de construir esa base.
            </p>
            <p>
                <strong>Dependiendo de las necesidades de tu proyecto</strong>, nuestro equipo de diseño se integra desde la fase de descubrimiento para definir colores, tipografías y el estilo visual que proyecte tu autoridad. Nosotros lideramos la dirección creativa para asegurar que la estética sea coherente con la robustez técnica de la plataforma.
            </p>
            <p className="text-sm italic border-l-2 border-primario pl-3 font-medium">
                Todo se centraliza en una sola gestión y facturación mensual. Así, tú obtienes un resultado profesional de punta a punta sin la fricción de coordinar a diferentes proveedores.
            </p>
        </div>),
        answerText: "Colaboramos con una diseñadora gráfica profesional. El costo se cotiza por separado y se incluye en la facturación mensual para simplificar la gestión.",
        tags: ["marketing-online", "general"]
    },
    {
        question: "¿Usan plantillas de WordPress o cómo construyen los sitios?",
        answerJSX: (
            <div className="space-y-4 text-justify">
                <p>Es una pregunta muy importante. <strong>No utilizamos plantillas de WordPress</strong>. Construimos nuestros sitios web a medida utilizando tecnologías modernas como React por cuatro razones clave:</p>
                <ul className="list-disc list-inside space-y-2 font-medium text-gray-800">
                    <li><strong>Rendimiento Superior:</strong> Sitios más rápidos y fluidos que mejoran la experiencia y el posicionamiento en Google.</li>
                    <li><strong>Seguridad Reforzada:</strong> Al no depender de plugins de terceros, nuestros sitios son mucho más seguros contra ataques.</li>
                    <li><strong>Personalización Total:</strong> No estamos limitados por plantillas. Podemos construir cualquier funcionalidad que tu negocio necesite.</li>
                    <li><strong>Menor Mantenimiento:</strong> Te olvidas de las constantes y problemáticas actualizaciones de plugins y temas.</li>
                </ul>
                <p>Adicionalmente, ofrecemos la <strong>integración opcional de un panel de contenidos (Headless CMS)</strong>. Esto te da lo mejor de ambos mundos: un sitio de alto rendimiento con la capacidad de que tú mismo edites los contenidos de forma sencilla.</p>
            </div>
        ),
        answerText: "No utilizamos plantillas de WordPress. Construimos nuestros sitios web a medida con tecnologías modernas como React por cuatro razones clave: Rendimiento Superior, Seguridad Reforzada, Personalización Total y Menor Mantenimiento.",
        tags: ["desarrollo-web"]
    },
    {
        question: "¿Qué pasa si no me gusta la propuesta de diseño?",
        answerJSX: (<p className="text-justify">Tu satisfacción es nuestra prioridad. Nuestro proceso incluye una fase de diseño inicial donde te presentamos una maqueta visual (mockup). Sobre esta propuesta trabajamos juntos y realizamos hasta dos rondas de revisiones y ajustes importantes para asegurarnos de que el diseño se alinee perfectamente con tu visión antes de escribir una sola línea de código.</p>),
        answerText: "Tu satisfacción es nuestra prioridad. Nuestro proceso incluye una fase de diseño inicial (mockup) y hasta dos rondas de revisiones y ajustes antes de empezar a programar.",
        tags: ["desarrollo-web"]
    },
    {
        question: "¿Cuánto tiempo toma la entrega del sitio web?",
        answerJSX: (
            <div className="text-justify space-y-3">
                <p>
                    En Expansis Pro nos comprometemos a un ciclo de ejecución de <strong>6 semanas calendario</strong>, contando desde nuestra primera <strong>Reunión de Diagnóstico</strong>.
                </p><p>
                    Para cumplir con esta meta de alta eficiencia, el cronograma se divide así:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                    <li><strong>Semana 1:</strong> Diagnóstico profundo, descubrimiento y definición de arquitectura.</li>
                    <li><strong>Semana 2-3:</strong> Diseño de interfaz y definición de identidad visual (equipo creativo).</li>
                    <li><strong>Semana 4-5:</strong> Desarrollo de la arquitectura técnica, bases de datos y carga de contenido.</li>
                    <li><strong>Semana 6:</strong> Pruebas de estrés, optimización SEO y lanzamiento oficial.</li>
                </ul>
                <p className="text-sm italic border-l-2 border-primario pl-3">
                    <strong>Nota de compromiso:</strong> El cumplimiento de este plazo está sujeto a que la entrega de materiales base y las <strong>validaciones/devoluciones por parte del cliente se realicen en tiempo y forma</strong> según las fechas estipuladas en el plan de trabajo.
                </p>
            </div>
        ),
        answerText: "Entrega en 5 semanas desde el Diagnóstico. El cumplimiento depende de la entrega oportuna de materiales y de que las validaciones del cliente se realicen en tiempo y forma.",
        tags: ["desarrollo-web", "procesos"]
    },
    {
        question: "¿Seré dueño de mi sitio web una vez terminado el proyecto?",
        answerJSX: (<p className="text-justify">Absolutamente. Una vez completado el pago final, te entregamos el 100% de los archivos y el acceso completo a tu sitio web y hosting. No utilizamos plantillas restrictivas ni te atamos a contratos de permanencia. Creemos en empoderar a nuestros clientes, no en retenerlos.</p>),
        answerText: "Sí, una vez completado el pago final, te entregamos el 100% de los archivos y el acceso completo a tu sitio web y hosting.",
        tags: ["desarrollo-web"]
    },
    {
        question: "¿Qué soporte ofrecen después de que el sitio está online?",
        answerJSX: (<p className="text-justify">Todos nuestros proyectos incluyen 30 días de soporte gratuito post-lanzamiento para corregir cualquier error o problema técnico que pueda surgir. Adicionalmente, te ofrecemos planes de mantenimiento mensual opcionales para que no te preocupes de actualizaciones, seguridad y respaldos, permitiéndote enfocarte 100% en tu negocio.</p>),
        answerText: "Todos nuestros proyectos incluyen 30 días de soporte gratuito post-lanzamiento. También ofrecemos planes de mantenimiento mensual opcionales.",
        tags: ["desarrollo-web"]
    },
    {
        question: "¿Qué necesito entregarles para empezar el proyecto?",
        answerJSX: (<div className="text-justify space-y-4">
            <p>
                En Expansis Pro nos adaptamos a tu realidad actual. Tienes dos caminos para iniciar tu arquitectura digital:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="bg-ghostWhite/50 p-4 rounded-xl border-l-4 border-gray-300">
                    <h4 className="font-bold text-deepBlue mb-2">Opción A: Tú nos entregas</h4>
                    <p className="text-gray-600">Si ya cuentas con logo en alta calidad, brandbook, textos definitivos e imágenes profesionales, los integramos directamente siguiendo tu línea de marca.</p>
                </div>
                <div className="bg-primario/5 p-4 rounded-xl border-l-4 border-primario">
                    <h4 className="font-bold text-deepBlue mb-2">Opción B: Nosotros lo creamos</h4>
                    <p className="text-gray-600">Si estás partiendo de cero, nuestro equipo se encarga de crear tu identidad visual, redactar textos estratégicos y seleccionar recursos gráficos de alto impacto.</p>
                </div>
            </div>
            <p className="text-sm italic text-gray-500">
                *Independiente del camino, solo necesitaremos los accesos a tu dominio y hosting (si ya los tienes). Si no, te asesoramos en la compra y configuración desde el primer minuto.
            </p>
        </div>),
        answerText: "Puedes entregarnos tu material (logo, textos, imágenes) o nosotros podemos crearlo todo desde cero a través de nuestro equipo de diseño y estrategia. También te asesoramos con el hosting y dominio.",
        tags: ["general", "procesos"]
    },
    {
        question: "¿Qué pasa después de los 30 días de soporte gratuito?",
        answerJSX: (
            <div className="space-y-4 text-justify">
                <p>Una vez finalizado el soporte inicial, tienes total flexibilidad. Ofrezco dos modalidades para seguir colaborando y asegurar que tu sitio web se mantenga saludable y actualizado:</p>
                <h4 className="text-lg font-semibold text-gray-800 pt-2">1. Planes de Mantenimiento Mensual (Opcional)</h4>
                <p>Es un servicio de suscripción para tu completa tranquilidad. Nos encargamos de la salud técnica de tu web (seguridad, copias de seguridad, actualizaciones) e incluye una pequeña bolsa de 30-60 minutos para cambios menores. Es ideal para que puedas enfocarte 100% en tu negocio.</p>
                <h4 className="text-lg font-semibold text-gray-800 pt-2">2. Solicitudes a Medida (Por Demanda)</h4>
                <p>Si prefieres no tener un plan mensual, puedes solicitar cambios o nuevas funcionalidades cuando lo necesites. Estos trabajos se cotizan de forma separada, generalmente con una tarifa por hora, previa estimación y aprobación de tu parte.</p>
            </div>
        ),
        answerText: "Después de los 30 días de soporte gratuito, ofrecemos dos modalidades: un Plan de Mantenimiento mensual opcional o Solicitudes a Medida que se cotizan por hora.",
        tags: ["desarrollo-web"]
    }
];