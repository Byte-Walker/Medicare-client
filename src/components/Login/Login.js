import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div>
                <div className="signup-bar">
                    <h1 signup-title>Login</h1>
                </div>

                <div className="signup-form">
                    {' '}
                    <div className="signup-with">
                        <p>
                            <i class="fab fa-google"></i>
                            Login with Google
                        </p>
                    </div>
                    <div className="or-separator">
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </div>
                    <form>
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
                            <small>Remember me</small>
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
