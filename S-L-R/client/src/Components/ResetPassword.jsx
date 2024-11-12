import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css'; // Ensure this path is correct for your CSS file
import { useParams } from 'react-router-dom'; // Ensure react-router-dom is installed and used to get the token

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { token } = useParams(); // Get token from the URL params

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password field
        if (!password) {
            alert('Password is required!');
            return;
        }

        try {
            const response = await Axios.post(`http://localhost:3000/auth/reset-password/${token}`, { password });
            console.log(response.data);
            alert(response.data.message); // Notify user of success
        } catch (err) {
            console.error('Full error object:', err);

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
        }
    };

    return (
        <div className="form-container">
            <div className="logo-container">
                <p>Your Lens into Movies and Series!</p>
                <img src="./images/logo.png" alt="Cinescope Logo" />
            </div>
            <h2>Reset Password</h2>
            <p>Please create a new password.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Reset</button>

                <div className="create-account">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
