import { Link } from 'react-router-dom';
import formatDate from '../../helpers/formatDate';
import getSingleOrPlural from '../../helpers/getSingleOrPlural';
import getImgSrc from '../../helpers/getImgSrc';
import CalendarIcon from '../../assets/calendar.svg';
import ProgressBar from '../ProgressBar/ProgressBar';
import css from './MovieCard.module.css';

const MovieCard = ({ movie, fromLocation }) => {
  const { poster_path, title, vote_average, release_date, vote_count } = movie;
  return (
    <li className={css.MovieCard}>
      <Link to={`/movies/${movie.id}`} state={{ from: fromLocation }}>
        <div className={css.MovieCardImageWrapper}>
          <img
            className={css.MovieCardImage}
            src={getImgSrc(poster_path)}
            alt={title}
          />
        </div>
        <h2>{title}</h2>
        <div className={css.MovieCardRating}>
          <ProgressBar
            value={Math.round(vote_average) * 10}
          />
          <span>({vote_count} {getSingleOrPlural(vote_count, 'vote', 'votes')})</span>
        </div>

        {release_date && (
          <div className={css.MovieCardRelease}>
            <img src={CalendarIcon} />
            {formatDate(release_date)}
          </div>
        )}
      </Link>
    </li>
  );
}

export default MovieCard;