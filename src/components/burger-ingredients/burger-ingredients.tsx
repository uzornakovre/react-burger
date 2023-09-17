import styles from './burger-ingredients.module.scss';
import TabMenu from './tab-menu/tab-menu';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { useState, useRef } from 'react';
import Price from '../price/price';
import { useAppSelector } from '../../services/hooks';
import { getTotalPrice } from '../../services/order/selectors';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('one');

  const tabMenuRef = useRef<HTMLDivElement>();
  const bunCategoryRef = useRef<HTMLLIElement>();
  const saucesCategoryRef = useRef<HTMLLIElement>();
  const mainCategoryRef = useRef<HTMLLIElement>();
  const totalPrice = useAppSelector(getTotalPrice);
  
  return (
    <section className={`${styles.burger_ingredients} mt-10`}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <TabMenu 
        currentTab={currentTab}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <IngredientsMenu
        setCurrentTab={setCurrentTab}
        tabMenuRef={tabMenuRef}
        bunCategoryRef={bunCategoryRef}
        saucesCategoryRef={saucesCategoryRef}
        mainCategoryRef={mainCategoryRef}
      />
      <div className={styles.bottom}>
        <Price value={`${totalPrice}`} size="normal" />
        <Button
          htmlType="button"
          type="primary"
          size="small"
        >
          Смотреть заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerIngredients;