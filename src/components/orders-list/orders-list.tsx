import styles from './orders-list.module.scss';
import OrdersListItem from "./orders-list-item/orders-list-item";

const OrdersList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}><OrdersListItem /></li>
      <li className={styles.list_item}><OrdersListItem /></li>
      <li className={styles.list_item}><OrdersListItem /></li>
      <li className={styles.list_item}><OrdersListItem /></li>
      <li className={styles.list_item}><OrdersListItem /></li>
      <li className={styles.list_item}><OrdersListItem /></li>
      <li className={styles.list_item}><OrdersListItem /></li>
    </ul>
  )
}

export default OrdersList;
