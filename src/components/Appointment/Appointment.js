import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="page-bar">
                <h1>Make an appointment</h1>
            </div>

            {/* Appointment form for taking information */}
            <form className="max-width appointment-container">
                {/* Doctor information */}
                <div className="appointment-doctor">
                    <p className="input-group">
                        <label htmlFor="doctorName">Doctor's name</label>
                        <input type="text" name="doctorName" />
                    </p>
                    <p className="input-group">
                        <label htmlFor="department">Doctor's department</label>
                        <input type="text" name="department" />
                    </p>
                    <p className="input-group">
                        <label htmlFor="date">Appointment date</label>
                        <input type="date" name="date" />
                    </p>
                    <p className="input-group">
                        <label htmlFor="time">Time slot</label>
                        <input type="time" name="time" />
                    </p>
                </div>

                {/* Patient Information */}
                <div className="appointment-patient">
                    <p className="input-group">
                        <label htmlFor="name">Patient's name</label>
                        <input type="text" name="name" />
                    </p>
                    <p className="input-group">
                        <label htmlFor="age">Patient's age</label>
                        <input type="number" name="age" />
                    </p>
                    <p className="input-group">
                        <label htmlFor="age">Patient's Phone no.</label>
                        <input type="number" name="age" />
                    </p>
                    {/* Submit button */}
                    <div>
                        <button className="btn btn-signup" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Appointment;
