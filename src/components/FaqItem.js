import React, { useState } from 'react';
import { scrollToSection } from '../utils/scrollUtils';


// Número de teléfono con código de país (sin símbolos)
const phoneNumber = "+56965961086";
// Mensaje prediseñado (codificado para URL)
const message = encodeURIComponent("¡Hola! ¡Quiero descubrir cómo Expansis Pro puede ayudarme!");
// Construir el enlace de WhatsApp
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

const FaqItem = ({ question, answer, index, isOpen, onToggle }) => {
    // const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        onToggle(index);
    };

    return (
        <div className="faq-item">
            <div className="faq-question-container" onClick={handleClick}>
                <h5>{question}</h5>
                <span className="faq-icon">{isOpen ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                {answer}
                <hr></hr>
                <i>Si deseas saber más de Expansis Pro, puedes contactarnos a través de <a className="faq-item-anchortag"
                    href={whatsappLink}
                    target="_blank" // Abre el enlace en una nueva pestaña
                    rel="noopener noreferrer" // Recomendado por seguridad al usar target="_blank"

                >Whatsapp</a> o llenando el siguiente <a className="faq-item-anchortag" onClick={() => scrollToSection('contact')}>formulario de contacto</a>.</i>
            </div>
        </div>
    );
};

export default FaqItem;