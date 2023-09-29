import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        // Password must be at least 6 characters long
        return password.length >= 6;
    }

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        if (!validateEmail(inputEmail)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    }

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);

        if (!validatePassword(inputPassword)) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !validatePassword(password)) {
            return;
        }

        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                navigate('/Userhome');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="log-body">
        <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    {emailError && <div className="alert alert-danger">{emailError}</div>}
                    {passwordError && <div className="alert alert-danger">{passwordError}</div>}
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className={`form-control ${emailError ? "is-invalid" : ""}`}
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className={`form-control ${passwordError ? "is-invalid" : ""}`}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button className="btn btn-success w-100">Login</button>
                    <p>Don't have an account?</p>
                    <Link to="/register" className="btn btn-default border w-100 big-light rounded-0">
                        Create a new account
                    </Link>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Login;
