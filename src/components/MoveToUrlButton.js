'use client';

import React from 'react';
import Link from 'next/link';
import { pushEvent } from '@/utils/trackingUtils';

const MoveToUrlButton = ({ url = '/', name = 'Botón', category = 'General', label, className = "" }) => {
    const finalLabel = label || `${name} a ${url}`;

    const handleButtonClick = () => {
        pushEvent('click_button', { button_name: name, button_category: category, button_label: finalLabel });
    };

    return (
        <div className="max-w-6xl mx-auto text-center py-6">
            <Link
                href={url}
                className={`inline-block bg-primario text-white py-3 px-8 rounded-lg shadow-lg hover:bg-secundario transition-all duration-300 transform hover:scale-105 ${className}`}
                onClick={handleButtonClick}
            >
                {name}
            </Link>
        </div>
    );
};

export default MoveToUrlButton;