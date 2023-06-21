import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Item.module.scss';

class Item extends React.Component {
  render() {
    return (
      <div className={styles.item}>
        <img className={`${styles.image} pl-4 pr-4 pb-1`} src={this.props.image} alt={this.props.name} />
        <div className={styles.price}>
          <span className={styles.priceValue}>{this.props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.title} pt-1`}>{this.props.name}</p>
      </div>
    )
  }
}

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default Item;