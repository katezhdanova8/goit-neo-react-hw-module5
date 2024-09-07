import { useEffect, useState } from 'react';
import { fetchMovieSearch } from '../../api/api';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Message from '../../components/Message/Message';
import css from './MoviesPage.module.css';

const messages = {
  noMovies: 'No movies found',
  enterMovieName: 'Please enter a movie name',
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ query: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovies([]);
    setLoading(true);
    if (!filters.query) return setLoading(false);

    fetchMovieSearch(filters)
      .then(({ results }) => setMovies(results))
      .catch(() => toast.error('Failed to load movies', { position: 'top-right' }))
      .finally(() => setLoading(false));
  }, [filters]);

  const showMessage = !movies.length && !loading;

  return (
    <div className={css.MoviesPage}>
      <SearchBar onSearch={(query) => setFilters({ query })} />
      <Loader visible={loading} />

      {movies.length > 0 && (
        <MovieList movies={movies} fromLocation='/movies' />
      )}

      {showMessage && (
        <Message>
          {filters.query ? messages.noMovies : messages.enterMovieName}
        </Message>
      )}
    </div>
  );
}

export default MoviesPage;