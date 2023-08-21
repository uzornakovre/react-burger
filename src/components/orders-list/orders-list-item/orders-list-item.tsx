import styles from "./orders-list-item.module.scss";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../../price/price";
import { useLocation, useNavigate } from "react-router-dom";

const OrdersListItem = () => {
  const dateFromServer = "2022-10-10T17:33:32.877Z";
  let tempPlace = "profile";
  const navigate = useNavigate();
  const location = useLocation();

  function handleOrderListItemClick(item: any): void {
    // dispatch(setCurrentIngredient(item));
    // dispatch(setIsIngredientDetailsModalOpen(true));
    navigate(`${item._id}`, {
      state: { backgroundLocation: location },
    });
  }

  return (
    <div className={styles.item} onClick={() => handleOrderListItemClick({ _id: 1234567 })}>
      <div className={styles.top}>
        <h2 className={styles.id}>#1234567</h2>
        <p className={styles.date}>
          <FormattedDate date={new Date(dateFromServer)} />
        </p>
      </div>
      <div className={styles.dish}>
        <h3 className={styles.dish_name}>Бургер</h3>
        {tempPlace === "profile" && (
          <p className={styles.dish_status}>Готово</p>
        )}
      </div>
      <div className={styles.bottom}>
        <ul className={styles.ingredients}>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
        </ul>
        <Price value={1000} size="normal" />
      </div>
    </div>
  );
};

export default OrdersListItem;
