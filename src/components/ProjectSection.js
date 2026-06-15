// src/components/ProjectSection.js
import React from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import CtaButton from './CtaButton';

const ProjectSection = ({
    limit = 3,
    selectedIds = null,
    title = "Ecosistemas en Expansión",
    subtitle = "Casos de estudio donde la identidad y la ingeniería se fusionan.",
    titleTag: TitleTag = 'h2',
    showCta = null
}) => {

    // LÓGICA DE SELECCIÓN Y ORDENAMIENTO (Mantiene el control anterior)
    let displayedProjects = [];

    if (selectedIds && Array.isArray(selectedIds)) {
        displayedProjects = selectedIds
            .map(id => projectsData.find(project => project.id === id))
            .filter(project => project !== undefined);
    } else {
        displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;
    }

    const shouldShowCta = showCta !== null ? showCta : (selectedIds ? false : !!limit);

    return (
        <section className="section-padding">
            <div className="container-pro">
                <div className="mb-16">
                    <TitleTag className="text-deepBlue leading-tight mb-4">
                        {title}
                    </TitleTag>
                    {subtitle && <p className="text-gray-500 max-w-2xl">{subtitle}</p>}
                </div>

                {/* 🌟 CAMBIO AQUÍ: Agregamos lg:grid-cols-3 y ajustamos los gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {shouldShowCta && (
                    <div className="mt-16 text-center">
                        <CtaButton
                            to="/proyectos"
                            variant="outline"
                            className="group inline-flex items-center gap-3"
                        >
                            Ver portafolio completo
                            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                        </CtaButton>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;