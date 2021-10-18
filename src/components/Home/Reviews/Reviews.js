import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="reviews">
            <div className="max-width">
                <p className="section-category">Happy Clients</p>
                <h3 className="section-title">What Our Clients Say</h3>
                <div className="reviews-list">
                    {reviews.map((review) => (
                        <Review review={review} key={review.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
