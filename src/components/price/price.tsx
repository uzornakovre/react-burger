import { FC } from 'react';
import styles from './price.module.scss';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface IPriceProps {
  value: string;
  size: 'normal' | 'large';  
}

const Price: FC<IPriceProps> = ({ value, size }) => {
  return (
    <div className={styles.price}>
      <span className={`${styles.price_value} ${styles[size]}`}>{value}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default Price;
