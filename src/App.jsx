// src/App.jsx
import { useState } from 'react';
import MovieList from './components/MovieList';
import { movies as movieData } from './data/movies';

function App() {
  const [search, setSearch] = useState('');

  const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>🎬 Movie List</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
