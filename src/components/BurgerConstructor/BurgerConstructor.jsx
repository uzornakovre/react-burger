import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.scss';
import PropTypes from 'prop-types';

function BurgerConstructor({ onOrderClick }) {
  return (
    <section className={`${styles.burgerConstructor} mt-25`}>
      <ul className={styles.resultList}>
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
          <ul className={styles.middleList}>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middleItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
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
      <div className={`${styles.orderInfo} mt-10`}>
        <div className={styles.totalPrice}>
          <span className={styles.totalPriceValue}>450</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button 
          htmlType="button" 
          type="primary" 
          size="large"
          onClick={onOrderClick}>Оформить заказ</Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  onOrderClick: PropTypes.func.isRequired
}

export default BurgerConstructor;