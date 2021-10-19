import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css';

const Signup = () => {
    const { emailSignUp, googleSignIn, update, error} = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleSubmitForm = (e) => {
        e.preventDefault();
        emailSignUp(email, password);
        update(name);
    }

    return (
        <div>
            <div>
                <div className="signup-bar">
                    <h1 signup-title>Sign Up</h1>
                </div>

                <div className="signup-form">
                    {' '}
                    <div className="signup-with" onClick={googleSignIn}>
                        <p>
                            <i class="fab fa-google"></i>
                            Signup with Google
                        </p>
                    </div>
                    <div className="or-separator">
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </div>
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
