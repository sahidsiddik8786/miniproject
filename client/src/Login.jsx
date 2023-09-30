import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Layout from "./components/Layout";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Invalid email address");
            return;
        }

        if (!validatePassword(password)) {
            setError("Password must be at least 6 characters long");
            return;
        }

        // Clear any previous error messages
        setError("");

        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                navigate('/home');
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
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    <button className="btn btn-success w-100">Login</button>
                    <p>Don't have an account?</p>
                    <Link to="/register" className="btn btn-default border w-100 big-light rounded-0">
                        Create new account
                    </Link>
                </form>
                <button  className="btn btn-danger w-100 mt-3">
                        Logout
                    </button>
            </div>
        </div>
        </div>
    );
}

export default Login;
