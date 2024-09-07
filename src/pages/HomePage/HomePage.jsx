import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchTrendingMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
import FilterButton from '../../components/FilterButton/FilterButton';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ period: 'day' });
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setMovies([]);
    setLoading(true);

    fetchTrendingMovies(filters)
      .then(setMovies)
      .catch(() => toast.error('Failed to load movies', { position: 'top-right' }))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className={css.HomePage}>
      <h1>Tranding movies</h1>
      
      <div className={css.HomePageFilterButtons}>
        <FilterButton
          disabled={loading}
          onClick={() => setFilters(prev => ({ ...prev, period: 'day' }))}
          active={filters.period === 'day'}
        >
          Day
        </FilterButton>

        <FilterButton
          disabled={loading}
          onClick={() => setFilters(prev => ({ ...prev, period: 'week' }))}
          active={filters.period === 'week'}
        >
          Week
        </FilterButton>
      </div>

      <Loader visible={loading} />

      <MovieList
        movies={movies.results
          ? Object.values(movies.results)
          : []
        }
        fromLocation='/'
      />
    </div>
  );
}

export default HomePage;