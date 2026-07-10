// src/components/SEO.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, image }) {
    const location = useLocation();
    const baseUrl = 'https://expansispro.com';
    const canonicalUrl = `${baseUrl}${location.pathname}`.replace(/\/$/, "");

    useEffect(() => {
        // 1. Actualizar el Título de la página
        if (title) {
            document.title = title;
        }

        // 2. Helper para actualizar o crear Meta Tags controlados
        const updateMeta = (property, attrName, value) => {
            if (!value) return;
            // Busca si ya existe el tag en el head (sea el de react-snap o uno previo)
            let element = document.querySelector(`meta[${attrName}="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', value);
        };

        // 3. Helper para actualizar o crear Links (Canonical)
        const updateLink = (rel, value) => {
            if (!value) return;
            let element = document.querySelector(`link[rel="${rel}"]`);

            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', value);
        };

        // Ejecutar actualizaciones del SEO Base
        updateMeta('description', 'name', description);
        updateLink('canonical', canonicalUrl);

        // Ejecutar actualizaciones de Open Graph (Redes Sociales)
        updateMeta('og:title', 'property', title);
        updateMeta('og:description', 'property', description);
        updateMeta('og:url', 'property', canonicalUrl);
        if (image) {
            updateMeta('og:image', 'property', image);
        }

    }, [title, description, canonicalUrl, image]);

    return null; // No renderiza nada en el body, controla el head directamente
}