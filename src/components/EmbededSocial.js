'use client';

import React, { useRef, useEffect } from "react";

function EmbededSocial() {
    const iframeContainerRef = useRef(null);
    const scriptLoaded = useRef(false);

    const iFrameScriptSrc = "https://embedsocial.com/js/iframe.js";
    const iFrameScriptId = "EmbedSocialIframeScript";
    const iframeSrc = "https://embedsocial.com/api/pro_hashtag/b8e8d706b164ba5eeb87e9b768c9c4fe60356682";

    useEffect(() => {
        if (scriptLoaded.current && typeof window.iFrameResize === 'function' && iframeContainerRef.current?.querySelector('iframe')) {
            window.iFrameResize({}, iframeContainerRef.current.querySelector('iframe'));
            return;
        }

        const script = document.createElement('script');
        script.src = iFrameScriptSrc;
        script.id = iFrameScriptId;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            scriptLoaded.current = true;

            if (typeof window.iFrameResize === 'function') {
                if (iframeContainerRef.current) {
                    iframeContainerRef.current.innerHTML = '';

                    const iframe = document.createElement('iframe');
                    iframe.style.border = "0";
                    iframe.style.width = "100%";
                    iframe.style.height = "100%";
                    iframe.scrolling = "no";
                    iframe.src = iframeSrc;

                    iframeContainerRef.current.appendChild(iframe);

                    setTimeout(() => {
                        window.iFrameResize({}, iframe);
                    }, 100);
                }
            }
        };

        return () => {
            const globalScript = document.getElementById(iFrameScriptId);
            if (globalScript && globalScript.parentNode) {
                globalScript.parentNode.removeChild(globalScript);
            }
            if (iframeContainerRef.current) {
                iframeContainerRef.current.innerHTML = '';
            }
            scriptLoaded.current = false;
        };
    }, []);

    return (
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-8">Síguenos en Instagram</h2>
            <div ref={iframeContainerRef} className="w-full" style={{ minHeight: '400px' }}></div>
        </div>
    );
}

export default EmbededSocial;