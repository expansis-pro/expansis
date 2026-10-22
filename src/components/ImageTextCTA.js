// src/components/ImageTextCTA.js (Rediseño Monolítico)
'use client';
import React from 'react';
import Link from 'next/link';

export default function ImageTextCTA({
    title,
    subtitle,
    text = [],
    imageDesktop,
    alt,
    buttonContent,
    buttonLink,
    secondaryButtonContent,
    secondaryButtonLink,
}) {
    return (
        <section className="py-24 bg-[#080b11] text-white border-b border-white/10">
            <div className="container-pro max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/15 bg-[#0d121d]">

                    {/* Columna Imagen */}
                    <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[480px] border-b lg:border-b-0 lg:border-r border-white/15 bg-black">
                        <img
                            src={imageDesktop}
                            alt={alt}
                            className="w-full h-full object-cover  contrast-125"
                        />
                        <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-black/80 text-primario px-3 py-1 border border-primario/30">
                            INGENIERÍA &amp; ESTRATEGIA
                        </div>
                    </div>

                    {/* Columna Texto */}
                    <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                        <div>
                            {subtitle && (
                                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario block mb-3">
                                    [ {subtitle} ]
                                </span>
                            )}
                            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-6">
                                {title}
                            </h2>

                            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                                {text.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Botones Rectilíneos */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                            {buttonContent && buttonLink && (
                                <Link
                                    href={buttonLink}
                                    className="py-3.5 px-8 bg-primario text-white text-xs font-mono uppercase tracking-[0.18em] font-medium hover:bg-primario/90 transition-all text-center"
                                >
                                    {buttonContent} →
                                </Link>
                            )}
                            {secondaryButtonContent && secondaryButtonLink && (
                                <Link
                                    href={secondaryButtonLink}
                                    className="py-3.5 px-8 border border-white/20 text-zinc-300 text-xs font-mono uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all text-center"
                                >
                                    {secondaryButtonContent}
                                </Link>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}