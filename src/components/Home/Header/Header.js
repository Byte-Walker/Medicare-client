import React from 'react';
import './Header.css';
import logo from '../../../images/logo-medicare.svg';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const user = useAuth();
    const {signOutUser} = useFirebase();

    const logOutHandler = () => {
        signOutUser();
    }

    return (
        <div className="header">
            <div className="header-container max-width">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="medicare logo" />
                </NavLink>

                <div>
                    <a href="/#services">Services</a>
                    <NavLink to="/doctors">Find a consultant</NavLink>
                    <NavLink to="/appointment">Appointment</NavLink>
                </div>

                <div>
                    {user.email ? (
                        <div className="logged-in-user">
                            <p className="username">{user.displayName}</p>
                            <button onClick={logOutHandler} className="btn btn-danger">
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
            </div>
        </div>
    );
};

export default Header;
