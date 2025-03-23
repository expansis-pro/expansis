import React from 'react';


function Separador({ imageMobile, imageDesktop, alt }) {
    return (
        <picture className="separador">
            <source media="(min-width: 768px)" srcSet={imageDesktop} />
            <img src={imageMobile} alt={alt} />
        </picture>
    );
}

export default Separador;