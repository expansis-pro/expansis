/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        return [
            // ─────────────────────────────────────────────────────────
            // 1. UNIFICACIÓN DE DOMINIO (www.expansispro.com -> expansispro.com)
            // ─────────────────────────────────────────────────────────
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.expansispro.com',
                    },
                ],
                destination: 'https://expansispro.com/:path*',
                permanent: true,
            },

            // ─────────────────────────────────────────────────────────
            // 2. MAPEO DE RUTAS OBSOLETAS (/servicios -> /soluciones)
            // ─────────────────────────────────────────────────────────
            {
                source: '/servicios/web-para-profesionales',
                destination: '/soluciones/marca-personal-profesionales',
                permanent: true,
            },
            {
                source: '/servicios/ecommerce',
                destination: '/soluciones/ecommerce',
                permanent: true,
            },
            {
                source: '/servicios/desarrollo-web',
                destination: '/soluciones/empresas-b2b',
                permanent: true,
            },
            {
                source: '/servicios/marketing-digital',
                destination: '/soluciones/empresas-b2b',
                permanent: true,
            },
            {
                source: '/servicios',
                destination: '/soluciones',
                permanent: true,
            },
            // Comodín de seguridad para cualquier otra subruta no contemplada de /servicios
            {
                source: '/servicios/:path*',
                destination: '/soluciones',
                permanent: true,
            },

            // ─────────────────────────────────────────────────────────
            // 3. ARTÍCULOS DE BLOG PREVIOS
            // ─────────────────────────────────────────────────────────
            {
                source: '/blog/el-proceso-de-analisis-de-datos-6-etapas-y-pensamiento-estructurado',
                destination: '/blog/las-6-fases-del-analisis-de-datos-metodologia-google',
                permanent: true,
            },
            {
                source: '/blog/glosario-fundamental-analitica-de-datos',
                destination: '/blog/glosario-maestro-analitica-de-datos',
                permanent: true,
            },
            {
                source: '/blog/glosario-de-herramientas-y-terminos-de-analitica',
                destination: '/blog/glosario-maestro-analitica-de-datos',
                permanent: true,
            },
            {
                source: '/blog/glosario-completo-terminos-analisis-de-datos',
                destination: '/blog/glosario-maestro-analitica-de-datos',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;