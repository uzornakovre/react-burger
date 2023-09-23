import styles from "./feed.module.scss";
import OrdersList from "../../components/orders-list/orders-list";
import { useAppDispatch } from "../../services/hooks";
import { useEffect, useState } from "react";
import { wsActions } from "../../services/websocket/wsSlice";
import { WS_URL } from "../../utils/constants";
import Statistics from "../../components/statistics/statistics";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Feed = () => {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState("one");

  function handleTabClick(tab: string) {
    setCurrentTab(tab);
  }

  useEffect(() => {
    dispatch(wsActions.connectionStart(`${WS_URL}/all`));
    return () => {
      dispatch(wsActions.connectionClose());
    };
  }, [dispatch]);

  return (
    <div className={styles.feed}>
      <h2 className={styles.title}>Лента заказов</h2>
      <div className={styles.tabs}>
        <Tab
          value="one"
          active={currentTab === "one"}
          onClick={() => handleTabClick("one")}
        >
          Заказы
        </Tab>
        <Tab
          value="two"
          active={currentTab === "two"}
          onClick={() => handleTabClick("two")}
        >
          Статистика
        </Tab>
      </div>
      <div className={styles.container}>
        <div
          className={`${styles.orders_list} ${
            currentTab === "two" && styles.orders_list_inactive
          }`}
        >
          <OrdersList place="feed" />
        </div>
        <Statistics isShown={currentTab === "two"} />
      </div>
    </div>
  );
};

export default Feed;
