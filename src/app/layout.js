import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Expansis Pro | Desarrollo Web, Google y Meta Ads en Chile',
        template: '%s | Expansis Pro',
    },
    description:
        'Agencia en Chile que construye sitios en React y Shopify, gestiona Google y Meta Ads y mide la rentabilidad con GA4 y Looker Studio.',
    applicationName: SITE_NAME,
    alternates: { canonical: '/' },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    openGraph: { siteName: SITE_NAME, locale: 'es_CL', type: 'website', images: [DEFAULT_OG_IMAGE] },
    twitter: { card: 'summary_large_image', images: [DEFAULT_OG_IMAGE.url] },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/favicon/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export const viewport = { themeColor: '#07090e' };