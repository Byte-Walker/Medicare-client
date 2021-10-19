import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import './Home.css';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Doctors />
            <Reviews />
        </div>
    );
};

export default Home;
