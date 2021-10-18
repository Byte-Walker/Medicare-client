import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div>
            <div>
                <div className="signup-bar">
                    <h1 signup-title>Sign Up</h1>
                </div>

                <div className="signup-form">
                    {' '}
                    <div className="signup-with">
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
                    <form>
                        <p className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                        </p>
                        <p className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </p>
                        <p className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                        </p>
                        <div className="form-agree">
                            <input type="checkbox" name="agree" id="agree" />
                            <small>I agree to the terms and policies.</small>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
