import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner-doctor-women.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-container max-width">
                <div className="banner-left">
                    <h1 className="banner-title">
                        Get the best treatment right at your home
                    </h1>
                    <p className="banner-description">
                        We provide the most reliable service to bring harmony of
                        your body and soul. Our doctors are world class, our
                        care is award winning and our treatment is the best
                        healing. Get your appointment right now.{' '}
                    </p>
                    <Link className="btn btn-primary" to="/appointment">Appointment</Link>
                </div>
                <img className="banner-img" src={bannerImg} alt="Medicare Doctor Women" />
            </div>
        </div>
    );
};

export default Banner;
