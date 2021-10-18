import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then((response) => response.json())
            .then((data) => setDoctors(data));
    }, []);

    return (
        <div className="doctors">
            <div className="doctors-container max-width">
                <p className="section-category">Doctors</p>
                <h2 className="section-title">Our Award Winning Doctors</h2>
                <div className="doctors-list">{
                    doctors.map((doctor) => <Doctor doctor={doctor} key={doctor.id}/>)
                }</div>
            </div>
        </div>
    );
};

export default Doctors;