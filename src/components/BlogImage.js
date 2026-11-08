// src/components/BlogImage.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';

export default function BlogImage({
    src,
    alt,
    className = '',
    sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
    preload = false,
}) {
    const [hasError, setHasError] = useState(false);
    const clean = src?.trim();

    useEffect(() => {
        setHasError(false);
    }, [clean]);

    if (hasError || !clean) {
        return (
            <div className="absolute inset-0 bg-deepBlue flex flex-col items-center justify-center gap-1.5 p-4 text-center select-none">
                <div className="w-8 h-8 rounded-lg bg-primario/10 border border-primario/30 flex items-center justify-center">
                    <Icon name="fa-newspaper" className="text-primario text-sm" />
                </div>
                <span className="text-ghostWhite text-xs font-bold tracking-wider">
                    Expansis <span className="text-primario">Pro</span>
                </span>
                <span className="text-gray-400 text-[10px] font-light tracking-wider">Blog &amp; Recursos</span>
            </div>
        );
    }

    return (
        <Image
            src={clean}
            alt={alt || ''}
            fill
            sizes={sizes}
            preload={preload}
            className={className}
            onError={() => setHasError(true)}
        />
    );
}