import { useEffect, useState } from 'react';
import { fetchMovieSearch } from '../../api/api';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Message from '../../components/Message/Message';
import css from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';

const messages = {
  noMovies: 'No movies found',
  enterMovieName: 'Please enter a movie name',
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query') || '';

  useEffect(() => {
    setMovies([]);
    if (!query) return;
    
    setLoading(true);
    fetchMovieSearch({ query })
      .then(({ results }) => setMovies(results))
      .catch(() => toast.error('Failed to load movies', { position: 'top-right' }))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  const showMessage = !movies.length && !loading;

  return (
    <div className={css.MoviesPage}>
      <SearchBar onSearch={handleSearch} />
      <Loader visible={loading} />

      {movies.length > 0 && (
        <MovieList movies={movies} fromLocation={`/movies?query=${query}`} />
      )}

      {showMessage && (
        <Message>
          {query ? messages.noMovies : messages.enterMovieName}
        </Message>
      )}
    </div>
  );
}

export default MoviesPage;