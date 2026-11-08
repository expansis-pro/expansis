// src/components/SEO/AgencySchema.js
import JsonLd from './JsonLd';
import { contactData } from '@/data/contactConfig';
import { solutionsData } from '@/data/solutionsData';
import { SITE_URL } from '@/lib/seo';

export default function AgencySchema() {
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'ProfessionalService',
                '@id': `${SITE_URL}/#agency`,
                name: 'Expansis Pro',
                legalName: 'Expansis Pro SpA', // ← confirma la razón social real; debe coincidir con el footer
                url: SITE_URL,
                logo: {
                    '@type': 'ImageObject',
                    url: `${SITE_URL}/favicon/android-chrome-512x512.png`,
                    width: 512,
                    height: 512,
                },
                image: `${SITE_URL}/OGimage_1200x630_Expansis.jpg`,
                description:
                    'Agencia de desarrollo web en React y Shopify, gestión de Google y Meta Ads y analítica con GA4 y Looker Studio en Chile.',
                email: contactData.email.address,
                telephone: `+569${contactData.whatsapp.number}`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Santiago',
                    addressRegion: 'Región Metropolitana',
                    addressCountry: 'CL',
                },
                areaServed: { '@type': 'Country', name: 'Chile' },
                sameAs: [contactData.socials.linkedin, contactData.socials.instagram],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Programas de canal digital',
                    itemListElement: solutionsData.map((s) => ({
                        '@type': 'Offer',
                        url: `${SITE_URL}/soluciones/${s.slug}`,
                        priceCurrency: 'CLP',
                        itemOffered: { '@type': 'Service', name: s.title, description: s.tagline },
                    })),
                },
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: 'Expansis Pro',
                inLanguage: 'es-CL',
                publisher: { '@id': `${SITE_URL}/#agency` },
            },
        ],
    };

    return <JsonLd id="agency-jsonld" data={graph} />;
}