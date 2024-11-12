import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Review.css';

const Review = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [movieSearch, setMovieSearch] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [message, setMessage] = useState('');

  const movies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"];
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Update rating on click
  const handleStarClick = (value) => {
    setSelectedRating(value);
  };

  // Update rating on hover
  const handleStarHover = (value) => {
    setSelectedRating(value);
  };

  // Update the review text and character count
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
    setCharCount(e.target.value.length);
  };

  // Handle movie search and filter options
  const handleMovieSearchChange = (e) => {
    setMovieSearch(e.target.value);
    const filtered = movies.filter(movie =>
      movie.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleMovieSelect = (movie) => {
    setMovieSearch(movie);
    setFilteredMovies([]);
  };

  const handleSubmitReview = () => {
    if (selectedRating === 0) {
      setMessage('Please provide a rating');
    } else if (reviewText.trim() === '') {
      setMessage('Please write a review');
    } else if (movieSearch.trim() === "") {
      setMessage('Please select a movie');
    } else {
      const newReview = {
        movie: movieSearch,
        rating: selectedRating,
        review: reviewText,
      };
      setSubmittedReviews([...submittedReviews, newReview]);
      setMovieSearch('');
      setReviewText('');
      setCharCount(0);
      setSelectedRating(0);
      setMessage('Review submitted successfully');
    }
  };

  return (
    <div className="review-container">
      <Link to="/home" className="home-button">Back to Home</Link>

      <div className="review-form">
        <h2>Review</h2>
        <form>
          {/* Rating Section */}
          <div className="form-group">
            <label htmlFor="rating">Rate</label>
            <div id="starRating" className="star-rating" title="Click to rate">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= selectedRating ? 'active' : ''}`}
                  onClick={() => handleStarClick(star)}
                  onMouseOver={() => handleStarHover(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Search Dropdown for Movie Selection */}
          <div className="form-group dropdown">
            <label htmlFor="movieSearch">Select Movie / Series</label>
            <input
              type="text"
              id="movieSearch"
              className="search-dropdown"
              placeholder="Search for a movie..."
              value={movieSearch}
              onChange={handleMovieSearchChange}
            />
            {filteredMovies.length > 0 && (
              <div className="options">
                {filteredMovies.map((movie, index) => (
                  <div
                    key={index}
                    className="option"
                    onClick={() => handleMovieSelect(movie)}
                  >
                    {movie}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Review Text Area */}
          <div className="form-group">
            <label htmlFor="reviewText">Your Review</label>
            <textarea
              id="reviewText"
              className="form-control"
              rows="4"
              placeholder="Share your thoughts about the movie..."
              maxLength="500"
              value={reviewText}
              onChange={handleReviewTextChange}
            />
            <div className="char-counter">{charCount}/500</div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmitReview}
          >
            Submit Review
          </button>

          {/* Feedback Message */}
          <div className="message">{message}</div>
        </form>
      </div>

      {/* Submitted Reviews */}
      <div className="reviews">
        <h3>Submitted Reviews</h3>
        <div id="reviewList">
          {submittedReviews.map((review, index) => (
            <div key={index} className="review-item">
              <strong>{review.movie}</strong> (Rating: {review.rating}): <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
