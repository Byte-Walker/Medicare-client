import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { setUser, emailSignIn, googleSignIn, error, user, setError } =
        useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const location = useLocation();
    const redirect_url = location.state?.from || '/';

    if (user.email) {
        history.push(redirect_url);
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                console.error(error.code);
            });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        emailSignIn(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    setError('Wrong Password!');
                } else if (error.code === 'auth/user-not-found') {
                    setError('Accound not found!');
                } else if (error.code === 'auth/too-many-requests') {
                    setError('Sorry! You have exceeded your quota.');
                }
            });
    };

    return (
        <div>
            <div>
                <div className="signup-bar">
                    <h1 signup-title>Login</h1>
                </div>

                <div className="signup-form">
                    {' '}
                    <div className="signup-with" onClick={handleGoogleSignIn}>
                        <p>
                            <i className="fab fa-google"></i>
                            Login with Google
                        </p>
                    </div>
                    <div className="or-separator">
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </div>
                    <form onSubmit={handleSubmitForm}>
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
                            <small>Remember me</small>
                        </div>
                        <small className="error-message">{error}</small>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
