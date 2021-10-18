import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Doctors />
            <Footer />
        </div>
    );
};

export default Home;
