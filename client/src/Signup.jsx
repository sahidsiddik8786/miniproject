import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); 
    const [location, setLocation] = useState(""); 
    const [file, setFile] = useState(null); 
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState(""); 
    const [locationError, setLocationError] = useState(""); 
    const [fileError, setFileError] = useState(""); 
    const [successMessage, setSuccessMessage] = useState(""); 
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

    const validatePhone = (value) => {
        if (value.length < 10) {
            setPhoneError("Invalid phone number");
            return false;
        } else {
            setPhoneError("");
            return true;
        }
    }

    const validateLocation = (value) => {
        if (value.length < 2) {
            setLocationError("Invalid location");
            return false;
        } else {
            setLocationError("");
            return true;
        }
    }

    const validateFile = (file) => {
        if (!file) {
            setFileError("Please upload a file");
            return false;
        } else {
            setFileError("");
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

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        validatePhone(value);
    }

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocation(value);
        validateLocation(value);
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        validateFile(selectedFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            validateName(name) &&
            validateEmail(email) &&
            validatePassword(password) &&
            validatePhone(phone) &&
            validateLocation(location) &&
            validateFile(file)
        ) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("phone", phone);
            formData.append("location", location);
            formData.append("image", file); 

            axios.post('http://localhost:3001/register', formData)
                .then(result => {
                    toast.success("Registration Successful");
                    setSuccessMessage("Registration Successful");

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
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Registration</h2>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                className="form-input"
                                value={name}
                                onChange={handleNameChange}
                            />
                            {nameError && <div className="error-message">{nameError}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                className="form-input"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <div className="error-message">{emailError}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                className="form-input"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <div className="error-message">{passwordError}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter Phone Number"
                                className="form-input"
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                            {phoneError && <div className="error-message">{phoneError}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter Location"
                                className="form-input"
                                value={location}
                                onChange={handleLocationChange}
                            />
                            {locationError && <div className="error-message">{locationError}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="image" className="form-label">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept=".jpg,.jpeg,.png" 
                                className="form-input file-input"
                                onChange={handleFileChange}
                            />
                            {fileError && <div className="error-message">{fileError}</div>}
                        </div>

                        <button className="btn-register">Register</button>
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
                <Toaster />
            </div>
        </div>
    )
}

export default Signup;
