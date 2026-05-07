import React from 'react';

export const faqData = [
    {
        question: "¿Qué incluye el servicio de Desarrollo Web?",
        answerJSX: (
            <p className="text-justify">
                Nuestra <strong>Configuración Base Profesional</strong> es el cimiento de tu presencia digital. Cubre el
                <strong> desarrollo de una Landing Page de alto rendimiento</strong> con diseño único (sin plantillas),
                <strong>optimización de velocidad (WPO)</strong> y conversión directa a WhatsApp. Si buscas
                <strong> diseño web a medida</strong> con múltiples secciones, sistemas de pago o bases de datos,
                cotizamos módulos adicionales para que tu inversión sea coherente y escalable.
            </p>
        ),
        answerText: "El servicio de desarrollo web incluye una landing page de alto rendimiento, optimización de velocidad y diseño a medida sin plantillas.",
        tags: ["desarrollo-web", "seo"]
    },
    {
        question: "¿Qué es el servicio de Consultoría Digital Estratégica?",
        answerJSX: (
            <div className="text-justify space-y-3">
                <p>
                    Es nuestro servicio de <strong>diagnóstico y arquitectura</strong>. En él, analizamos tu infraestructura digital bajo un enfoque integrador: aplicamos principios de psicología organizacional, marketing estratégico y diseño orientado a negocios <strong>para garantizar que una presencia online potente y coherente a tu negocio</strong>.
                </p>
                <p>
                    El proceso incluye una <strong>auditoría profesional de tus canales digitales</strong> (web, redes y competencia) y culmina con la entrega de una <strong>hoja de ruta estratégica priorizada</strong>. Si tu marca carece de identidad, aquí definimos tus <strong>Cimientos Visuales</strong> para garantizar una comunicación coherente y profesional desde la base.
                </p>
            </div>
        ),
        answerText: "La Consultoría Digital Estratégica es un servicio de diagnóstico basado en psicología organizacional que incluye auditoría de canales, hoja de ruta estratégica e identidad visual.",
        tags: ["autoridad-de-marca", "estrategia"]
    }, {
        question: "¿Para quién es la Consultoría Digital y qué incluye exactamente?",
        answerJSX: (
            <div className="text-justify space-y-4">
                <p>
                    Nuestra <strong>consultoría digital estratégica</strong> está diseñada para aportar claridad y sentido en dos escenarios clave:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-ghostWhite/50 p-4 rounded-xl border-l-4 border-gray-300">
                        <h4 className="font-bold text-deepBlue mb-2">1. Proyectos con Trayectoria</h4>
                        <p className="text-sm text-gray-600">
                            Auditamos tus canales actuales para detectar fugas de confianza y fricciones técnicas. El objetivo es
                            <strong> optimizar tu ecosistema online</strong> y asegurar que tu marca proyecte la autoridad real que ya tienes.
                        </p>
                    </div>
                    <div className="bg-primario/5 p-4 rounded-xl border-l-4 border-primario">
                        <h4 className="font-bold text-deepBlue mb-2">2. Proyectos por Impulsar</h4>
                        <p className="text-sm text-gray-600">
                            Si estás partiendo de cero, diseñamos tu <strong>arquitectura digital</strong> desde los cimientos. Definimos tu
                            identidad visual y estratégica para que tu salida al mercado sea sólida, profesional y coherente desde el día uno.
                        </p>
                    </div>
                </div>

                <p>
                    Te acompañaremos en este proceso para validar que cada canal (web, redes, ads) sea coherente entre sí.
                    Te entregamos un informe de auditoría y una <strong>hoja de ruta estratégica priorizada</strong> con los pasos exactos
                    para mejorar tu posicionamiento y conversión, sin importar en qué etapa se encuentre tu negocio.
                </p>
            </div>
        ),
        answerText: "La consultoría digital estratégica se adapta a negocios nuevos y existentes que buscan optimización o proyectos nuevos que necesitan un impulso en sus canales digitales. Incluye informe de auditoría y hoja de ruta estratégica para mejorar posicionamiento y conversión.",
        tags: ["autoridad-de-marca", "estrategia", "procesos"]
    },

    {
        question: "¿Qué incluye la inversión mensual en Marketing Online?",
        answerJSX: (
            <div className="text-justify space-y-3">
                <p>
                    Para que una <strong>campaña de publicidad digital</strong> sea rentable, el diseño debe responder a una
                    estrategia de conversión. Gestionamos el ciclo completo:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Briefing Estratégico:</strong> Definimos formatos (Reels, Ads, Banners) según tu embudo.</li>
                    <li><strong>Dirección Creativa:</strong> Coordinamos con nuestro equipo de diseño para que cada pieza respete tu identidad.</li>
                    <li><strong>Optimización de Performance:</strong> Ajustamos las creatividades según los datos de clics y leads.</li>
                </ul>
            </div>
        ),
        answerText: "Gestionamos el ciclo creativo de tus campañas (Ads, Reels, Banners) basándonos en datos de performance y conversión.",
        tags: ["marketing-online", "performance"]
    },
    {
        question: "¿Por qué los precios de Expansis Pro son 'desde'?",
        answerJSX: (

            <div className="text-justify space-y-3">
                <p>En Expansis Pro, nos especializamos en diseño y desarrollo web profesional bajo un modelo de presupuestos modulares. Entendemos que la transformación digital para empresas y marcas personales requiere de una arquitectura digital coherente y personalizada.
                </p>
                <p>Nuestra inversión inicial garantiza una infraestructura web de alta calidad, estableciendo un cimiento sólido y optimizado. A partir de esta base, creamos páginas web escalables donde podemos integrar nuevas funcionalidades según tus objetivos de negocio. Este enfoque de consultoría estratégica te permite optimizar tu inversión digital, evitando gastos innecesarios en herramientas que tu operación aún no requiere y asegurando un crecimiento sostenible en internet.
                </p>
            </div>
        ),
        answerText: "Los precios son desde porque cada solución es personalizada y escalable según las necesidades del cliente.",
        tags: ["general", , "tarifas"]
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
        question: "¿Por qué desarrollan con React y no usan plantillas de WordPress?",
        answerJSX: (
            <div className="space-y-4 text-justify">
                <p>
                    Buscamos <strong>rendimiento y seguridad superior</strong>. Al no usar plantillas de terceros,
                    construimos <strong>sitios web con React</strong> que son:
                </p>
                <ul className="list-disc list-inside space-y-1 font-medium text-gray-800">
                    <li><strong>Más rápidos:</strong> Factor clave para el posicionamiento orgánico en Google.</li>
                    <li><strong>Inmunes a vulnerabilidades:</strong> Sin plugins que caducan o se hackean.</li>
                    <li><strong>Escalables:</strong> Podemos programar cualquier funcionalidad sin límites técnicos.</li>
                </ul>
            </div>
        ),
        answerText: "Usamos React para garantizar velocidad (SEO), seguridad y personalización total, eliminando los riesgos de las plantillas tradicionales.",
        tags: ["desarrollo-web", "tecnologia"]
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
                    En Expansis Pro trabajamos bajo un modelo de <strong>Arquitectura Coherente</strong>, donde cada fase tiene un sentido estratégico para asegurar que tu plataforma refleje la realidad de tu negocio.
                </p><p>
                    Para cumplir con esta meta de alta eficiencia, el cronograma se divide así:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                    <li><strong>S1:</strong> Descubrimiento (Cimientos estratégicos).</li>
                    <li><strong>S2-3:</strong> Coherencia Visual (Diseño de interfaz y marca).</li>
                    <li><strong>S4-5:</strong> Construcción Integrada (Desarrollo técnico y contenido).</li>
                    <li><strong>S6:</strong> Validación y Lanzamiento (Optimización final).</li>
                </ul>
                <p className="text-sm italic border-l-2 border-primario pl-3">
                    <strong>Nota de compromiso:</strong> El cumplimiento de este plazo está sujeto a que la entrega de materiales base y las <strong>validaciones/devoluciones por parte del cliente se realicen en tiempo y forma</strong> según las fechas estipuladas en el plan de trabajo.
                </p>
            </div>
        ),
        answerText: "Entregamos proyectos en 6 semanas divididas en: Diagnóstico, Diseño Visual, Desarrollo Técnico y Lanzamiento.",
        tags: ["desarrollo-web", , "seo"]
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