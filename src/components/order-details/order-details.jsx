import styles from './order-details.module.scss';
import orderCompleteImage from '../../images/done.png';

function OrderDetails() {
  return (
    <div className={styles.container}>
      <h3 className={styles.identifier}>034536</h3>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.image} src={orderCompleteImage} alt="Галочка" />
      <span className={styles.description}>Ваш заказ начали готовить</span>
      <span className={`${styles.description} ${styles.grey}`}>Дождитесь готовности на орбитальной станции</span>
    </div>
  );
}

export default OrderDetails;