// src/pages/MisionVision.js
import React, { useRef } from 'react';
import ServiceItem from '../components/ServiceItem';
import CardCarousel from '../components/CardCarousel';

function MisionVision() {
  const philosophyScrollRef = useRef(null);


  const misionData = {
    slug: "mision",
    icon: "fa-solid fa-rocket",
    title: "Misión",
    description: "Construir canales digitales a medida que impulsen la expansión de negocios con propósito.",
  };
  const visionData = {
    slug: "vision",
    icon: "fa-solid fa-eye",
    title: "Visión",
    description: "Ser el socio estratégico para empresas que buscan un crecimiento digital auténtico y próspero.",
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-16 text-deepBlue">Nuestra Filosofía</h2>

        {/* Este contenedor controla el ancho de las cards */}
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          <ServiceItem {...misionData} />
          <ServiceItem {...visionData} />
        </div>
      </div>
    </section>
  );
}

export default MisionVision;