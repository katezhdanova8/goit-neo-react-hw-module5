import { Link, useLocation, useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/back.svg';
import css from './GoBackButton.module.css';

const GoBackButton = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <Link 
      to={backLinkHref} 
      className={css.GoBackButton} 
    >
      <img src={BackIcon} alt='Go back' />
      Go back
    </Link>
  );
}

export default GoBackButton;