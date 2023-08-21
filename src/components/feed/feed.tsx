import styles from "./feed.module.scss";
import OrdersList from "../orders-list/orders-list";

const Feed = () => {
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
                <li className={`${styles.item_id} ${styles.ready}`}>123456</li>
                <li className={`${styles.item_id} ${styles.ready}`}>123456</li>
                <li className={`${styles.item_id} ${styles.ready}`}>123456</li>
                <li className={`${styles.item_id} ${styles.ready}`}>123456</li>
                <li className={`${styles.item_id} ${styles.ready}`}>123456</li>
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
            <p className={styles.total_value}>9876</p>
          </div>
          <div className={styles.total}>
            <h3 className={styles.heading}>Выполнено за сегодня:</h3>
            <p className={styles.total_value}>9876</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
