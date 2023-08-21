import styles from './order-info.module.scss';

const OrderInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.id}>123456</h2>
      <div className={styles.dish}>
        <h3 className={styles.title}>Бургер</h3>
        <p className={styles.dish_status}>Выполнен</p>
      </div>
    </div>
  )
}

export default OrderInfo;
