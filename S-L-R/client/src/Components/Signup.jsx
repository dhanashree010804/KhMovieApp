import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css'; // Ensure this path is correct for your CSS file

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        age: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input fields
        if (!formData.name || !formData.username || !formData.email || !formData.age || !formData.password) {
            alert('All fields are required!');
            return;
        }

        try {
            const response = await Axios.post('http://localhost:3000/auth/signup', formData);
            console.log(response.data);
            alert(response.data.message); // Notify user of success
        } catch (err) {
            console.error('Full error object:', err);

            if (err.response) {
                console.error('Error response data:', err.response.data);
                alert(`Error signing up: ${err.response.data.message || 'Please try again.'}`);
            } else if (err.request) {
                console.error('No response received:', err.request);
                alert('No response from the server. Please check your network connection.');
            } else {
                console.error('Error message:', err.message);
                alert(`Error signing up. ${err.message}`);
            }
        }
    };

    return (
        <div className="form-container">
            <div className="logo-container">
                <div>
                    <h1>CINESCOPE</h1>
                    <p>Your Lens into Movies and Series!</p>
                </div>
                <img src="./images/logo.png" alt="Cinescope Logo" />
            </div>
            <h2>Create an Account</h2>
            <p>Signup</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <button type="button" className="btn btn-secondary">Sign Up With Google</button>
                <div className="create-account">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
};

export default Signup;
