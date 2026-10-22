// src/data/faqsData.js

export const faqsData = [
    // ─────────────────────────────────────────────────────────
    // 01. PREGUNTAS ESPECÍFICAS DE CADA PROGRAMA
    // ─────────────────────────────────────────────────────────
    {
        id: "faq_sol_marca_personal",
        tags: ["marca-personal-profesionales", "servicios"],
        pregunta: "¿Qué incluye la solución de \"Marca Personal & Profesionales\"?",
        respuesta_web: `Este programa está diseñado para especialistas que venden su conocimiento (médicos, psicólogos, abogados y consultores). Incluye:
• Oficina digital One-Page en React: Carga instantánea, diseño de alta autoridad y adaptabilidad móvil total.
• Panel Strapi CMS: Administrador moderno e independiente para editar textos, servicios, tarifas y fotos sin tocar código.
• Puntos de conversión: Integración directa a WhatsApp profesional y formulario estructurado.
• Adquisición en Meta Ads: Estrategia y gestión técnica de campañas en Instagram y Facebook para llenar tu agenda.
• Creativos mensuales: Diseño gráfico y redacción persuasiva de los anuncios incluido.
• Telemetría y analítica: Medición de eventos clave con Google Analytics 4 y GTM.
• Infraestructura continua: Servidor de alta velocidad, certificados SSL, monitoreo y soporte técnico ante fallas críticas.`,
        respuesta_bot: `El programa *Marca Personal & Profesionales* incluye tu oficina digital completa:

• *Web One-Page en React:* Carga ultra rápida y diseño enfocado en autoridad.
• *Panel Strapi CMS:* Administras tus textos, fotos y tarifas sin tocar código.
• *Ruteo directo a WhatsApp* y formulario de contacto estructurado.
• *Pauta en Meta Ads:* Campañas en Instagram y Facebook para agendar consultas.
• *Diseño de creativos mensuales:* Piezas gráficas y textos publicitarios incluidos.
• *Hosting de alta velocidad, SSL* y analítica con GA4. 🚀`
    },

    {
        id: "faq_sol_empresas_b2b",
        tags: ["empresas-b2b", "servicios"],
        pregunta: "¿Qué incluye la solución de \"Empresas y servicios B2B\"?",
        respuesta_web: `Diseñada para constructoras, servicios industriales, logística, firmas legales y consultoras corporativas. Incluye:
• Web corporativa multi-sección en React: Hasta 5 páginas internas estructuradas (Inicio, Servicios, Nosotros, Proyectos y Contacto).
• Formularios de cotización calificada: Validación con campos corporativos (RUT empresa, cargo y requerimiento) para filtrar spam.
• Pauta combinada (Google + Meta): Captación de demanda activa en Google Search Ads más retargeting institucional en Meta Ads.
• Producción de anuncios: Copywriting técnico persuasivo y diseño de piezas gráficas corporativas.
• Dashboard Looker Studio en vivo: Panel interactivo en tiempo real para auditar visitas, cotizaciones generadas y Costo por Prospecto (CAC).
• Soporte y servidor: Hosting corporativo de alto rendimiento, respaldos periódicos y soporte técnico prioritario.`,
        respuesta_bot: `El programa *Empresas & Servicios B2B* consolida tu captación corporativa:

• *Web Multi-sección en React:* Hasta 5 páginas corporativas de carga instantánea.
• *Formularios B2B avanzados:* Con validación de RUT empresa y cargo para filtrar prospectos reales.
• *Estrategia Dual de Pauta:* Capturamos la búsqueda activa en *Google Search Ads* y reforzamos con retargeting en *Meta Ads*.
• *Dashboard Looker Studio:* Mides cotizaciones, costos y retorno en vivo.
• *Diseño de anuncios, hosting corporativo y soporte prioritario.* 🏢`
    },

    {
        id: "faq_sol_ecommerce",
        tags: ["ecommerce", "servicios", "promociones"],
        pregunta: "¿Qué incluye la solución de \"Ecommerce\"?",
        respuesta_web: `Construimos un ecosistema de venta automatizado sobre Shopify. Incluye:
• Tienda online de alta conversión: Arquitectura transaccional optimizada para navegación móvil y de escritorio.
• Catálogo estructurado: Carga y parametrización inicial de hasta 25 productos o variantes principales.
• Pasarelas de pago locales: Integración con Webpay Plus (Transbank) y Mercado Pago (débito, crédito en cuotas y transferencias).
• Logística automatizada: Reglas de despacho por regiones/comunas o conexión directa con couriers chilenos.
• Catálogos de pauta sincronizados: Enlace automático de inventario con Google Shopping y Meta Commerce Manager.
• Automatizaciones de rescate: Flujos automáticos de recuperación de carritos abandonados por correo electrónico.
• Dashboard de ROAS en vivo: Control en tiempo real de ventas brutas versus gasto publicitario.
• Promoción activa: 50% de descuento en el Setup Inicial ($725.000 + IVA en lugar de $1.450.000 + IVA) para la primera marca seleccionada en nuestro programa de Caso de Estudio.`,
        respuesta_bot: `El programa *E-commerce & Tienda Online* automatiza tu venta digital:

• *Tienda en Shopify:* Arquitectura de alta conversión y carga inicial de hasta 25 productos.
• *Pagos en Chile:* Integración lista con Webpay Plus y Mercado Pago (débito y cuotas).
• *Envíos automatizados:* Integración con couriers locales según regiones.
• *Catálogo publicitario sincronizado* con Google Shopping y Meta Commerce.
• *Correos de carritos abandonados* automáticos y dashboard de ventas (ROAS).

🎁 *Promoción activa:* 50% OFF en Setup Inicial ($725.000 + IVA) reservado para nuestro cupo de *Caso de Estudio*. 🛒`
    },

    {
        id: "faq_tec_filtro_cotizaciones_reales_b2b",
        tags: ["empresas-b2b", "leads", "seguridad"],
        pregunta: "¿Cómo se asegura que las cotizaciones sean de empresas reales?",
        respuesta_web: `Implementamos una estrategia de filtrado en dos frentes:
1. En la Web (UX y Validación): Estructuramos formularios con validación corporativa que exigen RUT de empresa, cargo del solicitante, correo institucional y requerimiento específico, descartando consultas informales.
2. En Google Ads: Configuramos listas rigurosas de palabras clave negativas para excluir términos como 'gratis', 'cursos', 'empleo', 'tesis' o 'manuales', concentrando el 100% de los clics pagados en directores y gerentes de compras con intención transaccional real.`,
        respuesta_bot: `Aplicamos un *doble filtro de calificación*:

1️⃣ *En la web:* Formularios que exigen campos corporativos (RUT empresa, cargo y requerimiento específico).
2️⃣ *En Google Ads:* Excluimos mediante palabras clave negativas búsquedas de empleo, estudiantes o servicios gratuitos, asegurando que solo coticen tomadores de decisión. 🎯`
    },

    {
        id: "faq_eco_pagos_chile",
        tags: ["ecommerce", "pagos"],
        pregunta: "¿La tienda soporta pagos con tarjetas de débito y crédito en Chile?",
        respuesta_web: `Sí. Dejamos operativas las pasarelas estándar de la industria financiera en Chile: Webpay Plus (Transbank) y Mercado Pago.

Tu e-commerce podrá procesar pagos con tarjetas de débito (Redcompra), crédito bancario (con y sin cuotas) y transferencias bancarias directas, con liquidación automática y segura hacia la cuenta bancaria de tu empresa.`,
        respuesta_bot: `Sí, totalmente. Dejamos operativas las pasarelas estándar de Chile: *Webpay Plus (Transbank) y Mercado Pago*.

Tus clientes podrán comprar con tarjetas de débito Redcompra, crédito en cuotas y transferencias seguras, con depósito directo a tu cuenta bancaria. 💳🇨🇱`
    },

    {
        id: "faq_eco_costos_envio_regiones",
        tags: ["ecommerce", "despachos"],
        pregunta: "¿Cómo se calculan los costos de envío para regiones?",
        respuesta_web: `Dependiendo de tu volumen operativo, configuramos dos alternativas:
• Tarifas por zonas: Tablas automatizadas de tarifas fijas o por rangos de peso diferenciadas por región y comuna (Santiago y regiones).
• Couriers automatizados: Integración con aplicaciones de operadores logísticos chilenos (como Starken, Chilexpress, Blue Express o Envíame) para tarificar dinámicamente el despacho en tiempo real durante el checkout según las dimensiones del paquete y destino.`,
        respuesta_bot: `Configuramos dos métodos según tu logística:

• *Tarifas por zonas:* Valores automáticos por comuna o región según peso o monto de compra.
• *Couriers integrados:* Conexión con servicios como *Starken, Chilexpress o Blue Express* para calcular el envío en tiempo real durante el pago. 📦🚚`
    },

    {
        id: "faq_eco_costo_shopify",
        tags: ["ecommerce", "tarifas", "plataforma"],
        pregunta: "¿Quién asume el costo mensual de la plataforma Shopify?",
        respuesta_web: `El costo de suscripción de Shopify lo asume y paga directamente el cliente a Shopify mediante su tarjeta de crédito.

Esto asegura que la tienda, el catálogo y la base de datos de tus compradores pertenezcan legalmente a tu empresa. Los honorarios de Expansis Pro corresponden a los servicios profesionales de arquitectura, mantención técnica, optimización de catálogo y gestión de campañas de venta.`,
        respuesta_bot: `El plan mensual de Shopify (aprox. *$39 USD/mes*) lo abona directamente el cliente a la plataforma con su tarjeta.

Esto garantiza que la titularidad legal de tu tienda sea tuya al 100%. Nuestros honorarios cubren la ingeniería, el soporte técnico y la gestión comercial de ventas. 🛒`
    },

    {
        id: "faq_fin_solo_web_sin_pauta",
        tags: ["marca-personal-profesionales", "empresas-b2b", "servicios"],
        pregunta: "¿Si solo necesito hacer una página web y no necesito pauta cómo se gestiona?",
        respuesta_web: `Si tu empresa solo necesita el activo web (diseño y programación en React) sin gestión de campañas publicitarias, se estructura como un proyecto de Desarrollo Web tradicional con pago único de implementación.

En esta modalidad no abonas la mantención publicitaria de $250.000 + IVA/mes. Al finalizar el desarrollo, te entregamos el sitio probado y el código fuente. Para mantener la web online, puedes alojarla en tu propia infraestructura o contratar un plan básico de soporte técnico y servidor dedicado según tus requerimientos.`,
        respuesta_bot: `¡Totalmente viable! Si no requieres pauta publicitaria, cotizamos únicamente el *Desarrollo Web en React como pago único*.

En ese caso, no aplica la mantención publicitaria de $250.000 + IVA. Te entregamos la web lista y solo coordinamos el servidor básico o te pasamos los archivos para tu propio hosting. 💻`
    },

    // ─────────────────────────────────────────────────────────
    // 02. PREGUNTAS TRANSVERSALES (APLICAN A TODAS LAS SOLUCIONES)
    // ─────────────────────────────────────────────────────────
    {
        id: "faq_fin_inversion_publicidad",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "facturacion", "pauta"],
        pregunta: "¿La inversión de publicidad va incluida en la mensualidad?",
        respuesta_web: `No. Los $250.000 + IVA mensuales cubren exclusivamente los honorarios profesionales de Expansis Pro: administración de servidores, soporte técnico web, diseñador para las piezas publicitarias mensuales y la optimización continua del Growth Specialist.

El saldo para circular tus anuncios (monto sugerido entre $300.000 y $450.000 CLP/mes) se abona directamente por el cliente a las plataformas (Google Ads o Meta Ads) mediante tarjeta corporativa propia. Esto garantiza que no existan comisiones ocultas de intermediación y que la factura publicitaria salga a nombre de tu empresa.`,
        respuesta_bot: `No. La mensualidad cubre nuestros honorarios profesionales: soporte técnico, servidor, diseñador para tus creativos y optimización de campañas.

El saldo para pauta (sugerido entre *$300.000 y $450.000 CLP/mes*) lo pagas tú directamente a *Google o Meta* con tu tarjeta. Así no pagas sobrecargos ni comisiones de intermediación. 💡`
    },

    {
        id: "faq_fin_quien_paga_pauta",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "pauta", "facturacion"],
        pregunta: "¿Quién paga la pauta en Meta Ads y Google Ads?",
        respuesta_web: `La pauta la paga directamente el cliente. Vinculamos tu tarjeta de crédito o débito corporativa al Administrador Comercial de Meta y a la cuenta de Google Ads.

Bajo este modelo:
1. Mantienes el control financiero total sobre cuánto gastas día a día.
2. Google y Meta emiten las facturas publicitarias directamente a la razón social de tu empresa para respaldar tu gasto tributario.
3. No pagas márgenes inflados de agencia sobre tu propio presupuesto de inversión.`,
        respuesta_bot: `La paga el cliente directamente a las plataformas tecnológicas (*Google Ads o Meta Ads*) vinculando su propia tarjeta corporativa.

Esto te asegura transparencia absoluta: tú controlas el presupuesto diario y las plataformas te emiten la factura publicitaria directo a tu RUT. 💳`
    },

    {
        id: "faq_fin_compromiso_dos_meses",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "pauta", "condiciones"],
        pregunta: "¿Por qué el compromiso es de dos meses?",
        respuesta_web: `El compromiso inicial de 60 días responde a una necesidad técnica de los algoritmos publicitarios:
• Fase de Aprendizaje (Learning Phase): Durante los primeros 15 a 20 días, la inteligencia artificial de Meta y Google requiere recopilar un volumen mínimo de eventos de conversión para aprender qué perfil exacto de usuario responde a la oferta.
• Calibración y Estabilización: Durante el segundo mes, con datos consolidados, se eliminan los anuncios menos eficientes y se concentran las pujas en las palabras clave y creativos más rentables, reduciendo de forma tangible el Costo por Lead (CPL) o maximizando el ROAS.

Evaluar una estrategia de adquisición en menos de 60 días conduce a conclusiones sesgadas e interrumpe el ciclo de maduración de la data.`,
        respuesta_bot: `Los *60 días de compromiso inicial* son una ventana técnica obligatoria:

Los algoritmos de IA de Google y Meta necesitan las primeras semanas para salir de la *fase de aprendizaje*, recopilar datos de conversión y perfilar al comprador ideal. En el segundo mes es donde estabilizamos y reducimos el costo por prospecto calificado. 📈`
    },

    {
        id: "faq_fin_que_es_mantencion",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "mantencion", "servicios"],
        pregunta: "¿En la página veo que hablas de Mantención mensual, qué significa?",
        respuesta_web: `La mantención mensual ($250.000 + IVA) es el servicio integral que asegura que tu ecosistema digital opere de manera activa, rápida y rentable mes a mes. Incluye cuatro pilares:
1. Soporte e Infraestructura: Servidor cloud de alta velocidad, renovación de certificados SSL, copias de seguridad continuas y resolución de incidencias técnicas.
2. Producción Creativa: Diseño gráfico mensual de piezas publicitarias para Meta y redacción de copys persuasivos.
3. Growth & Performance: Gestión técnica y estratégica de campañas en Google y Meta, refinamiento de palabras clave negativas, optimización de pujas y retargeting.
4. Inteligencia de Datos: Actualización de dashboards en vivo (Looker Studio / GA4) y reporte mensual de prospectos y rentabilidad.`,
        respuesta_bot: `La *Mantención Mensual* ($250.000 + IVA) mantiene tu canal digital funcionando como un activo comercial vivo. Cubre 4 áreas:

1️⃣ *Infraestructura:* Hosting de alta velocidad, seguridad SSL, respaldos y soporte técnico.
2️⃣ *Diseño de Anuncios:* Nuevas piezas gráficas mensuales y textos persuasivos.
3️⃣ *Optimización Publicitaria:* Monitoreo semanal de campañas en Google/Meta para reducir costos de captación.
4️⃣ *Reportes:* Telemetría de visitas, prospectos y ventas en tiempo real. ⚙️`
    },

    {
        id: "faq_fin_puedo_no_pagar_mantencion",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "mantencion", "condiciones"],
        pregunta: "¿Puedo no pagar la mantención mensual?",
        respuesta_web: `Dentro del programa de Canal Digital, los dos primeros meses de mantención son obligatorios para garantizar la estabilización técnica y publicitaria.

Una vez cumplidos los 60 días iniciales, tienes total libertad:
• Si decides pausar o prescindir de la mantención, el servicio de gestión publicitaria, reportería y diseño de creativos se detiene.
• Como eres dueño absoluto de tu web, código y cuentas de anuncios, puedes administrar la plataforma por tu cuenta o transferir el alojamiento a tu propio servidor sin costos de salida ni penalizaciones.`,
        respuesta_bot: `Durante los primeros *2 meses de implementación base* la mantención es obligatoria para estabilizar el canal técnico y la pauta.

Cumplido ese plazo inicial, *tienes libertad total de continuar o pausarla*. Al ser dueño del 100% de tu código y accesos, puedes gestionar el activo por tu cuenta si lo prefieres, sin contratos de amarre. ✅`
    },

    {
        id: "faq_fin_sin_pauta_corre_mantencion",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "mantencion", "pauta"],
        pregunta: "¿Qué pasa si no tengo pauta publicitaria, corre la mantención mensual?",
        respuesta_web: `La tarifa de $250.000 + IVA/mes está estructurada como un pack integral donde la gestión de pauta y el soporte web van de la mano.

Si decides no realizar campañas publicitarias de forma definitiva, no tiene sentido pagar este programa completo. En ese escenario, migramos tu contrato hacia un plan de Soporte Web Técnico Puro (a una fracción del costo), enfocado exclusivamente en servidor, certificados SSL, monitoreo de seguridad y respaldos.`,
        respuesta_bot: `Si decides no hacer pauta publicitaria de forma permanente, no necesitas pagar los $250.000 + IVA.

En ese caso, reajustamos el servicio a un *plan básico de servidor y soporte técnico* para que tu página web siga rápida y segura en la nube sin pagar por gestión de anuncios. 🛡️`
    },

    {
        id: "faq_fin_un_mes_sin_presupuesto_pauta",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "pauta", "mantencion"],
        pregunta: "¿Qué pasa si un mes no tengo presupuesto para financiar la pauta?",
        respuesta_web: `La inversión en pauta es 100% flexible y la controlas tú. Si tu empresa enfrenta un mes de menor liquidez, puedes pausar o reducir a cero la inversión en Google o Meta directamente desde tu cuenta publicitaria, sin que las plataformas te cobren multas.

Durante ese mes, nuestros honorarios de mantención se mantienen para sostener el servidor, realizar optimizaciones de estructura web y preparar los creativos y audiencias para que vuelvas a encender la captación con fuerza cuando lo estimes conveniente.`,
        respuesta_bot: `No pasa nada grave. El presupuesto de pauta es *100% flexible*: puedes pausar tus campañas en Google o Meta desde tu panel en cualquier momento sin penalizaciones.

Nuestra mantención sigue activa asegurando tu servidor, tu web y dejando listos los nuevos anuncios para cuando decidas reactivar la inversión. 👍`
    },

    {
        id: "faq_tec_editar_textos_fotos",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "autoadministrable"],
        pregunta: "¿Puedo editar mis textos y fotos después de entregada la página?",
        respuesta_web: `Sí, con total autonomía. Diseñamos nuestras plataformas con paneles de administración desacoplados del código fuente:
• Marca Personal: Conectamos React con Strapi CMS, permitiendo actualizar biografía, especialidades, tarifas y fotos en un entorno limpio.
• Empresas B2B: Dispones de panel autogestionable estructurado para modificar contenidos corporativos, casos de estudio y testimonios.
• E-commerce: Administras todo el inventario, descripciones de producto, promociones y despachos directamente desde Shopify.

Todo esto sin riesgo de desconfigurar el diseño o alterar la velocidad de carga (WPO).`,
        respuesta_bot: `Sí, absolutamente. Te entregamos un panel autoadministrable moderno (*Strapi CMS* en React o el panel de *Shopify* en ecommerce).

Podrás modificar textos, fotos, tarifas o productos en segundos, con total autonomía y sin riesgo de romper el diseño visual. 🎛️`
    },

    {
        id: "faq_tec_negociar_con_logo_guardado",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "branding", "tarifas"],
        pregunta: "¿Tengo un logo guardado, sirve para poder negociar precio?",
        respuesta_web: `Tener un logotipo en alta resolución y un manual de marca previo es excelente porque acelera los tiempos de la fase inicial de diagnóstico y relato. Sin embargo, no modifica el valor del Setup inicial.

Los costos de implementación de Expansis Pro no financian el diseño de un logotipo; financian la ingeniería de software: programación en React o Shopify, arquitectura de carga rápida, conexión de eventos de conversión en GA4/GTM, configuración de pasarelas locales y despliegue de infraestructura en la nube.`,
        respuesta_bot: `Tener tu logo y manual de estilo listo nos ayuda a avanzar más rápido en el diseño, pero *no reduce el valor del Setup*.

Nuestras tarifas base financian la *ingeniería de software*: la programación en React/Shopify, la velocidad de carga, la telemetría de conversión y la integración de pasarelas. ⚙️`
    },

    {
        id: "faq_tec_que_pasa_si_ya_tienen_web",
        tags: ["marca-personal-profesionales", "empresas-b2b", "ecommerce", "migracion"],
        pregunta: "¿Qué pasa si ya tenemos un sitio web?",
        respuesta_web: `En la sesión de diagnóstico inicial auditamos técnicamente tu sitio actual.

Evaluamos tres factores: velocidad de carga real (WPO), experiencia móvil y correcta telemetría de conversión:
• Si tu web actual está desarrollada en WordPress u otro CMS con plantillas pesadas que tardan más de 3 segundos en abrir, recomendamos migrar a React o Shopify para evitar desperdiciar el presupuesto de anuncios por fuga de visitantes.
• Si tu sitio web actual cumple con los estándares técnicos y tiene una arquitectura rápida y sólida, podemos prescindir del desarrollo desde cero y enfocarnos en optimizar los formularios, la analítica y la pauta publicitaria.`,
        respuesta_bot: `Lo auditamos técnicamente en la sesión inicial. 🔍

Si tu web actual es lenta, inestable o está hecha en plantillas saturadas que hacen rebotar a las visitas, te recomendaremos migrar a *React o Shopify* para proteger la inversión publicitaria. Si tu sitio ya está bien construido y vuela, nos enfocamos directo en la estrategia de captación y pauta. 🚀`
    }
];

// Helper para filtrar preguntas según el slug de la solución
export const getFaqsBySolutionSlug = (slug) => {
    return faqsData.filter((faq) => faq.tags.includes(slug));
};