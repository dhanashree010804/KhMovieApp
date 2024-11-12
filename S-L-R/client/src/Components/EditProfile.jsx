import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../App.css';

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState('profile-picture.jpg');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    dob: '',
    bio: '',
  });

  // Handle image file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Handle input change for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="edit-profile-container">
      {/* Back link to the Home page */}
      <Link to="/home" className="back-link">Back to Home</Link>

      <div className="container">
        {/* Profile Picture */}
        <div className="profile-pic">
          <img src={profileImage} alt="Profile" id="profileImage" />
          <label className="add-icon">
            Edit
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        {/* Form to edit profile details */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            required
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            required
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            placeholder="DOB"
            required
            onChange={handleInputChange}
          />
          <textarea
            name="bio"
            placeholder="Bio"
            rows="4"
            value={formData.bio}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="update-button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
