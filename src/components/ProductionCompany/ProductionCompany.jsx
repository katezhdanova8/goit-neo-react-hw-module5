import getImgSrc from '../../helpers/getImgSrc';
import css from './ProductionCompany.module.css';

const ProductionCompany = ({ company }) => {
  const { logo_path, name } = company;

  return (
    <li className={css.ProductionCompany}>
      <img
        className={css.ProductionCompanyLogo}
        src={getImgSrc(logo_path, 'avatar')}
        alt={name}
      />
      <span title={name}>{name}</span>
    </li>
  );
}

export default ProductionCompany;