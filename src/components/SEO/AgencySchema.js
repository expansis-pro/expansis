// src/components/SEO/AgencySchema.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contactData } from '../../data/contactConfig'; // Ajusta la ruta si es necesario

export default function AgencySchema() {
    const agencyData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Expansis Pro',
        'legalName': 'Expansis Pro Consultorías y Desarrollo Limitada',
        'description': 'Agencia de desarrollo web y marketing digital de alto impacto. Especialistas en diseño UX/UI, aplicaciones web con React, SEO técnico y automatizaciones para empresas.',
        'url': 'https://expansispro.com',
        'logo': 'https://expansispro.com/logo.png',
        'telephone': `${contactData.whatsapp.prefix} ${contactData.whatsapp.number}`, // 🌟 Dinámico desde tu config
        'email': contactData.email.address, // 🌟 Dinámico desde tu config
        'sameAs': [
            contactData.socials.instagram,
            contactData.socials.linkedin
        ],
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Santiago',
            'addressRegion': 'Metropolitana',
            'addressCountry': 'CL'
        },
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
            {/* ID único para fusionar los scripts durante la hidratación y evitar duplicados */}
            <script id="agency-jsonld" type="application/ld+json">
                {JSON.stringify(agencyData)}
            </script>
        </Helmet>
    );
}