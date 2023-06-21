import React from 'react';
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

export default Item;