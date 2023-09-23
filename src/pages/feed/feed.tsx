import styles from "./feed.module.scss";
import OrdersList from "../../components/orders-list/orders-list";
import { useAppDispatch } from "../../services/hooks";
import { useEffect } from "react";
import { wsActions } from "../../services/websocket/wsSlice";
import { WS_URL } from "../../utils/constants";
import Statistics from "../../components/statistics/statistics";

const Feed = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsActions.connectionStart(`${WS_URL}/all`));
    return () => {
      dispatch(wsActions.connectionClose());
    };
  }, [dispatch]);

  return (
    <div className={styles.feed}>
      <h2 className={styles.title}>Лента заказов</h2>
      <div className={styles.container}>
        <div className={styles.orders_list}>
          <OrdersList place="feed" />
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default Feed;
