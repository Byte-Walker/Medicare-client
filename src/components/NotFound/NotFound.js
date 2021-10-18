import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={NotFoundImg} alt="Not Found" />
            <Link to="/"><i class="fas fa-arrow-left"></i> Go back to home page</Link>
        </div>
        
    );
};

export default NotFound;