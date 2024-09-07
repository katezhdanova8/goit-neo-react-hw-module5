import PosterPlaceholder from '../assets/poster-placeholder.png';
import Placeholder from '../assets/placeholder.png';

const getImgSrc = (posterPath, type = 'poster') => {
  return posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : type === 'poster' ? PosterPlaceholder : Placeholder;
}

export default getImgSrc;