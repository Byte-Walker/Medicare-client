import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description } = service;

    return (
        <div className="service-card">
            <img className="service-card-img" src={img} alt={name} />
            <div className="service-card-info">
                <h3 className="service-card-title">{name}</h3>
                <p className="service-card-description">{description.slice(0, 100) + '...'}</p>
                <button className="btn btn-primary">Learn more</button>
            </div>
        </div>
    );
};

export default Service;
