import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        return password.length >= 6;
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (!validatePassword(value)) {
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
                    toast.success("Login Successful");

                    setTimeout(() => {
                        navigate('/Userhome');
                    }, 500);
                } else {
                    toast.error(res.data.message);
                  }
                }
            )
            .catch(err => console.log(err));
    }

    return (
        <div className="log-body">
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="login-form-container">
                    <form onSubmit={handleSubmit}>
                        <h2 className="login-heading">Log In</h2>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                className="form-control"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <div className="alert alert-danger">{emailError}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <div className="alert alert-danger">{passwordError}</div>}
                        </div>
                        <button className="btn btn-success w-100">Login</button>
                        <p>Don't have an account?</p>
                        <Link to="/register" className="btn btn-default border w-100 big-light rounded-0">
                            Create new account
                        </Link>
                    </form>
                    <button className="btn btn-danger w-100 mt-3">
                        Logout
                    </button>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default Login;
