import IconSearch from '../../assets/search.svg';
import css from './SearchBar.module.css';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [value, setValue] = useState(query);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form className={css.SearchBar} onSubmit={onSubmit}>
      <input
        className={css.SearchBar__input}
        type='text'
        value={value}
        placeholder='Search for movies'
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={css.SearchBar__button}
        type='submit'
      >
        <img src={IconSearch} />
      </button>
    </form>
  )
}

export default SearchBar;