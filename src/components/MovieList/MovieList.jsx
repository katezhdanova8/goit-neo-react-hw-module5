import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

const MovieList = ({ movies, fromLocation }) => {
  return (
    <ul className={css.MovieList}>
      {movies.map(movie => (
        <MovieCard 
          key={movie.id}
          movie={movie} 
          fromLocation={fromLocation}
        />
      ))}
    </ul>
  );
}

export default MovieList;