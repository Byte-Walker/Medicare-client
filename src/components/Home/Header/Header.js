import React from 'react';
import './Header.css';
import logo from '../../../images/logo-medicare.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container max-width">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="medicare logo" />
                </NavLink>

                <div>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/doctors">Find a consultant</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
                <div>
                    <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                    <Link className="btn btn-secondary" to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
