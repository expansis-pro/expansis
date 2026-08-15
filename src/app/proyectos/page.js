import React from 'react';
import { projectsData } from '@/data/projectsData';
import SecondaryHero from '@/components/SecondaryHero';
import ProjectSection from '@/components/ProjectSection';
import CallToAction from '@/components/CallToAction';

// 🌟 SEO NATIVO DE NEXT.JS
export const metadata = {
    title: "Casos de Éxito y Portafolio de Ingeniería Digital | Expansis Pro",
    description: "Explora las plataformas web, e-commerce a medida y ecosistemas digitales que hemos diseñado y construido para marcas con autoridad en Chile.",
    alternates: {
        canonical: 'https://expansispro.com/proyectos',
    },
};

export default function ProjectsPage() {
    const baseUrl = 'https://expansispro.com';

    return (
        <div className="min-h-screen flex flex-col">
            {/* 🌟 1. ItemList Avanzado con Tipos de Trabajo Específicos */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Portafolio de Casos de Éxito de Expansis Pro",
                        "description": "Plataformas web modulares y tiendas online de alta conversión construidas en React.",
                        "itemListElement": projectsData.map((project, index) => {
                            const isApp = project.id === "expansis-oscar";

                            return {
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": isApp ? "SoftwareApplication" : "CreativeWork",
                                    "@id": `${baseUrl}/proyectos#${project.id}`,
                                    "name": project.title,
                                    "alternativeHeadline": project.sector,
                                    "description": project.description.replace(/<[^>]*>/g, ''),
                                    "url": project.liveUrl,
                                    "image": `${baseUrl}${project.image}`,
                                    ...(isApp && { "applicationCategory": "BusinessApplication" })
                                }
                            };
                        })
                    })
                }}
            />

            {/* 🌟 2. Breadcrumbs de jerarquía de navegación */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
                            { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": `${baseUrl}/proyectos` }
                        ]
                    })
                }}
            />

            <SecondaryHero
                title="Proyectos Realizados"
                subtitle="Transformando visiones en resultados digitales medibles y plataformas de alto rendimiento."
                icon="fa-solid fa-rocket"
                img="/assets/images/hero-projects.webp"
            />

            <ProjectSection
                limit={null}
                title="Nuestra Ingeniería en Acción"
                subtitle="Un recorrido por los ecosistemas digitales que hemos diseñado y construido."
            />

            <CallToAction
                source="Página de Proyectos"
                title="¿Quieres resultados similares en tu negocio?"
                description="Apliquemos nuestra ingeniería de marca a tu próximo gran paso."
            />
        </div>
    );
}