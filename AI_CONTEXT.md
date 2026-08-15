# Contexto Arquitectónico de Expansis Pro (React 19 SPA)

Este documento es la Única Fuente de Verdad (SSOT) técnica, estética, de negocio y de distribución para la Inteligencia Artificial. Define la estructura de desarrollo, tokens de diseño, configuraciones SEO, telemetría y despliegue en producción.

## 🛠️ Tech Stack & Dependencias Core

- **Entorno Frontend:** React 19 + React DOM 19.
- **Estilos:** Tailwind CSS v3 + PostCSS + Autoprefixer.
- **Enrutamiento & Animación:** React Router v7 (`BrowserRouter` / `useLocation`) + Framer Motion v12 (`AnimatePresence` para transiciones fluidas).
- **Conectividad:** Axios v1 (Peticiones HTTP) + Firebase SDK v11 + EmailJS + ReCAPTCHA v3.

---

## 🎨 Design Tokens & Estilos Maquetados (`tailwind.config.js` & `index.css`)

- **Tipografía Core:** `Montserrat`, `sans-serif` (Inyectada globalmente como fuente principal).
- **Paleta de Colores de Marca:**
  - `deepBlue`: `#0F172A` (Fondo principal y secciones oscuras).
  - `primario`: `#F27405` (Naranja corporativo para botones de conversión y acentos).
  - `ghostWhite`: `#F8FAFC` (Color base de fondos claros y textos sobre fondos oscuros).
  - `secundario`: `#f4ad72`.
  - `gris`: `#cccccc`.
- **Clases Globales Inmunes:**
  - `.container-pro`: Restringe el ancho máximo a `7xl` con padding responsivo unificado.
  - `.section-padding`: Controla el espaciado vertical armónico en todo el sitio.
  - Las etiquetas `strong` tienen forzado un `font-weight: 500 !important` y heredan el tono `deepBlue` para consistencia del relato visual.

---

## 📁 Matriz de Rutas y Páginas (`src/App.js`)

Páginas optimizadas mediante división de código (_code splitting_) con carga perezosa (`lazy` + `Suspense`).

| Ruta (Path)        | Componente Core   | Chunk Generado en Build | Propósito / Tipo de Página                                         |
| :----------------- | :---------------- | :---------------------- | :----------------------------------------------------------------- |
| `/`                | `Home.js`         | `288.chunk.js`          | Landing page principal con video de fondo en el Hero.              |
| `/servicios`       | `ServicesHub.js`  | `123.chunk.js`          | Colección / Hub general de especialidades de la agencia.           |
| `/servicios/:slug` | `ServicePage.js`  | `123.chunk.js`          | Plantilla dinámica parametrizada según el servicio.                |
| `/proyectos`       | `ProjectsPage.js` | `123.chunk.js`          | Portafolio interactivo con marcado estructurado avanzado.          |
| `/quienes-somos`   | `QuienesSomos.js` | `130.chunk.js`          | Perfil del fundador, historia y filosofía corporativa.             |
| `/faq`             | `Faqs.js`         | `123.chunk.js`          | Acordeón dinámico conectado a la API de base de conocimiento.      |
| `/contacto`        | `Contact.js`      | `123.chunk.js`          | Formulario conectado a EmailJS y SheetDB con protección recaptcha. |
| `*`                | `NotFound.js`     | `351.chunk.js`          | Vista 404 personalizada ante rutas inexistentes.                   |

---

## 🔍 Estrategia de SEO Técnico & Inmunización de Tracking

Diseñada para mitigar la duplicación de etiquetas y la filtración de entornos locales en el HTML estático durante la etapa de compilación.

