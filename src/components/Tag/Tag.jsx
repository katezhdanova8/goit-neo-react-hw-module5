import css from './Tag.module.css';

const Tag = ({ children }) => {
  return (
    <li className={css.Tag}>
      {children}
    </li>
  );
}

export default Tag;