import { useAppSelector } from "../../services/hooks";
import {
  getOrders,
  getTotal,
  getTotalToday,
} from "../../services/websocket/selectors";
import styles from "./statistics.module.scss";

const Statistics = () => {
  const orders = useAppSelector(getOrders);
  const total = useAppSelector(getTotal);
  const totalToday = useAppSelector(getTotalToday);

  const ordersDone = orders
    .filter((order) => order.status === "done")
    .map((order) => (
      <li key={order._id} className={`${styles.item_id} ${styles.ready}`}>
        {order.number}
      </li>
    ))
    .slice(0, 16);

  const ordersPending = orders
    .filter((order) => order.status === "pending")
    .map((order) => (
      <li key={order._id} className={`${styles.item_id}`}>
        {order.number}
      </li>
    ))
    .slice(0, 16);

  return (
    <div className={styles.statistics}>
      <div className={styles.status}>
        <div className={styles.status_column}>
          <h3 className={styles.heading}>Готовы:</h3>
          <ul className={styles.status_column_list}>{ordersDone}</ul>
        </div>
        <div className={styles.status_column}>
          <h3 className={styles.heading}>В работе:</h3>
          <ul className={styles.status_column_list}>{ordersPending}</ul>
        </div>
      </div>
      <div className={styles.total}>
        <h3 className={styles.heading}>Выполнено за все время:</h3>
        <p className={styles.total_value}>{total}</p>
      </div>
      <div className={styles.total}>
        <h3 className={styles.heading}>Выполнено за сегодня:</h3>
        <p className={styles.total_value}>{totalToday}</p>
      </div>
    </div>
  );
};

export default Statistics;
