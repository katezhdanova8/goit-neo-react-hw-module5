import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BackIcon from '../../assets/back.svg';
import css from './GoBackButton.module.css';

const GoBackButton = () => {
  const location = useLocation();
  const previousLocationRef = useRef(location.state?.from || '/movies');

  return (
    <Link 
      to={previousLocationRef.current}
      className={css.GoBackButton} 
    >
      <img src={BackIcon} alt='Go back' />
      Go back
    </Link>
  );
}

export default GoBackButton;