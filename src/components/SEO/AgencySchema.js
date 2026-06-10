import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AgencySchema() {
    const agencyData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Expansis Pro',
        'legalName': 'Expansis Pro Consultorías y Desarrollo Limitada',
        'description': 'Agencia de desarrollo web y marketing digital de alto impacto. Especialistas en diseño UX/UI, aplicaciones web con React, SEO técnico y automatizaciones para empresas.',
        'url': 'https://expansispro.com',
        'logo': 'https://expansispro.com/logo.png', // Reemplaza por la URL real de tu logo
        'sameAs': [
            'https://www.instagram.com/lobos_miniexcavadoras/' // Agrega tus RRSS reales de la agencia aquí
        ],
        'telephone': '+56944578994', // Reemplaza por tu teléfono de contacto oficial
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Santiago',
            'addressRegion': 'Metropolitana',
            'addressCountry': 'CL'
        },
        // Catálogo de servicios profesionales que ofrece tu agencia
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Servicios de Tecnología y Marketing Digital',
            'itemListElement': [
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Desarrollo de Aplicaciones Web a Medida (React, Node.js)'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Optimización de Motores de Búsqueda (SEO Técnico y Prerendering)'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Diseño de Interfaces Digitales (UX/UI)'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Estrategias de Marketing Digital y Growth Hacking'
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(agencyData)}
            </script>
        </Helmet>
    );
}