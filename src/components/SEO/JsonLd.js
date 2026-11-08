import React from 'react';

export default function JsonLd({ data, type, id }) {
    if (!data) return null;
    const payload = {
        '@context': 'https://schema.org',
        ...(type && { '@type': type }),
        ...data,
    };
    const json = JSON.stringify(payload).replace(/</g, '\\u003c');
    return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}