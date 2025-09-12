// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../components/ServiceItem';
import Whatsapp from './Whatsapp';
import MoveToUrlButton from '../components/MoveToUrlButton';
import { servicesData } from '../data/servicesData'; // <-- IMPORTAMOS LOS DATOS

const Services = () => {
	return (
		<section id="services" className=" py-6 sm:py-6 ">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in">Nuestros Servicios</h2>
				<p className="text-lg text-gray-600 mb-12 fade-in">Haz clic en una tarjeta para ver más detalles</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{servicesData.map((service, index) => (
						<ServiceItem
							key={index}
							icon={service.icon}
							title={service.title}
							description={service.description}
							details={service.details}
						/>
					))}
				</div>

			</div>
			<MoveToUrlButton name="Contáctanos" url="/contacto" />
			<Whatsapp />
		</section>
	);
};

export default Services;