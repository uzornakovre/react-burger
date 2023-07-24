import styles from './burger-ingredients.module.scss';
import TabMenu from './tab-menu/tab-menu';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { useState, useRef } from 'react';

function BurgerIngredients() {
  const [currentTab, setCurrentTab] = useState('one');

  const tabMenuRef = useRef();
  const bunCategoryRef = useRef();
  const saucesCategoryRef = useRef();
  const mainCategoryRef = useRef();
  
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
    </section>
  )
}

export default BurgerIngredients;