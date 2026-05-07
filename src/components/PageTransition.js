// src/components/PageTransition.js
import React from 'react';
import { motion } from 'framer-motion';

// --- CAMBIO: Variantes de animación más suaves (fade) ---
const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

// --- CAMBIO: Transición ajustada para el fade ---
const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="bg-ghostWhite min-h-screen w-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;