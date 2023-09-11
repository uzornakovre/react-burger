import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import styles from "./order-info.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { getAllIngredients } from "../../services/ingredients/selectors";
import { FC, useEffect } from "react";
import {
  getOrders,
  getWSIsConnected,
  getWSIsPending,
} from "../../services/websocket/selectors";
import { useLocation, useParams } from "react-router-dom";
import { wsActions } from "../../services/websocket/wsSlice";
import { WS_URL } from "../../utils/constants";
import { getCookie } from "../../utils/cookies";

interface IOrderInfo {
  type: "default" | "modal";
}

const OrderInfo: FC<IOrderInfo> = ({ type }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const orderId = useParams().id;
  const orders = useAppSelector(getOrders);
  const isWSConnected = useAppSelector(getWSIsConnected);
  const allIngredients = useAppSelector(getAllIngredients);
  const wsPending = useAppSelector(getWSIsPending);

  let currentIngredients: Array<TIngredient> = [];
  let price = 0;

  const currentOrder = orders.find((order) => order._id === orderId);
  let currentOrderWithIngredients: TOrderDetails | null = null;

  currentOrder?.ingredients.forEach((id: string) => {
    let current = allIngredients.find((i) => i._id === id);
    if (current) currentIngredients.push(current);
  });

  if (currentOrder) {
    currentOrderWithIngredients = {
      ...currentOrder,
      ingredientsData: currentIngredients,
    };
  }

  function sortIngredients(arr: Array<TIngredient>) {
    let counts = new Map();

    for (let i in arr) {
      if (counts.has(arr[i])) {
        counts.set(arr[i], counts.get(arr[i]) + 1);
      } else {
        counts.set(arr[i], 1);
      }
    }

    return Array.from(counts)
      .sort((a, b) => a[1] - b[1])
      .map((entry) => {
        let result: TSortResult = {
          ingredient: null,
          count: 0,
        };
        result.ingredient = entry[0];
        if (entry[0].type === "bun") {
          result.count = entry[1];
        } else {
          result.count = entry[1] / 2;
        }
        return result;
      });
  }

  if (currentOrderWithIngredients?.ingredientsData) {
    currentOrderWithIngredients.ingredientsData.forEach((ingredient) => {
      let current = allIngredients.find((i) => i._id === ingredient._id);
      if (current) currentIngredients.push(current);
    });
  }

  currentIngredients.forEach((i) => {
    if (i.type === "bun") {
      price += i.price * 2;
    } else price += i.price;
  });

  const sortedIngredients = sortIngredients(currentIngredients);

  const ingredientsList = sortedIngredients.map((item, index) => (
    <li
      key={`${item.ingredient?._id}_${index}`}
      className={styles.ingredients_item}
    >
      <img
        className={styles.ingredient_image}
        src={item.ingredient?.image}
        alt={item.ingredient?.name}
      />
      <p className={styles.ingredient_name}>{item.ingredient?.name}</p>
      <div className={styles.ingredient_price}>
        <Price
          value={`${item.count} x ${item.ingredient?.price}`}
          size="normal"
        />
      </div>
    </li>
  ));

  useEffect(() => {
    if (!isWSConnected) {
      location.pathname.includes("profile")
        ? dispatch(
            wsActions.connectionStart(
              `${WS_URL}?token=${getCookie("accessToken")}`
            )
          )
        : dispatch(wsActions.connectionStart(`${WS_URL}/all`));
    }

    return () => {
      dispatch(wsActions.connectionClose());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {!wsPending && (
        <>
          <h2 className={`${styles.title} ${styles[type]}`}>
            #{currentOrder?.number}
          </h2>
          <div className={styles.dish}>
            <h3 className={styles.dish_name}>{currentOrder?.name}</h3>
            <p
              className={`${styles.dish_status} ${
                currentOrder?.status === "done" && styles.done
              }`}
            >{`${
              currentOrder?.status === "done" ? "Выполнен" : "Готовится"
            }`}</p>
          </div>
          <div className={styles.ingredients}>
            <h4 className={styles.ingredients_title}>Состав:</h4>
            <ul className={styles.ingredients_list}>{ingredientsList}</ul>
          </div>
          <div className={styles.bottom}>
            <div className={styles.date}>
              <FormattedDate date={new Date(currentOrder?.createdAt || "")} />
            </div>
            <Price value={`${price}`} size="normal" />
          </div>
        </>
      )}
    </div>
  );
};

export default OrderInfo;
