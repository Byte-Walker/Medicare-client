import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Hamburger.css';

const Hamburger = ({display, setHamburgerDisplay}) => {
    const user = useAuth();
    const { signOutUser } = useFirebase();

    const logOutHandler = () => {
        signOutUser();
    };

    const hideHamburger = () => {
        setHamburgerDisplay('none');
    }

    return (
        <div className={"hamburger " + display}>
            <i onClick={hideHamburger} className="far fa-times-circle hamburger-close-icon"></i>

            <div>
                {user.email ? (
                    <div className="logged-in-user logged-in-user-hamburger">
                        <p className="username-hamburger">{user.displayName}</p>
                        <button
                            onClick={logOutHandler}
                            className="btn btn-danger-hamburger"
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link className="btn btn-primary" to="/signup">
                            Sign Up
                        </Link>
                        <Link className="btn btn-secondary" to="/login">
                            Login
                        </Link>
                    </div>
                )}
            </div>

            <div className="hamburger-menu">
                <a href="/#services">Services</a>
                <div className="hamburger-menu-separator"></div>
                <NavLink to="/doctors">Find a consultant</NavLink>
                <div className="hamburger-menu-separator"></div>
                <NavLink to="/appointment">Appointment</NavLink>
            </div>
        </div>
    );
};

export default Hamburger;
