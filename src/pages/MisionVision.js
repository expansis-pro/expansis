// src/pages/MisionVision.js
import React, { useRef } from 'react';
import ServiceItem from '../components/ServiceItem';
import CardCarousel from '../components/CardCarousel';

function MisionVision() {
  const philosophyScrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (philosophyScrollRef.current) {
      philosophyScrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

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
    <section id="misionvision" className="py-6 sm:py-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2>Nuestra Filosofía</h2>
        <p className="text-lg text-primario font-semibold mb-12 fade-in">Los Pilares Que Guían Cada Uno De Nuestros Proyectos.</p>

        {/* --- CÓDIGO SIMPLIFICADO --- */}
        <CardCarousel>
          <ServiceItem {...misionData} />
          <ServiceItem {...visionData} />
        </CardCarousel>
      </div>
    </section>
  );
}

export default MisionVision;