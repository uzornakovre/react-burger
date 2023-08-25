import styles from "./feed.module.scss";
import OrdersList from "../orders-list/orders-list";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { useEffect } from "react";
import { wsActions } from "../../services/websocket/wsSlice";
import {
  getOrders,
  getTotal,
  getTotalToday,
} from "../../services/websocket/selectors";

const Feed = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getOrders);
  const total = useAppSelector(getTotal);
  const totalToday = useAppSelector(getTotalToday);

  const ordersDone = orders.filter((order) => order.status === "done");
  const ordersPending = orders.filter((order) => order.status === "pending");

  const doneIDs = ordersDone.map((order) => (
    <li key={order._id} className={`${styles.item_id} ${styles.ready}`}>
      {order.number}
    </li>
  ));

  // const orderItems = orders.map(order => (
  //   <li key={order._id}>
  //     <Card card={card}
  //           onCardClick={onCardClick}
  //           onDeleteClick={onDeleteClick}
  //           onCardLike={onCardLike}
  //     />
  //   </li>
  // ))

  useEffect(() => {
    dispatch(
      wsActions.connectionStart("wss://norma.nomoreparties.space/orders/all")
    );
  }, [dispatch]);

  return (
    <div className={styles.feed}>
      <h2 className={styles.title}>Лента заказов</h2>
      <div className={styles.container}>
        <div className={styles.orders_list}>
          <OrdersList />
        </div>
        <div className={styles.statistics}>
          <div className={styles.status}>
            <div className={styles.status_column}>
              <h3 className={styles.heading}>Готовы:</h3>
              <ul className={styles.status_column_list}>
                {doneIDs}
              </ul>
            </div>
            <div className={styles.status_column}>
              <h3 className={styles.heading}>В работе:</h3>
              <ul className={styles.status_column_list}>
                <li className={styles.item_id}>123456</li>
                <li className={styles.item_id}>123456</li>
                <li className={styles.item_id}>123456</li>
                <li className={styles.item_id}>123456</li>
                <li className={styles.item_id}>123456</li>
              </ul>
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
      </div>
    </div>
  );
};

export default Feed;
