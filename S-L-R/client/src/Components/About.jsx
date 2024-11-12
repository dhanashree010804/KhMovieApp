import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about" style={{marginTop:"3rem"}}>
      {/* Title and Home Button */}
      <div className="title-container">
        <h1 className="page-title">About Us</h1>
        <Link to="/home" className="home-button">Home</Link> {/* Updated link to Profile page */}
      </div>

      <div className="about-container">
        {/* Who We Are Section */}
        <div className="who-we-are">
          <img
            src="https://cdn8.dissolve.com/p/D984_8_282/D984_8_282_1200.jpg"
            alt="Team working"
          />
          <div className="who-we-are-text">
            <h2 className="section-header">Who We Are</h2>
            <p>
              We are a team of movie enthusiasts, critics, and tech experts who are passionate about bringing a unique movie-watching experience to everyone. Our platform is designed to offer honest and insightful reviews on the latest films, classics, and everything in between. We believe that movies are more than just entertainment—they are a reflection of our culture, our dreams, and our stories. With that in mind, we strive to create a community where everyone, from casual viewers to serious cinephiles, can find something meaningful and share their thoughts.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="statistics">
          <div className="stat">
            <h3>2024</h3>
            <p>Founded</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Designs Created</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Employees</p>
          </div>
          <div className="stat">
            <h3>190</h3>
            <p>Countries</p>
          </div>
        </div>

        {/* Our Goals Section */}
        <div className="goals">
          <img
            src="https://thumbs.dreamstime.com/b/audience-happy-exciting-movie-theater-cinema-group-recreation-activity-entertainment-concept-194304376.jpg"
            alt="Team setting goals"
          />
          <div className="goals-text">
            <h2 className="section-header">Our Goals</h2>
            <p>
              Our goal is to become the go-to source for movie lovers everywhere, providing high-quality reviews, engaging discussions, and comprehensive movie ratings. We aim to create a platform that fosters open discussions, helps people discover new movies, and supports informed viewing choices. Whether you're looking for recommendations or want to share your own opinions, we are here to connect you with the world of cinema.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
