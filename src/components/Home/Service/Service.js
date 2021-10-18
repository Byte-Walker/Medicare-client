import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const history = useHistory();
    const { name, img, description } = service;

    const handleService = () => {
        history.push(`/service/${name}`);
    }

    return (
        <div className="service-card">
            <img className="service-card-img" src={img} alt={name} />
            <div className="service-card-info">
                <h3 className="service-card-title">{name}</h3>
                <p className="service-card-description">{description.slice(0, 100) + '...'}</p>
                <button onClick={handleService} className="btn btn-primary">Learn more</button>
            </div>
        </div>
    );
};

export default Service;
