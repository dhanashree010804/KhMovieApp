import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import logo from '../assets/image/logo.png';

const Profile = () => {
  return (
    <div className="profile-page">
     
      {/* Header */}
      <div className="header">
        <div className="brand-title">CINESCOPE</div>
        <img src={logo} alt="CINESCOPE Logo" className="logo" />
      </div>

      {/* Profile Box */}
      <div className="profile-box">
        
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-image-container">
            <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
            <div className="username">damon1890</div>
          </div>

          {/* Profile Details */}
          <div className="profile-details">
            <div className="profile-name">DAMON SALVATORE</div>
            <div className="profile-email">damon1890@gmail.com</div>
            <Link to="/edit-profile" className="edit-profile">
              Edit profile
            </Link>
          </div>
        </div>

        {/* Reviews and Bio Section */}
        <div className="reviews-bio-container">
          <div className="bio-section">
            <div className="bio-label">BIO</div>
            <p className="bio-text">
              Sci-fi and thriller enthusiast, I love movies with mind-bending plots and fantasy epics. Let's connect over the stories that keep us hooked!
            </p>
          </div>

          <div className="reviews">
            <p className="reviews-label">REVIEWS<br />SUBMITTED</p>
            <div className="reviews-count">15</div>
          </div>
        </div>

        {/* My Favorites Section */}
        <div className="favorites-section">
          <div className="favorites-label">MY FAVORITES</div>
          <div className="favorites-container">
            <div className="movie">
              <img src="/images/movie2.png" alt="Venom" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src="/images/movie7.png" alt="The A.I. Dharma Story" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src="/images/movie4.png" alt="Tigra" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src="/images/movie8.png" alt="Estree2" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src="/images/movie6.png" alt="Wild Robot" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src="/images/movie9.png" alt="Singhnam Again" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link to="/home" className="back-link">
          <div className="back-button">
            <p>BACK</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
