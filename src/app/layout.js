// app/layout.js
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactFloating from '@/components/ContactFloating'; // 👈 Reemplazo de WhatsAppFloating
import ContactDrawer from '@/components/ContactDrawer';     // 👈 Montaje del Panel Off-Canvas
import AgencySchema from '@/components/SEO/AgencySchema';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: 'Expansis Pro | Agencia de Desarrollo Web y Marketing Digital en Chile',
    description: 'Soluciones digitales a marcas y personas individuales.',
    metadataBase: new URL('https://expansispro.com'),
};

export default function RootLayout({ children }) {

    const PIXEL_ID = '1489240472466043';
    return (
        <html lang="es" className={montserrat.className}>
            <head>


                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                {/* Meta Pixel Code */}
                <Script
                    id="meta-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                        alt=""
                    />
                </noscript>

            </head>
            <body className="bg-[#07090e] text-white min-h-screen flex flex-col antialiased selection:bg-primario selection:text-white">
                <AgencySchema />
                <Navbar />
                <main className="flex-grow flex flex-col bg-[#07090e]">
                    {children}
                </main>
                <ContactFloating />
                <ContactDrawer />
                <Footer />
            </body>
        </html>
    );
}