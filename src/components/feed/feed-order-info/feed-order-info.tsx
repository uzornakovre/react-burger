import OrderInfo from "../../order-info/order-info";
import styles from "./feed-order-info.module.scss";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { useParams } from "react-router-dom";
import { wsActions } from "../../../services/websocket/wsSlice";
import { wsUrl } from "../../../utils/constants";
import { useEffect } from "react";
import { getOrders } from "../../../services/websocket/selectors";
import { IOrderDetails } from "../../../services/order/orderSlice";
import { getAllIngredients } from "../../../services/ingredients/selectors";

const FeedOrderInfo = () => {
  const orders = useAppSelector(getOrders);
  const dispatch = useAppDispatch();
  const orderId = useParams().id;
  const allIngredients = useAppSelector(getAllIngredients);

  const currentOrder = orders.find((order) => order._id === orderId);
  let currentOrderWithIngredients: IOrderDetails | null = null;
  let currentIngredients: Array<TIngredient> = [];

  currentOrder?.ingredients.forEach((id) => {
    let current = allIngredients.find((i) => i._id === id);
    if (current) currentIngredients.push(current);
  });

  if (currentOrder) {
    currentOrderWithIngredients = {
      ...currentOrder,
      ingredientsData: currentIngredients,
    };
  }

  useEffect(() => {
    dispatch(wsActions.connectionStart(`${wsUrl}/all`));
    return () => {
      dispatch(wsActions.connectionClose);
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.id}>#{currentOrder?.number}</h2>
      <OrderInfo type='default' />
    </div>
  );
};

export default FeedOrderInfo;
