import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <h5 onClick={handleClick}>{question}</h5>
            <div className={`faq-answer fade-in ${isOpen ? 'open' : ''}`}>
                {answer}
            </div>
        </div>
    );
};

export default FaqItem;