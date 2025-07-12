// src/pages/MisionVision.js

import React from 'react';
import ServiceItem from '../components/ServiceItem';

function MisionVision() {
  return (
    // Contenedor de la sección con un fondo gris claro y padding consistente.
    <section id="misionvision" className="bg-gray-50 py-66 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Usamos un grid para el layout.
          - 1 columna en móviles (por defecto).
          - 2 columnas en pantallas medianas y grandes (`md:grid-cols-2`).
          - `gap-8` o `gap-12` para un buen espacio entre los dos elementos.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ServiceItem
            icon="fa-solid fa-rocket" // Icono actualizado para 'Misión'
            title="Misión"
            description="Ser un motor de desarollo de marcas prosperas que permitan generar un bienestar social en la generacion de bienes y servicios."
          />
          <ServiceItem
            icon="fa-solid fa-heart" // Icono para 'Visión'
            title="Visión"
            description="Ser líderes en el mercado de soluciones digitales, reconocidos por nuestra excelencia, compromiso y capacidad de <strong>generar un impacto positivo en nuestros clientes.</strong>"
          />
        </div>
      </div>
    </section>
  );
}

export default MisionVision;