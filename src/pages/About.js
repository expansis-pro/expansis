// src/pages/About.js
import React, { useEffect } from 'react';
import SecondaryHero from '../components/SecondaryHero';
import OurStory from '../components/OurStory';
import CallToAction from '../components/CallToAction';


const About = () => {
	// Garantiza que al navegar a esta página, el scroll suba al inicio
	// Esto es vital para que el Navbar empiece siendo transparente sobre el azul
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className=" min-h-screen">
			{/* HERO SECUNDARIO: 
                Ahora usa el componente reutilizable que configuramos 
                con pt-32 para que el texto no quede debajo del Nav.
            */}
			<SecondaryHero
				title="Sobre Expansis"
				subtitle="Conoce nuestra historia, valores y al equipo que lo hace posible."
				icon="fa-solid fa-users"
			/>

			{/* Cuerpo de la página: Historia y propósito */}
			<OurStory />

			{/* CTA: Personalizado para la página About.
                Recuerda que el fondo azul oscuro de este componente 
                creará un excelente cierre antes del Footer.
            */}
			<CallToAction
				title="¿Compartimos una visión?"
				description="Si buscas un socio estratégico que entienda tu negocio y no solo un proveedor, hablemos."
			/>
		</main>
	);
};

export default About;