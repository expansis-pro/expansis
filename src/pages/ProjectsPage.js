import React from 'react';
import { projectsData } from '../data/projectsData'; // Importamos tu data de proyectos
import SecondaryHero from '../components/SecondaryHero'; //[cite: 5]
import ProjectSection from '../components/ProjectSection'; //[cite: 5]
import CallToAction from '../components/CallToAction'; //[cite: 5]
import SEO from '../components/SEO/SEO'; // Importamos el componente SEO[cite: 5]

const ProjectsPage = () => {
    // Definimos la base URL de producción
    const baseUrl = 'https://expansispro.com'; //[cite: 5]

    return (
        <div className="min-h-screen flex flex-col">
            {/* 🌟 CONTROL DE INMUNIDAD SEO */}
            <SEO
                title="Casos de Éxito y Portafolio de Ingeniería Digital | Expansis Pro" //[cite: 5]
                description="Explora las plataformas web, e-commerce a medida y ecosistemas digitales que hemos diseñado y construido para marcas con autoridad en Chile." //[cite: 5]
                image="https://expansispro.com/assets/images/hero-projects.webp" //[cite: 5]
            />

            {/* 🌟 1. ItemList Avanzado con Tipos de Trabajo Específicos */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Portafolio de Casos de Éxito de Expansis Pro", //[cite: 5]
                    "description": "Plataformas web modulares y tiendas online de alta conversión construidas en React.", //[cite: 5]
                    "itemListElement": projectsData.map((project, index) => {
                        // Identificamos si el proyecto es una aplicación de software/IA o un sitio web corporativo
                        const isApp = project.id === "expansis-oscar"; //

                        return {
                            "@type": "ListItem", //[cite: 5]
                            "position": index + 1, //[cite: 5]
                            "item": {
                                "@type": isApp ? "SoftwareApplication" : "CreativeWork",
                                "@id": `${baseUrl}/proyectos#${project.id}`, // Ancla interna correcta
                                "name": project.title, //[cite: 5]
                                "alternativeHeadline": project.sector, // Mapea el sector industrial[cite: 4]
                                "description": project.description.replace(/<[^>]*>/g, ''), // Limpia los tags <strong> para el JSON
                                "url": project.liveUrl, // Enlace directo al resultado en vivo[cite: 4]
                                "image": `${baseUrl}${project.image}`, // URL absoluta de la imagen para Google
                                ...(isApp && { "applicationCategory": "BusinessApplication" }) // Categoría extra para el Agente de IA
                            }
                        };
                    })
                })}
            </script>

            {/* 🌟 2. Breadcrumbs de jerarquía de navegación */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList", //[cite: 5]
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${baseUrl}/` }, //[cite: 5]
                        { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": `${baseUrl}/proyectos` } //[cite: 5]
                    ]
                })}
            </script>

            <SecondaryHero
                title="Proyectos Realizados" //[cite: 5]
                subtitle="Transformando visiones en resultados digitales medibles y plataformas de alto rendimiento." //[cite: 5]
                icon="fa-solid fa-rocket" //[cite: 5]
                img="/assets/images/hero-projects.webp" //[cite: 5]
            />

            <ProjectSection
                limit={null} //[cite: 5]
                title="Nuestra Ingeniería en Acción" //[cite: 5]
                subtitle="Un recorrido por los ecosistemas digitales que hemos diseñado y construido." //[cite: 5]
            />

            <CallToAction
                source="Página de Proyectos" //[cite: 5]
                title="¿Quieres resultados similares en tu negocio?" //[cite: 5]
                description="Apliquemos nuestra ingeniería de marca a tu próximo gran paso." //[cite: 5]
            />
        </div>
    );
};

export default ProjectsPage;