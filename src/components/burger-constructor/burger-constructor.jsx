import { useState } from 'react';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.scss';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

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
      <ul className={styles.result_list}>
        <li className={`${styles.item} ${styles.item_top}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
        <li className={`${styles.item} ${styles.item_middle}`}>
          <ul className={styles.middle_list}>
            {/* <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li> */}
          </ul>
        </li>
        <li className={`${styles.item} ${styles.item_bottom}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
      </ul>
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