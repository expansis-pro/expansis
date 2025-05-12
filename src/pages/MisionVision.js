import React from 'react';
import ServiceItem from '../components/ServiceItem';

function MisionVision() {
  return (
    <section>

      <div className="section">


        <div className="services-list">
          <ServiceItem
            icon="fa-font-awesome"
            title="Misión"
            description="Ser un motor de desarollo de marcas prosperas que permitan generar un bienestar social en la generacion de bienes y servicios."
          />
          <ServiceItem
            icon="fa-heart"
            title="Visión"
            description="Ser líderes en el mercado de soluciones digitales, reconocidos por nuestra excelencia, compromiso y capacidad de <strong>generar un impacto positivo en nuestros clientes.</strong>"
          />
        </div>
      </div>
    </section>
  );
}

export default MisionVision;