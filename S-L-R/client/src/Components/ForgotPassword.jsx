import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css'; // Ensure this path is correct for your CSS file

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [loading, setLoading] = useState(false); // Loading state to disable button during request

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input fields
        if (!formData.email) {
            alert('Email is required!');
            return;
        }

        try {
            setLoading(true);
            const response = await Axios.post('http://localhost:3000/auth/forgot-password', formData);
            alert(response.data.message); // Notify user of success
            console.log('Response data:', response.data);
        } catch (err) {
            console.error('Error:', err);

            if (err.response) {
                console.error('Error response data:', err.response.data);
                alert(`Error: ${err.response.data.message || 'Please try again.'}`);
            } else if (err.request) {
                console.error('No response received:', err.request);
                alert('No response from the server. Please check your network connection.');
            } else {
                console.error('Error message:', err.message);
                alert(`Error: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <div className="logo-container">
                <p>Your Lens into Movies and Series!</p>
                <img src="./images/logo.png" alt="Cinescope Logo" />
            </div>
            <h2>Forgot Password</h2>
            <p>Please enter your email to receive a password reset link.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
                <div className="create-account">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
