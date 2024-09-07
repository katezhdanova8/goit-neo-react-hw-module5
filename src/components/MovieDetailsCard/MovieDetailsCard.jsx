import clsx from 'clsx';
import getSingleOrPlural from '../../helpers/getSingleOrPlural';
import formatDate from '../../helpers/formatDate';
import getImgSrc from '../../helpers/getImgSrc';
import CalendarIcon from '../../assets/calendar.svg';
import LinkIcon from '../../assets/link.svg';
import ProgressBar from '../ProgressBar/ProgressBar';
import ProductionCompany from '../ProductionCompany/ProductionCompany';
import Tag from '../Tag/Tag';
import css from './MovieDetailsCard.module.css';

const MovieDetailsCard = ({ movie }) => {
  if (!movie) return null;
  
  const {
    poster_path,
    title,
    vote_average,
    release_date,
    vote_count,
    genres,
    homepage,
    overview,
    production_companies,
    production_countries,
  } = movie;

  return (
    <div className={css.MovieDetailsCard}>
      <img
        className={css.MovieDetailsCardImage}
        src={getImgSrc(poster_path)}
        alt={title}
      />
      <div className={css.MovieDetailsCardInfoWrapper}>
        <h1>{title}</h1>

        {!!genres.length && (
          <ul className={css.MovieDetailsCardFlexWrapper}>
            {genres.map(genre => (
              <Tag key={genre.id}>
                {genre.name}
              </Tag>
            ))}
          </ul>
        )}

        <div className={clsx(
          css.MovieDetailsCardRating,
          css.MovieDetailsCardFlexWrapper
        )}>
          <ProgressBar
            value={Math.round(vote_average) * 10}
          />
          <span>({vote_count} {getSingleOrPlural(vote_count, 'vote', 'votes')})</span>
        </div>

        {release_date && (
          <div className={clsx(
            css.MovieDetailsCardRelease,
            css.MovieDetailsCardFlexWrapper
          )}>
            <img src={CalendarIcon} />
            {formatDate(release_date)}
          </div>
        )}

        {homepage && (
          <div className={clsx(
            css.MovieDetailsCardHomepage,
            css.MovieDetailsCardFlexWrapper
          )}>
            <img src={LinkIcon} />
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
            >
              Visit homepage
            </a>
          </div>
        )}

        {overview && (
          <p className={css.MovieDetailsCardOverview}>
            {overview}
          </p>
        )}

        {!!production_countries.length && (
          <div>
            <h2>Production countries:</h2>
            <ul className={css.MovieDetailsCardFlexWrapper}>
              {production_countries.map(country => (
                <Tag key={country.iso_3166_1}>
                  {country.name}
                </Tag>
              ))}
            </ul>
          </div>
        )}

        {!!production_companies.length && (
          <div>
            <h2>Production companies:</h2>
            <ul className={css.MovieDetailsCardFlexWrapper}>
              {production_companies.map(company => (
                <ProductionCompany key={company.id} company={company} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetailsCard;