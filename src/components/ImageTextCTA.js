// src/components/ImageTextCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ImageTextCTA = ({ imageMobile, imageDesktop, title, text, buttonText, buttonLink }) => {
    return (
        <div className='about-content'>
            <picture>
                <source media="(max-width: 480px)" srcSet={imageMobile} />
                <img src={imageDesktop} alt={title} className='about-image fade-in-delay' />
            </picture>
            <div className='about-text fade-in-delay'>

                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <Link to={buttonLink} className='cta-button'>
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default ImageTextCTA;