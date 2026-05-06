import React from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard'; // Importamos el nuevo componente
import CtaButton from './CtaButton';

const ProjectSection = ({ limit = 3, title = "Ecosistemas en Expansión", subtitle = "Casos de estudio donde la identidad y la ingeniería se fusionan." }) => {

    const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

    return (
        <section className="section-padding bg-ghostWhite">
            <div className="container-pro">

                <div className="text-center mb-16">
                    <h2 className="text-deepBlue text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="section-subtitle">{subtitle}</p>
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
                            variant="secondary"
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