import OrderInfo from '../../order-info/order-info';
import styles from './feed-order-info.module.scss';

const FeedOrderInfo = () => {
  let orderId = 98765;

  return (
    <div className={styles.container}>
      <h2 className={styles.id}>#{orderId}</h2>
      <OrderInfo />
    </div>
  )
}

export default FeedOrderInfo;
