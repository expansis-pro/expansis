// src/components/Icon.jsx
// Traduce las clases de Font Awesome que usa el sitio a SVG en línea (react-icons/fa6).
import {
	FaRocket,
	FaEye,
	FaUsers,
	FaLayerGroup,
	FaPaperPlane,
	FaArrowRight,
	FaLocationDot,
	FaEnvelope,
	FaRegEnvelope,
	FaClock,
	FaNewspaper,
	FaChevronDown,
	FaCheck,
} from 'react-icons/fa6';

const SOLID = {
	'fa-rocket': FaRocket,
	'fa-eye': FaEye,
	'fa-users': FaUsers,
	'fa-layer-group': FaLayerGroup,
	'fa-paper-plane': FaPaperPlane,
	'fa-arrow-right': FaArrowRight,
	'fa-location-dot': FaLocationDot,
	'fa-envelope': FaEnvelope,
	'fa-clock': FaClock,
	'fa-newspaper': FaNewspaper,
	'fa-chevron-down': FaChevronDown,
	'fa-check': FaCheck,
};
const REGULAR = { 'fa-envelope': FaRegEnvelope };
const STYLE_CLASSES = new Set(['fa-solid', 'fa-regular', 'fa-brands']);

export default function Icon({ name = '', className = '' }) {
	const parts = name.split(/\s+/);
	const key = parts.find((c) => c.startsWith('fa-') && !STYLE_CLASSES.has(c));
	const Component = (parts.includes('fa-regular') && REGULAR[key]) || SOLID[key];
	if (!Component) return null;
	return <Component aria-hidden='true' focusable='false' className={className} />;
}
