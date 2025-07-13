// src/pages/MisionVision.js

import React from 'react';
import ServiceItem from '../components/ServiceItem';

function MisionVision() {
  // Datos para las tarjetas de Misión y Visión, incluyendo los detalles para la cara trasera.
  const misionData = {
    icon: "fa-solid fa-rocket",
    title: "Misión",
    description: "Ser un motor de desarrollo de marcas prósperas que permitan generar un bienestar social en la generación de bienes y servicios.",
    details: [
      "Impulsar el crecimiento de nuestros clientes.",
      "Crear soluciones digitales innovadoras y efectivas.",
      "Fomentar un ecosistema de bienestar social.",
      "Compromiso con la calidad y la excelencia."
    ]
  };

  const visionData = {
    icon: "fa-solid fa-eye", // Icono actualizado para 'Visión'
    title: "Visión",
    description: "Ser líderes en el mercado de soluciones digitales, reconocidos por nuestra excelencia, compromiso y capacidad de generar un impacto positivo.",
    details: [
      "Ser referentes en el mercado de soluciones digitales.",
      "Ser reconocidos por nuestra excelencia y compromiso.",
      "Generar un impacto positivo y medible en nuestros clientes.",
      "Innovar constantemente en nuestras estrategias."
    ]
  };

  return (
    // Contenedor de la sección con padding consistente. Hereda el fondo global.
    <section id="misionvision" className="py-6 sm:py-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título y subtítulo añadidos para dar contexto a la sección */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in">Nuestra Filosofía</h2>
        <p className="text-lg text-gray-600 mb-12 fade-in">Los pilares que guían cada uno de nuestros proyectos.</p>

        {/* Grid para las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceItem
            icon={misionData.icon}
            title={misionData.title}
            description={misionData.description}
            details={misionData.details} // Se pasan los detalles para la cara trasera
          />
          <ServiceItem
            icon={visionData.icon}
            title={visionData.title}
            description={visionData.description}
            details={visionData.details} // Se pasan los detalles para la cara trasera
          />
        </div>
      </div>
    </section>
  );
}

export default MisionVision;
