import IconSearch from '../../assets/search.svg';
import css from './SearchBar.module.css';
import debounce from '../../helpers/debounce';

const SearchBar = ({ onSearch }) => {
  return (
    <div className={css.SearchBar}>
      <input
        className={css.SearchBar__input}
        type='text'
        placeholder='Search for movies'
        onChange={debounce((e) => onSearch(e.target.value), 500)}
      />
      <img src={IconSearch} />
    </div>
  )
}

export default SearchBar;