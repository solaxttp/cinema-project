// src/components/MovieCard.jsx
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={movie.title} className="movie-poster"/>
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p><strong>Жанр:</strong> {movie.genre}</p>
    <p><strong>Час сеансу:</strong> {movie.time}</p>
  </div>
);


export default MovieCard;
