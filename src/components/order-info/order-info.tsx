import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import styles from "./order-info.module.scss";
import { getCurrentOrder } from "../../services/order/selectors";
import { useAppSelector } from "../../services/hooks";
import { getAllIngredients } from "../../services/ingredients/selectors";

const OrderInfo = () => {
  const currentOrder = useAppSelector(getCurrentOrder);
  const allIngredients = useAppSelector(getAllIngredients);
  let currentIngredients: Array<TIngredient> = [];
  let price = 0;

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
        result.count = entry[1];
        return result;
      });
  }

  if (currentOrder?.ingredients) {
    currentOrder.ingredients.forEach((id) => {
      let current = allIngredients.find((i) => i._id === id);
      if (current) currentIngredients.push(current);
    });
  }

  currentIngredients.forEach((i) => {
    if (i.type === "bun") {
      price += i.price * 2;
    } else price += i.price;
  });

  const sortedIngredients = sortIngredients(currentIngredients);

  const ingredientsList = sortedIngredients.map((item) => (
    <li key={crypto.randomUUID()} className={styles.ingredients_item}>
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

  return (
    <div className={styles.container}>
      <div className={styles.dish}>
        <h3 className={styles.dish_name}>{currentOrder?.name}</h3>
        <p className={styles.dish_status}>{`${
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
    </div>
  );
};

export default OrderInfo;
