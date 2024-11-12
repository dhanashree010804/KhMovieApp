import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  // Example movie data array for demonstration
  const movies = [
    { title: 'Movie 1', genre: 'Comedy/Horror', rating: '7.8/10', poster: 'movie10.png' },
    { title: 'Movie 2', genre: 'Drama/Action', rating: '8.5/10', poster: 'movie11.png' },
    { title: 'Movie 3', genre: 'Romance/Drama', rating: '6.5/10', poster: 'movie12.png' },
    { title: 'Movie 4', genre: 'Sci-Fi/Fantasy', rating: '8.2/10', poster: 'movie13.png' },
    { title: 'Movie 5', genre: 'Action/Thriller', rating: '9.0/10', poster: 'movie14.png' },
    { title: 'Movie 6', genre: 'Comedy/Horror', rating: '7.8/10', poster: 'movie10.png' },
    { title: 'Movie 7', genre: 'Drama/Action', rating: '8.5/10', poster: 'movie11.png' },
    { title: 'Movie 8', genre: 'Romance/Drama', rating: '6.5/10', poster: 'movie12.png' },
    { title: 'Movie 9', genre: 'Sci-Fi/Fantasy', rating: '8.2/10', poster: 'movie13.png' },
    { title: 'Movie 10', genre: 'Romance/Drama', rating: '6.5/10', poster: 'movie12.png' },
  ];

  // State to track favorites
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Function to toggle favorite status and update localStorage
  const toggleFavorite = (movieTitle) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(movieTitle)
        ? prevFavorites.filter((title) => title !== movieTitle)
        : [...prevFavorites, movieTitle];

      // Save the updated list of favorites in localStorage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  return (
    <div>

      {/* Header Section with Search Bar */}
      <header className="header-section">
        <h1>Welcome to Cinescope</h1>
        <p>Your lens into the captivating world of movies and series!</p>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search a movie title, series..." />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>

      {/* Vertically Oriented Movie List (8 in a row) */}
      <section className="movie-list vertical-list">
        <h2 className="section-title">Top Movies</h2>
        <div className="movie-slider-vertical">
          {movies.map((movie, index) => (
            <Link to="/review" key={index} className="movie-card-vertical">
              <img src={`images/${movie.poster}`} alt="Movie Poster" className="movie-poster" />
              <div className="movie-info">
                <h5>{movie.title}</h5>
                <p>Genre: {movie.genre}<br />Rating: ★ {movie.rating}</p>
                <button 
                  className="favorite-button" 
                  onClick={(e) => { 
                    e.preventDefault(); // Prevent navigation to review page
                    toggleFavorite(movie.title); 
                  }}
                >
                  <FontAwesomeIcon icon={favorites.includes(movie.title) ? faHeart : faHeartBroken} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Horizontally Oriented Movie List (6 in a row) */}
      <section className="movie-list horizontal-list">
        <h2 className="section-title">Trending Now</h2>
        <div className="movie-slider-horizontal">
          {movies.map((movie, index) => (
            <Link to="/review" key={index} className="movie-card-horizontal">
              <img src={`images/${movie.poster}`} alt="Movie Poster" className="movie-poster" />
              <div className="movie-info">
                <h5>{movie.title}</h5>
                <p>Genre: {movie.genre}<br />Rating: ★ {movie.rating}</p>
                <button 
                  className="favorite-button" 
                  onClick={(e) => { 
                    e.preventDefault(); // Prevent navigation to review page
                    toggleFavorite(movie.title); 
                  }}
                >
                  <FontAwesomeIcon icon={favorites.includes(movie.title) ? faHeart : faHeartBroken} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
