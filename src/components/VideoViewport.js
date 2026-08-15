'use client';

import React, { useRef, useEffect } from 'react';

export default function VideoViewport({ src, className = "" }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
            />
        </div>
    );
}