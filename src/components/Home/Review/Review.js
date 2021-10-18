import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, title, description } = review;

    return (
        <div className="review-card">
            <p className="review-title">{title}</p>
            <p className="review-description">{description}</p>
            <p className="review-name">{name}</p>
            <small>Happy client</small>
            <i className="fas fa-quote-right review-card-quote-icon"></i>
        </div>
    );
};

export default Review;
