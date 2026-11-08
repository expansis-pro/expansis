// src/components/SecondaryHero.js
import React from 'react';

export default function SecondaryHero({ title, subtitle, icon, img, badge }) {
    return (
        <section className="relative bg-[#07090e] text-white min-h-[340px] sm:min-h-[380px] flex items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden border-b border-white/10">
            {img && (
                <>
                    <img
                        src={img}
                        alt=""
                        className="absolute inset-0 z-0 w-full h-full object-cover opacity-20 grayscale contrast-125"
                        fetchPriority="high"
                        loading="eager"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#07090e]/60 via-[#07090e]/85 to-[#07090e]" />
                </>
            )}

            <div className="container-pro max-w-4xl mx-auto relative z-20">
                <div className="flex flex-col items-center animate-rise-in">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-1.5 h-1.5 bg-primario" />
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primario">
                            [ {badge || 'EXPANSIS PRO'} ]
                        </span>
                        {icon && (
                            <div className="w-7 h-7 border border-primario/30 bg-primario/10 text-primario flex items-center justify-center text-xs ml-1 rounded-none">
                                <i className={icon} />
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-4">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="font-light text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto border-t border-white/10 pt-5 mt-2">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}