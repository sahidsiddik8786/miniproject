import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Layout from "./components/Layout";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validateName = (value) => {
        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(value)) {
            setNameError("Name must only contain letters");
            return false;
        } else {
            setNameError("");
            return true;
        }
    }

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Invalid email address");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    }

    const validatePassword = (value) => {
        if (value.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    }

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        validateName(value);
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateName(name) && validateEmail(email) && validatePassword(password)) {
            axios.post('http://localhost:3001/register', { name, email, password })
                .then(result => {
                    toast.success("Registration Successful");

                    setTimeout(() => {
                        navigate("/login");
                    }, 500)
                })
                .catch(err => {
                    console.error(err);
                    setError("Registration failed. Please try again.");
                });
        }
    }

    return (
        <div className="body">
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <h2>Registration</h2>
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                className="form-control"
                                value={name}
                                onChange={handleNameChange}
                            />
                            {nameError && <div className="text-danger">{nameError}</div>}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                className="form-control"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </div>
                        <button className="btn btn-success w-100">Register</button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
                <Toaster />
            </div>
        </div>
    )
}

export default Signup;
