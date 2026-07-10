import React from 'react';

import { useLocation } from 'react-router-dom';
import { projectsData } from '../data/projectsData'; // 🌟 Importamos tu data de proyectos
import SecondaryHero from '../components/SecondaryHero';
import ProjectSection from '../components/ProjectSection';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO'; // 🌟 Importamos el componente SEO

const ProjectsPage = () => {
    // 🌟 Configuración del Canonical Dinámico de Expansis Pro
    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    return (
        <div className="min-h-screen flex flex-col">
            {/* 🌟 CONTROL DE INMUNIDAD SEO */}
            <SEO
                title="Casos de Éxito y Portafolio de Ingeniería Digital | Expansis Pro"
                description="Explora las plataformas web, e-commerce a medida y ecosistemas digitales que hemos diseñado y construido para marcas con autoridad en Chile."
                image="https://expansispro.com/assets/images/hero-projects.webp"
            />

            {/* 🌟 1. ItemList de Proyectos para indexación masiva en Google */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Portafolio de Casos de Éxito de Expansis Pro",
                    "description": "Plataformas web modulares y tiendas online de alta conversión construidas en React.",
                    "itemListElement": projectsData.map((project, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": project.title,
                        "description": project.sector,
                        "url": project.liveUrl
                    }))
                })}
            </script>

            {/* 🌟 2. Breadcrumbs de jerarquía de navegación */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` },
                        { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": `${baseUrl}/proyectos` }
                    ]
                })}
            </script>


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
};

export default ProjectsPage;