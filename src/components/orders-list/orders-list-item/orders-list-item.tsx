import styles from "./orders-list-item.module.scss";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../../price/price";
import { useLocation, useNavigate } from "react-router-dom";
import { setOrderId } from "../../../services/order/orderSlice";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { FC, useEffect, useState } from "react";
import { getAllIngredients } from "../../../services/ingredients/selectors";
import { setCurrentOrder } from "../../../services/order/orderSlice";

interface IOrderListItem {
  place: "feed" | "profile";
  _id: string;
  number: number;
  name: string;
  ingredients: Array<string>;
  status: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

const OrdersListItem: FC<IOrderListItem> = ({
  place,
  _id,
  number,
  name,
  ingredients,
  status,
  createdAt,
  updatedAt,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const allIngredients = useAppSelector(getAllIngredients);
  const [more, setMore] = useState(0);
  let currentIngredients: Array<TIngredient> = [];

  let price = 0;

  currentIngredients.forEach((i) => {
    if (i.type === "bun") {
      price += i.price * 2;
    } else price += i.price;
  });

  ingredients.forEach((id) => {
    let current = allIngredients.find((i) => i._id === id);
    if (current) currentIngredients.push(current);
  });

  const ingredientImages = currentIngredients
    .map((i) => (
      <li key={crypto.randomUUID()} className={styles.ingredient}>
        <img className={styles.ingredient_image} src={i.image} alt={i.name} />
        {more > 1 && <p className={styles.more}>+{more}</p>}
      </li>
    ))
    .slice(0, 6);

  function handleOrderListItemClick() {
    dispatch(setCurrentOrder({
      _id,
      number,
      name,
      ingredients,
      ingredientsData: currentIngredients,
      status,
      createdAt,
      updatedAt,
    }));
    dispatch(setOrderId(number));
    navigate(`${_id}`, {
      state: { backgroundLocation: location },
    });
  }

  useEffect(() => {
    setMore(ingredients.length - 6);
  }, [ingredients]);

  return (
    <div
      className={styles.item}
      onClick={handleOrderListItemClick}
    >
      <div className={styles.top}>
        <h2 className={styles.id}>#{number}</h2>
        <p className={styles.date}>
          <FormattedDate date={new Date(createdAt)} />
        </p>
      </div>
      <div className={styles.dish}>
        <h3 className={styles.dish_name}>{name}</h3>
        {place === "profile" && (
          <p
            className={`${styles.dish_status} ${
              status === "done" && styles.done
            }`}
          >
            {status === "done" ? "Выполнен" : "Готовится"}
          </p>
        )}
      </div>
      <div className={styles.bottom}>
        <ul className={styles.ingredients}>{ingredientImages}</ul>
        <Price value={`${price}`} size="normal" />
      </div>
    </div>
  );
};

export default OrdersListItem;
