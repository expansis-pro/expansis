// src/components/EmbededSocial.js
import React, { useRef, useEffect } from "react";

function EmbededSocial() {
    const iframeContainerRef = useRef(null); // Usaremos esta referencia para el div que contendrá el iframe
    const scriptLoaded = useRef(false); // Ref para asegurar que el script externo se cargue una sola vez

    // URL del script de EmbedSocial para iframes
    const iFrameScriptSrc = "https://embedsocial.com/js/iframe.js";
    const iFrameScriptId = "EmbedSocialIframeScript"; // ID único para el script
    // URL del src del iframe
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
            console.log("EmbedSocial: iframe.js script cargado.");
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
                        console.log("EmbedSocial: iFrameResize ejecutado en el iframe.");
                    }, 100);
                }
            } else {
                console.error("EmbedSocial: La función iFrameResize no está definida después de cargar el script.");
            }
        };

        script.onerror = () => {
            console.error("EmbedSocial: Error al cargar el script iframe.js.");
        };

        return () => {
            console.log("EmbedSocial: Ejecutando cleanup.");
            const globalScript = document.getElementById(iFrameScriptId);
            if (globalScript && globalScript.parentNode) {
                globalScript.parentNode.removeChild(globalScript);
                console.log("EmbedSocial: Script global eliminado.");
            }
            if (iframeContainerRef.current) {
                iframeContainerRef.current.innerHTML = '';
                console.log("EmbedSocial: Contenido del iframe limpiado.");
            }
            scriptLoaded.current = false;
        };
    }, []);

    return (
        // CAMBIO REALIZADO: Contenedor para el título y el widget con max-w-6xl mx-auto
        <div className="max-w-6xl mx-auto text-center">
            {/* CAMBIO REALIZADO: Título movido aquí */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Síguenos en Instagram</h2>
            <div ref={iframeContainerRef} className="w-full" style={{ minHeight: '400px' }}>
                {/* El iframe se incrustará aquí dinámicamente */}
            </div>
        </div>
    );
}

export default EmbededSocial;