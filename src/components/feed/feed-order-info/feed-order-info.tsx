import OrderInfo from '../../order-info/order-info';
import styles from './feed-order-info.module.scss';
import { getOrderId } from '../../../services/order/selectors';
import { useAppSelector } from '../../../services/hooks';

const FeedOrderInfo = () => {
  const orderId = useAppSelector(getOrderId);

  return (
    <div className={styles.container}>
      <h2 className={styles.id}>#{orderId}</h2>
      <OrderInfo />
    </div>
  )
}

export default FeedOrderInfo;
