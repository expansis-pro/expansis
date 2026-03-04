// src/components/SecondaryHero.js
import React from 'react';
import { motion } from 'framer-motion';

const SecondaryHero = ({ title, subtitle, icon }) => {
    return (
        /* pt-32 asegura que el contenido no quede oculto bajo el Nav fixed */
        <section className="bg-deepBlue min-h-[350px] sm:min-h-[400px] flex items-center justify-center text-center px-4 pt-32 pb-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {icon && (
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-primario/10 rounded-full mb-4 text-primario">
                            <i className={`${icon} text-xl`}></i>
                        </div>
                    )}
                    <h1 className="text-ghostWhite">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-justify text-gray-300 font-light mt-4 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default SecondaryHero;