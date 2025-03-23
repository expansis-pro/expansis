// src/components/ServiceItem.jsx
import React from 'react';


const ServiceItem = ({ icon, title, description }) => {
    return (
        <div className='service-item fade-in-delay'>
            <i className={`fas ${icon} fa-2xl`}></i>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>

        </div>
    );
};

export default ServiceItem;