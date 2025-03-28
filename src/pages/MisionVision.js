import React from 'react';
import ServiceItem from '../components/ServiceItem';

function MisionVision() {
  return (
    <section>

      <div className="section">

        <h2 className="fade-in">Lineamiento</h2>
        <div className="services-list">
          <ServiceItem
            icon="fa-font-awesome"
            title="Misión"
            description="Potenciar el éxito de nuestros clientes a través de <strong>soluciones tecnológicas innovadoras y personalizadas.</strong>"
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