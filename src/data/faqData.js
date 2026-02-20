import React from 'react';

export const faqData = [
    {
        question: "¿Qué cubre exactamente el valor inicial de Desarrollo Web?",
        answerJSX: (
            <p className="text-justify">
                El valor inicial (desde <strong>$350.000 CLP</strong>) representa nuestra <strong>Configuración Base Profesional</strong>.
                Cubre la estructura esencial de una Landing Page de alto rendimiento: diseño único (no plantillas),
                optimización de velocidad y conexión con WhatsApp. Proyectos que requieran múltiples secciones,
                sistemas de pagos o bases de datos se cotizan como módulos adicionales para que solo pagues por lo que realmente necesitas.
            </p>
        ),
        answerText: "El valor base (desde $350.000 CLP) cubre la estructura esencial. Funcionalidades complejas se cotizan por separado.",
        tags: ["desarrollo-web"]
    },
    {
        question: "¿Qué incluye el valor inicial de la Consultoría Digital?",
        answerJSX: (
            <p className="text-justify">
                El valor inicial (desde <strong>$250.000 CLP</strong>) cubre la fase de diagnóstico completo.
                Te entregamos un informe de auditoría profesional con los hallazgos sobre tu sitio web, redes y competencia,
                junto con una primera capa de recomendaciones estratégicas priorizadas para que sepas exactamente por dónde empezar a mejorar.
            </p>
        ),
        answerText: "El valor inicial (desde $250.000 CLP) cubre la fase de diagnóstico completo y recomendaciones estratégicas.",
        tags: ["consultoria-digital"]
    },
    {
        question: "¿Qué incluye la inversión mensual en Marketing Online?",
        answerJSX: (
            <p className="text-justify">
                El valor mensual (desde <strong>$200.000 CLP</strong>) corresponde a nuestros honorarios por la gestión estratégica y operativa de tus campañas en un canal principal (ej. Meta o Google Ads).
                Cubre todo el ciclo: desde la planificación y creación de anuncios hasta el monitoreo diario, la optimización y un reporte mensual de resultados para que veas el impacto de tu inversión.
            </p>
        ),
        answerText: "El valor mensual (desde $200.000 CLP) corresponde a la gestión estratégica y operativa de campañas en un canal principal.",
        tags: ["marketing-online"]
    },
    {
        question: "¿Por qué los precios son 'desde'?",
        answerJSX: (
            <p className="text-justify">
                Porque en Expansis Pro no vendemos paquetes cerrados y rígidos. Cada negocio tiene necesidades distintas.
                El valor inicial te asegura una <strong>base de calidad premium</strong>, y a partir de ahí,
                podemos añadir funcionalidades y escalar el proyecto según tus objetivos específicos,
                evitando que pagues por herramientas o servicios que no vas a utilizar.
            </p>
        ),
        answerText: "Los precios son desde porque cada solución es personalizada y escalable según las necesidades del cliente.",
        tags: ["general"]
    },
    {
        question: "¿Cómo se gestiona el material gráfico (diseño) para las campañas?",
        answerJSX: (<p className="text-justify">Para asegurar que tus campañas sean visualmente atractivas, colaboramos con una diseñadora gráfica profesional. Nosotros nos encargamos de la dirección creativa y la coordinación completa. El costo del diseño se cotiza por separado y se incluye en nuestra facturación mensual para simplificar tu gestión. Así, te aseguras un resultado profesional sin tener que coordinar a diferentes proveedores.</p>),
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
        question: "¿Cuánto tiempo se demoran en entregar el sitio web?",
        answerJSX: (<p className="text-justify">Un proyecto de sitio web corporativo estándar toma habitualmente entre 3 y 5 semanas desde que recibimos todo el material necesario (textos, logos, imágenes). Una Landing Page puede estar lista en 1 a 2 semanas. Los tiempos pueden variar según la complejidad del proyecto, pero siempre estableceremos un cronograma claro y detallado desde el inicio.</p>),
        answerText: "Un sitio web corporativo estándar toma entre 3 y 5 semanas. Una Landing Page de 1 a 2 semanas, dependiendo de la complejidad.",
        tags: ["desarrollo-web"]
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
        answerJSX: (<p className="text-justify">Para iniciar, generalmente necesitamos tu logo en alta calidad, los textos e imágenes que te gustaría incluir, y acceso a tu proveedor de hosting y dominio si ya los tienes. ¡Si no, te asesoramos en cada paso!</p>),
        answerText: "Para iniciar, necesitamos tu logo, textos, imágenes y accesos a tu hosting y dominio (si los tienes).",
        tags: ["general"]
    },
    {
        question: "¿El servicio incluye el hosting (alojamiento) y el dominio?",
        answerJSX: (<p className="text-justify">El hosting y el dominio son servicios que debes contratar por separado, ya que es fundamental que seas el dueño de estos activos. Sin embargo, te guiamos y recomendamos las mejores opciones del mercado, e incluso podemos gestionar la configuración inicial por ti si lo necesitas.</p>),
        answerText: "No, el hosting y dominio se contratan por separado para que seas el dueño, pero te asesoramos en todo el proceso.",
        tags: ["desarrollo-web", "general"]
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
        answerText: "Después de los 30 días de soporte gratuito, ofrezco dos modalidades: un Plan de Mantenimiento mensual opcional o Solicitudes a Medida que se cotizan por hora.",
        tags: ["desarrollo-web"]
    }
];