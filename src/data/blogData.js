// src/data/blogData.js
export const blogPosts = [
    {
        id: 1,
        slug: "ia-para-principiantes-mitos-y-uso-diario",
        title: "IA para Principiantes: Cómo Empezar a Usar ChatGPT y Claude en Tu Día a Día",
        category: "Tecnología & IA",
        excerpt: "La inteligencia artificial no es magia ni exige saber programar. Te enseñamos a identificar casos de uso reales, la regla del prompt inicial y cómo ahorrar horas de trabajo.",
        author: "Gonzalo Lobos",
        authorRole: "Founder & Lead Engineer",
        date: "22 Septiembre 2026",
        readTime: "5 min de lectura",
        image: "/assets/images/expansisPro_target.webp",
        status: "aprobado",
        tags: ["Inteligencia Artificial", "ChatGPT", "Productividad", "Herramientas Digitales"],
        sources: [
            {
                num: 1,
                name: "OpenAI Academy",
                title: "Guía de inicio, interfaz y mejores prácticas para el uso de ChatGPT",
                url: "https://openai.com/es-419/academy/getting-started/"
            },
            {
                num: 2,
                name: "Anthropic Engineering Docs",
                title: "Claude Prompting Best Practices & Prompt Engineering Guide",
                url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
            }
        ],
        content: [
            "<strong>Existe demasiado 'ruido' alrededor de la Inteligencia Artificial: desde quienes prometen que resolverá todo tu negocio con un clic hasta quienes temen tocarla por complejidad técnica.</strong>",
            "La realidad es mucho más terrenal y útil. Asistentes conversacionales como ChatGPT o Claude son herramientas diseñadas para ayudarte a pensar, redactar y estructurar tareas cotidianas mediante lenguaje natural.<sup><a href='#fuente-1' class='text-primario font-bold ml-1'>[1]</a></sup>",
            "<h3>Cómo Encontrar Buenos Casos de Uso en Tu Negocio</h3>",
            "Según la guía oficial de OpenAI Academy, la clave para no frustrarse es empezar con tareas de bajo riesgo y alta frecuencia que ya haces a diario:<sup><a href='#fuente-1' class='text-primario font-bold ml-1'>[1]</a></sup>",
            "<ul><li><strong>Vencer la página en blanco:</strong> Usar la IA para generar una estructura inicial o lluvia de ideas cuando no sabes cómo arrancar un proyecto.</li><li><strong>Reducir notas caóticas:</strong> Transformar apuntes rápidos de una reunión o un audio en un correo claro para clientes o proveedores.</li><li><strong>Aprovechar las funciones de voz:</strong> Dictar ideas mientras te desplazas o practicar la presentación de una propuesta en voz alta para recibir retroalimentación.</li></ul>",
            "Una vez que dominas estas tareas simples, puedes avanzar hacia configuraciones más estructuradas (como GPTs personalizados o proyectos) para automatizar procesos repetitivos.<sup><a href='#fuente-1' class='text-primario font-bold ml-1'>[1]</a></sup>",
            "<h3>Principios de Redacción de Prompts (Anthropic & OpenAI)</h3>",
            "Para obtener respuestas precisas a la primera, los estándares de ingeniería de prompts recomiendan aplicar estas reglas de comunicación:<sup><a href='#fuente-2' class='text-primario font-bold ml-1'>[2]</a></sup>",
            "<ul><li><strong>Trátala como un empleado nuevo brillante:</strong> Posee alta capacidad analítica, pero cero contexto sobre tu empresa. Explícale quién eres, qué vendes y cuál es tu objetivo.</li><li><strong>La Regla de Oro:</strong> Muestra tu prompt a un colega sin contexto previo. Si a él le confunde tu indicación, a la IA también.</li><li><strong>Estructura clara:</strong> Delimita tu instrucción asignando un rol, contexto, tarea concreta y el formato de salida deseado.</li></ul>",
            "<h3>💡 El Prompt de Descubrimiento para Emprendedores</h3>",
            "Si no sabes por dónde empezar a usar la IA en tu trabajo diario, copia y pega esta instrucción en el chat adaptando tus datos:<sup><a href='#fuente-1' class='text-primario font-bold ml-1'>[1]</a></sup>",
            "<code>Dime cómo puedo usar la IA para hacer mi trabajo más fácil. Soy [descripción de tu trabajo o negocio]. Dame 5 tareas concretas que puedo delegar o mejorar ahora mismo y redacta el prompt exacto para cada una.</code>",
            "<strong>Conclusión:</strong> La IA no reemplaza la estrategia humana; es un copiloto diario para reducir el tiempo en tareas operativas y concentrarte en hacer crecer tu empresa."
        ]
    }, {
        id: 2,
        slug: "las-6-fases-del-analisis-de-datos-metodologia-google",
        title: "Las 6 Fases del Análisis de Datos: La Metodología de Google para Tomar Decisiones Rentables",
        category: "Estrategia & Datos",
        excerpt: "Conoce el marco de trabajo oficial de 6 pasos de Google (Preguntar, Preparar, Procesar, Analizar, Compartir y Actuar) para transformar datos caóticos en crecimiento real para tu empresa.",
        author: "Gonzalo Lobos",
        authorRole: "Founder & Lead Engineer",
        date: "23 Septiembre 2026",
        readTime: "6 min de lectura",
        image: "/assets/images/expansisPro_target.webp",
        status: "aprobado",
        tags: ["Análisis de Datos", "Metodología Google", "Business Intelligence", "Toma de Decisiones", "Estrategia"],
        sources: [
            {
                num: 1,
                name: "Google Career Certificates (YouTube)",
                title: "Six Phases of Data Analysis - Google Data Analytics Course (Lesson 13)",
                url: "https://www.youtube.com/watch?v=NEtuEfi9YNI"
            },
            {
                num: 2,
                name: "Google Data Analytics Professional Certificate",
                title: "Foundations: Data, Data, Everywhere - Data Analysis Process Framework",
                url: "https://www.coursera.org/learn/data-data-everywhere"
            }
        ],
        content: [
            "<strong>El análisis de datos no consiste en abrir planillas llenas de números sin sentido; consiste en seguir un proceso metodológico para responder preguntas comerciales concretas.</strong>",
            "En el Certificado Profesional de Análisis de Datos de Google se establece que cualquier proyecto analítico exitoso —desde optimizar un embudo de ventas hasta mejorar la retención de clientes— debe transitar por un ciclo de vida de 6 etapas bien definidas.<sup><a href='#fuente-1' class='text-primario font-bold ml-1'>[1]</a></sup>",
            "<h3>Las 6 Fases del Análisis de Datos de Google</h3>",
            "Para evitar perderte entre métricas vanidosas, la metodología de Google organiza el trabajo analítico en este orden secuencial:<sup><a href='#fuente-1' class='text-primario font-bold ml-1'>[1]</a></sup><sup><a href='#fuente-2' class='text-primario font-bold ml-1'>[2]</a></sup>",
            "<ol><li><strong>1. Preguntar (Ask):</strong> Todo empieza definiendo el problema real y las expectativas del negocio. Implica hacer las preguntas correctas a los involucrados para entender qué se necesita resolver antes de tocar cualquier dato.</li><li><strong>2. Preparar (Prepare):</strong> Identificar y recolectar la información necesaria. En esta fase se define qué datos se requieren (métricas web, encuestas, ventas), dónde se almacenarán y cómo se protegerá la privacidad.</li><li><strong>3. Procesar (Process):</strong> Limpiar y verificar los datos. Significa eliminar duplicados, corregir inconsistencias y asegurar que la información sea completa, correcta y relevante antes de trabajar con ella.</li><li><strong>4. Analizar (Analyze):</strong> Descubrir patrones y relaciones. Mediante cálculos, consultas y modelos, los datos procesados se transforman en hallazgos útiles para responder las preguntas iniciales.</li><li><strong>5. Compartir (Share):</strong> Comunicar los resultados. Se crean visualizaciones de datos y reportes claros para que los tomadores de decisiones entiendan las conclusiones dentro del contexto del negocio.</li><li><strong>6. Actuar (Act):</strong> Implementar soluciones. Es la etapa final donde se ejecutan los cambios estratégicos en la empresa respaldados por los hallazgos del análisis.</li></ol>",
            "<h3>💡 ¿Para qué te sirve esto como emprendedor?</h3>",
            "<ul><li><strong>Evita perderte en datos inútiles:</strong> Definir la pregunta correcta (Fase 1) evita que gastes días mirando Google Analytics sin saber qué estás buscando.</li><li><strong>Asegura decisiones de bajo riesgo:</strong> No implementas cambios por corazonadas; actúas (Fase 6) solo cuando el análisis (Fase 4) respalda la inversión.</li><li><strong>Estructura cualquier área de tu empresa:</strong> Esta misma metodología de 6 pasos aplica para analizar el rendimiento de tu pauta publicitaria, mejorar la atención por WhatsApp o reducir costos operativos.</li></ul>",
            "<strong>Conclusión:</strong> El verdadero valor de los datos no está en su acumulación, sino en la disciplina con la que los transformas en decisiones rentables."
        ]
    }
];