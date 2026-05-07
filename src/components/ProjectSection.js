






// src/components/ProjectSection.js
import React from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import CtaButton from './CtaButton';

// Añadimos la prop 'titleTag' que por defecto es 'h2'
const ProjectSection = ({
    limit = 3,
    title = "Ecosistemas en Expansión",
    subtitle = "Casos de estudio donde la identidad y la ingeniería se fusionan.",
    titleTag: TitleTag = 'h2' // <--- "T" mayúscula porque React trata los tags dinámicos así
}) => {

    const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

    return (
        <section className="section-padding">
            <div className="container-pro">
                <div className="mb-16">
                    {/* Usamos el componente dinámico TitleTag */}
                    <TitleTag className="text-deepBlue leading-tight mb-4">
                        {title}
                    </TitleTag>
                    {subtitle && <p className="text-gray-500 max-w-2xl">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
                {limit && (
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