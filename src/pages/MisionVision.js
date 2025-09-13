// src/pages/MisionVision.js

import React from 'react';
import ServiceItem from '../components/ServiceItem';

function MisionVision() {
  const misionData = {
    icon: "fa-solid fa-rocket",
    title: "Misión",
    description: "Construir canales digitales a medida que impulsen la expansión de negocios con propósito.",
    details: [
      "Crecimiento sostenible e impacto social positivo.",
      "Colaborar para entender la visión de cada cliente.",
      "Potenciar marcas que aportan valor a la comunidad.",
      "Crear soluciones digitales centradas en resultados."
    ]
  };

  const visionData = {
    icon: "fa-solid fa-eye",
    title: "Visión",
    description: "Ser el socio estratégico para empresas que buscan un crecimiento digital auténtico y próspero.",
    details: [
      "Ser reconocidos por nuestra estrategia y creatividad.",
      "Forjar relaciones a largo plazo basadas en la confianza.",
      "Convertirnos en un catalizador de historias de éxito.",
      "Innovar para ofrecer soluciones de vanguardia."
    ]
  };

  return (
    <section id="misionvision" className="py-6 sm:py-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2>Nuestra Filosofía</h2>
        {/* --- CAMBIO REALIZADO --- */}
        <p className="text-lg text-primario font-semibold mb-12 fade-in">Los Pilares Que Guían Cada Uno De Nuestros Proyectos.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ServiceItem
            icon={visionData.icon}
            title={visionData.title}
            description={visionData.description}
            details={visionData.details}
          />
          <ServiceItem
            icon={misionData.icon}
            title={misionData.title}
            description={misionData.description}
            details={misionData.details}
          />
        </div>
      </div>
    </section>
  );
}

export default MisionVision;