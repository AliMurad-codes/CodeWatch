import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import './styles/LoginPage.css'; // Importing external CSS file
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const { loginUser } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Code Watch</h2>
                <h2 className="login-subtitle">Login</h2>
                <form onSubmit={loginUser} className="login-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" required></input>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required></input>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required></input>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" placeholder="Re-enter your password" required></input>
                </div>
                <p class="error" id="error"></p>
                <Link to='/login' className='App-link'><button>Sign Up</button></Link>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
