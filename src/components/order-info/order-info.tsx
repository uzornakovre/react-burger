import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import styles from "./order-info.module.scss";

const OrderInfo = () => {
  const dateFromServer = "2022-10-10T17:33:32.877Z";
  const tempCount = 3;
  const tempCost = 999;

  return (
    <div className={styles.container}>
      <div className={styles.dish}>
        <h3 className={styles.dish_name}>Бургер</h3>
        <p className={styles.dish_status}>Выполнен</p>
      </div>
      <div className={styles.ingredients}>
        <h4 className={styles.ingredients_title}>Состав:</h4>
        <ul className={styles.ingredients_list}>
          <li className={styles.ingredients_item}>
            <img className={styles.ingredient_image} src="" alt="" />
            <p className={styles.ingredient_name}>Ингредиент</p>
            <div className={styles.ingredient_price}>
              <Price value={`${tempCount} x ${tempCost}`} size="normal" />
            </div>
          </li>
          <li className={styles.ingredients_item}>
            <img className={styles.ingredient_image} src="" alt="" />
            <p className={styles.ingredient_name}>Ингредиент</p>
            <div className={styles.ingredient_price}>
              <Price value={`${tempCount} x ${tempCost}`} size="normal" />
            </div>
          </li>
          <li className={styles.ingredients_item}>
            <img className={styles.ingredient_image} src="" alt="" />
            <p className={styles.ingredient_name}>Ингредиент</p>
            <div className={styles.ingredient_price}>
              <Price value={`${tempCount} x ${tempCost}`} size="normal" />
            </div>
          </li>
          <li className={styles.ingredients_item}>
            <img className={styles.ingredient_image} src="" alt="" />
            <p className={styles.ingredient_name}>Ингредиент</p>
            <div className={styles.ingredient_price}>
              <Price value={`${tempCount} x ${tempCost}`} size="normal" />
            </div>
          </li>
          <li className={styles.ingredients_item}>
            <img className={styles.ingredient_image} src="" alt="" />
            <p className={styles.ingredient_name}>Ингредиент</p>
            <div className={styles.ingredient_price}>
              <Price value={`${tempCount} x ${tempCost}`} size="normal" />
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.date}>
          <FormattedDate date={new Date(dateFromServer)} />
        </div>
        <Price value="15000" size="normal" />
      </div>
    </div>
  );
};

export default OrderInfo;
