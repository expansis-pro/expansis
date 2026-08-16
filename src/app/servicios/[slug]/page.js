import React from 'react';
import { servicesData } from '@/data/servicesData';
import ServiceClientView from './ServiceClientView';

// 🟢 METADATOS DINÁMICOS PARA GOOGLE Y REDES SOCIALES
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return {
            title: 'Servicio no encontrado | Expansis Pro',
            description: 'El servicio solicitado no está disponible en nuestro catálogo.',
        };
    }

    const title = service.seo?.title || `${service.title} | Expansis Pro`;
    const description = service.seo?.description || service.description;
    const canonicalUrl = `https://expansispro.com/servicios/${slug}`;
    const imageUrl = `https://expansispro.com/assets/images/${slug}-hero.webp`;

    return {
        title: title,
        description: description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: title,
            description: description,
            url: canonicalUrl,
            siteName: 'Expansis Pro',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
            locale: 'es_CL',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [imageUrl],
        },
    };
}

export default async function ServicePage({ params }) {
    return <ServiceClientView params={params} />;
}