import { useState } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.scss';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ResultList from './result-list/result-list';

function BurgerConstructor() {
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);

  function handleOrderClick() {
    setIsOrderDetailsModalOpen(true);
  }

  function closeModal() {
    setIsOrderDetailsModalOpen(false);
  }

  return (
    <section className={`${styles.burger_constructor} mt-25`}>
      <ResultList />
      <div className={`${styles.order_info} mt-10`}>
        <div className={styles.total_price}>
          <span className={styles.total_price_value}>450</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button 
          htmlType="button" 
          type="primary" 
          size="large"
          onClick={handleOrderClick}>Оформить заказ</Button>
      </div>
      <Modal
        isOpen={isOrderDetailsModalOpen}
        onClose={closeModal}
        title=""
      >
        <OrderDetails />
      </Modal>
    </section>
  )
}

export default BurgerConstructor;