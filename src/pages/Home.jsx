import { useState } from 'react';
import { movies as movieData } from '../data/movies';
import MovieList from '../components/MovieList';

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
        <div className="hstyle">
      <h1>🎬 Movie List </h1>
       <h2> Miyka cinema </h2>
       </div>
      <input 
        type="text"
        placeholder="Пошук за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
