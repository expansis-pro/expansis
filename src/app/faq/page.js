// src/app/faq/page.js
import React from 'react';
import JsonLd from '@/components/SEO/JsonLd';
import CallToAction from '@/components/CallToAction';
import FaqExplorer from '@/components/FaqExplorer';
import faqsData from '@/data/faqsData';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Preguntas Frecuentes: Precios, Pauta y Mantención | Expansis Pro',
    description:
        'Quién paga la pauta, qué incluye la mantención, por qué el compromiso de 60 días y cómo funcionan nuestros programas web y de Ads.',
    path: '/faq',
});

const plain = (t = '') => t.replace(/\*+/g, '').trim();

export default function FaqsPage() {
    return (
        <main className="min-h-screen bg-[#07090e] text-white">
            <JsonLd
                id="faq-jsonld"
                type="FAQPage"
                data={{
                    mainEntity: faqsData.map((item) => ({
                        '@type': 'Question',
                        name: item.pregunta,
                        acceptedAnswer: { '@type': 'Answer', text: plain(item.respuesta_web || item.respuesta) },
                    })),
                }}
            />
            <FaqExplorer />
            <CallToAction
                source="Página de Preguntas Frecuentes"
                serviceName="Información General"
                title="¿Tienes una duda técnica particular?"
                description="Escríbenos directamente o agenda una sesión de evaluación para revisar la factibilidad de tu proyecto sin compromiso."
            />
        </main>
    );
}