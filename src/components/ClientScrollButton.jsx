// src/components/ClientScrollButton.jsx
'use client';
import React from 'react';

export default function ClientScrollButton({ targetId, action, className, children }) {
	const handleClick = () => {
		if (action === 'openDrawer') {
			window.dispatchEvent(new Event('open-contact-drawer'));
		} else if (targetId) {
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	return (
		<button onClick={handleClick} className={className}>
			{children}
		</button>
	);
}
