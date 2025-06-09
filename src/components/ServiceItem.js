// src/components/ServiceItem.jsx
// import React from 'react';


// const ServiceItem = ({ icon, title, description }) => {
//     return (
//         <div className='service-item fade-in-delay'>
//             <i className={`service-item-logo fas ${icon} fa-2xl`}></i>
//             <div className='service-item-text'>

//                 <h3 className="">{title}</h3>
//                 <p dangerouslySetInnerHTML={{ __html: description }}></p>
//             </div>

//         </div>
//     );
// };

// export default ServiceItem;


// src/components/ServiceItem.js

import React from 'react';

// Usamos dangerouslySetInnerHTML para que las etiquetas <strong> de la descripción funcionen.
// Si no necesitas HTML en la descripción, puedes cambiarlo por <p>{description}</p>
const ServiceItem = ({ icon, title, description }) => {
    return (
        // La "tarjeta" del servicio:
        // - Fondo blanco, padding, bordes redondeados y sombra.
        // - Efectos de transición en el hover: la sombra se hace más grande y la tarjeta se eleva ligeramente.
        // - El texto se alinea a la izquierda.
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out text-left">
            <div className="flex flex-col items-start">
                {/* Icono:
          - Color primario, tamaño de fuente grande y margen inferior.
        */}
                <i className={`${icon} text-primario text-4xl mb-4`}></i>

                {/* Título:
          - Tamaño de fuente, negrita y margen inferior.
        */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

                {/* Descripción:
          - Color de texto gris y tamaño de fuente base.
        */}
                <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>
            </div>
        </div>
    );
};

export default ServiceItem;