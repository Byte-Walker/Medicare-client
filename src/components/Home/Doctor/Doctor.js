import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, speciality, img, description } = doctor;

    return (
        <div className="doctor-card">
            <img className="doctor-img" src={img} alt={name} />
            <div className="doctor-card-info">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-speciality">{speciality}</p>
                <p className="doctor-description">{description.slice(0, 60) + '...'}</p>
            </div>
            <div className="doctor-card-social-icons">
                <a href="#" rel="noreferrer" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" rel="noreferrer" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="tel: (123)456-7890">
                    <i className="fas fa-phone"></i>
                </a>
            </div>
        </div>
    );
};

export default Doctor;
