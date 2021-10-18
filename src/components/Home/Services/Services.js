import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();

    return (
        <div>
            <div className="services-container max-width">
                <p className="section-category">Services</p>
                <h2 className="section-title">World Class Services</h2>
                <div className="services-list">
                    {services.map((service) => (
                        <Service service={service} key={service.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
