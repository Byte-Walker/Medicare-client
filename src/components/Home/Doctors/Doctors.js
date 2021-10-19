import { Link } from 'react-router-dom';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors] = useDoctors();

    return (
        <div className="doctors">
            <div className="doctors-container max-width">
                <p className="section-category">Doctors</p>
                <h2 className="section-title">Our Award Winning Doctors</h2>
                <div className="doctors-list">
                    {doctors.map((doctor) =>
                        doctor.id < 5 ? (
                            <Doctor doctor={doctor} key={doctor.id} />
                        ) : null
                    )}
                </div>
                <div className="visit-more">
                    <Link to="/doctors" className="visit-more-btn">Visit more </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
