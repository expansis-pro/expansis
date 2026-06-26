import { useEffect } from 'react';

export default function JsonLd({ data, id }) {
    useEffect(() => {
        if (!data) return;

        // Limpiar scripts antiguos con el mismo ID para evitar duplicados en SPA
        const oldScript = document.getElementById(id);
        if (oldScript) oldScript.remove();

        // Crear e inyectar en el <head> de la página
        const script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(data);
        document.head.appendChild(script);

        return () => {
            const currentScript = document.getElementById(id);
            if (currentScript) currentScript.remove();
        };
    }, [data, id]);

    return null; // No renderiza nada en el cuerpo (DOM visible)
}