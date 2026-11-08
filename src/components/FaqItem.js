// src/components/FaqItem.js
'use client';

import React, { useId } from 'react';
import { formatResponseText } from '@/utils/faqFormatter';

export default function FaqItem({ question, answer, isOpen, onToggle, index }) {
    const panelId = useId();
    const n = typeof index === 'number' ? String(index + 1).padStart(2, '0') : null;

    return (
        <div
            className={`border transition-colors duration-200 ${isOpen ? 'border-white/30 bg-[#0f1420]' : 'border-white/10 bg-[#0d121d] hover:border-white/20'
                }`}
        >
            <h3 className="m-0 text-base sm:text-lg font-normal tracking-wide">
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex justify-between items-start text-left p-6 sm:p-7 focus:outline-none cursor-pointer gap-4"
                >
                    <span className="flex items-start gap-4">
                        {n && <span className="font-mono text-xs text-primario mt-1 select-none shrink-0">{n}.</span>}
                        <span className={isOpen ? 'text-white font-medium' : 'text-zinc-200'}>{question}</span>
                    </span>
                    <span className={`font-mono text-xs mt-1 shrink-0 ${isOpen ? 'text-primario' : 'text-zinc-500'}`}>
                        {isOpen ? '[—]' : '[+]'}
                    </span>
                </button>
            </h3>

            {/* La respuesta está siempre en el HTML; solo se oculta visualmente */}
            <div
                id={panelId}
                role="region"
                hidden={!isOpen}
                className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/5 text-zinc-300 font-light text-xs sm:text-sm leading-relaxed space-y-3"
            >
                {formatResponseText(answer)}
            </div>
        </div>
    );
}