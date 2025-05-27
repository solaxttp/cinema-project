import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
      <p><strong>Сеанс:</strong> {movie.time}</p>
      <Link to={`/booking/${movie.id}`}>
        <button className="buy-btn">
          Забронювати
         </button>
      </Link>
    </div>
  );
};

export default MovieCard;
