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