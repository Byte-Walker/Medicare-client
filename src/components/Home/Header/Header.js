import React, { useState } from 'react';
import './Header.css';
import logo from '../../../images/logo-medicare.svg';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import Hamburger from '../Hamburger/Hamburger';

const Header = () => {
    const [hamburgerDisplay, setHamburgerDisplay] = useState('none');
    const user = useAuth();
    const { signOutUser } = useFirebase();
    console.log(user);

    const logOutHandler = () => {
        signOutUser();
    };

    const openHamburgerMenu = () => {
        setHamburgerDisplay('block');
    };

    return (
        <div className="header">
            <div className="header-container max-width">
                {/* Logo */}
                <NavLink to="/">
                    <img className="logo" src={logo} alt="medicare logo" />
                </NavLink>

                {/* Header menu */}
                <div className="header-menu">
                    <a href="/#services">Services</a>
                    <NavLink to="/doctors">Find a consultant</NavLink>
                    <NavLink to="/appointment">Appointment</NavLink>
                </div>

                {/* Header sign in/sign out  */}
                <div className="header-auth">
                    {user.email ? (
                        <div className="logged-in-user">
                            <p className="username">
                                {user.displayName
                                    ? user.displayName
                                    : user.email}
                            </p>
                            <button
                                onClick={logOutHandler}
                                className="btn btn-danger"
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

                {/* Hamburger icon */}
                <div onClick={openHamburgerMenu} className="hamburger-icon">
                    <i className="fas fa-bars"></i>
                </div>

                {/* Hamburger menu */}
                <Hamburger
                    display={hamburgerDisplay}
                    setHamburgerDisplay={setHamburgerDisplay}
                />
            </div>
        </div>
    );
};

export default Header;
