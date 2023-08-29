import styles from "./orders-list.module.scss";
import OrdersListItem from "./orders-list-item/orders-list-item";
import { useAppSelector } from "../../services/hooks";
import { getOrders } from "../../services/websocket/selectors";
import { FC } from "react";

interface IOrderList {
  place: 'feed' | 'profile'
}

const OrdersList: FC<IOrderList> = ({ place }) => {
  const orders = useAppSelector(getOrders);

  const orderItems = orders?.map((order) => (
    <li key={order._id} className={styles.list_item}>
      <OrdersListItem
        place={place}
        _id={order._id}
        number={order.number}
        name={order.name}
        ingredients={order.ingredients}
        status={order.status}
        createdAt={order.createdAt}
        updatedAt={order.updatedAt}
      />
    </li>
  ));
  
  return (
    <ul className={styles.list}>
      {place === 'feed' ? orderItems : orderItems?.reverse()}
    </ul>
  );
};

export default OrdersList;