- **Componente `<SEO />` (`src/components/SEO/SEO.js`)**: Modifica dinámicamente el `document.title`, la meta descripción y las propiedades Open Graph. Formatea de forma estricta la URL canónica eliminando barras diagonales al final mediante `.replace(/\/$/, "")`.
- **Inyector `<JsonLd />` (`src/components/SEO/JsonLd.js`)**: Inserta bloques estructurados en el `<head>`. Destruye automáticamente scripts antiguos con el mismo ID al desmontar el componente para evitar duplicados semánticos en la SPA.
- **Inmunización en `index.html`**: Los scripts de analítica (GTM y Facebook Pixel) se encuentran encapsulados bajo la condición `if (navigator.userAgent !== 'ReactSnap')`. Esto evita que el navegador headless de compilación ejecute trackers y deje "horneadas" URLs como `localhost:45678` en los archivos estáticos de producción.

---

## 📊 Sistema de Telemetría unificado (`src/utils/trackingUtils.js`)

- **Clic de WhatsApp (`trackWhatsAppClick`)**: Envía de forma simultánea el evento personalizado `disparo_whatsapp_manual` a Google Tag Manager, la conversión a Google Ads (`AW-16965295721/...`), y el track de `Contact` a Meta Pixel, inyectando la ubicación dinámica del botón.
- **Envío de Formulario (`trackFormSubmit`)**: Despacha la señal de éxito a GTM (`disparo_formulario_manual`), la conversión a Google Ads y el evento `Lead` a Meta Pixel tras la validación del backend.

---

## 🚀 Pipeline de Post-Procesamiento & Despliegue (`package.json` & `firebase.json`)

Al ejecutar el comando de construcción, el flujo de empaquetado opera en tres etapas automáticas:

1. **`react-scripts build`**: Compila y minifica la aplicación web en la carpeta `/build`.
2. **`react-snap`**: Levanta una instancia interna de Chromium sin sandbox (`--no-sandbox`, `--disable-setuid-sandbox`), espera un retraso controlado de 3000ms para asegurar el renderizado de llamadas asíncronas, bloquea peticiones externas (`skipThirdPartyRequests: true`) y exporta las rutas rastreadas como archivos HTML físicos (`saveAs: "html"`).
3. **`node scripts/generate-sitemap.js`**: Script personalizado en Node que escanea los directorios de `/build`, calcula la fecha actual en tiempo real en formato ISO (AAAA-MM-DD) y escribe de forma automática el archivo `sitemap.xml` dinámico.

### Configuración del Servidor de Producción (`firebase.json`)

- **Proyecto Destino:** `expansispro-react`.
- **Directorio Público:** `build`.
- **URLs Limpias:** `cleanUrls: true` (Remueve las extensiones `.html` de la barra de navegación para mejorar la experiencia de usuario y el posicionamiento SEO).
- **Manejo de Errores (404):** Se eliminaron las reglas de reescritura masiva (`rewrites`) hacia el `index.html`. Si una ruta no existe en el build, Firebase sirve nativamente el archivo `404.html` y responde con un código de estado HTTP 404 real, destruyendo por completo la penalización de _Soft 404_ ante Google.

## 🌐 Integraciones con APIs & Datos Externos

El proyecto no depende únicamente de archivos estáticos locales; se conecta de forma dinámica con microservicios externos:

- **Base de Conocimiento Core (`https://bot.expansispro.com/api/faq`):** Las FAQs se sincronizan en vivo desde la API del Chatbot de la agencia, utilizando la variable de entorno `process.env.NEXT_PUBLIC_API_URL` (que en producción apunta a `https://bot.expansispro.com` y en desarrollo hace fallback a `http://localhost:3000`).
  - **Estrategia en `Faqs.js`:** Consume el endpoint completo para listar todo el universo de preguntas disponibles. Cuenta con métodos internos de formateo (`formatResponseText` y `parseBoldText`) para procesar e inyectar sintaxis Markdown (`**` y `•`) directamente en elementos JSX.
  - **Estrategia en `ServicePage.js`:** Consume el mismo endpoint de forma asíncrona, pero aplica un filtro estricto en el cliente. Solo almacena y renderiza las FAQs cuyo array de `faq.tags` incluya el `slug` del servicio activo o la etiqueta compartida `general`.
