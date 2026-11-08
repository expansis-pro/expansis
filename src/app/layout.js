// src/app/layout.js
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactFloating from '@/components/ContactFloating';
import ContactDrawer from '@/components/ContactDrawer';
import AgencySchema from '@/components/SEO/AgencySchema';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo';

const GTM_ID = 'GTM-TQ3BF3B6';
const PIXEL_ID = '1489240472466043';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Expansis Pro | Desarrollo Web, Google y Meta Ads en Chile',
        template: '%s | Expansis Pro',
    },
    description:
        'Agencia en Chile que construye sitios en React y Shopify, gestiona Google y Meta Ads y mide la rentabilidad con GA4 y Looker Studio.',
    applicationName: SITE_NAME,
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

export default function RootLayout({ children }) {
    return (
        <html lang="es-CL" className={montserrat.variable}>
            <head>
                {/* Temporal: se elimina en el Paso 11 al migrar a react-icons */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <GoogleTagManager gtmId={GTM_ID} />
            <body className="bg-[#07090e] text-white min-h-screen flex flex-col antialiased selection:bg-primario selection:text-white">
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                        title="Google Tag Manager"
                    />
                </noscript>
                <AgencySchema />
                <Navbar />
                <main className="flex-grow flex flex-col bg-[#07090e]">{children}</main>
                <ContactFloating />
                <ContactDrawer />
                <Footer />

                {/* Temporal: se mueve a GTM en el Paso 13 */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;
n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
                </Script>
            </body>
        </html>
    );
}