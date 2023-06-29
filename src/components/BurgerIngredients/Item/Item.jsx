import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Item.module.scss';

function Item({ name, price, image }) {
  return (
    <div className={styles.item}>
      <img className={`${styles.image} pl-4 pr-4 pb-1`} src={image} alt={name} />
      <div className={styles.price}>
        <span className={styles.priceValue}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.title} pt-1`}>{name}</p>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default Item;