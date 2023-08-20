import styles from './orders.module.scss';
import OrdersList from '../../orders-list/orders-list';

const Orders = () => {
  return (
    <div className={styles.orders}>
      <OrdersList />
    </div>
  )
}

export default Orders;
