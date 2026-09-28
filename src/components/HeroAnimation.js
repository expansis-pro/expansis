'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-wrapper"
        >
            {children}
        </motion.div>
    );
};

export default HeroAnimation;
