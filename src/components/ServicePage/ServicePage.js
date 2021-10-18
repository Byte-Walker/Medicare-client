
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServicePage.css';

const ServicePage = () => {
    const { serviceName } = useParams();
    const [services] = useServices();

    const service = services.find((service) => service.name === serviceName);

    const name = service?.name;
    const img = service?.img;
    const detailedDescription = service?.detailedDescription;


    return (
        <div className="max-width">
            <div className="service-page-container">
                <img className="service-page-banner" src={img} alt={name} />
                <h1>{name}</h1>
                <p>{detailedDescription}</p>
            </div>
            <div></div>
        </div>
    );
};

export default ServicePage;
