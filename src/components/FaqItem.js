// src/components/FaqItem.js
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatResponseText } from '@/utils/faqFormatter';

export default function FaqItem({ question, answer, isOpen, onToggle, index }) {
    const formattedIndex = typeof index === 'number' ? (index + 1).toString().padStart(2, '0') : null;

    return (
        <div className={`border transition-all duration-200 ${isOpen ? 'border-white/30 bg-[#0f1420]' : 'border-white/10 bg-[#0d121d] hover:border-white/20'}`}>
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-start text-left p-6 sm:p-7 focus:outline-none cursor-pointer gap-4"
            >
                <div className="flex items-start gap-4">
                    {formattedIndex && (
                        <span className="font-mono text-xs text-primario mt-0.5 select-none shrink-0">
                            {formattedIndex}.
                        </span>
                    )}
                    <h3 className={`text-base sm:text-lg font-normal tracking-wide transition-colors ${isOpen ? 'text-white font-medium' : 'text-zinc-200'}`}>
                        {question}
                    </h3>
                </div>
                <span className={`font-mono text-xs mt-1 shrink-0 ${isOpen ? 'text-primario' : 'text-zinc-500'}`}>
                    {isOpen ? '[—]' : '[+]'}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/5 text-zinc-300 font-light text-xs sm:text-sm leading-relaxed space-y-3">
                            {formatResponseText ? formatResponseText(answer) : <p>{answer}</p>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}