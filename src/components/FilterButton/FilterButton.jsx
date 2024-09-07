import clsx from 'clsx';
import css from './FilterButton.module.css';

const FilterButton = ({ disabled, onClick, children, active }) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={clsx(css.FilterButton, active && css.FilterButtonActive)}
    >
      {children}
    </button>
  );
}

export default FilterButton;