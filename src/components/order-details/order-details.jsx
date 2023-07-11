import PropTypes from 'prop-types';
import styles from './order-details.module.scss';
import orderCompleteImage from '../../images/done.png';

function OrderDetails({ orderNumber }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.identifier}>{orderNumber}</h3>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.image} src={orderCompleteImage} alt="Галочка" />
      <span className={styles.description}>Ваш заказ начали готовить</span>
      <span className={`${styles.description} ${styles.grey}`}>Дождитесь готовности на орбитальной станции</span>
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number
}

export default OrderDetails;