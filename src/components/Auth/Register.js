// src/components/Register/Register.js
import React, { useState } from 'react';
import { register } from '../../api/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register({ email, password });
            console.log('Registration successful', response);
        } catch (error) {
            console.error('Registration failed', error);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Register</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Show error message if exists */}
        </form>
    );
};

export default Register;
