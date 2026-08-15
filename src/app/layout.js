import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import AgencySchema from '@/components/SEO/AgencySchema';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: 'Expansis Pro | Soluciones Digitales',
    description: 'Soluciones digitales a marcas y personas individuales.',
    metadataBase: new URL('https://expansispro.com'),
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={montserrat.className}>

            <head>
                {/* 🟢 INYECCIÓN DE FONT AWESOME PARA VISUALIZAR LOS ÍCONOS */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>

            {/* 🟢 CORRECCIÓN: Usamos bg-ghostWhite y text-gray-800 para recuperar el fondo claro original */}
            <body className="bg-ghostWhite text-gray-800 min-h-screen flex flex-col antialiased">
                <AgencySchema />
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <WhatsAppFloating />
                <Footer />
            </body>
        </html>
    );
}