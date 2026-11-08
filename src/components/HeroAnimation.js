import React from 'react';

export default function HeroAnimation({ children }) {
    return <div className="hero-wrapper animate-rise-in">{children}</div>;
}