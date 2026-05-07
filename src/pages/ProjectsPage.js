import React from 'react';
import SecondaryHero from '../components/SecondaryHero';
import ProjectSection from '../components/ProjectSection'; // <--- Usamos el componente que ya tiene la lógica
import CallToAction from '../components/CallToAction';

const ProjectsPage = () => {
    return (
        <div className=" min-h-screen flex flex-col">
            {/* HERO: Ya maneja su propio padding interno */}
            <SecondaryHero
                title="Proyectos Realizados"
                subtitle="Transformando visiones en resultados digitales medibles y plataformas de alto rendimiento."
                icon="fa-solid fa-rocket"
                img="/assets/projects-hero.webp"
            />

            {/* SECCIÓN DE PROYECTOS: 
                Usamos el componente ProjectSection con limit={null} para que muestre todos.
                Este componente ya debería usar 'section-padding' y 'container-pro' internamente.
            */}
            <ProjectSection
                limit={null}
                title="Nuestra Ingeniería en Acción"
                subtitle="Un recorrido por los ecosistemas digitales que hemos diseñado y construido."
            />

            {/* SECCIÓN CTA: Unificada con el mismo contenedor maestro */}



            <CallToAction
                source="Página de Proyectos"
                title="¿Quieres resultados similares en tu negocio?"
                description="Apliquemos nuestra ingeniería de marca a tu próximo gran paso."
            />



        </div>
    );
};

export default ProjectsPage;