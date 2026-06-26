// src/components/SEO/AgencySchema.js
import React from 'react';
import JsonLd from './JsonLd'; // 1. Importa tu inyector
import { contactData } from '../../data/contactConfig';
import { servicesData } from '../../data/servicesData'; // 🌟 Importamos tu data real de servicios

export default function AgencySchema() {
    const agencyData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://expansispro.com/#agency',
        'name': 'Expansis Pro',
        'legalName': 'Expansis Pro Consultorías y Desarrollo Limitada',
        'description': 'Agencia de desarrollo web y marketing digital de alto impacto. Especialistas en diseño UX/UI, aplicaciones web con React, SEO técnico y automatizaciones para empresas.',
        'url': 'https://expansispro.com',
        'logo': 'https://expansispro.com/logo.png',
        'image': 'https://expansispro.com/assets/images/expansisPro_aboutus.webp',
        'telephone': `${contactData.whatsapp.prefix} ${contactData.whatsapp.number}`,
        'email': contactData.email.address,
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
        // 🌟 CORREGIDO: El catálogo ahora se genera SOLO con tus servicios activos en la data
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Servicios de Tecnología y Marketing Digital',
            'itemListElement': servicesData.map((service) => ({
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': service.title // Lee "Desarrollo Web", "E-commerce", etc.
                }
            }))
        }
    };

    // 2. Retorna usando el componente optimizado
    return <JsonLd data={agencyData} id="agency-jsonld" />;
}