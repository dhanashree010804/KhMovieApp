import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Wishlist.css';

const Wishlist = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Example data for movies
  const movies = [
    { title: 'Movie 1', genre: 'Comedy/Horror', rating: '7.8/10', poster: 'movie10.png' },
    { title: 'Movie 2', genre: 'Drama/Action', rating: '8.5/10', poster: 'movie11.png' },
    { title: 'Movie 3', genre: 'Romance/Drama', rating: '6.5/10', poster: 'movie12.png' },
    { title: 'Movie 4', genre: 'Sci-Fi/Fantasy', rating: '8.2/10', poster: 'movie13.png' },
    { title: 'Movie 5', genre: 'Action/Thriller', rating: '9.0/10', poster: 'movie14.png' },
  ];

  // Filter to display only favorited movies with poster and title
  const favoriteMovies = movies.filter(movie => favorites.includes(movie.title));

  return (
    <div>
      {/* Back Button */}
      <Link to="/home" className="back-link">
        <div className="back-button" style={{marginTop:"2rem"}}>
          <p>BACK</p>
        </div>
      </Link>

      <h1>Your Wishlist</h1>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="wishlist-movie-grid">
          {favoriteMovies.map((movie, index) => (
            <div key={index} className="wishlist-movie-card">
              <img 
                src={`images/${movie.poster}`} 
                alt={`${movie.title} Poster`} 
                className="movie-poster" 
              />
              <div className="movie-info">
                <Link to="/review" className="movie-title">
                  {movie.title}
                </Link>
                <p>Genre: {movie.genre}</p>
                <p>Rating: ★ {movie.rating}</p>
                <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
