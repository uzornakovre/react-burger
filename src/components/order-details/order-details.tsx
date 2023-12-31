import styles from "./order-details.module.scss";
import orderCompleteImage from "../../images/done.png";
import { FC } from "react";

interface IOrderDetails {
  orderNumber: number | null;
}

const OrderDetails: FC<IOrderDetails> = ({ orderNumber }) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.identifier}>{orderNumber}</h3>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.image} src={orderCompleteImage} alt="Галочка" />
      <span className={styles.description}>Ваш заказ начали готовить</span>
      <span className={`${styles.description} ${styles.grey}`}>
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

export default OrderDetails;
