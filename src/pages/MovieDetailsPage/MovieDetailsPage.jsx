import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchMovieDetails } from "../../api/api";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import Loader from "../../components/Loader/Loader";
import FilterButton from "../../components/FilterButton/FilterButton";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import css from './MovieDetailsPage.module.css';


const MovieDetailsPage = ({ showCast, showReviews }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(() => toast.error('Failed to load movie', { position: 'top-right' }))
      .finally(() => setLoading(false));
  }, [movieId]);

  const showButtons = !loading && !!movie;

  return (
    <div className={css.MovieDetailsPage}>
      <Loader visible={loading} />
      {showButtons && <GoBackButton />}
      <MovieDetailsCard movie={movie} />
      {showButtons && (
        <div className={css.MovieDetailsButtons}>
          <Link to={`/movies/${movieId}/cast`}>
            <FilterButton active={showCast}>Cast</FilterButton>
          </Link>

          <Link to={`/movies/${movieId}/reviews`}>
            <FilterButton active={showReviews}>Reviews</FilterButton>
          </Link>
        </div>
      )}

      {showCast && <MovieCast movieId={movieId} />}
      {showReviews && <MovieReviews movieId={movieId} />}
    </div>
  );
}

export default MovieDetailsPage;