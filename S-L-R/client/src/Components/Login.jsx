import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../App.css'; // Ensure this path is correct for your CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, rememberMe: e.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input fields
        if (!formData.email || !formData.password) {
            alert('Both email and password are required!');
            return;
        }

        // Comment out the actual API call and user login logic
        try {
            // Simulate login success
            console.log('Simulating login with data:', formData);

            alert('Login successful! (Simulated)'); // Notify user of successful login

            // Simulate token handling
            if (formData.rememberMe) {
                localStorage.setItem('token', 'fake-jwt-token'); // Fake token for "Remember Me"
            } else {
                document.cookie = 'token=fake-jwt-token;path=/;max-age=3600'; // Fake token in a cookie
            }

            // Redirect to the home page after successful login (simulated)
            navigate('/home'); // Simulating a successful login and redirect to home page
        } catch (err) {
            console.error('Full error object:', err);
            alert('Error logging in. Please try again.');
        }
    };

    const handleForgotPassword = () => {
        const email = prompt('Enter your email for password reset:');
        if (!email) return;

        // Simulate password reset request
        alert('Password reset request sent! (Simulated)');
    };

    return (
        <div className="form-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="logo-container">
                <div>
                    <h1>CINESCOPE</h1>
                    <p>Your Lens into Movies and Series!</p>
                </div>
                <img src="./images/logo.png" alt="Cinescope Logo" />
            </div>
            <h2>Login to Your Account</h2>
            <p>Welcome back! Please login to continue</p>
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
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleCheckboxChange}
                        /> Remember Me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </button>
                <div className="create-account">
                    Don't have an account? <a href="/signup">Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
