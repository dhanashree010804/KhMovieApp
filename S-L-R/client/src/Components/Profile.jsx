import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import logo from "../assets/images/logo.png";
import profile from "../assets/images/BG1.jpg";
import movie1 from "../assets/images/movie2.png";
import movie2 from "../assets/images/movie7.png";
import movie3 from "../assets/images/movie8.png";
import movie4 from "../assets/images/movie6.png";
import movie5 from "../assets/images/movie6.png";
import movie6 from "../assets/images/movie9.png";
  

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
            <img src={profile} alt="Profile" className="profile-image" />
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
              <img src={movie1} alt="Venom" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src={movie2} alt="The A.I. Dharma Story" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src={movie3} alt="Tigra" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src={movie4} alt="Estree2" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src={movie5} alt="Wild Robot" className="movie-image" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="movie">
              <img src={movie6} alt="Singhnam Again" className="movie-image" />
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
