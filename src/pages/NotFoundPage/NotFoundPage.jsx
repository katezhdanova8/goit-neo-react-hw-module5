import { Link } from 'react-router-dom';
import CryIcon from '../../assets/cry.svg';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.NotFoundPage}>
      <img src={CryIcon} alt='Cry' />
      <h1>404</h1>
      <p>Page not found</p>
      <Link to='/'>Go to home page</Link>
    </div>
  );
}

export default NotFoundPage;