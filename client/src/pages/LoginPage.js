import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import './styles/LoginPage.css'; // Ensure styles complement the design
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div style={{ width: 1920, height: 1080, position: 'relative', background: '#F2F3FF', overflow: 'hidden' }}>
            {/* Background Circles */}
            <div style={{ width: 2040, height: 1198, left: -60, top: 599, position: 'absolute', background: 'white', borderRadius: 9999 }} />
            <div style={{ width: 2040, height: 1198, left: -60, top: 599, position: 'absolute', background: 'white', borderRadius: 9999 }} />

            {/* Login Box */}
            <div style={{ width: 388, height: 449, left: 766, top: 315, position: 'absolute' }}>
                <div style={{ width: 388, height: 449, position: 'absolute', background: 'white', boxShadow: '5px 5px 52px -12px rgba(51, 51, 51, 0.24)', borderRadius: 16 }} />

                <div style={{ left: 131, top: 106, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600' }}>
                    Admin Log In
                </div>
                <div style={{ left: 75, top: 141, position: 'absolute', textAlign: 'center', color: '#505050', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20 }}>
                    Log In to your account
                </div>

                {/* Email Field */}
                <div style={{ width: 328, height: 48, left: 30, top: 191, position: 'absolute', background: 'white', boxShadow: '0px 0px 0px 2px rgba(63, 66, 153, 0.16)', borderRadius: 8, outline: '1px #3F4299 solid', outlineOffset: '-1px' }}>
                    <input
                        type="text"
                        name="username"
                        style={{ width: '100%', height: '100%', paddingLeft: 16, fontSize: 14, fontFamily: 'Open Sans', border: 'none', outline: 'none' }}
                        placeholder="example@email.com"
                        required
                    />
                </div>

                {/* Password Field */}
                <div style={{ width: 328, height: 48, left: 30, top: 255, position: 'absolute', background: 'white', borderRadius: 8, outline: '1px #BAB6B6 solid', outlineOffset: '-1px' }}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        style={{ width: '100%', height: '100%', paddingLeft: 16, fontSize: 14, fontFamily: 'Open Sans', border: 'none', outline: 'none' }}
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        style={{ position: 'absolute', right: 10, top: 10, background: 'none', border: 'none', cursor: 'pointer' }}
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? '🙈' : '👁️'}
                    </button>
                </div>

                {/* Forgot Password */}
                <div style={{ left: 252, top: 309, position: 'absolute', textAlign: 'right', color: '#3F4299', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '600' }}>
                    Forgot Password?
                </div>

                {/* Login Button */}
                <button
                    style={{ width: 328, height: 48, left: 30, top: 345, position: 'absolute', background: '#3F4299', borderRadius: 8, color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', border: 'none', cursor: 'pointer' }}
                    onClick={loginUser}
                >
                    Log In
                </button>

                {/* Registration Link */}
                <div style={{ left: 30, top: 400, position: 'absolute', color: '#505050', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400' }}>
                    New to Code Watch? <Link to='/signup' style={{ color: '#3F4299', fontWeight: '600', textDecoration: 'none' }}>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
