import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../api/api';
import getImgSrc from '../../helpers/getImgSrc';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import css from './MovieCast.module.css';

const MovieCast = ({ movieId }) => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    fetchMovieCredits(movieId)
      .then(({ cast }) => setMovieCast(cast))
      .catch(() => toast.error('Failed to load movie credits', { position: 'top-right' }))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      <Loader visible={loading} />
      {!loading && (
        <>
          {movieCast.length > 0 ? (
            <ul className={css.MovieCastList}>
              {movieCast.map(({ id, name, character, profile_path }) => (
                <li key={id} className={css.MovieCastItem}>
                  <img
                    src={getImgSrc(profile_path)}
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </li>
              ))}
            </ul>
          ) : (
            <Message>No cast</Message>
          )}
        </>
      )}
    </div>
  );
}

export default MovieCast;