/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    },
    async headers() {
        return [{ source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
    },
    async redirects() {
        return [
            // Residuos del build CRA que pudieron quedar indexados
            { source: '/index.html', destination: '/', permanent: true },
            { source: '/200.html', destination: '/', permanent: true },

            // /servicios → /soluciones (específicas primero)
            { source: '/servicios/web-para-profesionales', destination: '/soluciones/marca-personal-profesionales', permanent: true },
            { source: '/servicios/ecommerce', destination: '/soluciones/ecommerce', permanent: true },
            { source: '/servicios/desarrollo-web', destination: '/soluciones/empresas-b2b', permanent: true },
            { source: '/servicios/marketing-digital', destination: '/soluciones/empresas-b2b', permanent: true },
            { source: '/servicios/reportabilidad-looker-studio', destination: '/soluciones/empresas-b2b', permanent: true },
            { source: '/servicios', destination: '/soluciones', permanent: true },
            { source: '/servicios/:path*', destination: '/soluciones', permanent: true },

            // Slug que nunca existió en /soluciones
            { source: '/soluciones/web-para-profesionales', destination: '/soluciones/marca-personal-profesionales', permanent: true },

            // Blog
            { source: '/blog/el-proceso-de-analisis-de-datos-6-etapas-y-pensamiento-estructurado', destination: '/blog/las-6-fases-del-analisis-de-datos-metodologia-google', permanent: true },
            { source: '/blog/glosario-fundamental-analitica-de-datos', destination: '/blog/glosario-maestro-analitica-de-datos', permanent: true },
            { source: '/blog/glosario-de-herramientas-y-terminos-de-analitica', destination: '/blog/glosario-maestro-analitica-de-datos', permanent: true },
            { source: '/blog/glosario-completo-terminos-analisis-de-datos', destination: '/blog/glosario-maestro-analitica-de-datos', permanent: true },
        ];
    },
};

module.exports = nextConfig;