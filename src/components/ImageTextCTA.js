import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const ImageTextCTA = ({ imageMobile, imageDesktop, alt, text, buttonContent, buttonLink, subtitle }) => {
    return (
        <div className="about-content">
            <picture>
                <source srcSet={imageMobile} />
                <img src={imageDesktop} alt={alt} className="about-image fade-in-delay" />
            </picture>
            <div className="about-text fade-in-delay">
                <h3>{subtitle}</h3>
                {text.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}

                {buttonLink && buttonContent ? (<div className="cta-button-container">
                    <a onClick={() => scrollToSection(buttonLink)} className="cta-button cta-button-a cta-button-w100">{buttonContent}</a>
                </div>) : null}

            </div>
        </div>
    );
};

export default ImageTextCTA;