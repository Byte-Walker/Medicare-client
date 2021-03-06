import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css';

const Signup = () => {
    const { emailSignUp, googleSignIn,  error } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        emailSignUp(name, email, password);
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                //
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div>
                {/* Page bar */}
                <div className="page-bar">
                    <h1>Sign Up</h1>
                </div>

                {/* Signup form */}
                <div className="signup-form">
                    {' '}
                    {/* Google signup option */}
                    <div className="signup-with" onClick={handleGoogleSignIn}>
                        <p>
                            <i className="fab fa-google"></i>
                            Signup with Google
                        </p>
                    </div>
                    <div className="or-separator">
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </div>
                    {/* Email sign up form */}
                    <form onSubmit={handleSubmitForm}>
                        <p className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                            />
                        </p>
                        <p className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                            />
                        </p>
                        <p className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                            />
                        </p>
                        <div className="form-agree">
                            <input type="checkbox" name="agree" id="agree" />
                            <small>I agree to the terms and policies.</small>
                        </div>
                        <small className="error-message">{error}</small>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
