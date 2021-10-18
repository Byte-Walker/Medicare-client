import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-container max-width">
                <p>
                    <i className="fas fa-clock"></i>24/7 service
                </p>

                <div className="topbar-contact">
                    <p>
                        <i className="fas fa-phone"></i>
                        <a href="tel: (123)456-7890">(123)456-7890</a>
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto: info@medicare.com">
                            info@medicare.com
                        </a>
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.google.com/maps/place/Square+Hospitals+Ltd./@23.7528438,90.3793658,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b8ae4e52eabd:0x113b1873c9a9c2c1!8m2!3d23.7528438!4d90.3815598"
                        >
                            Find us
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
