// src/components/OurStory.js
import React from 'react';

const OurStory = () => {
    return (
        <section id="our-story" className="py-16 bg-white px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* h2: Tamaño y color gestionados globalmente */}
                <h2>Nuestra Historia</h2>

                <div className="text-left space-y-6">
                    {/* h3: Título destacado con color primario */}
                    <h3 className="text-primario text-center mb-8">
                        El Origen de Expansis Pro: Un Propósito Más Allá del Código.
                    </h3>

                    {/* Párrafos: Heredan font-light (300) del body por defecto */}
                    <div className="text-gray-600 leading-relaxed text-justify space-y-4 font-light">
                        <p>
                            Expansis Pro nació de una visión clara: transformar la forma en que los negocios abordan el mundo digital. Tras años de experiencia en diversas áreas, desde la ingeniería comercial hasta el desarrollo web y la fotografía publicitaria, notamos un patrón: muchos proyectos digitales se sentían repetitivos, carentes de un alma y desconectados de un propósito real.
                        </p>

                        <p>
                            Fue entonces cuando decidimos dar un giro. Nos propusimos tomar un camino diferente, buscando proyectos más atractivos y desafiantes. No queríamos simplemente "hacer páginas web", queríamos <strong>construir canales digitales desde sus cimientos</strong>, colaborando mano a mano con emprendedores y empresas que, como nosotros, buscan generar un impacto real.
                        </p>

                        <p>
                            Nuestra misión se convirtió en entregar un servicio que no solo genere un <strong>beneficio económico</strong> tangible para nuestros clientes, sino que también aporte un <strong>beneficio social</strong>. Creemos firmemente que al potenciar a marcas que ofrecen productos y servicios de valor, contribuimos a un ecosistema más próspero y a un bienestar social colectivo.
                        </p>

                        <p>
                            Cada proyecto que tomamos es una oportunidad para hacer realidad esta filosofía. Expansis Pro no es solo una agencia; es un socio estratégico en tu expansión, comprometido con tu crecimiento y con un propósito que va más allá de lo digital.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;