import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../api/api';
import formatDate from '../../helpers/formatDate';
import getImgSrc from '../../helpers/getImgSrc';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import css from './MovieReviews.module.css';

const MovieReviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    fetchMovieReviews(movieId)
      .then(({ results }) => setMovieReviews(results))
      .catch(() => toast.error('Failed to load movie credits', { position: 'top-right' }))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div className={css.MovieReviews}>
      <Loader visible={loading} />
      {!loading && (
        <>
          {movieReviews.length > 0 ? (
            <ul className={css.MovieReviewsList}>
              {movieReviews.map(({
                id,
                author,
                content,
                author_details,
                created_at,
                updated_at
              }) => (
                <li key={id} className={css.MovieReview}>
                  <div className={css.MovieReviewAuthor}>
                    <img
                      src={getImgSrc(author_details.avatar_path, 'avatar')}
                      alt={author}
                    />
                    <h3>{author}</h3>
                    {author_details.rating && (
                      <p className={css.MovieReviewRating}>
                        (Rating: {author_details.rating})
                      </p>
                    )}
                  </div>
                  <div className={css.MovieReviewDates}>
                    <p>
                      <span>Created:</span>
                      {formatDate(created_at)}
                    </p>
                    <p>
                      <span>Updated:</span>
                      {formatDate(updated_at)}
                    </p>
                  </div>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <Message>No reviews</Message>
          )}
        </>
      )}
    </div>
  );
}

export default MovieReviews;