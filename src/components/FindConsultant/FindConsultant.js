import React, { useEffect, useState } from 'react';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Home/Doctor/Doctor';
import './FindConsultant.css';

const FindConsultant = () => {
    const [doctors] = useDoctors();
    const [category, setCategory] = useState('all');
    const [filtered, setFiltered] = useState();

    console.log(category);

    const handleFilter = () => {
        const temp = doctors.filter((doctor) => doctor.speciality === category);
        setFiltered(temp);
    };

    useEffect(handleFilter, [category]);

    return (
        <div className="find-consultant">
            <div className="find-consultant-banner page-bar">
                <h1>Find your consultant here</h1>
            </div>
            <div className="max-width">
                <div className="category-list">
                    <button
                        onClick={() => setCategory('all')}
                        className="category-btn"
                    >
                        All
                    </button>
                    <button
                        onClick={() => setCategory('Psychology')}
                        className="category-btn"
                    >
                        Psychology
                    </button>
                    <button
                        onClick={() => setCategory('Cardiology')}
                        className="category-btn"
                    >
                        Cardiology
                    </button>
                    <button
                        onClick={() => setCategory('Osteology')}
                        className="category-btn"
                    >
                        Osteology
                    </button>
                    <button
                        onClick={() => setCategory('Pediatrics')}
                        className="category-btn"
                    >
                        Pediatrics
                    </button>
                    <button
                        onClick={() => setCategory('Orthopedics')}
                        className="category-btn"
                    >
                        Orthopedics
                    </button>
                    <button
                        onClick={() => setCategory('Gynaecology')}
                        className="category-btn"
                    >
                        Gynaecology
                    </button>
                </div>

                <div className="doctors-list">
                    {(category === 'all' ? doctors : filtered).map((doctor) => (
                        <Doctor doctor={doctor} key={doctor.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindConsultant;
