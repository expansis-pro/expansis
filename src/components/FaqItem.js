import React, { useState } from 'react';

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
            </div>
        </div>
    );
};

export default FaqItem;