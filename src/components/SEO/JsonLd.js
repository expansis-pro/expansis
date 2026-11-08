// src/components/SEO/JsonLd.js
export default function JsonLd({ data, type, id }) {
    if (!data) return null;
    const payload = {
        '@context': 'https://schema.org',
        ...(type && { '@type': type }),
        ...data, // si data ya trae @context/@type, prevalece
    };
    const json = JSON.stringify(payload).replace(/</g, '\\u003c');
    return (
        <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
    );
}