// src/components/PageTransition.js
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw" // Inicia fuera de la pantalla a la izquierda
    },
    in: {
        opacity: 1,
        x: 0 // Se desliza hasta su posición final
    },
    out: {
        opacity: 0,
        x: "100vw" // Sale de la pantalla hacia la derecha
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;